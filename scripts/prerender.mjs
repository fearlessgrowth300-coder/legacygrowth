#!/usr/bin/env node
/**
 * Post-build: write a real HTML file for /blog and every /blog/:slug.
 *
 * The site is a client-rendered SPA, so without this every blog URL serves the
 * homepage's index.html and non-JS crawlers (most AI answer engines) never see
 * the article. For each route we take dist/index.html, swap in the page's own
 * title/description/canonical, replace the #root fallback with the server-
 * rendered article, and swap the homepage FAQ schema for the page's own
 * BlogPosting + FAQPage + BreadcrumbList. Vercel's cleanUrls serves
 * blog/<slug>.html at /blog/<slug>; createRoot() replaces it on load.
 *
 * Also writes dist/llms.txt and fails the build if public/sitemap.xml is
 * missing a post, so new articles can't ship unlisted.
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SSR = join(ROOT, "dist-ssr");
const SITE = "https://legacyfalcons.com";

const { render, blogPosts, BLOG_META, pageTitle } = await import(
  pathToFileURL(join(SSR, "entry-server.js")).href
);
const template = await readFile(join(DIST, "index.html"), "utf8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function swap(html, re, value, label) {
  if (!re.test(html)) throw new Error(`prerender: template is missing ${label}`);
  return html.replace(re, value);
}

function page({ path, title, description, body, jsonld, ogType = "website" }) {
  const url = `${SITE}${path}`;
  let html = template;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, "<title>");
  for (const [attr, key, val] of [
    ["name", "description", description],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["property", "og:type", ogType],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:url", url],
  ]) {
    html = swap(
      html,
      new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`),
      `<meta ${attr}="${key}" content="${esc(val)}" />`,
      key,
    );
  }
  html = swap(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, "canonical");
  // The homepage FAQ schema doesn't describe this page; replace it with ours.
  // id="structured-data" lets SEOHead swap it at runtime instead of duplicating.
  html = swap(
    html,
    /<!-- FAQPage Structured Data[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="structured-data">${JSON.stringify(jsonld)}</script>`,
    "FAQPage block",
  );
  html = swap(html, /<div id="root">[\s\S]*<\/div>(\s*<\/body>)/, `<div id="root">${body}</div>$1`, "#root");
  return html;
}

const org = { "@id": `${SITE}/#organization` };
const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE}${path}`,
  })),
});

await rm(join(DIST, "blog"), { recursive: true, force: true });
await mkdir(join(DIST, "blog"), { recursive: true });

await writeFile(
  join(DIST, "blog.html"),
  page({
    path: "/blog",
    title: BLOG_META.title,
    description: BLOG_META.description,
    body: render("/blog"),
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${SITE}/blog#webpage`,
          url: `${SITE}/blog`,
          name: BLOG_META.title,
          description: BLOG_META.description,
          publisher: org,
          hasPart: blogPosts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE}/blog/${p.slug}` })),
        },
        crumbs([["Home", "/"], ["Guides", "/blog"]]),
      ],
    },
  }),
);

for (const p of blogPosts) {
  const path = `/blog/${p.slug}`;
  const body = render(path);
  if (!body.includes("<article")) throw new Error(`prerender: ${path} rendered without an <article>`);
  await writeFile(
    join(DIST, "blog", `${p.slug}.html`),
    page({
      path,
      title: pageTitle(p.title),
      description: p.excerpt,
      body,
      ogType: "article",
      jsonld: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${SITE}${path}#article`,
            mainEntityOfPage: `${SITE}${path}`,
            headline: p.title,
            description: p.excerpt,
            datePublished: p.dateISO,
            dateModified: p.updatedISO || p.dateISO,
            articleSection: p.category,
            inLanguage: "en-US",
            image: `${SITE}/legacy-falcon-logo-og.jpg`,
            author: org,
            publisher: org,
          },
          {
            "@type": "FAQPage",
            "@id": `${SITE}${path}#faq`,
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          crumbs([["Home", "/"], ["Guides", "/blog"], [p.title, path]]),
        ],
      },
    }),
  );
}

// llms.txt (llmstxt.org): a plain-text map of the site for LLM tools.
await writeFile(
  join(DIST, "llms.txt"),
  `# Legacy Falcon Marketing

> Legacy Falcon Marketing is a digital product marketing agency that builds done-for-you sales funnels — offer positioning, sales pages, checkout, and email/WhatsApp follow-up — for creators, course sellers, and busy parents selling digital products. Flat pricing from $97 to $497, most builds live in about 7 days, 30 days of WhatsApp support included. Clients worldwide, English. Contact: WhatsApp +1 661-551-8269.

## Guides

${blogPosts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Site

- [Home](${SITE}/): services, pricing, FAQ
- [All guides](${SITE}/blog)
- [Payment methods](${SITE}/payment-methods)
`,
);

const sitemap = await readFile(join(ROOT, "public", "sitemap.xml"), "utf8");
const missing = blogPosts.filter((p) => !sitemap.includes(`${SITE}/blog/${p.slug}<`));
if (missing.length) {
  throw new Error(`prerender: add to public/sitemap.xml: ${missing.map((p) => p.slug).join(", ")}`);
}

console.log(`prerender: wrote /blog + ${blogPosts.length} articles + llms.txt`);
