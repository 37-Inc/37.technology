import type { Faq, Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

const PUBLISHER = {
  "@type": "Organization",
  name: "Thirty Seven, Inc.",
  url: "https://37.technology",
} as const;

/** Ordered keyword → schema.org applicationCategory rules. First match wins. */
const CATEGORY_RULES: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bgame\b/, "GameApplication"],
  [/fitness|workout|health|exercise|rep\b/, "HealthApplication"],
  [/kids?\b|child|toddler|learn|education/, "EducationalApplication"],
  [/photo|video|camera|image|screenshot|gif\b|media|reframe/, "MultimediaApplication"],
  [/design|color|draw|art\b|sketch/, "DesignApplication"],
  [/fax|document|business|invoice|scan|office/, "BusinessApplication"],
  [/gift|fun\b|entertain|celebration/, "EntertainmentApplication"],
  [/measure|utility|tool|convert/, "UtilitiesApplication"],
];

function deriveApplicationCategory(project: Project): string {
  const haystack = [project.category, ...project.tags].join(" ").toLowerCase();
  for (const [pattern, category] of CATEGORY_RULES) {
    if (pattern.test(haystack)) {
      return category;
    }
  }
  return "UtilitiesApplication";
}

/**
 * Builds an Offer from a human price string like "Free" or
 * "Free + Pro subscription". Returns undefined when no honest
 * machine-readable price can be derived.
 */
function buildOffer(price: string): Record<string, unknown> | undefined {
  const trimmed = price.trim();
  const isFree = /^free\b/i.test(trimmed);
  const numeric = trimmed.match(/\d+(?:\.\d+)?/);

  if (!isFree && !numeric) {
    return undefined;
  }

  const offer: Record<string, unknown> = {
    "@type": "Offer",
    price: isFree ? "0" : numeric![0],
    priceCurrency: "USD",
  };

  if (/subscription/i.test(trimmed)) {
    offer.description = trimmed;
  }

  return offer;
}

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
    applicationCategory: deriveApplicationCategory(project),
    publisher: PUBLISHER,
  };

  if (project.operatingSystem) {
    data.operatingSystem = project.operatingSystem;
  }

  if (project.price) {
    const offer = buildOffer(project.price);
    if (offer) {
      data.offers = offer;
    }
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
        name: "Home",
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
