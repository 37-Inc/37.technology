import { readFile } from "node:fs/promises";
import path from "node:path";

const newsDirectory = path.join(process.cwd(), "content", "news");

export async function getNewsMarkdown(slug: string): Promise<string> {
  const filePath = path.join(newsDirectory, `${slug}.md`);
  return readFile(filePath, "utf8");
}
