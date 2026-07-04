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

export const orderedProjects = projects.slice().sort((a, b) => {
  if (a.slug === "goose-gifts" && b.slug !== "goose-gifts") return 1;
  if (b.slug === "goose-gifts" && a.slug !== "goose-gifts") return -1;

  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return a.name.localeCompare(b.name);
});
