import { cn } from "@/lib/utils";

/**
 * The Impulse mark: a solid dot with concentric rings around it.
 *
 * Geometry is taken verbatim from the brand files in public/brand/ — dot r=8,
 * rings at r=16 (sw 5), r=29 (sw 4) and r=42 (sw 3) on a 120 viewBox. Drawn in
 * `currentColor` so one component serves the navy-on-light, white-on-dark and
 * yellow variants without three separate assets.
 *
 * `rings` exists because the friction ladder builds the mark up one ring at a
 * time: the core never changes, the resistance around it does.
 */
export function Mark({
  rings = 3,
  className,
  title,
}: {
  /** How many of the three concentric rings to draw, from the inside out. */
  rings?: 0 | 1 | 2 | 3;
  className?: string;
  /** Give the mark an accessible name; omit it when purely decorative. */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("block", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {rings >= 3 && (
        <circle
          cx="60"
          cy="60"
          r="42"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.28"
        />
      )}
      {rings >= 2 && (
        <circle
          cx="60"
          cy="60"
          r="29"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.5"
        />
      )}
      {rings >= 1 && (
        <circle
          cx="60"
          cy="60"
          r="16"
          stroke="currentColor"
          strokeWidth="5"
          opacity="0.9"
        />
      )}
      <circle cx="60" cy="60" r="8" fill="currentColor" />
    </svg>
  );
}

/**
 * The mark's ring progression, continued outward.
 *
 * The brand defines three rings, each thinner and more transparent than the one
 * inside it. This carries that same series past r=42 in steps of 13, so the
 * result is the identity at section scale rather than a decorative circle that
 * merely resembles it. Used as a full-bleed background field.
 */
const FIELD_RINGS: [number, number, number][] = [
  [16, 5, 0.92],
  [29, 4, 0.46],
  [42, 3, 0.24],
  [55, 2.7, 0.175],
  [68, 2.4, 0.135],
  [81, 2.1, 0.105],
  [94, 1.9, 0.082],
  [107, 1.7, 0.063],
  [120, 1.55, 0.048],
  [133, 1.4, 0.036],
  [146, 1.3, 0.027],
];

export function MarkField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
      className={cn("block h-full w-full", className)}
    >
      {FIELD_RINGS.map(([r, sw, op]) => (
        <circle
          key={r}
          cx="150"
          cy="150"
          r={r}
          stroke="currentColor"
          strokeWidth={sw}
          opacity={op}
        />
      ))}
      <circle cx="150" cy="150" r="8" fill="currentColor" />
    </svg>
  );
}

/**
 * Mark + wordmark.
 *
 * The wordmark is set in the site face rather than embedded from
 * public/brand/lockup-light.svg, because that file carries the text as a live
 * <text> element in Catamaran — on any machine without Catamaran installed
 * (i.e. essentially every visitor) it renders in a fallback face. That file
 * needs re-exporting with the text converted to outlines.
 */
export function Lockup({
  tone = "dark",
  size = 30,
  className,
}: {
  /** "dark" = placed on a dark surface, so the mark is white. */
  tone?: "dark" | "light";
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="shrink-0"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Mark
          className={cn(
            "h-full w-full",
            tone === "dark" ? "text-on-dark" : "text-navy"
          )}
        />
      </span>
      <span
        className={cn(
          "font-display font-extrabold tracking-[-0.052em] leading-none",
          tone === "dark" ? "text-on-dark" : "text-navy"
        )}
        style={{ fontSize: Math.round(size * 0.7) }}
      >
        impulse<span className="text-yellow">.</span>
      </span>
    </span>
  );
}
