import { Apple, Chrome } from "lucide-react";
import { CtaButton, Stars, IOS_URL, CHROME_URL } from "./primitives";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="gradient-brand-diagonal relative overflow-hidden px-6 py-24 text-center md:py-[120px]">
      <div className="absolute left-1/2 top-[20%] h-[300px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(255,219,76,0.16),transparent_70%)]" />
      <Reveal className="relative mx-auto flex max-w-[720px] flex-col items-center gap-7">
        <Stars size={18} />
        <h2 className="m-0 font-display text-[clamp(40px,7vw,60px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
          Less scrolling.
          <br />
          More <span className="text-yellow">living.</span>
        </h2>
        <p className="m-0 max-w-[480px] font-body text-lg leading-relaxed text-white/[0.78] md:text-[19px]">
          Join 500+ people reclaiming 2+ hours a day. Free on iOS and Chrome —
          start in under a minute.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <CtaButton variant="yellow" href={IOS_URL} icon={Apple}>
            Download for iOS
          </CtaButton>
          <CtaButton variant="ghost" href={CHROME_URL} icon={Chrome}>
            Add to Chrome
          </CtaButton>
        </div>
      </Reveal>
    </section>
  );
}
