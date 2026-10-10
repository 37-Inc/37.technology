import type { NextRequest } from "next/server";
import { createSharingImage } from "@/lib/og-image";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  return createSharingImage(request.nextUrl.searchParams.get("slug"));
}
