import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section className="bg-yellow-soft px-6 py-24 md:py-[112px]">
      <Reveal className="mx-auto flex max-w-[860px] flex-col items-center gap-7 text-center">
        <Eyebrow center>Why we built this</Eyebrow>
        <p className="m-0 font-display text-[clamp(24px,3.5vw,32px)] font-semibold leading-[1.4] tracking-[-0.01em] text-navy">
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
