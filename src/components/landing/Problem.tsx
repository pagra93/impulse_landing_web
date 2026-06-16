import Image from "next/image";
import { Smartphone, Timer, Eye } from "lucide-react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const pains = [
  {
    Icon: Smartphone,
    t: "The average person checks their phone 96 times a day — once every 10 minutes.",
  },
  {
    Icon: Timer,
    t: "4+ hours a day lost to apps engineered to be impossible to put down.",
  },
  {
    Icon: Eye,
    t: "It isn't weakness. Thousands of designers are paid to keep you scrolling.",
  },
];

export function Problem() {
  return (
    <section className="gradient-brand-diagonal relative overflow-hidden px-6 py-20 md:py-[104px]">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <Reveal className="flex flex-col gap-6 md:gap-[26px]">
          <Eyebrow dark>The problem</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(34px,5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            Your attention is
            <br />
            being <span className="text-yellow">sold.</span>
          </h2>
          <p className="m-0 max-w-[460px] font-body text-lg leading-relaxed text-white/75">
            Every feed is a slot machine. The scroll never ends because it was
            never meant to. You&apos;re not fighting a habit — you&apos;re
            fighting an industry.
          </p>
          <div className="mt-1.5 flex flex-col gap-4">
            {pains.map(({ Icon, t }) => (
              <div key={t} className="flex items-start gap-3.5">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] bg-white/10 text-yellow">
                  <Icon size={18} />
                </div>
                <p className="m-0 pt-[7px] font-body text-[15px] leading-normal text-white/[0.88]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="max-w-[360px] rounded-[28px] bg-yellow-soft p-7 shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            <Image
              src="/welcome-illustration.png"
              alt="Tangled in your phone"
              width={360}
              height={360}
              className="block h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
