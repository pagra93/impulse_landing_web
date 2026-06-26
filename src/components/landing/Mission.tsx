import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section className="bg-white px-6 pb-20 pt-4 md:pb-20">
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-4 text-center">
        <Eyebrow center>Why we built this</Eyebrow>
        <p className="m-0 font-display text-[clamp(22px,2.6vw,30px)] font-semibold leading-[1.35] tracking-[-0.01em] text-navy">
          We don&apos;t think all screen time is bad. We think{" "}
          <em className="italic text-blue">unconscious</em> screen time is.
          Impulse helps you be intentional — not through guilt or rules, but by
          giving you control over the impulse, not the dopamine.
        </p>
        <span className="font-body text-[15px] font-bold text-muted">
          — The Impulse Team
        </span>
      </Reveal>
    </section>
  );
}
