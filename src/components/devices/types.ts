import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/routing";

/**
 * A product screenshot. Either it is language-agnostic, or it has one variant
 * per locale.
 *
 * Always a static import, never a path string. Static imports carry width,
 * height and a blur placeholder for free — and, more importantly, a missing
 * file becomes a build error instead of a 404 in production.
 */
export type ScreenAsset =
  | StaticImageData
  | Partial<Record<Locale, StaticImageData>>;

export function resolveScreen(
  asset: ScreenAsset,
  locale: Locale
): StaticImageData {
  // StaticImageData always has `src`; the per-locale record never does.
  if ("src" in asset) return asset as StaticImageData;
  const byLocale = asset as Partial<Record<Locale, StaticImageData>>;
  return (byLocale[locale] ?? byLocale.es ?? byLocale.en) as StaticImageData;
}

export type ShadowTone = "light" | "dark" | "none";
export type FrameFinish = "titanium" | "black" | "silver";
export type PhoneModel = "iphone" | "android";

/**
 * Device geometry in the real logical points of each device, so radii and rail
 * widths are physically correct rather than invented. Everything else scales
 * from `k = width / w`.
 */
export const PHONE_SPECS: Record<
  PhoneModel,
  {
    w: number;
    h: number;
    railW: number;
    bezelW: number;
    screenR: number;
    island: { w: number; h: number; top: number } | null;
    punchHole: { d: number; top: number } | null;
    buttons: { side: "left" | "right"; top: number; h: number }[];
  }
> = {
  // iPhone 16 Pro — 402 x 874 pt
  iphone: {
    w: 402,
    h: 874,
    railW: 2.6,
    bezelW: 1.6,
    screenR: 55,
    island: { w: 125, h: 36.7, top: 11 },
    punchHole: null,
    buttons: [
      { side: "left", top: 118, h: 26 }, // Action button
      { side: "left", top: 162, h: 34 }, // Volume up
      { side: "left", top: 206, h: 34 }, // Volume down
      { side: "right", top: 176, h: 62 }, // Power
    ],
  },
  // Pixel 8 — 412 x 915 dp
  android: {
    w: 412,
    h: 915,
    railW: 2.2,
    bezelW: 2.8,
    screenR: 30,
    island: null,
    punchHole: { d: 10.6, top: 12 },
    buttons: [
      { side: "right", top: 150, h: 30 },
      { side: "right", top: 192, h: 52 },
    ],
  },
};
