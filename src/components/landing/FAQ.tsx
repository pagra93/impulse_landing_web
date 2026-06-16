"use client";

import { useState } from "react";
import { Plus, Heart } from "lucide-react";
import { CtaButton, Eyebrow } from "./primitives";

const FAQS = [
  {
    q: "Is Impulse free?",
    a: "Yes — the core blocker is 100% free on iOS and Chrome, with no account and no credit card. Scheduled blocks, Quick Focus and screen-time insights cost nothing. Impulse Pro adds unlimited rules, strict mode and Focus Groups for those who want more, but you can take back hours every day without paying a cent.",
  },
  {
    q: "What's the best app blocker that you actually can't cheat?",
    a: "Most blockers fail at the exact moment you reach for your phone — one tap and you're back scrolling. Impulse is built around that moment. Strict mode makes unblocking deliberately hard: type out a long phrase, wait out a countdown, or get a code from an accountability partner. It's the friction that turns an impulse back into a choice.",
  },
  {
    q: "How is Impulse different from other focus apps?",
    a: "Three things. It works on both your phone and your browser, so distractions can't just hop to your laptop. It has strictness levels you genuinely can't bypass in a weak moment. And it never guilt-trips you — Impulse blocks what you choose, when you choose, then gets out of the way.",
  },
  {
    q: "How does Impulse block apps and websites on iPhone?",
    a: "On iOS, Impulse uses Apple's Screen Time API to block apps and sites — the same secure framework Apple built for this. On the desktop it runs as a Chrome and Safari extension. You create profiles, pick what to block, then activate on a schedule, on demand with Quick Focus, or under a timer with a strict unlock.",
  },
  {
    q: "What if I have a real emergency?",
    a: "Impulse is strict, not cruel. Emergency access and gentle modes let you reach what you genuinely need, and blocks always reactivate automatically afterwards — so one exception never quietly becomes a relapse.",
  },
  {
    q: "Is my data private?",
    a: "Completely. Your usage stats and block lists stay on your device — not on our servers. No tracking, no ads, no analytics, no selling your data to anyone. Your attention is the product everyone else is trying to sell. Not here.",
  },
  {
    q: "Does it work on Android or my laptop?",
    a: "Today Impulse runs on iOS, plus Chrome and Safari on the desktop, and your rules sync across them. Android isn't available yet — it's on the roadmap. Drop your email in the app and we'll tell you the moment it lands.",
  },
  {
    q: "Does Impulse require a subscription?",
    a: "No subscription needed to start — the free plan blocks distractions forever. Impulse Pro is an optional upgrade for power users (unlimited rules, strict mode, Focus Groups), with no hidden costs and no lock-in. Cancel anytime and the free blocker keeps working.",
  },
];

function Item({
  faq,
  open,
  onToggle,
}: {
  faq: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ease-out ${
        open ? "border-blue shadow-card" : "border-border-default"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-[22px] text-left font-display text-lg font-bold text-heading"
      >
        {faq.q}
        <span
          className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-navy transition-[transform,background] duration-300 ease-out ${
            open ? "rotate-45 bg-yellow" : "rotate-0 bg-surface-muted"
          }`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="m-0 max-w-[620px] px-6 pb-6 font-body text-[15px] leading-relaxed text-muted">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-bg-subtle px-6 py-20 md:py-[104px]">
      <div className="mx-auto grid max-w-[1160px] items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        {/* Left — sticky heading + support card */}
        <div className="flex flex-col gap-6 md:sticky md:top-[100px]">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(34px,3.4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Questions?
            <br />
            <span className="text-blue">Answered.</span>
          </h2>
          <p className="m-0 max-w-[320px] font-body text-base leading-relaxed text-muted">
            Everything you need to know before you take back your time.
          </p>
          <div className="mt-1 rounded-2xl border border-border-default bg-white p-6 shadow-card">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-yellow-soft text-blue">
                <Heart size={20} />
              </div>
              <span className="font-display text-[17px] font-bold text-heading">
                Still have questions?
              </span>
            </div>
            <p className="m-0 mb-[18px] font-body text-sm leading-normal text-muted">
              We&apos;re a small team and we read everything. Reach out — we
              usually reply within a day.
            </p>
            <CtaButton
              variant="outline"
              size="md"
              href="mailto:hello@impulsecontrolapp.com"
              className="w-full"
            >
              Contact support
            </CtaButton>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
