import { ReactNode } from "react";
import { PlatformLink } from "@/data/projects";
import { cn } from "@/lib/utils";

const platformStyles: Record<PlatformLink["kind"], string> = {
  "app-store": "bg-ink text-surface",
  "google-play": "bg-accent/10 text-ink",
  website: "bg-surface text-ink border border-hairline",
  developer: "bg-surface text-ink border border-hairline",
};

const platformIcons: Record<PlatformLink["kind"], ReactNode> = {
  "app-store": (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M7.5 3.75 8.8 1.4a.75.75 0 1 1 1.3.7L9 4.45l1.91 3.31 2.05-3.54-.19-.32a.75.75 0 1 1 1.3-.7l.6 1.05 2.35 4.06a2.25 2.25 0 0 1-.82 3.05l-.27.16 1.88 3.26a2.25 2.25 0 0 1-.82 3.05l-.79.46a2.25 2.25 0 0 1-3.05-.82l-1.88-3.26-1.88 3.26a2.25 2.25 0 0 1-3.05.82l-.79-.46a2.25 2.25 0 0 1-.82-3.05l1.88-3.26-.27-.16a2.25 2.25 0 0 1-.82-3.05l1.88-3.26-1.3-2.25Z" />
    </svg>
  ),
  "google-play": (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="m4.53 2.69 9.49 9.49-9.5 9.5a1.5 1.5 0 0 1-.52-1.13V3.82c0-.44.19-.86.53-1.13Zm11.24 11.23 2.39 2.4-7.02 4.05a1.5 1.5 0 0 1-1.9-.28l6.53-6.17Zm1.13-1.12 2.5-2.36c.19.25.3.55.3.87v10.53c0 .52-.28 1-.74 1.27l-6.13 3.53-2.04-2.04 6.11-3.43v-8.37Zm-.78-1.2L7.52 1.63a1.5 1.5 0 0 1 1.9-.28l7.77 4.49c.47.27.75.76.75 1.29v4.47Z" />
    </svg>
  ),
  website: (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 4.5 9A15 15 0 0 1 12 21a15 15 0 0 1-4.5-9 15 15 0 0 1 4.5-9Z" />
    </svg>
  ),
  developer: (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface PlatformButtonsProps {
  platforms: PlatformLink[];
}

export function PlatformButtons({ platforms }: PlatformButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => (
        <a
          key={platform.url}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
            "transition duration-150 ease-out hover:-translate-y-0.5",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]",
            platformStyles[platform.kind]
          )}
        >
          {platformIcons[platform.kind]}
          <span>{platform.label}</span>
        </a>
      ))}
    </div>
  );
}
