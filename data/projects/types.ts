export type PlatformKind =
  | "app-store"
  | "google-play"
  | "website"
  | "developer";

export interface PlatformLink {
  label: string;
  url: string;
  kind: PlatformKind;
}

export interface Feature {
  title: string;
  body: string;
}

export interface UseCase {
  title: string;
  body: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  /** The alternative people reach for, e.g. "Taking multiple screenshots" */
  alternative: string;
  /** What makes the alternative painful */
  drawback: string;
  /** How this product solves it */
  advantage: string;
}

export interface ProjectTheme {
  /** Saturated accent color (hex) unique to this project */
  accent: string;
  /** Very light tint of the accent for section backgrounds (hex) */
  accentSoft: string;
  /** Dark, readable shade of the accent for text on light backgrounds (hex) */
  accentInk: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Human-readable category with keywords, e.g. "Video reframing app for iPhone" */
  category: string;
  oneLiner: string;
  description: string;
  /** The problem this product exists to solve, stated plainly */
  problem: { heading: string; body: string };
  /** How the product solves it */
  solution: { heading: string; body: string };
  /** 3–6 concrete capabilities */
  features: Feature[];
  /** 2–4 real-world scenarios (optional) */
  useCases?: UseCase[];
  /** Honest comparison against the ways people solve this today (optional) */
  comparison?: { heading: string; rows: ComparisonRow[] };
  /** 3–6 questions people actually search for; rendered and emitted as FAQPage JSON-LD */
  faqs: Faq[];
  /** Search phrases this page should rank for */
  keywords: string[];
  seo: { title: string; description: string };
  theme: ProjectTheme;
  tags: string[];
  featured?: boolean;
  /** App icon path under /public */
  hero: string;
  screenshots?: Screenshot[];
  platforms: PlatformLink[];
  appStoreId?: string;
  /** e.g. "Free", "Free + Pro subscription" — used in JSON-LD offers */
  price?: string;
  /** e.g. "iOS", "iOS, Android", "Web" — used in JSON-LD */
  operatingSystem?: string;
  cta?: { heading: string; body: string };
}
