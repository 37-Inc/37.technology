import type { Faq, Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

const PUBLISHER = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
} as const;

export function buildSoftwareApplicationLd(
  project: Project
): Record<string, unknown> {
  const canonical = `${siteConfig.url}/${project.slug}`;
  const platformUrls = project.platforms.map((platform) => platform.url);
  const downloadUrls = project.platforms
    .filter(
      (platform) =>
        platform.kind === "app-store" || platform.kind === "google-play"
    )
    .map((platform) => platform.url);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type":
      project.operatingSystem === "Web"
        ? "WebApplication"
        : "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: canonical,
    image: `${siteConfig.url}${project.hero}`,
    applicationCategory: project.applicationCategory,
    featureList: project.features.map((feature) => feature.title),
    screenshot: (project.screenshots ?? []).map(
      (screenshot) => `${siteConfig.url}${screenshot.src}`
    ),
    publisher: PUBLISHER,
  };

  if (project.operatingSystem) {
    data.operatingSystem = project.operatingSystem;
  }

  if (project.offer) {
    data.offers = {
      "@type": "Offer",
      price: project.offer.price,
      priceCurrency: "USD",
      ...(project.offer.description
        ? { description: project.offer.description }
        : {}),
    };
  }

  if (platformUrls.length > 0) {
    data.sameAs = platformUrls;
  }

  if (downloadUrls.length > 0) {
    data.downloadUrl = downloadUrls;
  }

  return data;
}

export function buildBreadcrumbLd(project: Project): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        // Must match the visible breadcrumb label in Breadcrumbs.tsx
        name: "Work",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.name,
        item: `${siteConfig.url}/${project.slug}`,
      },
    ],
  };
}

export function buildFaqLd(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
