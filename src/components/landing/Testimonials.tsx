import { Eyebrow, Stars } from "./primitives";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    q: "I was spending 5+ hours on TikTok daily. After two weeks with Impulse, I'm down to 45 minutes. This app literally changed my life.",
    a: "Carlos M.",
    s: "App Store",
  },
  {
    q: "Finally something that actually works. The strict mode is no joke — you CAN'T cheat it. Exactly what I needed.",
    a: "Sarah K.",
    s: "App Store",
  },
  {
    q: "Installed the Chrome extension for work and my productivity went through the roof. No more 'just checking Twitter' at 2pm.",
    a: "James R.",
    s: "Chrome Web Store",
  },
  {
    q: "I love that it's not preachy. It doesn't guilt-trip you. It just… blocks stuff. Simple and effective. Best $0 I ever spent.",
    a: "Ana P.",
    s: "App Store",
  },
  {
    q: "The scheduling feature is brilliant. My phone automatically blocks social media during work hours. Set it once and forget it.",
    a: "David L.",
    s: "App Store",
  },
  {
    q: "I tried 4 other blockers before this. Impulse is the only one with strict mode you can't disable mid-session. THAT'S the difference.",
    a: "Emma T.",
    s: "Chrome Web Store",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-bg-subtle px-6 py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center">
          <Eyebrow center>Reviews</Eyebrow>
          <h2 className="m-0 max-w-[640px] font-display text-[clamp(30px,4.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            People love Impulse.
            <br />
            Here&apos;s <span className="text-blue">why.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.a}
              delay={(i % 3) * 0.08}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border-default bg-white p-[26px] shadow-card"
            >
              <Stars size={15} />
              <p className="m-0 flex-1 font-body text-[15px] leading-relaxed text-body">
                {r.q}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="whitespace-nowrap font-display text-sm font-bold text-heading">
                  {r.a}
                </span>
                <span className="whitespace-nowrap font-body text-xs text-muted">
                  · {r.s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
