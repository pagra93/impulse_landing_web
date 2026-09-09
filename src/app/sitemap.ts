import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/links";

type Href = "/" | "/desbloqueo-fisico" | "/onboarding" | "/uninstall" | "/delete-account" | "/privacy";

const ROUTES: {
  href: Href;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { href: "/", priority: 1, changeFrequency: "weekly" },
  { href: "/desbloqueo-fisico", priority: 0.7, changeFrequency: "monthly" },
  { href: "/onboarding", priority: 0.6, changeFrequency: "monthly" },
  { href: "/uninstall", priority: 0.3, changeFrequency: "monthly" },
  { href: "/delete-account", priority: 0.3, changeFrequency: "yearly" },
  { href: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

function absolute(href: Href, locale: (typeof routing.locales)[number]) {
  return `${SITE_URL}${getPathname({ href, locale })}`.replace(/\/$/, "") || SITE_URL;
}

/**
 * One entry per route per locale, each declaring the full set of alternates.
 * Previously this emitted five English-only URLs with no hreflang at all, which
 * left Google no way to connect `/` and `/en` as translations of one another.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ href, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: absolute(href, locale),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, absolute(href, l)])
        ),
      },
    }))
  );
}
