import iosInterrupt from "../../../public/devices/ios/interrupt.webp";
import extDashboard from "../../../public/devices/extension/dashboard.webp";
import extLimits from "../../../public/devices/extension/limits.webp";
import extStrict from "../../../public/devices/extension/strict.webp";
import extBlocked from "../../../public/devices/extension/blocked.webp";

import type { ScreenAsset } from "./types";

/**
 * Every product screenshot the landing uses, in one place. Nothing builds an
 * asset path by string concatenation at runtime.
 *
 * Current state of the material, so nobody has to guess:
 *
 * - The extension shots are genuine captures, but their UI is in English while
 *   the default locale is Spanish. They need re-exporting with the extension in
 *   Spanish, at which point each entry becomes `{ es: …, en: … }` and nothing
 *   else changes.
 * - The iOS shot is rebuilt from the App Store marketing composite, which is the
 *   only iPhone material that exists today. It should be replaced with a clean
 *   simulator capture: iPhone 16 Pro, `xcrun simctl status_bar` for a canonical
 *   status bar, then `xcrun simctl io booted screenshot` — 1206x2622, uncropped
 *   and with the status bar left in place (the Dynamic Island is drawn on top
 *   of it in CSS, so removing it shifts the whole screen by 59pt).
 */
export const SCREENS = {
  ios: {
    interrupt: iosInterrupt as ScreenAsset,
  },
  extension: {
    dashboard: extDashboard as ScreenAsset,
    limits: extLimits as ScreenAsset,
    strict: extStrict as ScreenAsset,
    blocked: extBlocked as ScreenAsset,
  },
} as const;
