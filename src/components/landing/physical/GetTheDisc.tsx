import { CtaButton, IOS_URL } from "../primitives";
import { Reveal } from "../Reveal";

const AMAZON_URL =
  "https://www.amazon.es/NFC-Programable-Inteligentes-Dispositivos-NFC%EF%BC%88Timeskey%EF%BC%89/dp/B0CSD8B6LF/";
const WAITLIST_MAILTO =
  "mailto:hello@impulsecontrolapp.com?subject=Impulse%20Disc%20waitlist";

export function GetTheDisc() {
  return (
    <section id="get-the-disc" className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-12 max-w-[660px] text-center">
          <span className="font-body text-[13px] font-bold uppercase tracking-[0.14em] text-blue">
            Get the Disc
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy">
            You don&apos;t buy the Disc. You get it free.
          </h2>
          <p className="m-0 mt-3.5 font-body text-lg leading-relaxed text-muted">
            No gadget to check out. The Disc comes free with Impulse — and
            physical unlock already works today with any NFC tag, for nothing.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-[1.05fr_0.95fr]">
          {/* Disc free with annual — coming soon */}
          <Reveal className="relative flex flex-col gap-[18px] overflow-hidden rounded-[20px] bg-[linear-gradient(165deg,#1d3a4f,#122330)] p-11 text-white shadow-soft-lg">
            <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(255,219,76,0.18),transparent_65%)]" />
            <div className="relative flex items-center gap-3">
              <span className="rounded-full bg-yellow px-3 py-[5px] font-body text-[13px] font-bold tracking-[0.04em] text-navy">
                Coming soon
              </span>
              <span className="font-body text-[13px] font-semibold text-[#9fb4c4]">
                Impulse Annual
              </span>
            </div>
            <h3 className="relative m-0 font-display text-[30px] font-extrabold leading-[1.12] text-white">
              The Impulse Disc — free for life.
            </h3>
            <p className="relative m-0 max-w-[440px] font-body text-base leading-relaxed text-[#c4d2dd]">
              Go annual and the Disc ships free, forever. One plan covers the{" "}
              <strong className="text-white">Chrome extension + iOS app</strong>{" "}
              and your designed device — no separate hardware to ever buy.
            </p>
            <div className="relative mt-0.5 flex flex-col gap-[9px]">
              {[
                "Disc included free with a 1-year plan",
                "Chrome extension + iOS app, synced",
                "Strict mode & physical unlock built in",
              ].map((t) => (
                <span key={t} className="font-body text-[15px] text-[#dce6ee]">
                  ✓&nbsp;&nbsp;{t}
                </span>
              ))}
            </div>
            <div className="relative mt-1.5">
              <CtaButton
                variant="yellow"
                href={WAITLIST_MAILTO}
                external={false}
                className="shadow-[0_8px_22px_rgba(255,219,76,0.3)]"
              >
                Join the waitlist
              </CtaButton>
            </div>
          </Reveal>

          {/* Free now with any NFC */}
          <Reveal
            delay={0.1}
            className="flex flex-col gap-[18px] rounded-[20px] border border-border-default bg-bg-subtle p-11"
          >
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-[rgba(70,189,132,0.14)] px-3 py-[5px] font-body text-[13px] font-bold text-success">
              <span className="h-[7px] w-[7px] rounded-full bg-success" />
              Free today
            </span>
            <h3 className="m-0 font-display text-[30px] font-extrabold leading-[1.12] text-navy">
              Don&apos;t want to wait? Use any NFC.
            </h3>
            <p className="m-0 font-body text-base leading-relaxed text-muted">
              Physical unlock already works free with any NFC sticker you own —
              even one from a pack of a few dollars. Start now; your Disc arrives
              when the annual plan launches.
            </p>
            <div className="mt-0.5 flex flex-col gap-[9px]">
              {[
                "Pair any NTAG sticker in seconds",
                "Same physical friction, zero cost",
              ].map((t) => (
                <span key={t} className="font-body text-[15px] text-body">
                  ✓&nbsp;&nbsp;{t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              <CtaButton variant="gradient" href={IOS_URL}>
                Download the free app
              </CtaButton>
              <CtaButton variant="outline" href={AMAZON_URL}>
                Get an NFC tag →
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
