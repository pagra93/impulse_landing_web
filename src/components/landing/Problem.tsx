import Image from "next/image";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const stats = [
  { v: "96×", l: "phone checks a day" },
  { v: "4+ hrs", l: "a day lost to apps" },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-20 md:py-[88px]">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <Reveal className="flex flex-col gap-[18px]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy">
            Your attention is being sold.
          </h2>
          <p className="m-0 font-body text-lg leading-relaxed text-muted">
            Every feed is a slot machine. The scroll never ends because it was
            never meant to. You&apos;re not fighting a habit — you&apos;re
            fighting an industry of designers paid to keep you there.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-7">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-[30px] font-extrabold text-navy">
                  {s.v}
                </div>
                <div className="font-body text-sm text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <Image
            src="/welcome-illustration.png"
            alt="Tangled in your phone"
            width={340}
            height={340}
            className="h-auto w-full max-w-[340px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
