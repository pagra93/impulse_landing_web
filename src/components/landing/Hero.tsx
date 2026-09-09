import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { CtaButton } from "./primitives";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { Tilt3D } from "@/components/devices/Tilt3D";
import { SCREENS } from "@/components/devices/screens";
import { LINKS } from "@/lib/links";

const STATS = [
  { value: "1.000+", key: "users" },
  { value: "10K+", key: "hours" },
  { value: "1M+", key: "blocks" },
  { value: "4,8★", key: "rating" },
] as const;

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");
  const ts = useTranslations("stats");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;

  return (
    <section className="overflow-hidden bg-void px-6 pt-12 md:pt-16 [background-image:radial-gradient(52%_44%_at_74%_30%,rgba(248,215,62,.2),transparent_70%)]">
      <div className="mx-auto max-w-shell">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] md:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-border-on-dark bg-surface-on-dark py-1.5 pl-2 pr-4 text-[13.5px] font-semibold text-on-dark-mid">
              <b className="rounded-full bg-yellow px-2.5 py-1 text-[10.5px] font-black uppercase tracking-[0.09em] text-[#1a1500]">
                {t("badge")}
              </b>
              {t("badgeText")}
            </span>

            <h1 className="font-display text-display font-black text-on-dark">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}{" "}
              <span className="text-yellow">{t("titleAccent")}</span>.
            </h1>

            <p className="mt-6 max-w-[56ch] text-lede text-on-dark-mid">
              {t("lede")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton variant="yellow" href={LINKS.ios}>
                {tc("downloadIos")}
              </CtaButton>
              <CtaButton variant="onDark" href={LINKS.play}>
                {tc("downloadAndroid")}
              </CtaButton>
              <CtaButton variant="onDark" href={LINKS.chrome}>
                {tc("downloadChrome")}
              </CtaButton>
            </div>

            <p className="mt-5 flex items-center gap-2.5 text-[13.5px] text-on-dark-low">
              <span aria-hidden="true" className="h-px w-5 bg-on-dark-low" />
              {t("macosSoon")}
            </p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">
            {/* Contact shadow lives outside the tilt: a blur() on the
                transformed node re-rasterises on every composited frame. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[14%] bottom-[7%] h-12 rounded-[50%] blur-[22px] [background:radial-gradient(ellipse_at_center,rgba(0,0,0,.7),rgba(0,0,0,0)_70%)]"
            />
            <Tilt3D rx={4} ry={-14} rz={1.5}>
              <PhoneFrame
                screen={SCREENS.ios.interrupt}
                alt={td("iosInterrupt")}
                locale={locale}
                width={296}
                shadow="dark"
                priority
              />
            </Tilt3D>
          </div>
        </div>

        {/* Figures ride along the bottom of the hero on a hairline instead of
            sitting in a separate band, which used to cost a full section. */}
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border-on-dark pb-10 pt-7 sm:grid-cols-4 md:mt-12 md:pb-12">
          {STATS.map((s) => (
            <div key={s.key}>
              <dt className="sr-only">{ts(s.key)}</dt>
              <dd className="m-0">
                <span className="block font-display text-[clamp(24px,2.4vw,32px)] font-black leading-none tracking-[-0.04em] text-on-dark tabular-nums">
                  {s.value}
                </span>
                <span className="mt-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-on-dark-low">
                  {ts(s.key)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
