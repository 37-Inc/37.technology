interface ProblemSolutionProps {
  problem: { heading: string; body: string };
  solution: { heading: string; body: string };
}

export function ProblemSolution({ problem, solution }: ProblemSolutionProps) {
  return (
    <section aria-label="The problem and the fix" className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-hairline bg-surface p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          The problem
        </p>
        <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
          {problem.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {problem.body}
        </p>
      </div>
      <div className="rounded-3xl border border-hairline bg-[var(--pa-soft)] p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--pa-ink)]">
          The fix
        </p>
        <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
          {solution.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {solution.body}
        </p>
      </div>
    </section>
  );
}
