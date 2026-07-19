#!/usr/bin/env node
/**
 * Notify IndexNow participants about canonical public 37 Technology URLs.
 *
 * Run the sitemap form once for the initial seed. Afterward, submit only URLs
 * that were created, materially changed, or deleted.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "37.technology";
const ORIGIN = `https://${HOST}`;
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow";
const BLOCKED_PATH = /^\/api(?:\/|$)/;

function parseArgs(argv) {
  const urls = [];
  let dryRun = false;
  let endpoint = DEFAULT_ENDPOINT;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--url") urls.push(argv[(index += 1)]);
    else if (arg === "--endpoint") endpoint = argv[(index += 1)];
    else if (arg?.startsWith("http")) urls.push(arg);
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return { dryRun, endpoint, urls: urls.filter(Boolean) };
}

function discoverKey() {
  const publicDir = path.join(ROOT, "public");
  const candidates = fs.readdirSync(publicDir).filter((name) => /^[a-f0-9]{8,}\.txt$/i.test(name));

  for (const name of candidates) {
    const key = name.replace(/\.txt$/i, "");
    if (fs.readFileSync(path.join(publicDir, name), "utf8").trim() === key) {
      return { key, keyLocation: `${ORIGIN}/${name}` };
    }
  }

  throw new Error("No valid IndexNow key file found in public/.");
}

async function sitemapUrls() {
  const response = await fetch(SITEMAP_URL, {
    headers: { "User-Agent": "37-technology-indexnow/1.0" },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${SITEMAP_URL}: HTTP ${response.status}`);

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
  if (urls.length === 0) throw new Error("Sitemap contained no URLs.");
  return urls;
}

function sanitize(rawUrls) {
  const kept = [];
  const rejected = [];
  const seen = new Set();

  for (const raw of rawUrls) {
    let url;
    try {
      url = new URL(raw);
    } catch {
      rejected.push([raw, "unparseable"]);
      continue;
    }

    if (url.protocol !== "https:") rejected.push([raw, "not https"]);
    else if (url.hostname !== HOST) rejected.push([raw, `host is not ${HOST}`]);
    else if (BLOCKED_PATH.test(url.pathname)) rejected.push([raw, "API route"]);
    else if (!seen.has(url.href)) {
      seen.add(url.href);
      kept.push(url.href);
    }
  }

  return { kept, rejected };
}

async function main() {
  const { dryRun, endpoint, urls } = parseArgs(process.argv.slice(2));
  const { key, keyLocation } = discoverKey();
  const source = urls.length > 0 ? urls : await sitemapUrls();
  const { kept, rejected } = sanitize(source);

  console.log(`IndexNow submission for ${HOST}`);
  console.log(`  endpoint: ${endpoint}`);
  console.log(`  source: ${urls.length > 0 ? "explicit URLs" : SITEMAP_URL}`);
  console.log(`  URLs to send: ${kept.length}`);
  for (const [url, reason] of rejected) console.log(`  skipped: ${url} (${reason})`);
  if (kept.length === 0) throw new Error("Nothing safe to submit.");

  const payload = { host: HOST, key, keyLocation, urlList: kept };
  if (dryRun) {
    console.log(JSON.stringify({ ...payload, key: `${key.slice(0, 6)}…` }, null, 2));
    console.log("[dry-run] No request sent.");
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const body = await response.text();
  const accepted = response.status === 200 || response.status === 202;
  console.log(`${accepted ? "accepted" : "rejected"}: HTTP ${response.status}${body ? ` ${body}` : ""}`);
  if (!accepted) process.exitCode = 1;
  console.log("Acceptance is a receipt, not a crawl or indexing guarantee. Google does not use IndexNow.");
}

main().catch((error) => {
  console.error(`IndexNow submission failed: ${error.message}`);
  process.exitCode = 1;
});
