"use client";

import type { CSSProperties, PointerEvent } from "react";
import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Project } from "@/data/projects";

interface HomePortfolioOrbitProps {
  projects: Project[];
}

type OrbitStyle = CSSProperties & {
  "--orbit-accent": string;
  "--orbit-delay": string;
};

export function HomePortfolioOrbit({ projects }: HomePortfolioOrbitProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;

    event.currentTarget.style.setProperty("--orbit-x", `${x}px`);
    event.currentTarget.style.setProperty("--orbit-y", `${y}px`);
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--orbit-x", "0px");
    event.currentTarget.style.setProperty("--orbit-y", "0px");
  };

  return (
    <div
      className="home-orbit"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="group"
      aria-label="Explore the Thirty Seven product portfolio"
    >
      <div className="home-orbit-plane" aria-hidden="true">
        <span className="home-orbit-ring home-orbit-ring-outer" />
        <span className="home-orbit-ring home-orbit-ring-inner" />
        <span className="home-orbit-axis home-orbit-axis-one" />
        <span className="home-orbit-axis home-orbit-axis-two" />
      </div>

      <div className="home-orbit-center" aria-hidden="true">
        <span className="home-orbit-center-glow" />
        <span className="relative size-20 overflow-hidden rounded-full bg-[#20262d] shadow-2xl ring-1 ring-white/25 sm:size-24">
          <Image
            src="/assets/brand/thirty-seven-mark-448.png"
            alt=""
            fill
            priority
            sizes="96px"
            className="object-cover"
          />
        </span>
      </div>

      {projects.map((project, index) => {
        const style = {
          "--orbit-accent": project.theme.accent,
          "--orbit-delay": `${index * -0.7}s`,
        } as OrbitStyle;

        return (
          <TrackedLink
            key={project.slug}
            href={`/${project.slug}`}
            eventName="project_open"
            eventProperties={{
              project: project.slug,
              placement: "homepage_orbit",
            }}
            className="home-orbit-product group"
            style={style}
            aria-label={`Explore ${project.name}`}
          >
            <span className="home-orbit-icon">
              <Image
                src={project.hero}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <span className="home-orbit-label">{project.name}</span>
          </TrackedLink>
        );
      })}
    </div>
  );
}
