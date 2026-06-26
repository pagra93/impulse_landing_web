/**
 * NFC "waves" glyph — not part of Lucide, so reproduced from the handoff SVG.
 * `waves` controls how many arcs render (1–4), growing outward.
 */
const ARCS = [
  "M6 8.32a7.43 7.43 0 0 1 0 7.36",
  "M9.46 6.21a11.76 11.76 0 0 1 0 11.58",
  "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",
  "M16.37 2a20.16 20.16 0 0 1 0 20",
];

export function Nfc({
  size = 16,
  waves = 3,
  className,
  strokeWidth = 2,
}: {
  size?: number;
  waves?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ARCS.slice(0, waves).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
