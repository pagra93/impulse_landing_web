import { useTranslations } from "next-intl";
import { Section, SectionLabel } from "./primitives";
import { Reveal } from "./Reveal";

type Step = { title: string; body: string };

/**
 * Four steps as an editorial list: large numerals in the margin, hairline
 * separators. Not numbered circles on cards — the default that makes a page
 * look generated rather than designed.
 */
export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <Section id="como" tone="bone" density="sm" width="shell">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-11 max-w-[14ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
      </Reveal>

      <ol className="m-0 list-none border-t border-hair-light p-0">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <li className="grid grid-cols-1 items-baseline gap-2 border-b border-hair-light py-7 sm:grid-cols-[96px_1fr] sm:gap-11">
              <span
                aria-hidden="true"
                className="font-display text-[clamp(30px,3vw,42px)] font-black leading-none tracking-[-0.05em] text-hair-light tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-1.5 font-display text-h3 font-extrabold text-ink-deep">
                  {step.title}
                </h3>
                <p className="max-w-[52ch] text-muted">{step.body}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
