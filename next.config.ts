import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old app-specific legal pages, folded into the general documents.
      // Remove once App Store Connect URLs point at /legal/privacy and
      // /legal/terms for every app (tracked in beads).
      {
        source: "/legal/privacy/faxit",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/legal/terms/faxit",
        destination: "/legal/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
