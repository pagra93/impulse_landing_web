import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Disc } from "@/components/landing/Disc";
import { CtaButton, Section, SectionLabel } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/Reveal";
import { LINKS } from "@/lib/links";

const WAITLIST_MAILTO = `mailto:${LINKS.supportEmail}?subject=Impulse%20Disc%20waitlist`;

export function GetTheDisc() {
  const t = useTranslations("disc.get");

  return (
    <Section id="get-the-disc" tone="void" width="shell">
      <Reveal>
        <SectionLabel tone="dark">{t("label")}</SectionLabel>
        <h2 className="max-w-[16ch] font-display text-h2 font-black text-on-dark">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[56ch] text-lede text-on-dark-mid">{t("lede")}</p>
      </Reveal>

      <div className="mt-12 grid items-stretch gap-5 md:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="relative flex flex-col overflow-hidden rounded-3xl border border-border-on-dark bg-void-raised p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-[260px] rounded-full [background:radial-gradient(circle,rgba(248,215,62,.18),transparent_65%)]"
          />
          <div className="relative flex items-center gap-3">
            <span className="rounded-full bg-yellow px-3 py-1 text-[12px] font-black uppercase tracking-[0.08em] text-[#1a1500]">
              {t("annualBadge")}
            </span>
            <span className="text-[13px] font-semibold text-on-dark-low">
              {t("annualPlan")}
            </span>
          </div>

          <div className="relative mt-8 flex items-center gap-7">
            <Disc size={104} />
            <h3 className="max-w-[16ch] font-display text-[26px] font-black leading-[1.1] tracking-[-0.03em] text-on-dark">
              {t("annualTitle")}
            </h3>
          </div>

          <p className="relative mt-6 max-w-[46ch] text-[16px] leading-[1.6] text-on-dark-mid">
            {t("annualBody")}
          </p>

          <div className="relative mt-auto pt-8">
            <CtaButton variant="yellow" href={WAITLIST_MAILTO}>
              {t("annualCta")}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="flex flex-col rounded-3xl border border-border-on-dark p-10"
        >
          <span className="text-[12px] font-black uppercase tracking-[0.14em] text-on-dark-low">
            {t("freeBadge")}
          </span>
          <h3 className="mt-5 max-w-[18ch] font-display text-[24px] font-black leading-[1.14] tracking-[-0.03em] text-on-dark">
            {t("freeTitle")}
          </h3>
          <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.6] text-on-dark-mid">
            {t("freeBody")}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
            <CtaButton variant="onDark" href={LINKS.ios}>
              {t("freeCta")}
            </CtaButton>
            <a
              href={LINKS.amazonNfc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded text-[14.5px] font-extrabold text-yellow hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
            >
              {t("freeLink")}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
