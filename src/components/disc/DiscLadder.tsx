import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Mark } from "@/components/brand/Mark";
import { BrowserFrame } from "@/components/devices/BrowserFrame";
import { SCREENS } from "@/components/devices/screens";
import { Section, SectionLabel } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

type Level = { level: string; title: string; body: string };

/**
 * Same ring logic as the home page: the mark builds up one ring per level.
 * Here it sits next to the real difficulty picker from the extension, so the
 * abstract scale is anchored to an actual screen.
 */
export function DiscLadder() {
  const t = useTranslations("disc.ladder");
  const ts = useTranslations("strictness");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;
  const levels = ts.raw("levels") as Level[];

  return (
    <Section tone="bone" width="shell">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-16">
        <Reveal>
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="max-w-[16ch] font-display text-h2 font-black text-ink-deep">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-[50ch] text-lede text-muted">{t("lede")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <BrowserFrame
            screen={SCREENS.extension.strict}
            alt={td("extensionStrict")}
            locale={locale}
            url={td("browserBar")}
          />
        </Reveal>
      </div>

      <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {levels.map((level, i) => {
          const isPhysical = i === levels.length - 1;
          return (
            <Reveal key={level.level} delay={i * 0.06}>
              <li className="border-t border-hair-light pt-6">
                <Mark
                  rings={i as 0 | 1 | 2 | 3}
                  className={cn(
                    "size-[84px]",
                    isPhysical ? "text-yellow-deep" : "text-ink-deep/70"
                  )}
                />
                <div
                  className={cn(
                    "mb-2 mt-5 text-[11.5px] font-black uppercase tracking-[0.18em]",
                    isPhysical ? "text-yellow-deep" : "text-muted"
                  )}
                >
                  {level.level}
                </div>
                <h3 className="mb-2 font-display text-[18px] font-extrabold text-ink-deep">
                  {level.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-muted">
                  {level.body}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
