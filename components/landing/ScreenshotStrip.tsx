import type { Screenshot } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

interface ScreenshotStripProps {
  name: string;
  screenshots?: Screenshot[];
}

export function ScreenshotStrip({ name, screenshots }: ScreenshotStripProps) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="screenshots-heading" className="space-y-6">
      <SectionHeading
        id="screenshots-heading"
        eyebrow="In the app"
        title="Screens"
      />
      <div
        role="region"
        aria-label={`${name} screenshots, scrollable`}
        tabIndex={0}
        className="flex gap-5 overflow-x-auto rounded-3xl pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
      >
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.src}
            className="shrink-0 overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm"
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              loading="lazy"
              decoding="async"
              className="h-[480px] max-h-[480px] w-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
