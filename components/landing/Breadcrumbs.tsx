import Link from "next/link";

interface BreadcrumbsProps {
  /** Name of the current page, e.g. the project name */
  current: string;
}

export function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        <li>
          <Link
            href="/"
            className="rounded-sm transition-colors duration-150 ease-out hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
          >
            Work
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-medium text-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}
