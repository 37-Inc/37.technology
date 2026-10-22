import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ProjectOptions } from "@/components/landing/ProjectOptions";
import { buildFaqLd, buildSoftwareApplicationLd } from "@/components/landing/structured-data";
import { generateMetadata } from "@/app/[slug]/page";
import { faxit } from "./faxit";

describe("Fax It public copy and earned-credit release boundary", () => {
  it("separates current paid choices from upcoming earned credits in rendered HTML", () => {
    const options = faxit.options!;
    expect(options.items.map(({ status }) => status)).toEqual(["available", "upcoming", "available"]);
    const upcoming = options.items.find(({ status }) => status === "upcoming")!;
    expect(upcoming.body).toContain("Neither is available in the public app yet");
    expect(upcoming.details.join(" ")).toContain("friend who signs in and claims");
    expect(upcoming.details.join(" ")).toContain("No rewarded video on Mac");
    expect(upcoming.details.join(" ")).not.toMatch(/\b\d+ credits?\b/i);

    const html = renderToStaticMarkup(createElement(ProjectOptions, { options }));
    expect(html).toContain("Upcoming");
    expect(html).toContain(upcoming.body);
    expect(html).toContain('href="/news/why-fax-it-keeps-pay-per-page-sending"');
    expect(html).toContain('href="/news/fax-it-comes-to-mac"');
    expect(renderToStaticMarkup(createElement(ProjectOptions, {}))).toBe("");
  });

  it("keeps free-download, paid receiving and page-cost qualifications crawlable", () => {
    const answers = faxit.faqs.map(({ answer }) => answer).join(" ");
    expect(answers).toContain("Fax It is free to download");
    expect(answers).toContain("not publicly available yet");
    expect(answers).toContain("Receiving requires a paid number subscription");
    expect(answers).toContain("two credits per page");
    expect(answers).toContain("Cover pages count");
    expect(answers).toContain("Sharing a link alone will not earn credits");
    expect(answers).toContain("pending credits are not yet granted");

    const ld = buildSoftwareApplicationLd(faxit);
    expect(ld.featureList).not.toContain("Earn free fax credits");
    expect(ld.offers).toMatchObject({ price: "0", description: expect.stringContaining("Free download") });
    expect(buildFaqLd(faxit.faqs).mainEntity).toHaveLength(faxit.faqs.length);
    expect(JSON.stringify(ld)).not.toMatch(/aggregateRating|"review"/);
  });

  it("keeps concise truthful metadata, canonical and approved-current media", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: "faxit" }) });
    expect(faxit.seo.title.length).toBeLessThanOrEqual(60);
    expect(faxit.seo.description.length).toBeLessThanOrEqual(155);
    expect(metadata.alternates?.canonical).toBe("https://37.technology/faxit");
    expect(faxit.seo.description).toContain("paid credits");
    expect(faxit.platforms[0].url).toContain("id1458261691");
    for (const media of [faxit.heroMedia!, ...faxit.screenshots!, faxit.spotlight!.media]) {
      expect(existsSync(path.join(process.cwd(), "public", media.src))).toBe(true);
      expect(media.height).toBeLessThanOrEqual(960);
      expect(media.src).not.toMatch(/earned|referral|adaptive/);
    }
  });

  it("retains the authorized seller and keeps the launch draft out of publication", () => {
    const sellerLines = readFileSync("public/app-ads.txt", "utf8").trim().split("\n");
    expect(sellerLines).toContain("google.com, pub-5720757874390436, DIRECT, f08c47fec0942fa0");
    const news = JSON.parse(readFileSync("data/news.json", "utf8")) as { slug: string }[];
    expect(news.some(({ slug }) => slug === "fax-it-earned-credits")).toBe(false);
    expect(readFileSync("docs/drafts/fax-it-earned-credits.md", "utf8")).toContain("Status: draft, not scheduled");
  });
});
