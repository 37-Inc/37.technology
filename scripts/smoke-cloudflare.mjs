import assert from "node:assert/strict";

const [base, mode = "preview"] = process.argv.slice(2);
assert(
  base && ["preview", "production"].includes(mode),
  "Usage: node scripts/smoke-cloudflare.mjs URL preview|production",
);
const origin = new URL(base).origin;
const publicProduction = origin === "https://37.technology";
const associationURL = `${origin}/.well-known/apple-app-site-association`;
for (const method of ["GET", "HEAD"]) {
  const response = await fetch(associationURL, { method, redirect: "manual" });
  assert.equal(response.status, 200, `AASA ${method}`);
  assert.equal(response.headers.get("location"), null, "AASA must not redirect");
  assert.match(
    response.headers.get("content-type") ?? "",
    /^application\/json(?:;|$)/,
    "AASA JSON content type",
  );
  assert.equal(
    response.headers.get("cache-control"),
    "public, max-age=3600, must-revalidate",
    "AASA cache policy",
  );
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  if (method === "HEAD") {
    assert.equal(await response.text(), "", "AASA HEAD has no body");
  } else {
    const association = await response.json();
    const faxItDetails = association.applinks.details.filter(
      (detail) =>
        detail.appIDs?.includes("842K77RHSG.technology.37.Fax") ||
        detail.appID === "842K77RHSG.technology.37.Fax",
    );
    assert.deepEqual(faxItDetails, [
      {
        appIDs: ["842K77RHSG.technology.37.Fax"],
        components: [{ "/": "/faxit/invite" }],
      },
    ]);
  }
}
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
  if (publicProduction)
    assert.equal(response.headers.get("server"), "cloudflare", path);
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
if (publicProduction) {
  const www = await fetch("https://www.37.technology/faxit?source=smoke", {
    redirect: "manual",
  });
  assert.equal(www.status, 308, "www redirect");
  assert.equal(www.headers.get("server"), "cloudflare", "www provider");
  assert.equal(
    www.headers.get("location"),
    "https://37.technology/faxit?source=smoke",
    "www preserves path and query",
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
for (const policy of ["privacy", "terms"]) {
  for (const suffix of ["", "/"]) {
    for (const method of ["GET", "HEAD"]) {
      const path = `/legal/${policy}/faxit${suffix}?source=legacy-redirect-check`;
      const redirect = await fetch(origin + path, { method, redirect: "manual" });
      assert.equal(redirect.status, 308, `${method} ${path}`);
      assert.equal(
        redirect.headers.get("location"),
        `${origin}/legal/${policy}?source=legacy-redirect-check`,
        "Legacy legal aliases retain the host and query without chaining",
      );
    }
  }
}
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
