import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import { resolveScreen, type ScreenAsset, type ShadowTone } from "./types";

/**
 * Desktop browser window.
 *
 * The content aspect ratio comes from the screenshot's own intrinsic size, not
 * from a constant. The component this replaces hardcoded `aspect-video`, which
 * would have cropped or squashed every one of the 4:3 extension captures we
 * actually have.
 */
export function BrowserFrame({
  screen,
  alt,
  locale,
  url,
  shadow = "light",
  priority = false,
  sizes = "(max-width: 767px) 92vw, 620px",
  className,
}: {
  screen?: ScreenAsset;
  alt: string;
  locale: Locale;
  url: string;
  shadow?: ShadowTone;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const img = screen ? resolveScreen(screen, locale) : null;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-[13px] border bg-[#eef1f4]",
        shadow === "dark"
          ? "border-white/10 shadow-[0_30px_70px_rgba(0,0,0,.6)]"
          : "border-ink-deep/15 shadow-[0_26px_60px_rgba(17,24,32,.2)]",
        className
      )}
    >
      <div className="flex items-center gap-[7px] bg-[#e6eaee] px-3 py-2.5">
        {/* Real macOS traffic-light hexes rather than Tailwind's red/amber/green. */}
        <span className="block size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="block size-2.5 rounded-full bg-[#febc2e]" />
        <span className="block size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex-1 rounded-full bg-white text-center text-[10.5px] leading-5 text-[#7b8894]">
          {url}
        </span>
      </div>

      {img ? (
        <Image
          src={img}
          alt={alt}
          sizes={sizes}
          quality={90}
          priority={priority}
          placeholder="blur"
          className="h-auto w-full"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[4/3] flex-col gap-3 bg-bg-subtle p-6"
        >
          <div className="h-3 w-1/4 rounded-full bg-yellow/40" />
          <div className="h-20 rounded-xl bg-white/70" />
          <div className="h-20 rounded-xl bg-white/70" />
        </div>
      )}
    </div>
  );
}
