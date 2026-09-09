import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section, SectionLabel } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

const COMPETITORS = ["Brick", "Unpluq", "PauseBox"];

const ROWS: { key: string; impulse: string | true; others: (string | false)[] }[] =
  [
    { key: "price", impulse: "0 €", others: ["$59", "$29.99", "$24.95"] },
    { key: "anyTag", impulse: true, others: [false, false, false] },
    { key: "noHardware", impulse: true, others: [false, false, false] },
    { key: "crossPlatform", impulse: true, others: [false, false, false] },
    { key: "freeTier", impulse: true, others: [false, false, false] },
    { key: "schedules", impulse: true, others: [false, false, false] },
  ];

function Cell({ value, highlight }: { value: string | true | false; highlight?: boolean }) {
  if (value === true)
    return (
      <Check
        size={19}
        strokeWidth={3}
        aria-label="Sí"
        className={cn("mx-auto", highlight ? "text-yellow-deep" : "text-ink-deep")}
      />
    );
  if (value === false)
    return <X size={17} strokeWidth={2.4} aria-label="No" className="mx-auto text-muted/50" />;
  return (
    <span
      className={cn(
        "font-display font-extrabold tabular-nums",
        highlight ? "text-ink-deep" : "text-muted"
      )}
    >
      {value}
    </span>
  );
}

/**
 * Hairline table rather than a bordered card with a shadow: the comparison is
 * data, and dressing data as an object competes with it. The Impulse column is
 * the only one carrying tint, so the eye lands there without any extra chrome.
 */
export function DiscComparison() {
  const t = useTranslations("disc.compare");
  const tr = useTranslations("disc.compareRows");

  return (
    <Section tone="bone" width="content">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="max-w-[14ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[58ch] text-lede text-muted">{t("lede")}</p>
      </Reveal>

      <Reveal delay={0.08} className="mt-11 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <caption className="sr-only">{t("title")}</caption>
          <thead>
            <tr className="border-b border-ink-deep/15">
              <th scope="col" className="py-4 pr-4" />
              <th
                scope="col"
                className="bg-yellow/15 px-3 py-4 text-center font-display text-[17px] font-black text-ink-deep"
              >
                impulse<span className="text-yellow-deep">.</span>
              </th>
              {COMPETITORS.map((name) => (
                <th
                  key={name}
                  scope="col"
                  className="px-3 py-4 text-center text-[15px] font-bold text-muted"
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.key} className="border-b border-hair-light">
                <th
                  scope="row"
                  className="py-4 pr-6 text-[15px] font-semibold text-ink-deep"
                >
                  {tr(row.key)}
                </th>
                <td className="bg-yellow/15 px-3 py-4 text-center">
                  <Cell value={row.impulse} highlight />
                </td>
                {row.others.map((value, i) => (
                  <td key={COMPETITORS[i]} className="px-3 py-4 text-center">
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <p className="mt-6 text-[13px] text-muted">{t("footnote")}</p>
    </Section>
  );
}
