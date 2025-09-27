import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const runtime = "edge";

const beige = "#f5efe7";
const ink = "#211f1a";

const inter = fetch(
  new URL("https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr0aOS9URCmHU.ttf")
).then((res) => res.arrayBuffer());

const fraunces = fetch(
  new URL("https://fonts.gstatic.com/s/fraunces/v30/NGS2v5kzI8H5UviizK0.ttf")
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const project = slug ? getProjectBySlug(slug) : undefined;

  const title = project?.name ?? siteConfig.name;
  const line = project?.oneLiner ?? siteConfig.description;
  const tag = project ? "Project by Thirty Seven, Inc." : "Thirty Seven, Inc.";

  const [interFont, frauncesFont] = await Promise.all([inter, fraunces]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "96px",
          backgroundColor: beige,
          color: ink,
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", opacity: 0.7 }}>
          Thirty Seven, Inc.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 86,
              lineHeight: "88px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 32, maxWidth: "80%", opacity: 0.85 }}>{line}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>{siteConfig.url.replace("https://", "")}</div>
          <div
            style={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 4,
              opacity: 0.7,
            }}
          >
            {tag}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          weight: 400,
        },
        {
          name: "Fraunces",
          data: frauncesFont,
          weight: 600,
        },
      ],
    }
  );
}
