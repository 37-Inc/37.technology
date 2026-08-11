import { describe, expect, it } from "vitest";
import { routeAnalyticsEvents } from "@/lib/analytics-routes";

describe("route analytics events", () => {
  it("tracks the News & Notes index", () => {
    expect(routeAnalyticsEvents("/news")).toEqual([
      { name: "news_index_view" },
    ]);
  });

  it("tracks an article view by slug", () => {
    expect(routeAnalyticsEvents("/news/a-useful-release")).toEqual([
      {
        name: "news_article_view",
        properties: { slug: "a-useful-release" },
      },
    ]);
  });

  it("does not add route events to unrelated pages", () => {
    expect(routeAnalyticsEvents("/contact")).toEqual([]);
  });
});
