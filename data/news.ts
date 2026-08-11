import newsData from "./news.json";

export type NewsKind =
  | "archive"
  | "company-note"
  | "press-release"
  | "product-note"
  | "product-update";
export type NewsStatus = "published" | "scheduled";

export interface NewsFaq {
  answer: string;
  question: string;
}

export interface NewsHighlight {
  label: string;
  value: string;
}

export interface NewsSource {
  label: string;
  url: string;
}

export interface NewsItem {
  eventAt?: string;
  eventLabel?: string;
  faqs?: NewsFaq[];
  highlights?: NewsHighlight[];
  kind: NewsKind;
  keywords?: string[];
  projectSlug?: string;
  publishedLabel: string;
  publishAt: string;
  seoDescription?: string;
  seoTitle?: string;
  slug: string;
  sources?: NewsSource[];
  status: NewsStatus;
  summary: string;
  title: string;
  updatedAt?: string;
  updatedLabel?: string;
}

export const allNewsItems = (newsData as NewsItem[]).slice().sort((a, b) =>
  (b.eventAt ?? b.publishAt).localeCompare(a.eventAt ?? a.publishAt)
);

export const newsItems = allNewsItems.filter(
  (item) => item.status === "published"
);

export const scheduledNewsItems = allNewsItems.filter(
  (item) => item.status === "scheduled"
);

export const getNewsItemBySlug = (slug: string): NewsItem | undefined =>
  newsItems.find((item) => item.slug === slug);

export function newsKindLabel(kind: NewsKind): string {
  switch (kind) {
    case "archive":
      return "From the archive";
    case "company-note":
      return "Company note";
    case "press-release":
      return "Press release";
    case "product-note":
      return "Product note";
    case "product-update":
      return "Product update";
  }
}

export function newsDisplayDate(item: NewsItem): string {
  return item.eventLabel ?? item.publishedLabel;
}
