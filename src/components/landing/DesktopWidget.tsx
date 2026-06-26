import { Chrome, Shield } from "lucide-react";
import { CtaButton, CHROME_URL } from "./primitives";
import { Nfc } from "./Nfc";
import { Reveal } from "./Reveal";

const bullets = [
  {
    title: "Independent desktop blocking.",
    body: "The extension blocks distracting sites right in your browser — set it up on the computer, no phone required.",
    highlight: false,
  },
  {
    title: "Quick Focus in the browser.",
    body: "Lock onto a single tab and everything else goes quiet.",
    highlight: false,
  },
  {
    title: "Unlock the computer with your phone.",
    body: "Tap an NFC tag on your phone to end a desktop blocking period — the physical level, bridging mobile and desktop.",
    highlight: true,
  },
];

function BrowserBlocked() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[360px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,219,76,0.12),transparent_64%)]" />
      <div className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-border-default bg-white shadow-[0_34px_70px_-22px_rgba(22,42,57,0.4)]">
        {/* chrome bar */}
        <div className="flex items-center gap-3 border-b border-border-subtle bg-[#eef1f4] px-4 py-[11px]">
          <div className="flex gap-[7px]">
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 rounded-lg border border-border-default bg-white px-3 py-1.5 font-body text-[12.5px] text-muted">
            🔒 instagram.com
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-navy px-2.5 py-[5px] font-body text-[11px] font-bold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            impulse
          </div>
        </div>
        {/* blocked overlay */}
        <div className="gradient-dark-premium flex h-[320px] flex-col items-center justify-center gap-4 px-10 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[rgba(255,219,76,0.12)]">
            <Shield size={30} className="text-yellow" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-2xl font-extrabold text-white">
              Stay focused.
            </span>
            <span className="font-body text-[15px] text-[#b9cad6]">
              This site is blocked by Impulse until your session ends.
            </span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.18] bg-white/[0.08] px-4 py-2.5 font-body text-[13px] font-semibold text-white">
            <Nfc size={16} className="text-yellow" />
            Tap your Disc to unlock
          </div>
          <span className="mt-0.5 font-display text-sm font-bold text-white/50">
            impulse<span className="text-yellow">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function DesktopWidget() {
  return (
    <section className="bg-white px-6 py-20 md:py-[88px]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <Reveal className="flex flex-col gap-5">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-surface-accent px-3.5 py-1.5 font-body text-[13px] font-bold text-blue">
            <span className="h-[7px] w-[7px] rounded-full bg-blue" />
            Desktop + mobile · the only one
          </span>
          <h2 className="m-0 font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy">
            Most blockers stop at your phone. We don&apos;t.
          </h2>
          <p className="m-0 font-body text-lg leading-relaxed text-muted">
            Distraction just hops to the laptop. So Impulse also runs as a{" "}
            <strong className="text-heading">Chrome &amp; Safari extension</strong>{" "}
            — its own blocker for the computer. The bridge between them? Your
            phone: tap an NFC tag to unlock a desktop blocking period.
          </p>
          <div className="mt-0.5 flex flex-col gap-3">
            {bullets.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span
                  className={`grid h-6 w-6 flex-none place-items-center rounded-full text-[13px] font-bold ${
                    b.highlight
                      ? "bg-[rgba(255,219,76,0.22)] text-navy"
                      : "bg-surface-accent text-blue"
                  }`}
                >
                  ✓
                </span>
                <span className="font-body text-base leading-normal text-body">
                  <strong className="text-heading">{b.title}</strong> {b.body}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-1.5">
            <CtaButton variant="gradient" href={CHROME_URL} icon={Chrome}>
              Add to Chrome — Free
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <BrowserBlocked />
        </Reveal>
      </div>
    </section>
  );
}
