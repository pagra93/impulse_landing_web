import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Choose what to block",
    desc: "Pick the apps and sites that steal your focus — Instagram, TikTok, X.",
  },
  {
    num: "02",
    title: "Set your schedule",
    desc: "Work hours, study, bedtime. Block on autopilot or trigger Quick Focus.",
  },
  {
    num: "03",
    title: "Pick your strictness",
    desc: "From a gentle nudge to a physical lock you genuinely can't cheat.",
  },
  {
    num: "04",
    title: "Live your life",
    desc: "Watch your screen time fall and your hours come back.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border-subtle bg-bg-subtle px-6 py-20 md:py-[88px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-[52px] max-w-[620px] text-center">
          <Eyebrow center>How it works</Eyebrow>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Simple by design. Powerful by nature.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08} className="flex flex-col gap-[9px]">
              <span className="font-mono text-[13px] font-bold text-blue">
                {s.num}
              </span>
              <h3 className="m-0 font-display text-[19px] font-bold text-navy">
                {s.title}
              </h3>
              <p className="m-0 font-body text-[14.5px] leading-[1.55] text-muted">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
