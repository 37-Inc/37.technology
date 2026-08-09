import Image from "next/image";
import { getProjectBySlug } from "@/data/projects";

interface NewsMarkProps {
  projectSlug?: string;
  size?: "small" | "large";
}

export function NewsMark({ projectSlug, size = "small" }: NewsMarkProps) {
  const project = projectSlug ? getProjectBySlug(projectSlug) : undefined;
  const image = project?.hero ?? "/assets/brand/thirty-seven-mark-448.png";

  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-[22%] bg-white shadow-sm ring-1 ring-black/10 ${
        size === "large" ? "size-16 sm:size-20" : "size-12"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={size === "large" ? "80px" : "48px"}
        className="object-cover"
      />
    </span>
  );
}
