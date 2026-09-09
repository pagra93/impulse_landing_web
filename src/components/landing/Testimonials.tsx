import { useTranslations } from "next-intl";
import { Section, SectionLabel, Stars } from "./primitives";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Review = { quote: string; author: string; source: string };
type TrustItem = { title: string; body: string };

/**
 * A quote wall with varying type sizes and hairline separators, rather than six
 * identical padded boxes in a 2x3 grid.
 */
export function Testimonials() {
  const t = useTranslations("testimonials");
  const tt = useTranslations("trust");
  const reviews = t.raw("items") as Review[];
  const trust = tt.raw("items") as TrustItem[];

  return (
    <Section id="opiniones" tone="bone" width="shell">
      <Reveal>
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="mb-11 max-w-[14ch] font-display text-h2 font-black text-ink-deep">
          {t("title")}
        </h2>
      </Reveal>

      <div className="gap-11 sm:columns-2 lg:columns-3">
        {reviews.map((review, i) => (
          <figure
            key={review.author}
            className="mb-9 break-inside-avoid border-b border-hair-light pb-9"
          >
            <Stars size={13} className="mb-3 text-yellow-deep" />
            <blockquote
              className={cn(
                "m-0 text-ink-deep",
                i % 3 === 0
                  ? "text-[22px] font-bold leading-[1.35] tracking-[-0.018em]"
                  : "text-[17px] font-medium leading-[1.55]"
              )}
            >
              {review.quote}
            </blockquote>
            <figcaption className="mt-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-muted">
              {review.author} · {review.source}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-7 border-t border-hair-light pt-10 md:grid-cols-3 md:gap-12">
        {trust.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <h3 className="mb-2 font-display text-[17px] font-extrabold text-ink-deep">
              {item.title}
            </h3>
            <p className="text-[15px] leading-[1.55] text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
