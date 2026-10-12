import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  allNewsItems,
  getNewsItemBySlug,
  newsDisplayDate,
  newsItems,
  scheduledNewsItems,
} from "./news";

describe("news catalog", () => {
  it("partitions published and scheduled articles", () => {
    expect(allNewsItems.length).toBeGreaterThan(0);
    expect(newsItems.length + scheduledNewsItems.length).toBe(
      allNewsItems.length
    );
    expect(newsItems.every((item) => item.status === "published")).toBe(true);
    expect(scheduledNewsItems.every((item) => item.status === "scheduled")).toBe(
      true
    );
  });

  it("only resolves published articles as public routes", () => {
    for (const item of newsItems) {
      expect(getNewsItemBySlug(item.slug)).toEqual(item);
    }

    for (const item of scheduledNewsItems) {
      expect(getNewsItemBySlug(item.slug)).toBeUndefined();
    }
  });

  it("keeps slugs unique", () => {
    const slugs = allNewsItems.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has a Markdown body for every article", () => {
    for (const item of allNewsItems) {
      expect(
        existsSync(path.join(process.cwd(), "content", "news", `${item.slug}.md`))
      ).toBe(true);
    }
  });

  it("includes the verified Mac launch with real media and an accurate publication date", () => {
    const article = getNewsItemBySlug("stitch-it-comes-to-mac")!;

    expect(article.status).toBe("published");
    expect(article.publishedLabel).toBe("October 12, 2026");
    expect(article.publishAt.startsWith("2026-10-12T")).toBe(true);
    expect(article.eventAt).toBeUndefined();
    expect(article.projectSlug).toBe("stitch-it");
    expect(article.seoDescription!.length).toBeLessThanOrEqual(155);
    expect(article.shareImage).toMatchObject({ width: 1200, height: 630 });
    for (const media of [article.heroMedia!, article.shareImage!]) {
      expect(existsSync(path.join(process.cwd(), "public", media.src))).toBe(true);
      expect(media.alt).toContain("Mac");
    }
  });

  it("keeps the six historical records distinct from their publication dates", () => {
    const historicalItems = allNewsItems.filter((item) => item.eventAt);

    expect(historicalItems).toHaveLength(6);

    for (const item of historicalItems) {
      expect(Date.parse(item.eventAt!)).toBeLessThanOrEqual(
        Date.parse(item.publishAt)
      );
      expect(item.eventLabel).toBeTruthy();
      expect(newsDisplayDate(item)).toBe(item.eventLabel);
      expect(item.updatedAt).toBeTruthy();
      expect(Date.parse(item.updatedAt!)).toBeGreaterThanOrEqual(
        Date.parse(item.publishAt)
      );
    }
  });

  it("sorts public news by event chronology when an event date is known", () => {
    const chronology = newsItems.map((item) => item.eventAt ?? item.publishAt);

    expect(chronology).toEqual(
      chronology.slice().sort((a, b) => b.localeCompare(a))
    );
  });

  it("keeps search metadata concise and source references valid", () => {
    for (const item of allNewsItems) {
      if (item.seoTitle) {
        expect(item.seoTitle.length).toBeLessThanOrEqual(60);
      }
      if (item.seoDescription) {
        expect(item.seoDescription.length).toBeLessThanOrEqual(160);
      }
      for (const source of item.sources ?? []) {
        expect(source.url).toMatch(/^https:\/\//);
        expect(source.label.trim()).not.toBe("");
      }
      for (const faq of item.faqs ?? []) {
        expect(faq.question.trim()).not.toBe("");
        expect(faq.answer.trim()).not.toBe("");
      }
    }
  });
});
