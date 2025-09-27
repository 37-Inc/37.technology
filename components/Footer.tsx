import Link from "next/link";

const contactEmail = "hello@37.technology";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {year} Thirty Seven, Inc. Crafted in California.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contactEmail}`}
            className="transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
          >
            {contactEmail}
          </a>
          <Link
            href="/legal/privacy"
            className="transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
          >
            Privacy
          </Link>
          <Link
            href="/legal/terms"
            className="transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
