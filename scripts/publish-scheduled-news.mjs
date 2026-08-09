import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

function option(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

const filePath = path.resolve(option("--file") ?? "data/news.json");
const now = new Date(option("--now") ?? Date.now());
const dryRun = process.argv.includes("--dry-run");

if (Number.isNaN(now.getTime())) {
  throw new Error("--now must be a valid ISO date");
}

const items = JSON.parse(await readFile(filePath, "utf8"));
const published = [];

for (const item of items) {
  if (item.status !== "scheduled") continue;

  const publishAt = new Date(item.publishAt);
  if (Number.isNaN(publishAt.getTime())) {
    throw new Error(`Invalid publishAt for ${item.slug}`);
  }

  if (publishAt <= now) {
    item.status = "published";
    published.push(item.slug);
  }
}

if (published.length > 0 && !dryRun) {
  await writeFile(filePath, `${JSON.stringify(items, null, 2)}\n`);
}

process.stdout.write(
  `${JSON.stringify({ dryRun, now: now.toISOString(), published })}\n`
);
