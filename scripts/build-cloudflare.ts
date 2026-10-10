import {
  cp,
  mkdir,
  readdir,
  rm,
  stat,
  symlink,
  writeFile,
} from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";
import { projects } from "../data/projects";
import { createSharingImage } from "../lib/og-image";
import { loadEnvConfig } from "@next/env";

async function main() {
  const root = process.cwd();
  loadEnvConfig(root);
  const stage = join(root, ".cloudflare-build/site");
  const mode = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV ?? "preview";
  if (mode !== "preview" && mode !== "production")
    throw new Error("Invalid deployment environment");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (siteKey && !/^0x[\w-]+$/.test(siteKey))
    throw new Error("Invalid public Turnstile configuration");
  const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (postHogKey && !postHogKey.startsWith("phc_"))
    throw new Error("Invalid public PostHog configuration");

  // Export from a disposable staging directory; never move routes in the working tree.
  await rm(stage, { recursive: true, force: true });
  await mkdir(stage, { recursive: true });
  for (const directory of ["app", "components", "data", "lib", "public"]) {
    await cp(join(root, directory), join(stage, directory), {
      recursive: true,
      filter: (source) =>
        source !== join(root, "app/api") &&
        !/\.test\.[cm]?[jt]sx?$/.test(source),
    });
  }
  for (const file of ["package.json", "tsconfig.json", "postcss.config.mjs"]) {
    await cp(join(root, file), join(stage, file));
  }
  await symlink(join(root, "node_modules"), join(stage, "node_modules"), "dir");
  await writeFile(
    join(stage, "next.config.ts"),
    `
import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: { root: ${JSON.stringify(root)} },
};
export default config;
`,
  );

  const ogDirectory = join(stage, "public/assets/og");
  await mkdir(ogDirectory, { recursive: true });
  for (const slug of [undefined, ...projects.map((project) => project.slug)]) {
    const response = await createSharingImage(slug);
    await writeFile(
      join(ogDirectory, `${slug ?? "homepage"}.png`),
      Buffer.from(await response.arrayBuffer()),
    );
  }
  await writeFile(
    join(stage, "public/_headers"),
    `
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
/assets/og/*
  Cache-Control: public, max-age=86400
${mode === "preview" ? "/*\n  X-Robots-Tag: noindex, nofollow\n" : ""}`,
  );
  if (mode === "preview") {
    await writeFile(
      join(stage, "app/robots.ts"),
      `
export const dynamic = "force-static";
export default function robots() { return { rules: { userAgent: "*", disallow: "/" } }; }
`,
    );
  }
  const buildEnvironment: NodeJS.ProcessEnv = {
    ...process.env,
    NEXT_PUBLIC_DEPLOYMENT_ENV: mode,
    VERCEL_ENV: mode,
  };
  // Static builds do not need contact credentials; only the deployed Worker receives them.
  delete buildEnvironment.RESEND_API_KEY;
  delete buildEnvironment.TURNSTILE_SECRET_KEY;
  execFileSync(
    process.execPath,
    [resolve(root, "node_modules/next/dist/bin/next"), "build", stage],
    {
      cwd: root,
      env: buildEnvironment,
      stdio: "inherit",
    },
  );

  let files = 0;
  async function countFiles(directory: string) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.isDirectory()) await countFiles(join(directory, entry.name));
      else {
        if ((await stat(join(directory, entry.name))).size > 25 * 1024 * 1024) {
          throw new Error("Static export exceeds the Workers asset-size limit");
        }
        files++;
      }
    }
  }
  await countFiles(join(stage, "out"));
  if (files > 20_000)
    throw new Error("Static export exceeds the Workers Free asset-file limit");
  console.log(
    `Cloudflare ${mode} export ready: ${files} assets; sharing images generated at build time.`,
  );
}

main().catch((error) => {
  console.error(
    error instanceof Error ? error.message : "Cloudflare build failed",
  );
  process.exitCode = 1;
});
