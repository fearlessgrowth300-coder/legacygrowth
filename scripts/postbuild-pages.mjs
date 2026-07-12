// GitHub Pages has no SPA rewrites: every route must exist as a real HTML
// file or deep links return 404 (bad for SEO). This copies the built
// index.html into a folder per route. Blog slugs are read from BlogPost.tsx
// so new articles are picked up automatically.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const indexHtml = join(dist, "index.html");

const staticRoutes = ["payment-methods", "blog"];

const blogSource = readFileSync("src/pages/BlogPost.tsx", "utf8");
const blogSlugs = [...blogSource.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const routes = [...staticRoutes, ...blogSlugs.map((s) => `blog/${s}`)];

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
}

// Unknown URLs fall back to the SPA (served with 404 status, which is
// correct for URLs that genuinely don't exist).
copyFileSync(indexHtml, join(dist, "404.html"));

// Custom domain for GitHub Pages
writeFileSync(join(dist, "CNAME"), "legacyfalcons.com\n");

console.log(`Generated ${routes.length} route pages + 404.html + CNAME:`);
routes.forEach((r) => console.log(`  /${r}`));
