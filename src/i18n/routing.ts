import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",

  /**
   * "as-needed" keeps the default locale at the bare path: `/` is English,
   * `/es` is Spanish. English is the default because that is what the category
   * does — Opal and Jomo both ship English first with French as the second
   * locale, and Brick is English only. It also means `/` keeps serving exactly
   * the language it already served, so the already-indexed URLs need no
   * redirects and lose no authority.
   */
  localePrefix: "as-needed",

  /**
   * Off on purpose. With detection on, a Spanish-speaking visitor — or any
   * crawler sending a Spanish Accept-Language — gets bounced off `/`, the one
   * URL carrying the site's authority, into a redirect. Locale is chosen
   * explicitly through the switcher, and the NEXT_LOCALE cookie still
   * remembers the choice within a session.
   */
  localeDetection: false,

  /**
   * The middleware would otherwise emit `Link: rel="alternate"` headers on top
   * of the hreflang we declare through `alternates.languages` in the metadata.
   * Two sources of truth for hreflang is a fast route to contradicting
   * yourself; the metadata one is visible and auditable, so it wins.
   */
  alternateLinks: false,

  /**
   * The physical-unlock page gets a localised slug. Everything else keeps one
   * path across locales: the legal pages are English-only documents, and
   * renaming an already-indexed URL would cost a redirect for no gain.
   */
  pathnames: {
    "/": "/",
    "/physical-unlock": {
      en: "/physical-unlock",
      es: "/desbloqueo-fisico",
    },
    "/privacy": "/privacy",
    "/delete-account": "/delete-account",
    "/onboarding": "/onboarding",
    "/uninstall": "/uninstall",
  },
});

export type Locale = (typeof routing.locales)[number];
