import Link from "next/link";
import type { ProjectOptions as ProjectOptionsData } from "@/data/projects/types";
import { SectionHeading } from "./SectionHeading";

export function ProjectOptions({ options }: { options?: ProjectOptionsData }) {
  if (!options) return null;

  return (
    <section id="ways-to-fax" aria-labelledby="options-heading" className="space-y-6">
      <SectionHeading id="options-heading" eyebrow="Your choice" title={options.heading} />
      <p className="max-w-2xl text-base leading-relaxed text-muted">{options.intro}</p>
      <div className="grid gap-4 lg:grid-cols-3">
        {options.items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pa-ink)]">
              {item.status === "upcoming" ? "Upcoming" : "Available now"}
            </p>
            <h3 className="mt-4 text-balance font-serif text-2xl leading-tight tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pa)]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-muted">{options.note}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        {options.links.map((link) => (
          <Link key={link.href} href={link.href} className="underline decoration-hairline underline-offset-4 hover:decoration-ink">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
