#!/usr/bin/env node
/**
 * Ping IndexNow with every URL in public/sitemap.xml.
 *
 * IndexNow is a push protocol: one request tells Bing, Yandex, Seznam and Naver
 * that these URLs changed, instead of waiting for a crawl. Google does not
 * participate, and neither does Brave — those still come from Search Console
 * and Brave's submit-url form. Bing matters here beyond Bing itself, because
 * several AI answer engines read from the Bing index.
 *
 * The key file at public/<key>.txt must be live on the domain before this
 * works — IndexNow fetches it to prove you own the host. So: deploy first,
 * then run `npm run indexnow`.
 */
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const HOST = "legacyfalcons.com";

async function findKey() {
  const files = await readdir(PUBLIC_DIR);
  const keyFile = files.find((f) => /^[a-f0-9]{32,128}\.txt$/i.test(f));
  if (!keyFile) throw new Error("No IndexNow key file found in public/");
  const key = keyFile.replace(/\.txt$/i, "");
  const contents = (await readFile(join(PUBLIC_DIR, keyFile), "utf8")).trim();
  if (contents !== key) {
    throw new Error(`${keyFile} must contain exactly its own filename-key, got "${contents}"`);
  }
  return key;
}

async function sitemapUrls() {
  const xml = await readFile(join(PUBLIC_DIR, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith(`https://${HOST}/`) || u === `https://${HOST}`);
}

const key = await findKey();
const urlList = await sitemapUrls();
if (!urlList.length) throw new Error("sitemap.xml yielded no URLs");

// Confirm the key file is actually reachable, so a 403 later is not a mystery.
const probe = await fetch(`https://${HOST}/${key}.txt`);
if (!probe.ok) {
  throw new Error(
    `Key file not live yet: https://${HOST}/${key}.txt returned ${probe.status}. Deploy first.`
  );
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});

// 200 = accepted, 202 = accepted but key still being validated. Both are fine.
const body = await res.text();
console.log(`IndexNow ${res.status} ${res.statusText}${body ? ` — ${body}` : ""}`);
for (const u of urlList) console.log(`  submitted ${u}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
