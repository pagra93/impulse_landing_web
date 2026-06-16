import { Apple, Chrome } from "lucide-react";
import { CtaButton, Stars, IOS_URL, CHROME_URL } from "./primitives";
import { WidgetMockup, PhoneMockup } from "./mockups";

const avatars = ["#36688e", "#46bd84", "#ff9800", "#f44336"];

export function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(ellipse_90%_60%_at_70%_30%,rgba(255,219,76,0.10),transparent_70%)]">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-[72px]">
        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-[26px]">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#f0e4b8] bg-yellow-soft px-3.5 py-1.5">
            <Stars size={14} />
            <span className="whitespace-nowrap font-body text-[13px] font-bold text-navy">
              4.8 on the App Store
            </span>
          </div>

          <h1 className="m-0 font-display text-[clamp(42px,8vw,66px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
            Less scrolling.
            <br />
            More{" "}
            <span className="relative">
              living<span className="text-yellow">.</span>
              <span className="absolute bottom-1.5 left-0 right-2 -z-10 h-3.5 rounded bg-yellow opacity-45" />
            </span>
          </h1>

          <p className="m-0 max-w-[480px] font-body text-lg leading-relaxed text-muted md:text-[19px]">
            Impulse blocks the apps and websites that steal your focus — so you
            reclaim{" "}
            <strong className="font-bold text-heading">2+ hours every day</strong>
            . No willpower required.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <CtaButton variant="primary" href={IOS_URL} icon={Apple}>
              Download for iOS
            </CtaButton>
            <CtaButton variant="outline" href={CHROME_URL} icon={Chrome}>
              Add to Chrome
            </CtaButton>
          </div>

          <div className="mt-1 flex items-center gap-3">
            <div className="flex">
              {avatars.map((c, i) => (
                <span
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ background: c, marginLeft: i ? -10 : 0 }}
                />
              ))}
            </div>
            <span className="font-body text-sm text-muted">
              Join <strong className="font-bold text-heading">500+</strong>{" "}
              people taking back their time
            </span>
          </div>
        </div>

        {/* Right — mockups */}
        <div className="relative flex min-h-[480px] items-center justify-center md:min-h-[520px]">
          <div className="relative h-[460px] w-[380px]">
            {/* soft glow */}
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,219,76,0.28),transparent_62%)]" />
            {/* extension popup — peeking behind, upper-left */}
            <div
              className="absolute left-[-32px] top-[26px] z-[1]"
              style={{
                width: 620 * 0.46,
                height: 430 * 0.46,
                transform: "rotate(-6deg)",
                filter: "drop-shadow(0 22px 44px rgba(22,42,57,0.20))",
              }}
            >
              <div style={{ transform: "scale(0.46)", transformOrigin: "top left" }}>
                <WidgetMockup />
              </div>
            </div>
            {/* phone — primary, front centre-right */}
            <div
              className="absolute bottom-0 right-1 z-[2]"
              style={{
                width: 300 * 0.62,
                height: 600 * 0.62,
                transform: "rotate(3deg)",
              }}
            >
              <div style={{ transform: "scale(0.62)", transformOrigin: "top left" }}>
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
