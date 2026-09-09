import { cp, access } from "node:fs/promises";

/**
 * `output: "standalone"` writes a self-contained server.js but deliberately
 * does NOT copy `.next/static` or `public/` next to it — Next assumes a CDN
 * serves them. Nothing here does, so a container booting server.js would serve
 * the site with no CSS, no JS and no images.
 *
 * Runs as npm `postbuild`, so it covers `next start` and the standalone server
 * alike. A no-op when the standalone output is not present.
 */
const exists = async (p) => access(p).then(() => true).catch(() => false);

if (!(await exists(".next/standalone"))) {
  console.log("[postbuild] no standalone output, nothing to copy");
  process.exit(0);
}

for (const [from, to] of [
  [".next/static", ".next/standalone/.next/static"],
  ["public", ".next/standalone/public"],
]) {
  if (await exists(from)) {
    await cp(from, to, { recursive: true });
    console.log(`[postbuild] ${from} -> ${to}`);
  }
}
