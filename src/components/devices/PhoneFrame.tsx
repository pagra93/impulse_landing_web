import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import {
  PHONE_SPECS,
  resolveScreen,
  type FrameFinish,
  type PhoneModel,
  type ScreenAsset,
  type ShadowTone,
} from "./types";

const RAIL_BG: Record<FrameFinish, string> = {
  // Not a smooth gradient: brushed titanium reads through abrupt luminance
  // bands, and a smooth ramp is what makes CSS devices look like grey boxes.
  titanium:
    "linear-gradient(152deg,#d8dbdd 0%,#f4f6f7 5%,#9aa1a6 13%,#6f767c 25%,#b9c0c5 41%,#eef1f3 50%,#aeb5ba 57%,#71787e 73%,#ccd3d8 87%,#8d949a 100%)",
  black:
    "linear-gradient(152deg,#3a4147 0%,#12171b 17%,#2b3238 33%,#0b0f12 51%,#333a40 69%,#0e1317 87%,#262c31 100%)",
  silver:
    "linear-gradient(152deg,#f2f4f5 0%,#ffffff 6%,#c3c9cd 14%,#9ba2a7 26%,#dfe4e7 42%,#ffffff 50%,#d2d8db 58%,#a2a9ae 74%,#e8ecee 88%,#b7bec3 100%)",
};

