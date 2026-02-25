export interface PressRelease {
  slug: string;
  title: string;
  summary: string;
  publishedLabel: string;
}

export const pressReleases: PressRelease[] = [
  {
    slug: "reshoot-launch",
    title: `ReShoot Lets You "Re-Shoot" Any Video Using Your Phone's Motion Sensors`,
    summary:
      "New iOS app turns landscape footage into polished portrait content without desktop re-editing.",
    publishedLabel: "February 2026",
  },
  {
    slug: "stitch-it-2026",
    title: "Stitch It! 2026 Product Update",
    summary:
      "Updated release with accurate stitching workflow, horizontal support, and correct platform links.",
    publishedLabel: "February 2026",
  },
];

export const getPressReleaseBySlug = (slug: string): PressRelease | undefined =>
  pressReleases.find((release) => release.slug === slug);
