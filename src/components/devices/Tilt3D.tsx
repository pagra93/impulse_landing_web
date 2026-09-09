import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Perspective wrapper. A server component — no JavaScript ships for this.
 *
 * The `.imp-tilt` class in globals.css keeps the rotation at 0deg below 768px,
 * so phones render upright without matchMedia, without a hydration flash and
 * without a layout shift on the LCP element. Above that breakpoint it reads the
 * `--tx/--ty/--tz` custom properties set here.
 *
 * Two rules this wrapper depends on:
 *
 * - Only images get rotated, never DOM text. An <img> under a 3D transform is
 *   resampled as a texture and stays sharp; text is rasterised at its
 *   pre-transform size and turns to mush.
 * - No `filter: blur()` or `drop-shadow()` on this node. Both force the filter
 *   to re-rasterise on every composited frame. Contact shadows go on a sibling.
 */
export function Tilt3D({
  rx = 0,
  ry = 0,
  rz = 0,
  perspective = 1600,
  className,
  children,
}: {
  rx?: number;
  ry?: number;
  rz?: number;
  /** Wider objects need more perspective, or the trapezoid reads as a bug. */
  perspective?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("imp-tilt", className)}
      style={
        {
          "--tx": `${rx}deg`,
          "--ty": `${ry}deg`,
          "--tz": `${rz}deg`,
          "--tilt-p": `${perspective}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
