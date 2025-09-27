import { ReactNode } from "react";

interface ProseProps {
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Prose({ title, intro, children }: ProseProps) {
  return (
    <section className="mx-auto max-w-3xl">
      <header className="mb-10 space-y-4">
        <h1 className="font-serif text-4xl tracking-tight text-ink">{title}</h1>
        {intro ? <p className="text-lg text-muted">{intro}</p> : null}
      </header>
      <div className="prose text-base leading-relaxed text-ink [&>p]:mt-6 [&>ul]:mt-6 [&>ul]:list-disc [&>ul]:pl-6 [&>a]:text-ink [&>a]:underline">
        {children}
      </div>
    </section>
  );
}
