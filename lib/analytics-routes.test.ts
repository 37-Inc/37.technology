import { describe, expect, it } from "vitest";
import { routeAnalyticsEvents } from "@/lib/analytics-routes";

describe("route analytics events", () => {
  it("tracks the News & Notes index", () => {
    expect(routeAnalyticsEvents("/news")).toEqual([
      { name: "news_index_view" },
    ]);
  });

  it("tracks an article view by slug", () => {
    expect(routeAnalyticsEvents("/news/stitch-it-since-2012")).toEqual([
      {
        name: "news_article_view",
        properties: { slug: "stitch-it-since-2012" },
      },
    ]);
  });

  it("rejects unknown or email-like article slugs", () => {
    expect(routeAnalyticsEvents("/news/alice@example.com")).toEqual([]);
  });

  it("does not add route events to unrelated pages", () => {
    expect(routeAnalyticsEvents("/contact")).toEqual([]);
  });
});
