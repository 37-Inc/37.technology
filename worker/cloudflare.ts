import { handleContact, type ContactEnvironment } from "../lib/contact-handler";
import { projects } from "../data/projects";

export interface WorkerEnvironment extends ContactEnvironment {
  ASSETS: { fetch(request: Request): Promise<Response> };
  DEPLOYMENT_ENV: "preview" | "production";
}

const projectSlugs = new Set(projects.map((project) => project.slug));
const legalRedirects: Record<string, string> = {
  "/legal/privacy/faxit": "/legal/privacy",
  "/legal/terms/faxit": "/legal/terms",
};

export async function handleWorkerRequest(
  request: Request,
  env: WorkerEnvironment,
) {
  const url = new URL(request.url);
  let response: Response;

  if (url.hostname === "www.37.technology") {
    url.hostname = "37.technology";
    response = Response.redirect(url.toString(), 308);
  } else if (legalRedirects[url.pathname.replace(/\/$/, "")]) {
    url.pathname = legalRedirects[url.pathname.replace(/\/$/, "")];
    response = Response.redirect(url.toString(), 308);
  } else if (url.pathname === "/api/contact") {
    if (request.method !== "POST") {
      response = Response.json(
        { error: "Method not allowed." },
        {
          status: 405,
          headers: { Allow: "POST", "Cache-Control": "no-store" },
        },
      );
    } else {
      response = await handleContact(
        request,
        { ...env, NODE_ENV: "production" },
        {
          // Cloudflare overwrites this header; never trust client-supplied proxy headers.
          ip: request.headers.get("CF-Connecting-IP") ?? "unknown",
          trustForwardedHost: false,
        },
      );
    }
  } else if (url.pathname === "/api/og") {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response = new Response(null, {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    } else {
      const slug = url.searchParams.get("slug") ?? "";
      url.pathname = `/assets/og/${projectSlugs.has(slug) ? slug : "homepage"}.png`;
      url.search = "";
      response = await env.ASSETS.fetch(
        new Request(url, {
          method: request.method,
          headers: request.headers,
        }),
      );
    }
  } else if (url.pathname.startsWith("/api/")) {
    response = new Response("Not found", { status: 404 });
  } else {
    response = await env.ASSETS.fetch(request);
  }

  if (env.DEPLOYMENT_ENV === "preview") {
    response = new Response(response.body, response);
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

const worker = { fetch: handleWorkerRequest };
export default worker;
