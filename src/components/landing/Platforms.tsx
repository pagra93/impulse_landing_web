import { Apple, Chrome, Laptop, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const ITEMS = [
  { key: "ios", icon: Apple, href: LINKS.ios },
  { key: "android", icon: Smartphone, href: LINKS.play },
  { key: "chrome", icon: Chrome, href: LINKS.chrome },
  { key: "macos", icon: Laptop, href: null },
] as const;

/**
 * All four platforms, separated by vertical rules rather than boxed into cards.
 * Android appears here for the first time: the app has been on Google Play and
 * the site did not link to it once.
 */
export function Platforms() {
  const t = useTranslations("platforms");

  return (
    <Section id="plataformas" tone="paper" density="sm" width="shell">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-5 max-w-[15ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
        <p className="mb-11 max-w-[52ch] text-lede text-muted">{t("lede")}</p>
      </Reveal>

      <ul className="m-0 grid list-none grid-cols-1 border-t border-hair-light p-0 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          const soon = item.href === null;
          return (
            <Reveal key={item.key} delay={i * 0.05}>
              <li
                className={cn(
                  "border-b border-hair-light py-8 lg:border-b-0 lg:border-r lg:last:border-r-0",
                  i > 0 && "lg:pl-7",
                  "lg:pr-7 lg:last:pr-0"
                )}
              >
                <Icon
                  size={22}
                  aria-hidden="true"
                  className={cn("mb-4 text-ink-deep", soon && "opacity-45")}
                />
                <h3
                  className={cn(
                    "mb-1.5 font-display text-[18px] font-extrabold text-ink-deep",
                    soon && "opacity-45"
                  )}
                >
                  {t(`${item.key}.name`)}
                </h3>
                <p
                  className={cn(
                    "mb-4 min-h-[66px] text-[15px] leading-[1.5] text-muted",
                    soon && "opacity-45"
                  )}
                >
                  {t(`${item.key}.body`)}
                </p>
                {soon ? (
                  <span className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-muted">
                    {t("soon")}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border-b-2 border-yellow pb-0.5 text-[14.5px] font-extrabold text-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
                  >
                    {t(`${item.key}.cta`)}
                  </a>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
