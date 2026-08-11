import type {
  AnalyticsEventName,
  AnalyticsProperties,
} from "@/lib/analytics";
import { getNewsItemBySlug } from "@/data/news";

export interface RouteAnalyticsEvent {
  name: AnalyticsEventName;
  properties?: AnalyticsProperties;
}

export function routeAnalyticsEvents(
  pathname: string
): RouteAnalyticsEvent[] {
  if (pathname === "/news") {
    return [{ name: "news_index_view" }];
  }

  const articleMatch = pathname.match(/^\/news\/([^/]+)$/);
  if (!articleMatch) return [];

  const article = getNewsItemBySlug(articleMatch[1]);
  if (!article) return [];

  return [
    {
      name: "news_article_view",
      properties: { slug: article.slug },
    },
  ];
}
