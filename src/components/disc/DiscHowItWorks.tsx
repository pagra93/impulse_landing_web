import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Disc } from "@/components/landing/Disc";
import { Nfc } from "@/components/landing/Nfc";
import { BrowserFrame } from "@/components/devices/BrowserFrame";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { Tilt3D } from "@/components/devices/Tilt3D";
import { SCREENS } from "@/components/devices/screens";
import { Section, SectionLabel } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

type Step = { title: string; body: string };

/**
 * The four steps, using the shared device system.
 *
 * What this replaces: four phone "mockups" rebuilt in HTML/CSS — with their own
 * private, cruder copy of a PhoneFrame defined inside the file — showing
 * invented iOS screens. Two of them depicted a "Physical · Scan your tag"
 * control that does not exist in any shipped build, which is the worst version
 * of a fake screenshot: it promises a specific UI.
 *
 * Steps 1 and 4 now use real captures. Steps 2 and 3 are about a physical
 * object rather than a screen, so they show the Disc itself — depicting a
 * product, not faking an interface.
 */
function Step({
  index,
  title,
  body,
  media,
  flip = false,
}: {
  index: number;
  title: string;
  body: string;
  media: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 border-t border-hair-light py-11 md:grid-cols-[minmax(0,.84fr)_minmax(0,1.16fr)] md:gap-16 md:py-[70px]">
      <Reveal className={cn(flip && "md:order-2")}>
        <span
          aria-hidden="true"
          className="mb-4 block font-display text-[clamp(30px,3vw,42px)] font-black leading-none tracking-[-0.05em] text-hair-light tabular-nums"
        >
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="mb-3.5 font-display text-[clamp(23px,2.5vw,33px)] font-black tracking-[-0.032em] text-ink-deep">
          {title}
        </h3>
        <p className="max-w-[46ch] text-[16.5px] leading-[1.6] text-muted">
          {body}
        </p>
      </Reveal>
      <Reveal delay={0.08} className={cn(flip && "md:order-1")}>
        {media}
      </Reveal>
    </div>
  );
}

/** Neutral stage for the steps that show the Disc rather than a screen. */
function DiscStage({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[340px] place-items-center rounded-3xl bg-void [background-image:radial-gradient(52%_46%_at_50%_45%,rgba(248,215,62,.14),transparent_70%)]">
      {children}
    </div>
  );
}

export function DiscHowItWorks() {
  const t = useTranslations("disc.how");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;
  const steps = t.raw("steps") as Step[];

  return (
    <Section id="how" tone="paper" width="shell">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-7 max-w-[18ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
      </Reveal>

      <Step
        index={1}
        title={steps[0].title}
        body={steps[0].body}
        media={
          <div className="flex justify-center">
            <Tilt3D rx={4} ry={-12} rz={1}>
              <PhoneFrame
                screen={SCREENS.ios.newblock}
                alt={td("iosNewBlock")}
                locale={locale}
                width={250}
                island={false}
              />
            </Tilt3D>
          </div>
        }
      />

      <Step
        index={2}
        flip
        title={steps[1].title}
        body={steps[1].body}
        media={
          <DiscStage>
            <div className="flex items-center gap-8">
              <Nfc size={34} waves={3} className="text-yellow" aria-hidden="true" />
              <Disc size={190} ripple />
            </div>
          </DiscStage>
        }
      />

      <Step
        index={3}
        title={steps[2].title}
        body={steps[2].body}
        media={
          <DiscStage>
            {/* Distance, drawn: the phone on one side, the Disc on the other,
                with the gap doing the talking. */}
            <div className="flex w-full items-center justify-between px-8 md:px-14">
              <Tilt3D rx={3} ry={-12} rz={1}>
                <PhoneFrame
                  screen={SCREENS.ios.home}
                  alt={td("iosHome")}
                  locale={locale}
                  width={120}
                  shadow="dark"
                  buttons={false}
                />
              </Tilt3D>
              <span
                aria-hidden="true"
                className="mx-4 h-px flex-1 [background:repeating-linear-gradient(90deg,rgba(248,215,62,.55)_0_7px,transparent_7px_15px)]"
              />
              <Disc size={116} />
            </div>
          </DiscStage>
        }
      />

      <Step
        index={4}
        flip
        title={steps[3].title}
        body={steps[3].body}
        media={
          <div className="flex justify-center">
            <Tilt3D rx={4} ry={-12} rz={1}>
              <PhoneFrame
                screen={SCREENS.ios.interrupt}
                alt={td("iosInterrupt")}
                locale={locale}
                width={240}
              />
            </Tilt3D>
          </div>
        }
      />
    </Section>
  );
}
