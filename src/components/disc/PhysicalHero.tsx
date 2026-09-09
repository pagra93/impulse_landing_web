import { CtaButton } from "@/components/landing/primitives";
import { Disc } from "@/components/landing/Disc";
import { Reveal } from "@/components/landing/Reveal";

export function PhysicalHero() {
  return (
    <section className="gradient-dark-premium relative overflow-hidden">
      {/* radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-[42%] rounded-full bg-[radial-gradient(circle,rgba(255,219,76,0.13),rgba(54,104,142,0.10)_38%,transparent_64%)]" />
      <Reveal className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-6 py-20 text-center md:py-[92px]">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,219,76,0.28)] bg-[rgba(255,219,76,0.12)] px-[15px] py-1.5 font-body text-[13px] font-bold tracking-[0.04em] text-yellow">
          <span className="h-[7px] w-[7px] rounded-full bg-yellow shadow-[0_0_8px_rgba(255,219,76,0.9)]" />
          New · Physical unlock
        </span>

        <h1 className="m-0 max-w-[800px] font-display text-[clamp(34px,6vw,56px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
          The hardest level of focus is now physical.
        </h1>

        <p className="m-0 max-w-[600px] font-body text-lg leading-relaxed text-[#b9cad6] md:text-[19px]">
          Add one more rung to strict mode — a block that ends only when you
          physically tap a real object. Use the{" "}
          <strong className="text-white">Impulse Disc</strong>, or pair{" "}
          <strong className="text-white">any NFC sticker</strong> you already
          own.
        </p>

        <div className="grid place-items-center py-1">
          <Disc size={300} ripple />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.16] bg-white/[0.08] px-5 py-2.5 font-body text-[15px] font-semibold text-white">
            <span className="h-3.5 w-3.5 rounded-full bg-yellow" />
            The Impulse Disc
          </span>
          <span className="font-body text-[15px] font-semibold text-[#8aa0b1]">
            or any NFC tag — from $1
          </span>
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <CtaButton variant="yellow" href="#get-the-disc">
            Make it physical
          </CtaButton>
          <CtaButton variant="ghost" href="#physical-how">
            See how it works
          </CtaButton>
        </div>
      </Reveal>
    </section>
  );
}
