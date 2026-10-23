import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { faxit } from "@/data/projects/faxit";
import { ProjectCard } from "./ProjectCard";

describe("static project icons", () => {
  it.each([false, true])("preserves eager/lazy delivery when priority is %s", (priority) => {
    const html = renderToStaticMarkup(
      <ProjectCard project={faxit} priority={priority} />,
    );

    expect(html).toContain(`src="${faxit.hero}"`);
    expect(html).toContain('width="48"');
    expect(html).toContain('height="48"');
    expect(html).toContain(`loading="${priority ? "eager" : "lazy"}"`);
    expect(html).not.toContain("/_next/image");
  });
});
