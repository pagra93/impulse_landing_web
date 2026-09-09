import { useTranslations } from "next-intl";
import { MarkField } from "@/components/brand/Mark";
import { SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";

/**
 * The manifesto, on a full-bleed yellow ground — the same yellow as the app's
 * own interruption screen, which makes it the most recognisably Impulse surface
 * on the page.
 *
 * The graphic behind it is not a decorative circle: it is the brand mark's own
 * ring series continued outward past r=42 in steps of 13, following the same
 * thinning and fading law. The identity at section scale, reading as an impulse
 * propagating.
 */
export function Manifesto() {
  const t = useTranslations("manifesto");

  return (
    <section className="relative overflow-hidden bg-yellow px-6 py-16 text-ink-deep md:py-[88px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-54%] top-1/2 aspect-square w-[min(122vw,900px)] -translate-y-1/2 text-ink-deep opacity-55 md:right-[-24%] md:w-[min(84vw,1140px)] md:opacity-100"
      >
        <MarkField />
      </div>

      <div className="relative mx-auto max-w-shell">
        <Reveal>
          <SectionLabel tone="ink" className="max-w-[420px]">
            {t("label")}
          </SectionLabel>

          <p className="max-w-[19ch] font-display text-[clamp(26px,3.3vw,44px)] font-extrabold leading-[1.14] tracking-[-0.032em] text-ink-deep">
            {t("quoteBefore")}{" "}
            <em className="font-extrabold italic">{t("quoteEmphasis")}</em>.
          </p>

          <p className="mt-7 max-w-[44ch] text-lede text-ink-deep/75">
            {t("body")}
          </p>

          <p className="mt-7 text-[14px] font-extrabold uppercase tracking-[0.1em] text-ink-deep/55">
            {t("signature")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
