#!/usr/bin/env node
/**
 * Turns raw product screenshots into the webp assets the site serves, and
 * regenerates the screen registry from whatever ends up on disk.
 *
 *   npm run screenshots
 *
 * Drop raw PNGs into design/screenshots/ (gitignored) named:
 *
 *   <platform>-<screen>[-<locale>].png
 *
 *   ios-interrupt-es.png      -> public/devices/ios/interrupt.es.webp
 *   ios-interrupt-en.png      -> public/devices/ios/interrupt.en.webp
 *   extension-dashboard.png   -> public/devices/extension/dashboard.webp
 *
 * Omit the locale only when the screen genuinely has no text. Anything with UI
 * copy needs one file per locale, or the Spanish site ends up showing English
 * screenshots.
 */
import { readdir, mkdir, writeFile, access } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import sharp from "sharp";

const run = promisify(execFile);
const SRC = "design/screenshots";
const OUT = "public/devices";
const REGISTRY = "src/components/devices/screens.ts";

const PLATFORMS = new Set(["ios", "android", "extension", "macos"]);
const LOCALES = new Set(["es", "en"]);

/** Frame aspect ratios, so a mis-cropped capture is caught here, not in review. */
const EXPECTED_RATIO = {
  ios: 2622 / 1206, // iPhone 16/17 Pro, 402x874pt
  android: 2400 / 1080, // Pixel 8
};

const exists = (p) => access(p).then(() => true).catch(() => false);
const hasCwebp = async () =>
  run("command", ["-v", "cwebp"], { shell: true }).then(() => true, () => false);

async function convert(from, to, useCwebp) {
  if (useCwebp) {
    // -sharp_yuv matters here: without it the brand yellow bleeds against white
    // in chroma subsampling, and UI text picks up coloured fringes.
    await run("cwebp", ["-q", "82", "-m", "6", "-sharp_yuv", "-metadata", "none", from, "-o", to]);
  } else {
    await sharp(from).webp({ quality: 82, effort: 6 }).toFile(to);
  }
}

async function main() {
  if (!(await exists(SRC))) {
    console.log(`No ${SRC}/ yet — create it and drop your PNGs in.`);
    return;
  }

  const useCwebp = await hasCwebp();
  const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

  if (files.length === 0) {
    console.log(`${SRC}/ is empty. Nothing to import.`);
  }

  for (const file of files) {
    const base = path.basename(file).replace(/\.(png|jpe?g)$/i, "");
    const parts = base.split("-");
    const platform = parts.shift();

    if (!PLATFORMS.has(platform)) {
      console.warn(`  skip  ${file} — unknown platform "${platform}"`);
      continue;
    }

    const maybeLocale = parts[parts.length - 1];
    const locale = LOCALES.has(maybeLocale) ? parts.pop() : null;
    const screen = parts.join("-");

    if (!screen) {
      console.warn(`  skip  ${file} — no screen name`);
      continue;
    }

    const from = path.join(SRC, file);
    const { width, height } = await sharp(from).metadata();

    const expected = EXPECTED_RATIO[platform];
    if (expected) {
      const ratio = height / width;
      const drift = Math.abs(ratio - expected) / expected;
      if (drift > 0.01) {
        console.warn(
          `  WARN  ${file} is ${width}x${height} (ratio ${ratio.toFixed(3)}), ` +
            `frame expects ${expected.toFixed(3)}. It will be cropped. ` +
            `Capture uncropped, and leave the status bar in.`
        );
      }
    }

    const dir = path.join(OUT, platform);
    await mkdir(dir, { recursive: true });
    const to = path.join(dir, `${screen}${locale ? `.${locale}` : ""}.webp`);
    await convert(from, to, useCwebp);
    console.log(`  ok    ${file} -> ${to}`);
  }

  await writeRegistry();
}

/**
 * Rebuilds screens.ts from what is actually in public/devices/, so adding a
 * screenshot never means hand-editing an import list. Static imports are used
 * deliberately: a missing file becomes a build error rather than a 404.
 */
async function writeRegistry() {
  const platforms = {};

  for (const platform of await readdir(OUT).catch(() => [])) {
    const dir = path.join(OUT, platform);
    const files = (await readdir(dir).catch(() => [])).filter((f) =>
      f.endsWith(".webp")
    );
    if (files.length === 0) continue;

    for (const file of files) {
      const [screen, maybeLocale] = file.replace(/\.webp$/, "").split(".");
      const locale = LOCALES.has(maybeLocale) ? maybeLocale : null;
      platforms[platform] ??= {};
      platforms[platform][screen] ??= {};
      platforms[platform][screen][locale ?? "_"] = `${platform}/${file}`;
    }
  }

  const imports = [];
  const entries = [];
  let n = 0;

  for (const [platform, screens] of Object.entries(platforms)) {
    const lines = [];
    for (const [screen, byLocale] of Object.entries(screens)) {
      const localised = Object.keys(byLocale).filter((k) => k !== "_");

      // A leftover language-agnostic file would otherwise shadow the localised
      // ones — the exact situation you land in when replacing English-only
      // captures with per-locale versions and forgetting to delete the old file.
      if (byLocale._ && localised.length > 0) {
        console.warn(
          `  WARN  ${platform}/${screen}: both ${byLocale._} and per-locale files exist. ` +
            `Using the localised ones — delete public/devices/${byLocale._}.`
        );
        delete byLocale._;
      }

      if (byLocale._) {
        const id = `s${n++}`;
        imports.push(`import ${id} from "../../../public/devices/${byLocale._}";`);
        lines.push(`    ${screen}: ${id} as ScreenAsset,`);
      } else {
        const pairs = Object.entries(byLocale).map(([loc, rel]) => {
          const id = `s${n++}`;
          imports.push(`import ${id} from "../../../public/devices/${rel}";`);
          return `${loc}: ${id}`;
        });
        lines.push(`    ${screen}: { ${pairs.join(", ")} } as ScreenAsset,`);
      }
    }
    entries.push(`  ${platform}: {\n${lines.join("\n")}\n  },`);
  }

  const source = `${imports.join("\n")}

import type { ScreenAsset } from "./types";

/**
 * GENERATED by scripts/import-screenshots.mjs — do not edit by hand.
 * Run \`npm run screenshots\` after adding files to design/screenshots/.
 *
 * Screens with a single entry are language-agnostic; screens with { es, en }
 * have one capture per locale.
 */
export const SCREENS = {
${entries.join("\n")}
} as const;
`;

  await writeFile(REGISTRY, source, "utf8");
  console.log(`\n  registry rebuilt -> ${REGISTRY}`);
}

await main();
