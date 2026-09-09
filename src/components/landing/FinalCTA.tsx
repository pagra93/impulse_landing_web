import { useTranslations } from "next-intl";
import { MarkField } from "@/components/brand/Mark";
import { CtaButton } from "./primitives";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";

export function FinalCTA() {
  const t = useTranslations("finalCta");
  const tc = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-yellow px-6 py-20 text-ink-deep md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40%] top-1/2 aspect-square w-[min(110vw,700px)] -translate-y-1/2 text-ink-deep opacity-45 md:right-[-14%] md:w-[min(52vw,620px)] md:opacity-100"
      >
        <MarkField />
      </div>

      <div className="relative mx-auto max-w-shell">
        <Reveal>
          <h2 className="font-display text-display font-black text-ink-deep">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[19px] text-ink-deep/75">
            {t("lede")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton variant="primary" className="!bg-ink-deep !border-ink-deep" href={LINKS.ios}>
              {tc("downloadIos")}
            </CtaButton>
            <CtaButton variant="outline" className="!bg-transparent !text-ink-deep !border-ink-deep/30" href={LINKS.play}>
              {tc("downloadAndroid")}
            </CtaButton>
            <CtaButton variant="outline" className="!bg-transparent !text-ink-deep !border-ink-deep/30" href={LINKS.chrome}>
              {tc("downloadChrome")}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
