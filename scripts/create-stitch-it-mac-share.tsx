import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { ImageResponse } from "next/og";
import sharp from "sharp";

async function main() {
  const screenshot = await sharp(
    "public/assets/projects/stitch-it/mac-one-clean-result.webp"
  )
    .png()
    .toBuffer();
  const inter = await readFile(
    "public/assets/brand/fonts/inter-latin-400-normal.woff"
  );
  const fraunces = await readFile(
    "public/assets/brand/fonts/fraunces-latin-600-normal.woff"
  );

  const image = new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 48,
        background: "linear-gradient(135deg, #eef4e2, #fffdf9)",
        color: "#211f1a",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 4 }}>
        THIRTY SEVEN / NEWS & NOTES
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 430 }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 80,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Stitch It Comes to Mac
          </div>
          <div style={{ marginTop: 24, fontSize: 26, lineHeight: 1.35 }}>
            One clean result. A native Mac workspace.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 8,
            backgroundColor: "white",
            borderRadius: 20,
            border: "1px solid #deded6",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain image, preserving the approved composition. */}
          <img
            src={`data:image/png;base64,${screenshot.toString("base64")}`}
            width={626}
            height={391}
            alt="Approved native Stitch It Mac workspace artwork"
            style={{ borderRadius: 12 }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>37.technology</span>
        <span>Native for Apple Silicon and Intel</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: inter, weight: 400 },
        { name: "Fraunces", data: fraunces, weight: 600 },
      ],
    }
  );

  await writeFile(
    "public/assets/news/stitch-it-comes-to-mac-share.png",
    Buffer.from(await image.arrayBuffer())
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Share image failed");
  process.exitCode = 1;
});
