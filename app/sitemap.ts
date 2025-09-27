import type { MetadataRoute } from "next";
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
