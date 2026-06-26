/**
 * The Impulse Disc — a realistic NFC puck built from layered CSS gradients
 * (anodized navy radial + conic "brushed metal" sheen + bevel + recessed
 * center + glowing yellow dot + reflection). Reused across the page.
 *
 * Base geometry is designed at 320px; `size` scales everything proportionally.
 */
export function Disc({
  size = 320,
  ripple = false,
}: {
  size?: number;
  ripple?: boolean;
}) {
  const k = size / 320; // scale factor relative to the 320px reference
  const px = (n: number) => `${Math.round(n * k * 100) / 100}px`;

  return (
    <div
      className="relative grid place-items-center font-display"
      style={{ width: size, height: size }}
    >
      {/* NFC ripple rings */}
      <div
        className={`absolute rounded-full ${ripple ? "imp-ripple" : ""}`}
        style={{
          width: px(314),
          height: px(314),
          border: `${px(1.5)} solid rgba(90,144,191,0.16)`,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: px(286),
          height: px(286),
          border: `${px(1.5)} solid rgba(90,144,191,0.10)`,
        }}
      />

      {/* Puck face */}
      <div
        className="relative grid place-items-center rounded-full"
        style={{
          width: px(250),
          height: px(250),
          background:
            "radial-gradient(circle at 38% 27%, rgba(255,255,255,0.42), rgba(255,255,255,0) 34%), conic-gradient(from 215deg at 50% 50%, rgba(255,255,255,0.10), rgba(0,0,0,0.16) 22%, rgba(255,255,255,0.07) 48%, rgba(0,0,0,0.18) 74%, rgba(255,255,255,0.10) 100%), radial-gradient(circle at 50% 46%, #356488 0%, #244a66 52%, #16303f 84%, #0e1f2b 100%)",
          boxShadow:
            "0 36px 56px -14px rgba(6,16,26,0.6), 0 12px 22px -8px rgba(6,16,26,0.5), inset 0 2px 3px rgba(255,255,255,0.34), inset 0 -18px 34px rgba(5,12,20,0.62), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* engraved outer rim */}
        <div
          className="absolute rounded-full"
          style={{
            inset: px(9),
            border: "1px solid rgba(0,0,0,0.18)",
            boxShadow:
              "inset 0 1px 2px rgba(0,0,0,0.4), inset 0 -1px 1px rgba(255,255,255,0.12)",
          }}
        />

        {/* recessed center */}
        <div
          className="absolute grid place-items-center rounded-full"
          style={{
            width: px(150),
            height: px(150),
            background:
              "radial-gradient(circle at 42% 33%, #2c5471, #18313f 70%, #0f2330)",
            boxShadow:
              "inset 0 6px 15px rgba(4,10,18,0.6), inset 0 -2px 4px rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="flex flex-col items-center"
            style={{ gap: px(7) }}
          >
            <div
              className="rounded-full"
              style={{
                width: px(17),
                height: px(17),
                background: "#ffdb4c",
                boxShadow:
                  "0 0 16px rgba(255,219,76,0.8), 0 1px 2px rgba(0,0,0,0.4)",
              }}
            />
            <span
              className="font-bold tracking-[-0.01em] text-[#eaf1f6]"
              style={{ fontSize: px(18) }}
            >
              impulse<span style={{ color: "#ffdb4c" }}>.</span>
            </span>
          </div>
        </div>

        {/* top reflection */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: px(14),
            left: px(26),
            right: px(26),
            height: px(52),
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0))",
            filter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
}
