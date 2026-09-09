import { useTranslations } from "next-intl";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";

/**
 * The problem, set as editorial type with the two figures pulled into the
 * margin on hairlines. No cards, and no stock illustration — the one that used
 * to sit here was generic clip-art that undercut everything around it.
 */
export function Problem() {
  const t = useTranslations("problem");

  return (
    <Section tone="sunken" width="shell">
      <Reveal>
        <SectionLabel tone="dark">{t("label")}</SectionLabel>
      </Reveal>

      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] md:gap-20">
        <Reveal>
          <h2 className="font-display text-h2 font-black text-on-dark">
            {t("title")}
          </h2>
          <p className="mt-7 max-w-[56ch] text-lede text-on-dark-mid">
            {t("body")}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col gap-9">
          {(["checks", "hours"] as const).map((k) => (
            <div key={k} className="border-t border-border-on-dark pt-4">
              <span className="block font-display text-[clamp(44px,4.6vw,64px)] font-black leading-none tracking-[-0.05em] text-yellow tabular-nums">
                {t(`${k}Value`)}
              </span>
              <span className="mt-2.5 block max-w-[22ch] text-[14.5px] text-on-dark-mid">
                {t(`${k}Label`)}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
