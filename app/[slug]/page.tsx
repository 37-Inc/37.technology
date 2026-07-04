import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/landing/Breadcrumbs";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { FaqList } from "@/components/landing/FaqList";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { FinalCta } from "@/components/landing/FinalCta";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ScreenshotStrip } from "@/components/landing/ScreenshotStrip";
import { UseCaseList } from "@/components/landing/UseCaseList";
import {
  buildBreadcrumbLd,
  buildFaqLd,
  buildSoftwareApplicationLd,
} from "@/components/landing/structured-data";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = project.seo.title;
  const description = project.seo.description;
  const canonical = `${siteConfig.url}/${project.slug}`;
  const ogUrl = `${siteConfig.url}/api/og?slug=${project.slug}`;

  return {
    // absolute: the hand-tuned SEO title is already complete; the root
    // layout's "%s · Thirty Seven, Inc." template would push it past ~60 chars
    title: { absolute: title },
    description,
    keywords: project.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const themeVars = {
    "--pa": project.theme.accent,
    "--pa-soft": project.theme.accentSoft,
    "--pa-ink": project.theme.accentInk,
  } as CSSProperties;

  return (
    <article style={themeVars} className="space-y-16">
      <JsonLd data={buildSoftwareApplicationLd(project)} />
      <JsonLd data={buildBreadcrumbLd(project)} />
      {project.faqs.length > 0 ? <JsonLd data={buildFaqLd(project.faqs)} /> : null}

      <div className="space-y-8">
        <Breadcrumbs current={project.name} />
        <LandingHero project={project} />
      </div>

      <ProblemSolution problem={project.problem} solution={project.solution} />
      <FeatureGrid features={project.features} />
      <ScreenshotStrip name={project.name} screenshots={project.screenshots} />
      <UseCaseList useCases={project.useCases} />
      <ComparisonTable name={project.name} comparison={project.comparison} />
      <FaqList faqs={project.faqs} />
      <FinalCta project={project} />
    </article>
  );
}
