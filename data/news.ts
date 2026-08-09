import newsData from "./news.json";

export type NewsKind =
  | "company-note"
  | "press-release"
  | "product-note"
  | "product-update";
export type NewsStatus = "published" | "scheduled";

export interface NewsItem {
  kind: NewsKind;
  projectSlug?: string;
  publishedLabel: string;
  publishAt: string;
  slug: string;
  status: NewsStatus;
  summary: string;
  title: string;
}

export const allNewsItems = (newsData as NewsItem[]).slice().sort((a, b) =>
  b.publishAt.localeCompare(a.publishAt)
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
