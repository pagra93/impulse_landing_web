import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",

  /**
   * "as-needed" keeps Spanish at the bare path: `/` is Spanish, `/en` is
   * English. That also means the five already-indexed URLs (`/`, `/onboarding`,
   * `/uninstall`, `/delete-account`, `/privacy`) keep resolving exactly as they
   * do today, so this migration needs no redirects at all.
   */
  localePrefix: "as-needed",

  /**
   * Off on purpose. With detection on, anyone whose browser asks for English —
   * Googlebot included, which sends `accept-language: en-US` or nothing —
   * gets redirected off `/`, the one URL carrying all of the site's authority.
   * Locale is chosen explicitly through the switcher instead, and the
   * NEXT_LOCALE cookie still remembers it within a session.
   */
  localeDetection: false,

  /**
   * The middleware would otherwise emit `Link: rel="alternate"` headers on top
   * of the hreflang we declare through `alternates.languages` in the metadata.
   * Two sources of truth for hreflang is a fast route to contradicting
   * yourself; the metadata one is visible and auditable, so it wins.
   */
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
