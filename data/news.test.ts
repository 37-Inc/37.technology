import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  allNewsItems,
  getNewsItemBySlug,
  newsItems,
  scheduledNewsItems,
} from "./news";

describe("news catalog", () => {
  it("partitions published and scheduled articles", () => {
    expect(allNewsItems).toHaveLength(5);
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
});
