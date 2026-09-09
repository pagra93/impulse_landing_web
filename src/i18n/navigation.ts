import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation. `Link` writes the right prefix on its own, so no
 * component ever concatenates a locale into a path; `getPathname` builds the
 * absolute URLs the sitemap and the hreflang metadata need.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