export function PhoneFrame({
  screen,
  alt,
  locale,
  model = "iphone",
  /** Device width in CSS px, including the rail. Height is derived. */
  width = 296,
  finish,
  shadow = "light",
  glare = true,
  buttons = true,
  priority = false,
  sizes,
  className,
  children,
}: {
  screen?: ScreenAsset;
  alt: string;
  locale: Locale;
  model?: PhoneModel;
  width?: number;
  finish?: FrameFinish;
  shadow?: ShadowTone;
  glare?: boolean | number;
  buttons?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Overlays drawn inside the screen clip — real DOM, so translatable. */
  children?: ReactNode;
}) {
  const spec = PHONE_SPECS[model];
  const k = width / spec.w;
  // Three decimals, not two: at k ~= 0.75 a 2.6pt rail lands on 1.95px, and
  // rounding nested radii too coarsely leaves a visible half-pixel step between
  // the rail and the bezel.
  const px = (n: number) => `${Math.round(n * k * 1000) / 1000}px`;

  const outerR = spec.screenR + spec.railW + spec.bezelW;
  const bezelR = spec.screenR + spec.bezelW;
  const railFinish = finish ?? (model === "iphone" ? "titanium" : "black");
  const glareOpacity = typeof glare === "number" ? glare : glare ? 0.5 : 0;

  const dropShadow =
    shadow === "none"
      ? ""
      : shadow === "dark"
        ? `0 ${px(38)} ${px(72)} ${px(-18)} rgba(0,0,0,.72), 0 ${px(10)} ${px(22)} ${px(-8)} rgba(0,0,0,.55)`
        : `0 ${px(34)} ${px(64)} ${px(-20)} rgba(22,42,57,.42), 0 ${px(10)} ${px(20)} ${px(-9)} rgba(22,42,57,.26)`;

  // Ask for the image ~1.4x its projected size: under a tilt the near edge is
  // magnified, and downsampling stays sharp where upsampling goes soft.
  const resolvedSizes =
    sizes ??
    `(max-width: 767px) ${Math.round(width * 0.85)}px, ${Math.round(width * 1.4)}px`;

  return (
    <div
      className={cn("relative", className)}
      style={{
        width,
        height: width * (spec.h / spec.w),
        padding: px(spec.railW),
        borderRadius: px(outerR),
        background: RAIL_BG[railFinish],
        boxShadow: [
          // The 0.6pt polished chamfer is the single detail that turns a flat
          // rounded rectangle into something with volume.
          `inset 0 0 0 ${px(0.6)} rgba(255,255,255,.78)`,
          `inset 0 ${px(1)} ${px(1.6)} rgba(255,255,255,.5)`,
          `inset 0 ${px(-1)} ${px(2)} rgba(0,0,0,.45)`,
          `0 0 0 ${px(0.5)} rgba(8,14,20,.55)`,
          dropShadow,
        ]
          .filter(Boolean)
          .join(","),
      }}
    >
      {buttons &&
        spec.buttons.map((b, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute"
            style={{
              [b.side]: px(-1.3),
              top: px(b.top),
              width: px(1.9),
              height: px(b.h),
              borderRadius: px(1),
              // Light comes from the upper left, so the two sides mirror.
              background:
                b.side === "left"
                  ? "linear-gradient(90deg,#8d949a,#cfd6da 38%,#f0f3f5 58%,#9aa1a6)"
                  : "linear-gradient(270deg,#8d949a,#cfd6da 38%,#f0f3f5 58%,#9aa1a6)",
              boxShadow: `0 0 0 ${px(0.4)} rgba(8,14,20,.42)`,
            }}
          />
        ))}

      {/* Black bezel ring. Without it the glass meets the metal directly and the
          whole thing reads as CSS. */}
      <div
        className="h-full"
        style={{
          padding: px(spec.bezelW),
          borderRadius: px(bezelR),
          background: "#05080b",
          boxShadow: `inset 0 0 ${px(1.2)} rgba(0,0,0,.9)`,
        }}
      >
        <div
          className="relative h-full overflow-hidden bg-black isolate"
          style={{
            borderRadius: px(spec.screenR),
            // Forces WebKit to composite the rounded clip with antialiasing.
            // Without it the corners of a 3D-rotated element come out jagged in
            // Safari — the classic failure of this kind of component.
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {screen ? (
            <Image
              src={resolveScreen(screen, locale)}
              alt={alt}
              fill
              sizes={resolvedSizes}
              quality={90}
              priority={priority}
              placeholder="blur"
              draggable={false}
              className="select-none object-cover object-top"
            />
          ) : (
            <ScreenPlaceholder />
          )}

          {children}

          {/* Makes the screenshot sit behind the glass rather than on top. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: `inset 0 0 ${px(2.5)} rgba(0,0,0,.55), inset 0 0 0 ${px(0.5)} rgba(0,0,0,.4)`,
            }}
          />

          {spec.island && (
            <div
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 bg-black"
              style={{
                top: px(spec.island.top),
                width: px(spec.island.w),
                height: px(spec.island.h),
                borderRadius: px(spec.island.h / 2),
                boxShadow: `inset 0 0 0 ${px(0.5)} rgba(255,255,255,.06)`,
              }}
            >
              {/* The lens with its specular highlight is what separates a
                  Dynamic Island from a black pill. Three elements. */}
              <span
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                  right: px(7),
                  width: px(7.6),
                  height: px(7.6),
                  background:
                    "radial-gradient(circle at 38% 32%, #1e2f3c 0%, #0a1219 46%, #05080b 100%)",
                  boxShadow: `inset 0 0 0 ${px(0.4)} rgba(120,170,210,.22)`,
                }}
              >
                <span
                  className="absolute rounded-full"
                  style={{
                    left: "26%",
                    top: "22%",
                    width: px(1.6),
                    height: px(1.6),
                    background: "rgba(190,225,255,.55)",
                  }}
                />
              </span>
            </div>
          )}

          {spec.punchHole && (
            <span
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                top: px(spec.punchHole.top),
                width: px(spec.punchHole.d),
                height: px(spec.punchHole.d),
                background:
                  "radial-gradient(circle at 38% 32%, #1e2f3c 0%, #0a1219 46%, #05080b 100%)",
              }}
            />
          )}

          {glareOpacity > 0 && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                opacity: glareOpacity,
                // `screen`, not `plus-lighter`: the latter is unsupported in
                // older Safari and blows out the app's white UI.
                mixBlendMode: "screen",
                background: [
                  "linear-gradient(112deg,rgba(255,255,255,0) 26%,rgba(255,255,255,.10) 38%,rgba(255,255,255,.24) 45%,rgba(255,255,255,.07) 52%,rgba(255,255,255,0) 64%)",
                  "radial-gradient(120% 78% at 10% -12%,rgba(255,255,255,.18),transparent 58%)",
                ].join(","),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Deliberately not a fake UI.
 *
 * The landing used to ship hand-rebuilt HTML mockups showing invented copy that
 * nobody kept in sync with the real app. A placeholder that looks like the
 * product is one that ships "just for now" and stays for six months, so this
 * one is unmistakably a skeleton.
 */
function ScreenPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full flex-col gap-3 bg-bg-subtle p-5"
    >
      <div className="h-3 w-1/3 rounded-full bg-yellow/40" />
      <div className="h-16 rounded-xl bg-white/70" />
      <div className="h-16 rounded-xl bg-white/70" />
      <div className="mt-auto h-9 rounded-full bg-yellow/40" />
    </div>
  );
}
