import { Reveal } from "./Reveal";

const TRUST = [
  {
    t: "Your data stays on your device",
    d: "Usage stats live locally on your phone or browser — never sold, never tracked.",
  },
  {
    t: "Free to start, no account",
    d: "Download and start blocking in seconds. No sign-up wall, no credit card.",
  },
  {
    t: "Built for real life",
    d: "Emergency access, gentle modes and squads — strict, but never cruel.",
  },
];

export function Trust() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pb-2 pt-20 md:pt-[84px]">
      <div className="grid gap-[22px] md:grid-cols-3">
        {TRUST.map((t, i) => (
          <Reveal key={t.t} delay={i * 0.08} className="flex flex-col gap-2">
            <h3 className="m-0 font-display text-lg font-bold text-navy">
              {t.t}
            </h3>
            <p className="m-0 font-body text-[15px] leading-[1.55] text-muted">
              {t.d}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
