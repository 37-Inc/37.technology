import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
];

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <a
        href="#main"
        className={cn(
          "skip-link",
          "fixed left-4 top-4 z-50",
          "rounded-full bg-ink px-3 py-1 text-sm font-medium text-surface",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
        )}
      >
        Skip to content
      </a>
      <header className="border-b border-hairline bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:gap-6 sm:py-4">
          <Link
            href="/"
            aria-label="Thirty Seven home"
            className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-base font-semibold tracking-tight text-ink sm:text-lg"
          >
            <span className="relative size-[40px] shrink-0 overflow-hidden rounded-full bg-[#20262d] shadow-sm ring-1 ring-black/10 transition-transform duration-200 group-hover:-rotate-2 group-hover:scale-[1.03] motion-reduce:transform-none sm:size-[44px]">
              <Image
                src="/assets/brand/thirty-seven-mark-448.png"
                alt=""
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="hidden sm:inline">Thirty Seven</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm font-medium text-muted sm:gap-6">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
