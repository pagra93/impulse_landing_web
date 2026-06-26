import { Apple, Chrome } from "lucide-react";
import { CtaButton, IOS_URL, CHROME_URL } from "./primitives";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="gradient-brand-diagonal text-white">
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-[22px] px-6 py-24 text-center">
        <h2 className="m-0 font-display text-[clamp(34px,4.4vw,52px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white">
          Less scrolling.
          <br />
          More living<span className="text-yellow">.</span>
        </h2>
        <p className="m-0 max-w-[520px] font-body text-lg leading-relaxed text-[#c8d6e1] md:text-[19px]">
          Join 1,000+ people reclaiming 2+ hours a day. Free on iOS and Chrome —
          start in under a minute.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <CtaButton variant="yellow" href={IOS_URL} icon={Apple} className="h-[52px]">
            Download for iOS
          </CtaButton>
          <CtaButton variant="ghost" href={CHROME_URL} icon={Chrome} className="h-[52px]">
            Add to Chrome
          </CtaButton>
        </div>
      </Reveal>
    </section>
  );
}
