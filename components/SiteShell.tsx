import Link from "next/link";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
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
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
            Thirty Seven, Inc.
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm font-medium text-muted">
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
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
