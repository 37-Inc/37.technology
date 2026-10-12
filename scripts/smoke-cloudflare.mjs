import assert from "node:assert/strict";

const [base, mode = "preview"] = process.argv.slice(2);
assert(
  base && ["preview", "production"].includes(mode),
  "Usage: node scripts/smoke-cloudflare.mjs URL preview|production",
);
const origin = new URL(base).origin;
for (const path of [
  "/",
  "/faxit",
  "/contact",
  "/news",
  "/news/fax-it-comes-to-mac",
  "/sitemap.xml",
  "/robots.txt",
]) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  if (mode === "preview")
    assert.match(response.headers.get("x-robots-tag") ?? "", /noindex/, path);
  else
    assert.doesNotMatch(
      response.headers.get("x-robots-tag") ?? "",
      /noindex/,
      path,
    );
  const body = await response.text();
  if (path === "/faxit") {
    assert.match(body, /Fax for less\./);
    assert.match(body, /https:\/\/37\.technology\/faxit/);
    assert.match(body, /SoftwareApplication/);
    assert.match(body, /hero-platforms\.webp/);
  }
  if (path === "/robots.txt")
    assert.match(
      body,
      mode === "preview"
        ? /Disallow: \/\s*$/
        : /Sitemap: https:\/\/37\.technology\/sitemap\.xml/,
    );
}
for (const slug of ["", "faxit", "stitch-it"]) {
  const response = await fetch(
    `${origin}/api/og${slug ? `?slug=${slug}` : ""}`,
  );
  assert.equal(response.status, 200, `OG ${slug}`);
  assert.match(response.headers.get("content-type") ?? "", /image\/png/);
  const png = Buffer.from(await response.arrayBuffer());
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
}
const redirect = await fetch(`${origin}/legal/privacy/faxit`, {
  redirect: "manual",
});
assert.equal(redirect.status, 308);
assert.equal(
  new URL(redirect.headers.get("location"), origin).pathname,
  "/legal/privacy",
);
const missing = await fetch(`${origin}/this-page-does-not-exist`);
assert.equal(missing.status, 404);
const blocked = await fetch(`${origin}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Origin: "https://attacker.example",
  },
  body: "{}",
});
assert.equal(blocked.status, 403);
const invalid = await fetch(`${origin}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Origin: origin },
  body: "{}",
});
assert.equal(invalid.status, 400);
console.log(`Cloudflare ${mode} smoke passed; no email was sent.`);
