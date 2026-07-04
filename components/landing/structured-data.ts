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
