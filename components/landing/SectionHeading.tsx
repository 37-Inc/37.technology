interface SectionHeadingProps {
  /** id for the h2, referenced by the section's aria-labelledby */
  id: string;
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-serif text-3xl tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
