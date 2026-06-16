import { ShieldCheck, Heart, Medal, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const TRUST: { Icon: LucideIcon; t: string; d: string }[] = [
  {
    Icon: ShieldCheck,
    t: "Your data stays on your device",
    d: "Usage stats live locally on your phone or browser — never sold, never tracked.",
  },
  {
    Icon: Heart,
    t: "Free to start, no account",
    d: "Download and start blocking in seconds. No sign-up wall, no credit card.",
  },
  {
    Icon: Medal,
    t: "Built for real life",
    d: "Emergency access, gentle modes and squads — strict, but never cruel.",
  },
];

export function Trust() {
  return (
    <section className="bg-yellow-soft px-6 py-20 md:py-[104px]">
      <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-3">
        {TRUST.map((t, i) => (
          <Reveal key={t.t} delay={i * 0.08} className="flex flex-col gap-3">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-white text-blue shadow-card">
              <t.Icon size={24} />
            </div>
            <h3 className="m-0 mt-1 font-display text-[19px] font-bold text-navy">
              {t.t}
            </h3>
            <p className="m-0 font-body text-[15px] leading-normal text-muted">
              {t.d}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
