import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const FEATURES: { title: string; body: ReactNode }[] = [
  {
    title: "Block & Quick Focus",
    body: "Shut down distracting sites on a schedule, or lock onto a single tab on demand.",
  },
  {
    title: "Strictness you can't cheat",
    body: (
      <>
        Four levels — from a phrase to a{" "}
        <strong className="text-heading">physical tap</strong> — turn a quick
        override into a real decision.
      </>
    ),
  },
  {
    title: "Focus Groups",
    body: "Stay accountable with friends. Shared rules, streaks and a leaderboard keep you honest.",
  },
  {
    title: "Screen Time insights",
    body: "See where your hours actually go, with weekly insights that celebrate progress.",
  },
  {
    title: "Scheduled focus",
    body: "Set blocking periods by time and weekday. Set it once — focus runs on autopilot.",
  },
  {
    title: "Everywhere you scroll",
    body: "iOS plus Chrome and Safari — block on whichever screen is pulling you in.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-20 md:py-[88px]" id="features">
      <Reveal className="mx-auto mb-[52px] max-w-[640px] text-center">
        <Eyebrow center>Features</Eyebrow>
        <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
          Everything you need to take back control.
        </h2>
      </Reveal>

      <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i % 3) * 0.08}
            className="flex h-full flex-col gap-2.5 rounded-[20px] border border-border-default bg-white p-7 shadow-card"
          >
            <h3 className="m-0 font-display text-[19px] font-bold text-navy">
              {f.title}
            </h3>
            <p className="m-0 font-body text-[15px] leading-[1.55] text-muted">
              {f.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
