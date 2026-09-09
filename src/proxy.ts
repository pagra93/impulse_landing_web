import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

/**
 * Next 16 renamed this file convention from `middleware` to `proxy`. Do not add
 * a `middleware.ts` alongside it: with both present the build fails outright,
 * and next-intl's own documentation still says `middleware.ts`.
 */
export default createMiddleware(routing);

export const config = {
  // Everything except Next internals, the API, and any path with a file
  // extension — which is what keeps robots.txt, sitemap.xml and everything
  // under public/ from being locale-prefixed.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
