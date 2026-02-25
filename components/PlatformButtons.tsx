import { ReactNode } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { PlatformLink } from "@/data/projects";
import { cn } from "@/lib/utils";

const platformStyles: Record<PlatformLink["kind"], string> = {
  "app-store": "bg-ink text-surface",
  "google-play": "bg-accent/10 text-ink",
  website: "bg-surface text-ink border border-hairline",
  developer: "bg-surface text-ink border border-hairline",
};

const platformIcons: Record<PlatformLink["kind"], ReactNode> = {
  "app-store": <FaApple aria-hidden className="h-4 w-4" />,
  "google-play": <FaGooglePlay aria-hidden className="h-4 w-4" />,
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
