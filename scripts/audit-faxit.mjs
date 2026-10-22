import assert from "node:assert/strict";
import { createHash } from "node:crypto";

const base = process.argv[2];
assert(base, "Usage: node scripts/audit-faxit.mjs BASE_URL");
const origin = new URL(base).origin;
const canonical = "https://37.technology/faxit";
const observations = [];

async function get(path, userAgent = "FaxItWebsiteAudit/1.0", method = "GET") {
  const response = await fetch(origin + path, {
    headers: { "User-Agent": userAgent },
    method,
    signal: AbortSignal.timeout(20_000),
  });
  assert.equal(response.status, 200, `${method} ${path} (${userAgent})`);
  observations.push({ path, userAgent, method, status: response.status });
  return response;
}

const page = await get("/faxit");
const html = await page.text();
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const text = visible.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
const title = visible.match(/<title>([^<]*)<\/title>/)?.[1];
const description = visible.match(/<meta name="description" content="([^"]*)"/)?.[1];
assert(title && title.length <= 60, "Concise product title");
assert(description && description.length <= 155, "Concise product description");
assert.match(description, /paid credits/, "Free download must not imply free sending");
assert.equal((visible.match(/<h1\b/g) ?? []).length, 1, "One main heading");
assert.match(visible, /<link rel="canonical" href="https:\/\/37\.technology\/faxit"/);
assert.match(text, /Ways to fax/);
assert.match(text, /Upcoming/);
assert.match(text, /Neither is available in the public app yet/);
assert.match(text, /No rewarded video on Mac/);
assert.match(text, /friend who signs in and claims/);
assert.match(text, /Receiving requires a paid number subscription/);
assert.match(text, /two credits per page/);
assert.match(text, /A cover page counts as a page/);
assert.match(visible, /href="\/news\/why-fax-it-keeps-pay-per-page-sending"/);

const schema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((match) => JSON.parse(match[1]));
const software = schema.find((data) => data["@type"] === "SoftwareApplication");
assert(software, "SoftwareApplication schema");
assert.equal(software.url, canonical);
assert.equal(software.operatingSystem, "iOS, iPadOS, macOS");
assert.equal(software.offers.price, "0");
assert.match(software.offers.description, /Free download; sending uses page credits/);
assert(!software.featureList.includes("Earn free fax credits"), "Upcoming is not a shipped feature");
assert.equal(software.aggregateRating, undefined, "No invented rating");
const faq = schema.find((data) => data["@type"] === "FAQPage");
const freeAnswer = faq?.mainEntity.find((question) => question.name === "Can I send a fax for free with Fax It?");
assert.match(freeAnswer?.acceptedAnswer.text ?? "", /not publicly available yet/);

const robots = await (await get("/robots.txt")).text();
const sitemap = await (await get("/sitemap.xml")).text();
assert.match(sitemap, /<loc>https:\/\/37\.technology\/faxit<\/loc>/);
assert.doesNotMatch(sitemap, /\/faxit\/invite|fax-it-earned-credits/);
assert.match(await (await get("/app-ads.txt")).text(), /google\.com, pub-5720757874390436, DIRECT, f08c47fec0942fa0/);

if (origin === "https://37.technology") {
  assert.doesNotMatch(page.headers.get("x-robots-tag") ?? "", /noindex/i);
  assert.doesNotMatch(visible, /<meta name="robots" content="[^"]*noindex/i);
  assert.match(robots, /User-Agent: \*\s+Allow: \//i);
  for (const trainingBot of ["GPTBot", "ClaudeBot", "Applebot-Extended"]) {
    assert(robots.includes(`User-Agent: ${trainingBot}\nDisallow: /`), `${trainingBot} opt-out retained`);
  }
  for (const userAgent of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot", "Claude-SearchBot"]) {
    const response = await get("/faxit", userAgent);
    assert.doesNotMatch(response.headers.get("x-robots-tag") ?? "", /noindex/i);
    assert.match(await response.text(), /Neither is available in the public app yet/);
  }
}

for (const url of software.screenshot) {
  const asset = await get(new URL(url).pathname, "FaxItWebsiteAudit/1.0", "HEAD");
  assert.match(asset.headers.get("content-type") ?? "", /^image\//);
}
for (const path of ["/legal/privacy", "/legal/terms"]) {
  const policy = await (await get(path)).text();
  assert.match(policy, /October 22, 2026/);
  assert.match(policy, /not yet available in the public app/);
}
const home = await (await get("/")).text();
assert.match(home, /href="\/faxit"/, "Crawlable homepage link");
const heldDraft = await fetch(`${origin}/news/fax-it-earned-credits`);
assert.equal(heldDraft.status, 404, "Held draft must not be published");

console.log(JSON.stringify({
  checkedAt: new Date().toISOString(), origin, canonical, title, description,
  pageSha256: createHash("sha256").update(html).digest("hex"),
  observations,
  caveat: "Crawler checks send identifying User-Agent strings from this audit host, not verified crawler IPs. HTTP accessibility and robots permission do not prove indexing, citation, or ranking.",
}, null, 2));
