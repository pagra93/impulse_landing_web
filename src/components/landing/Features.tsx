import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";
import { BrowserFrame } from "@/components/devices/BrowserFrame";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { Tilt3D } from "@/components/devices/Tilt3D";
import { SCREENS } from "@/components/devices/screens";
import { cn } from "@/lib/utils";

export function CheckList({
  items,
  tone = "light",
}: {
  items: { strong: string; rest: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className="m-0 mt-6 grid list-none gap-3 p-0">
      {items.map((item) => (
        <li
          key={item.strong}
          className={cn(
            "grid grid-cols-[auto_1fr] gap-3 text-[15.5px] leading-[1.5]",
            tone === "dark" ? "text-on-dark-mid" : "text-muted"
          )}
        >
          <Check
            size={16}
            strokeWidth={2.6}
            aria-hidden="true"
            className={cn(
              "mt-1 shrink-0",
              tone === "dark" ? "text-yellow" : "text-yellow-deep"
            )}
          />
          <span>
            <b
              className={cn(
                "font-extrabold",
                tone === "dark" ? "text-on-dark" : "text-ink-deep"
              )}
            >
              {item.strong}
            </b>{" "}
            {item.rest}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * One feature, told with a real screenshot beside it. The reference sites all
 * do this and the old landing did not: it described six features in six equal
 * text cards and showed nothing.
 */
function Chapter({
  kicker,
  title,
  body,
  checks,
  media,
  flip = false,
}: {
  kicker: string;
  title: string;
  body: string;
  checks: { strong: string; rest: string }[];
  media: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-7 border-t border-hair-light py-11 md:grid-cols-[minmax(0,.84fr)_minmax(0,1.16fr)] md:gap-16 md:py-[70px]">
      <Reveal className={cn(flip && "md:order-2")}>
        <span className="mb-4 block text-[11.5px] font-black uppercase tracking-[0.18em] text-yellow-deep">
          {kicker}
        </span>
        <h3 className="mb-3.5 font-display text-[clamp(23px,2.5vw,33px)] font-black tracking-[-0.032em] text-ink-deep">
          {title}
        </h3>
        <p className="max-w-[44ch] text-[16.5px] leading-[1.6] text-muted">
          {body}
        </p>
        <CheckList items={checks} />
      </Reveal>

      <Reveal delay={0.08} className={cn(flip && "md:order-1")}>
        {media}
      </Reveal>
    </div>
  );
}

export function Features() {
  const t = useTranslations("features");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;

  const checks = (key: "blocks" | "limits" | "mobile") => [
    { strong: t(`${key}.check1Strong`), rest: t(`${key}.check1`) },
    { strong: t(`${key}.check2Strong`), rest: t(`${key}.check2`) },
  ];

  return (
    <Section id="funciones" tone="bone" density="sm" width="shell" className="pt-0">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-7 max-w-[15ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
      </Reveal>

      <Chapter
        kicker={t("blocks.kicker")}
        title={t("blocks.title")}
        body={t("blocks.body")}
        checks={checks("blocks")}
        media={
          <BrowserFrame
            screen={SCREENS.extension.dashboard}
            alt={td("extensionDashboard")}
            locale={locale}
            url={td("browserBar")}
          />
        }
      />

      <Chapter
        flip
        kicker={t("limits.kicker")}
        title={t("limits.title")}
        body={t("limits.body")}
        checks={checks("limits")}
        media={
          <BrowserFrame
            screen={SCREENS.extension.limits}
            alt={td("extensionLimits")}
            locale={locale}
            url={td("browserBar")}
          />
        }
      />

      <Chapter
        kicker={t("mobile.kicker")}
        title={t("mobile.title")}
        body={t("mobile.body")}
        checks={checks("mobile")}
        media={
          <div className="flex justify-center">
            <Tilt3D rx={4} ry={-12} rz={1}>
              <PhoneFrame
                screen={SCREENS.ios.interrupt}
                alt={td("iosInterrupt")}
                locale={locale}
                width={250}
              />
            </Tilt3D>
          </div>
        }
      />
    </Section>
  );
}
