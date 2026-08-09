import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";

const temporaryDirectories: string[] = [];

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true });
  }
});

function fixtureFile() {
  const directory = mkdtempSync(path.join(tmpdir(), "37-news-"));
  temporaryDirectories.push(directory);
  const file = path.join(directory, "news.json");
  writeFileSync(
    file,
    `${JSON.stringify([
      {
        slug: "scheduled-item",
        publishAt: "2026-08-11T16:00:00.000Z",
        status: "scheduled",
      },
      {
        slug: "published-item",
        publishAt: "2026-02-01T16:00:00.000Z",
        status: "published",
      },
    ])}\n`
  );
  return file;
}

function runPublisher(file: string, now: string) {
  return JSON.parse(
    execFileSync(
      process.execPath,
      ["scripts/publish-scheduled-news.mjs", "--file", file, "--now", now],
      { cwd: process.cwd(), encoding: "utf8" }
    )
  ) as { published: string[] };
}

describe("scheduled news publisher", () => {
  it("leaves future items scheduled", () => {
    const file = fixtureFile();
    const result = runPublisher(file, "2026-08-10T16:00:00.000Z");
    const items = JSON.parse(readFileSync(file, "utf8"));

    expect(result.published).toEqual([]);
    expect(items[0].status).toBe("scheduled");
  });

  it("publishes due items without changing existing articles", () => {
    const file = fixtureFile();
    const result = runPublisher(file, "2026-08-11T16:00:00.000Z");
    const items = JSON.parse(readFileSync(file, "utf8"));

    expect(result.published).toEqual(["scheduled-item"]);
    expect(items.map((item: { status: string }) => item.status)).toEqual([
      "published",
      "published",
    ]);
  });
});
