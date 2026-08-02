import type { Project } from "./types";
import { reshoot } from "./reshoot";
import { stitchIt } from "./stitch-it";
import { colorcub } from "./colorcub";
import { howhigh } from "./howhigh";
import { faxit } from "./faxit";
import { ereps } from "./ereps";
import { gooseGifts } from "./goose-gifts";

export * from "./types";

export const projects: Project[] = [
  reshoot,
  stitchIt,
  colorcub,
  howhigh,
  faxit,
  ereps,
  gooseGifts,
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

const portfolioOrder = [
  "ereps",
  "stitch-it",
  "faxit",
  "reshoot",
  "colorcub",
  "howhigh",
  "goose-gifts",
];

export const orderedProjects = projects.slice().sort((a, b) => {
  const aIndex = portfolioOrder.indexOf(a.slug);
  const bIndex = portfolioOrder.indexOf(b.slug);

  if (aIndex === -1 && bIndex === -1) return a.name.localeCompare(b.name);
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});
