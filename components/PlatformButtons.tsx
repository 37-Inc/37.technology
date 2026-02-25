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
      <path d="M15.07 1.5c0 1-.36 1.97-1.09 2.9-.87 1.1-1.92 1.75-3.06 1.66-.05-.97.28-1.9.98-2.8.35-.46.82-.84 1.41-1.14.58-.3 1.14-.46 1.66-.49.07.28.1.53.1.75Zm3.44 13.88c-.23.71-.52 1.4-.86 2.08-.46.91-.84 1.54-1.13 1.89-.45.57-.94.87-1.45.88-.37 0-.81-.1-1.34-.31-.52-.2-1-.31-1.44-.31-.46 0-.96.11-1.49.31-.53.21-.96.33-1.29.34-.5.02-.99-.28-1.49-.91-.31-.37-.7-1.02-1.18-1.95-.51-.99-.92-2.14-1.25-3.44a15.4 15.4 0 0 1-.53-4.08c0-1.5.33-2.8.98-3.89a5.7 5.7 0 0 1 2.04-2.09 5.98 5.98 0 0 1 2.76-.79c.43 0 .99.13 1.7.39.7.27 1.15.4 1.35.4.15 0 .65-.15 1.5-.47.8-.29 1.48-.4 2.03-.36 1.51.13 2.63.72 3.38 1.78-1.34.81-2 1.95-2 3.42.01 1.14.43 2.09 1.26 2.84.37.35.79.63 1.25.82-.1.3-.21.58-.32.85Z" />
    </svg>
  ),
  "google-play": (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M3 2.5v19c0 .64.68 1.04 1.24.72L15 12 4.24 1.78A.84.84 0 0 0 3 2.5Zm13.1 8.55 2.5-1.44c1.1-.64 1.1-2.22 0-2.86L7.07 0l9.02 11.05Zm0 1.9L7.07 24l11.53-6.75c1.1-.64 1.1-2.22 0-2.86l-2.5-1.44Z" />
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
