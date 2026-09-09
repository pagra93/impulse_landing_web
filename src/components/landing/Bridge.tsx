import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Mark } from "@/components/brand/Mark";
import { BrowserFrame } from "@/components/devices/BrowserFrame";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { Tilt3D } from "@/components/devices/Tilt3D";
import { SCREENS } from "@/components/devices/screens";
import { CtaButton, Section, SectionLabel } from "./primitives";
import { CheckList } from "./Features";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";

/**
 * Desktop and mobile, and the NFC bridge between them.
 *
 * This is the differentiator that was buried: Impulse blocks on the computer on
 * its own, and the phone is what ends a desktop block. The composition carries
 * it without the copy — a browser sitting on the real block screen, the Disc
 * with its rings, the phone entering from the right, and a dotted arc joining
 * the two.
 */
export function Bridge() {
  const t = useTranslations("bridge");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;

  return (
    <Section id="ordenador" tone="void" width="shell">
      <Reveal>
        <SectionLabel tone="dark">{t("label")}</SectionLabel>
        <h2 className="max-w-[17ch] font-display text-h2 font-black text-on-dark">
          {t("title")}
        </h2>
      </Reveal>

      <div className="mt-11 grid items-center gap-10 md:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] md:gap-16">
        <Reveal>
          <p className="max-w-[56ch] text-lede text-on-dark-mid">{t("body1")}</p>
          <p className="mt-5 max-w-[56ch] text-lede text-on-dark-mid">
            {t("body2")}
          </p>

          <CheckList
            tone="dark"
            items={[1, 2, 3, 4].map((n) => ({
              strong: t(`check${n}Strong`),
              rest: t(`check${n}`),
            }))}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton variant="yellow" href={LINKS.chrome}>
              {t("ctaChrome")}
            </CtaButton>
            <CtaButton variant="onDark" href="/desbloqueo-fisico">
              {t("ctaNfc")}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative flex flex-col items-stretch gap-6 md:block md:min-h-[440px]">
            <div className="w-full md:max-w-[600px]">
              <BrowserFrame
                screen={SCREENS.extension.blocked}
                alt={td("extensionBlocked")}
                locale={locale}
                url="instagram.com"
                shadow="dark"
              />
            </div>

            {/* Dotted arc from the Disc to the phone: the tap that lifts the
                desktop block, drawn rather than explained. */}
            <svg
              aria-hidden="true"
              width="150"
              height="112"
              viewBox="0 0 150 112"
              fill="none"
              className="absolute bottom-24 right-[9%] hidden text-yellow md:block"
            >
              <path
                d="M6 106C6 48 52 8 128 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7 8"
                strokeLinecap="round"
                opacity=".65"
              />
              <circle cx="128" cy="8" r="4.5" fill="currentColor" />
            </svg>

            <div className="flex justify-center md:absolute md:bottom-1.5 md:left-[6%] md:z-[2]">
              <div className="grid size-[120px] place-items-center rounded-full shadow-[0_22px_48px_rgba(0,0,0,.66),inset_0_0_0_1px_rgba(255,255,255,.08)] [background:radial-gradient(circle_at_38%_30%,#2e3945_0%,#141c24_55%,#080d12_100%)]">
                <Mark className="size-[82px] text-yellow" />
              </div>
            </div>

            <div className="flex justify-center md:absolute md:-bottom-4 md:right-0 md:z-[3]">
              <Tilt3D rx={3} ry={-11} rz={1}>
                <PhoneFrame
                  screen={SCREENS.ios.interrupt}
                  alt={td("iosInterrupt")}
                  locale={locale}
                  width={172}
                  shadow="dark"
                />
              </Tilt3D>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
