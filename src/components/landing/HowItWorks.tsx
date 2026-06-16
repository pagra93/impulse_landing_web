import { Shield, Calendar, Gauge, Sparkles, type LucideIcon } from "lucide-react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const STEPS: {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    num: "01",
    Icon: Shield,
    title: "Choose what to block",
    desc: "Pick the apps and sites that steal your focus — Instagram, TikTok, X, you name it.",
  },
  {
    num: "02",
    Icon: Calendar,
    title: "Set your schedule",
    desc: "Work hours, study sessions, bedtime. Block on autopilot, or trigger Quick Focus instantly.",
  },
  {
    num: "03",
    Icon: Gauge,
    title: "Pick your strictness",
    desc: "From a gentle nudge to a lockdown you genuinely can't cheat your way out of.",
  },
  {
    num: "04",
    Icon: Sparkles,
    title: "Live your life",
    desc: "Watch your screen time fall and your hours come back — for what actually matters.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-subtle px-6 py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center">
          <Eyebrow center>How it works</Eyebrow>
          <h2 className="m-0 max-w-[640px] font-display text-[clamp(30px,4.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Simple by design.
            <br />
            Powerful by <span className="text-blue">nature.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 0.08}
              className="flex h-full flex-col gap-3.5 rounded-2xl border border-border-default bg-white p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-soft text-blue">
                  <s.Icon size={22} />
                </div>
                <span className="font-mono text-sm font-bold text-border-strong">
                  {s.num}
                </span>
              </div>
              <h3 className="m-0 font-display text-[19px] font-bold text-heading">
                {s.title}
              </h3>
              <p className="m-0 font-body text-sm leading-normal text-muted">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
