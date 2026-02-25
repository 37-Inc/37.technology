import type { MetadataRoute } from "next";
import { pressReleases } from "@/data/press-releases";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: now,
    },
    ...pressReleases.map((release) => ({
      url: `${baseUrl}/news/${release.slug}`,
      lastModified: now,
    })),
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: now,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/${project.slug}`,
      lastModified: now,
    })),
  ];

  return routes;
}
