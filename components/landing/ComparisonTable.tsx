import type { ComparisonRow } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

interface ComparisonTableProps {
  name: string;
  comparison?: { heading: string; rows: ComparisonRow[] };
}

export function ComparisonTable({ name, comparison }: ComparisonTableProps) {
  if (!comparison || comparison.rows.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="comparison-heading" className="space-y-6">
      <SectionHeading
        id="comparison-heading"
        eyebrow="Compared"
        title={comparison.heading}
      />
      <div className="overflow-x-auto rounded-3xl border border-hairline bg-surface shadow-sm">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hairline">
              <th
                scope="col"
                className="px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                The alternative
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                Why it falls short
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--pa-ink)]"
              >
                How {name} helps
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr
                key={row.alternative}
                className="border-b border-hairline last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-6 py-4 align-top font-medium text-ink"
                >
                  {row.alternative}
                </th>
                <td className="px-6 py-4 align-top text-muted">
                  {row.drawback}
                </td>
                <td className="px-6 py-4 align-top text-ink">
                  {row.advantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
