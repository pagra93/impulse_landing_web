import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Mark } from "@/components/brand/Mark";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { Tilt3D } from "@/components/devices/Tilt3D";
import { SCREENS } from "@/components/devices/screens";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Level = { level: string; title: string; body: string };

/**
 * The four friction levels, drawn with the brand mark itself.
 *
 * The core dot never changes; each rung adds one more ring around it, until the
 * physical level completes the logo in yellow. Increasing resistance around an
 * unchanging centre — which is exactly what the product does, said with the
 * identity rather than with four identical cards.
 *
 * The Disc keeps a single rung here and a link out; it used to occupy four full
 * sections and roughly 3,500px for a product that has not shipped.
 */
export function Strictness() {
  const t = useTranslations("strictness");
  const td = useTranslations("devices");
  const locale = useLocale() as Locale;
  const levels = t.raw("levels") as Level[];

  return (
    // id="physical" is kept so inbound links to the old anchor still land on the
    // right idea; anchors never reach the server, so there is nothing to redirect.
    <Section id="friccion" tone="void" width="shell">
      <div id="physical" className="sr-only" />

      <Reveal>
        <SectionLabel tone="dark">{t("label")}</SectionLabel>
        <h2 className="max-w-[16ch] font-display text-h2 font-black text-on-dark">
          {t("title")}
        </h2>
      </Reveal>

      <div className="mt-8 grid items-start gap-10 md:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] md:gap-16">
        <Reveal>
          <p className="max-w-[52ch] text-lede text-on-dark-mid">{t("lede")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex justify-center md:justify-start">
            <Tilt3D rx={4} ry={-12} rz={1}>
              <PhoneFrame
                screen={SCREENS.ios.difficulty}
                alt={td("iosDifficulty")}
                locale={locale}
                width={252}
                shadow="dark"
                island={false}
              />
            </Tilt3D>
          </div>
        </Reveal>
      </div>

      <ol className="relative m-0 mt-14 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {/* The track the marks sit on. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-14 hidden h-px bg-border-on-dark lg:block"
        />

        {levels.map((level, i) => {
          const isPhysical = i === levels.length - 1;
          return (
            <Reveal key={level.level} delay={i * 0.06}>
              <li className="relative lg:pr-6">
                <div
                  className={cn(
                    "relative z-[1] flex h-[118px] items-center",
                    isPhysical && "drop-shadow-[0_0_22px_rgba(248,215,62,.35)]"
                  )}
                >
                  <Mark
                    rings={i as 0 | 1 | 2 | 3}
                    className={cn(
                      "-ml-1 size-[104px]",
                      isPhysical ? "text-yellow" : "text-on-dark"
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "mb-2.5 mt-6 text-[11.5px] font-black uppercase tracking-[0.18em]",
                    isPhysical ? "text-yellow" : "text-on-dark-low"
                  )}
                >
                  {level.level}
                </div>
                <h3 className="mb-2 font-display text-[19px] font-extrabold text-on-dark">
                  {level.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-on-dark-mid">
                  {level.body}
                </p>

                {isPhysical && (
                  <Link
                    href="/physical-unlock"
                    className="mt-3.5 inline-flex items-center gap-1.5 rounded text-[14.5px] font-extrabold text-yellow hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
                  >
                    {t("discLink")}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
