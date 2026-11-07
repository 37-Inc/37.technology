import { readFileSync } from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import sharp from "sharp";
import { describe, expect, it } from "vitest";
import ProjectPage, { generateMetadata, generateStaticParams } from "@/app/[slug]/page";
import sitemap from "@/app/sitemap";
import { HomePortfolioOrbit } from "@/components/home/HomePortfolioOrbit";
import { HomeProjectCard } from "@/components/home/HomeProjectCard";
import { buildSoftwareApplicationLd } from "@/components/landing/structured-data";
import { getNewsItemBySlug } from "@/data/news";
import { generateMetadata as generateArticleMetadata, generateStaticParams as articleParams } from "@/app/news/[slug]/page";
import { getProjectBySlug, orderedProjects } from "./index";
import { quickkey } from "./quickkey";

describe("QuickKey corporate publication", () => {
  it("connects the homepage card, orbit, static product route and canonical sitemap", () => {
    expect(getProjectBySlug("quickkey")).toBe(quickkey);
    expect(generateStaticParams()).toContainEqual({ slug: "quickkey" });
    for (const html of [
      renderToStaticMarkup(createElement(HomeProjectCard, { project: quickkey, index: 7 })),
      renderToStaticMarkup(createElement(HomePortfolioOrbit, { projects: orderedProjects })),
    ]) {
      expect(html).toContain('href="/quickkey"');
      expect(html).toContain("quickkey-icon.webp");
    }
    const urls = sitemap().map((item) => item.url);
    expect(urls).toContain("https://37.technology/quickkey");
    expect(urls).toContain("https://37.technology/stupid-gifts");
    expect(urls).not.toContain("https://37.technology/goose-gifts");
    expect(urls).toContain("https://37.technology/news/quickkey-joins-thirty-seven");
    expect(articleParams()).toContainEqual({ slug: "quickkey-joins-thirty-seven" });
  });

  it("keeps concise metadata, current store identities and educational schema", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: "quickkey" }) });
    expect(metadata.alternates?.canonical).toBe("https://37.technology/quickkey");
    expect(quickkey.seo.title.length).toBeLessThanOrEqual(60);
    expect(quickkey.seo.description.length).toBeLessThanOrEqual(155);
    expect(quickkey.platforms.map((link) => link.url)).toEqual([
      "https://quickkeyapp.com/",
      "https://apps.apple.com/app/id686229501",
      "https://play.google.com/store/apps/details?id=com.kiteknology.quickkey",
    ]);
    const schema = buildSoftwareApplicationLd(quickkey);
    expect(schema.applicationCategory).toBe("EducationalApplication");
    expect(JSON.stringify(schema)).not.toMatch(/aggregateRating|"review"|FERPA|COPPA|unlimited/i);
  });

  it("connects the published announcement, support and legal resources", async () => {
    const html = renderToStaticMarkup(await ProjectPage({ params: Promise.resolve({ slug: "quickkey" }) }));
    expect(html).toContain('href="https://quickkeyapp.com/contact-us/"');
    expect(html).toContain('href="https://quickkeyapp.com/privacy-policy/"');
    expect(html).toContain('href="https://quickkeyapp.com/terms-of-service/"');
    expect(html).toContain('href="/news/quickkey-joins-thirty-seven"');
    expect(getNewsItemBySlug(quickkey.newsSlug!)?.status).toBe("published");
    const metadata = await generateArticleMetadata({ params: Promise.resolve({ slug: quickkey.newsSlug! }) });
    expect(metadata.alternates?.canonical).toBe("https://37.technology/news/quickkey-joins-thirty-seven");
  });

  it("uses bounded real assets with matching intrinsic dimensions", async () => {
    const icon = await sharp(path.join("public", quickkey.hero)).metadata();
    expect(icon.width).toBe(192);
    expect(icon.height).toBe(192);
    for (const image of [quickkey.heroMedia!, ...quickkey.screenshots!]) {
      const metadata = await sharp(path.join("public", image.src)).metadata();
      expect(metadata.width).toBe(image.width);
      expect(metadata.height).toBe(image.height);
      expect(image.height).toBeLessThanOrEqual(960);
      expect(image.alt).toContain("QuickKey");
    }
    expect(new Set(quickkey.screenshots!.map((image) => image.width))).toEqual(new Set([442]));
  });

  it("keeps release chronology and teacher priorities without beta-update detail", () => {
    const article = getNewsItemBySlug(quickkey.newsSlug!)!;
    expect(article.status).toBe("published");
    expect(article.publishedLabel).toBe("November 6, 2026");
    expect(article.publishAt).toMatch(/^2026-11-06T/);
    expect(article.projectSlug).toBe("quickkey");
    expect(article.eventAt).toBeUndefined();
    expect(article.seoDescription!.length).toBeLessThanOrEqual(155);
    const body = readFileSync(`content/news/${article.slug}.md`, "utf8");
    for (const text of ["September 2026", "November 3, 2026", "controlled production rollout", "What comes next", "fictional", "keeping QuickKey stable", "modernizing the mobile apps and web app", "listening to teachers"]) expect(body).toContain(text);
    expect(body + JSON.stringify(article)).not.toMatch(/What is still being tested|1\.0\.1|public beta/i);
    expect(article.heroMedia?.alt).toContain("answer-review");
    expect(article.heroMedia?.alt).not.toContain("iPad");
    expect(body).not.toMatch(/\$\d|purchase price|seller name|guaranteed|all bugs/i);
    expect(body).toContain("[QuickKey product page](/quickkey)");
    expect(readFileSync("public/app-ads.txt", "utf8").trim().split("\n").length).toBeGreaterThan(200);
  });
});
