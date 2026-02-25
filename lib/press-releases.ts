import { readFile } from "node:fs/promises";
import path from "node:path";

const pressReleaseDirectory = path.join(
  process.cwd(),
  "content",
  "press-releases"
);

export async function getPressReleaseMarkdown(slug: string): Promise<string> {
  const filePath = path.join(pressReleaseDirectory, `${slug}.md`);
  return readFile(filePath, "utf8");
}
