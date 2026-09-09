import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/links";

type Href = "/" | "/physical-unlock" | "/delete-account" | "/privacy";

type Entry = {
  href: Href;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  /**
   * False for pages that only exist in English and serve identical text under
   * both prefixes. They are not translations of one another, so they
   * consolidate onto a single canonical — and listing both while pointing the
   * canonical at one of them would contradict itself.
   */
  localized: boolean;
};

// /onboarding and /uninstall are deliberately absent: post-install and
// post-uninstall screens rather than landing pages, and both are noindex.
const ROUTES: Entry[] = [
  { href: "/", priority: 1, changeFrequency: "weekly", localized: true },
  {
    href: "/physical-unlock",
    priority: 0.7,
    changeFrequency: "monthly",
    localized: true,
  },
  { href: "/privacy", priority: 0.3, changeFrequency: "yearly", localized: false },
  {
    href: "/delete-account",
    priority: 0.3,
    changeFrequency: "yearly",
    localized: false,
  },
];

function absolute(href: Href, locale: (typeof routing.locales)[number]) {
  const path = getPathname({ href, locale });
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Previously this emitted five English-only URLs with no hreflang at all, which
 * gave Google no way to connect `/` and `/en` as translations of each other.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((route) => {
    const locales = route.localized ? routing.locales : [routing.defaultLocale];

    return locales.map((locale) => ({
      url: absolute(route.href, locale),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(route.localized && {
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, absolute(route.href, l)])
          ),
        },
      }),
    }));
  });
}
