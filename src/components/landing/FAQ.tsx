import { useTranslations } from "next-intl";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";

export type FaqItem = { q: string; a: string };

/**
 * Hairline list, built on <details>/<summary> so it opens without JavaScript
 * and announces its own expanded state.
 *
 * Down from nine questions to six: the three about the Disc and NFC now live on
 * the physical-unlock page, next to the thing they describe.
 */
export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];

  return (
    <Section id="faq" tone="paper" width="shell">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-11 font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
      </Reveal>

      <div className="max-w-[860px] border-t border-hair-light">
        {items.map((item, i) => (
          <details
            key={item.q}
            open={i === 0}
            className="group border-b border-hair-light"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[clamp(17px,1.5vw,20px)] font-extrabold tracking-[-0.02em] text-ink-deep [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow">
              {item.q}
              <span
                aria-hidden="true"
                className="relative size-3.5 shrink-0 text-ink-deep"
              >
                <span className="absolute left-0 top-1/2 h-0.5 w-3.5 -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-3.5 w-0.5 -translate-x-1/2 bg-current transition-opacity group-open:opacity-0" />
              </span>
            </summary>
            <div className="max-w-[70ch] pb-7 pr-10 text-[16.5px] leading-[1.6] text-muted">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
