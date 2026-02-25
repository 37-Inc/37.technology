export interface PressRelease {
  slug: string;
  title: string;
  summary: string;
  publishedLabel: string;
  href: string;
}

export const pressReleases: PressRelease[] = [
  {
    slug: "reshoot-launch",
    title: `ReShoot Lets You "Re-Shoot" Any Video Using Your Phone's Motion Sensors`,
    summary:
      "New iOS app turns landscape footage into polished portrait content without desktop re-editing.",
    publishedLabel: "February 2026",
    href: "/press-releases/reshoot-launch.md",
  },
  {
    slug: "stitch-it-2026",
    title:
      "Stitch It! Remains the Go-To Screenshot Stitching App With Millions of Downloads",
    summary:
      "The original screenshot combiner continues evolving with cross-platform support and privacy-focused editing tools.",
    publishedLabel: "February 2026",
    href: "/press-releases/stitch-it-2026.md",
  },
];
