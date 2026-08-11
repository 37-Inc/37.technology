import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { orderedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thirty Seven is an independent software company and consultancy with deep iOS expertise and shipped work across Android, web, and backend systems.",
  alternates: {
    canonical: "/about",
  },
};

const capabilityGroups = [
  {
    number: "01",
    title: "Native iOS",
    body: "Our deepest experience: Swift, from first prototype through App Store launch and the releases after it.",
  },
  {
    number: "02",
    title: "Android + web",
    body: "Shipped products across mobile and the web, shaped around the platform rather than forced into one template.",
  },
  {
    number: "03",
    title: "Backend systems",
    body: "The services, integrations, and operational tooling that keep useful software running behind the interface.",
  },
  {
    number: "04",
    title: "Beyond launch",
    body: "Product guidance, implementation, launch, and post-launch support when the work calls for it.",
  },
];

function ProductTile({
  project,
  prominent = false,
}: {
  project: (typeof orderedProjects)[number];
  prominent?: boolean;
}) {
  const tileStyle = {
    "--project-soft": project.theme.accentSoft,
    "--project-accent": project.theme.accent,
  } as CSSProperties;

  return (
    <Link
      href={`/${project.slug}`}
      aria-label={`Explore ${project.name}`}
      style={tileStyle}
      className={`about-product-tile group relative flex min-w-0 items-center overflow-hidden rounded-[1.4rem] border border-black/[0.06] bg-[var(--project-soft)] transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
        prominent
          ? "gap-3 p-3.5 sm:flex-col sm:items-start sm:gap-5 sm:p-5"
          : "justify-center p-3 sm:p-4"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute -right-7 -top-7 size-20 rounded-full bg-[var(--project-accent)] opacity-[0.08] transition-transform duration-300 group-hover:scale-150"
      />
      <span
        className={`relative shrink-0 overflow-hidden rounded-[22%] bg-white shadow-md ring-1 ring-black/10 ${
          prominent ? "size-14 sm:size-[4.5rem]" : "size-11 sm:size-14"
        }`}
      >
        <Image
          src={project.hero}
          alt=""
          fill
          sizes={prominent ? "72px" : "56px"}
          className="object-cover"
        />
      </span>
      {prominent ? (
        <span className="relative min-w-0">
          <span className="block font-serif text-lg leading-tight tracking-tight text-ink sm:text-xl">
            {project.name}
          </span>
          <span className="mt-1 hidden text-xs leading-relaxed text-muted sm:block">
            {project.oneLiner}
          </span>
        </span>
      ) : (
        <span className="sr-only">{project.name}</span>
      )}
    </Link>
  );
}

function PortfolioMosaic() {
  const flagshipProjects = orderedProjects.slice(0, 3);
  const additionalProjects = orderedProjects.slice(3);

  return (
    <div className="about-reveal about-reveal-delay-1 relative overflow-hidden rounded-[2rem] border border-hairline bg-surface p-4 shadow-soft sm:p-5">
      <div className="pointer-events-none absolute inset-0 about-grid opacity-50" />
      <div className="relative mb-5 flex items-center justify-between gap-4 px-1 pt-1">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
          Built + operated here
        </p>
        <span className="rounded-full border border-hairline bg-background/80 px-2.5 py-1 text-[0.65rem] font-medium text-muted">
          Our portfolio
        </span>
      </div>
      <div className="relative grid grid-cols-3 gap-2.5 sm:gap-3">
        {flagshipProjects.map((project) => (
          <ProductTile key={project.slug} project={project} prominent />
        ))}
      </div>
      <div className="relative mt-2.5 grid grid-cols-4 gap-2.5 sm:mt-3 sm:gap-3">
        {additionalProjects.map((project) => (
          <ProductTile key={project.slug} project={project} />
        ))}
      </div>
      <div className="relative mt-5 flex items-center justify-between border-t border-hairline px-1 pt-4 text-xs text-muted">
        <span>Healthcare to creative tools</span>
        <Link
          href="/#work"
          className="font-semibold text-ink underline decoration-accent/60 underline-offset-4"
        >
          Explore the work
        </Link>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32">
      <section className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
        <div className="about-reveal max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted sm:text-sm">
            Independent software company + consultancy
          </p>
          <h1 className="mt-6 max-w-lg font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
            We make software and keep it useful.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Thirty Seven builds software and operates its own portfolio. We
            also selectively help founders and small teams turn clear ideas
            into shipped, dependable software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/#work"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-surface transition duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              See our products
            </Link>
            <TrackedLink
              href="/contact"
              eventName="contact_cta_click"
              eventProperties={{ placement: "about_hero" }}
              className="inline-flex items-center rounded-full border border-hairline bg-surface px-5 py-2.5 text-ink transition duration-150 hover:-translate-y-0.5 hover:border-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Discuss a project
            </TrackedLink>
          </div>
        </div>
        <PortfolioMosaic />
      </section>

      <section className="grid gap-10 border-t border-hairline pt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:pt-16">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            The shape of the company
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
            Products are the proof.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Shipping our own software keeps product, engineering, launch, and
            maintenance decisions in the same room.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-[1.75rem] border border-hairline bg-surface p-6 shadow-sm sm:p-8">
            <span className="font-serif text-3xl text-accent">01</span>
            <h3 className="mt-8 font-serif text-2xl tracking-tight text-ink">
              Our portfolio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Products for communication, creativity, health, navigation, and
              the occasional delightful distraction. Each keeps its own
              identity; all are designed, built, and maintained by Thirty Seven.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-ink bg-ink p-6 text-surface shadow-soft sm:p-8">
            <span className="font-serif text-3xl text-[#d1b59a]">02</span>
            <h3 className="mt-8 font-serif text-2xl tracking-tight">
              Selected client work
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              We work directly with founders and small teams when the fit is
              right. That can include product guidance, implementation,
              launch, and the support that follows.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Where we work
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
            Deep in iOS. Useful beyond it.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            Native iOS is where we have spent the most years. The products
            around it have also taken us across Android, web, backend systems,
            and the practical work of keeping software healthy after launch.
          </p>
        </div>
        <ol className="mt-10 grid border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((capability) => (
            <li
              key={capability.number}
              className="border-b border-hairline py-7 last:border-b-0 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-muted">
                {capability.number}
              </p>
              <h3 className="mt-6 font-serif text-xl tracking-tight text-ink">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {capability.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] bg-[#1f2429] px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 size-72 rounded-full border-[52px] border-[#6dc5e7]/15"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Start a conversation
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            Tell us what you&rsquo;re working on.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            A short, direct note is enough. We read every inquiry ourselves.
          </p>
        </div>
        <TrackedLink
          href="/contact"
          eventName="contact_cta_click"
          eventProperties={{ placement: "about_footer" }}
          className="relative mt-8 inline-flex shrink-0 items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2429] lg:mt-0"
        >
          Send an inquiry
        </TrackedLink>
      </section>
    </div>
  );
}
