import { useTranslations } from "next-intl";
import { Disc } from "@/components/landing/Disc";
import { CtaButton } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/Reveal";
import { LINKS } from "@/lib/links";

export function DiscHero() {
  const t = useTranslations("disc.hero");

  return (
    <section className="overflow-hidden bg-void px-6 pb-16 pt-14 md:pb-24 md:pt-20 [background-image:radial-gradient(48%_42%_at_50%_38%,rgba(248,215,62,.16),transparent_70%)]">
      <div className="mx-auto flex max-w-shell flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <span className="mb-8 inline-flex items-center gap-3 rounded-full border border-border-on-dark bg-surface-on-dark py-1.5 pl-2 pr-4 text-[13.5px] font-semibold text-on-dark-mid">
            <b className="rounded-full bg-yellow px-2.5 py-1 text-[10.5px] font-black uppercase tracking-[0.09em] text-[#1a1500]">
              {t("badge")}
            </b>
            {t("badgeText")}
          </span>

          {/* The Disc is a physical object, so rendering it is depicting a
              product rather than faking an app screen. */}
          <Disc size={220} ripple />

          <h1 className="mt-12 max-w-[17ch] font-display text-display font-black text-on-dark">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-[54ch] text-lede text-on-dark-mid">
            {t("lede")}
          </p>

          <p className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[14px] text-on-dark-low">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-on-dark bg-surface-on-dark px-4 py-1.5 font-semibold text-on-dark-mid">
              <span aria-hidden="true" className="size-2 rounded-full bg-yellow" />
              {t("discName")}
            </span>
            {t("discAlt")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton variant="yellow" href={LINKS.ios}>
              {t("ctaPrimary")}
            </CtaButton>
            <CtaButton variant="onDark" href="#how">
              {t("ctaSecondary")}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
