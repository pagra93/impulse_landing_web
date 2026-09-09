/**
 * Single source of truth for every outbound product link.
 *
 * Before this file the App Store and Chrome URLs lived in primitives.tsx and the
 * Amazon URL was duplicated character-for-character in two components under
 * landing/physical/ — the kind of string that silently drifts apart.
 */

export const SITE_URL = "https://impulsecontrolapp.com";

export const LINKS = {
  site: SITE_URL,
  ios: "https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036",
  play: "https://play.google.com/store/apps/details?id=com.impulse.es",
  chrome:
    "https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik",
  amazonNfc:
    "https://www.amazon.es/NFC-Programable-Inteligentes-Dispositivos-NFC%EF%BC%88Timeskey%EF%BC%89/dp/B0CSD8B6LF/",
  github: "https://github.com/pagra93/impulse_widget",
  supportEmail: "hello@impulsecontrolapp.com",
} as const;

export const SUPPORT_MAILTO = `mailto:${LINKS.supportEmail}`;

/**
 * Platform matrix. Consumed by the hero, the platforms section, the final CTA
 * and the footer, so "Impulse is now on Android" is a data change here rather
 * than an edit across five components.
 *
 * Labels and descriptions live in the i18n messages, not here — this file only
 * knows where each platform points and whether it has shipped.
 */
export type PlatformId = "ios" | "android" | "chrome" | "safari" | "macos";

export type Platform = {
  id: PlatformId;
  href: string | null;
  status: "live" | "soon";
};

export const PLATFORMS: readonly Platform[] = [
  { id: "ios", href: LINKS.ios, status: "live" },
  { id: "android", href: LINKS.play, status: "live" },
  { id: "chrome", href: LINKS.chrome, status: "live" },
  // Safari ships inside the same extension listing; it has no separate URL.
  { id: "safari", href: LINKS.chrome, status: "live" },
  { id: "macos", href: null, status: "soon" },
] as const;

export const LIVE_PLATFORMS = PLATFORMS.filter((p) => p.status === "live");
