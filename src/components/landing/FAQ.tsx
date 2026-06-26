"use client";

import { useState } from "react";
import { Eyebrow } from "./primitives";

const FAQS = [
  {
    q: "Is Impulse free?",
    a: "Yes — the core blocker is 100% free on iOS and Chrome, with no account and no credit card. Scheduled blocks, Quick Focus and screen-time insights cost nothing. Impulse Pro adds unlimited rules, strict mode and Focus Groups for those who want more, but you can take back hours every day without paying a cent.",
  },
  {
    q: "Do I need to buy a device for physical unlock?",
    a: "No. Physical unlock works free with any NFC sticker you own — even a $1 tag. The designed Impulse Disc is optional and ships free with an annual plan (coming soon), so there's never a separate gadget to buy.",
  },
  {
    q: "What's the best app blocker that you actually can't cheat?",
    a: "Most blockers fail at the exact moment you reach for your phone — one tap and you're back scrolling. Impulse is built around that moment. Strict mode makes unblocking deliberately hard: type out a long phrase, wait out a countdown, get a code from an accountability partner, or — the hardest level — physically tap an NFC tag you left across the room.",
  },
  {
    q: "How is Impulse different from other focus apps?",
    a: "Three things. It works on both your phone and your browser, so distractions can't just hop to your laptop. It has strictness levels you genuinely can't bypass in a weak moment, up to a physical tap. And it never guilt-trips you — Impulse blocks what you choose, when you choose, then gets out of the way.",
  },
  {
    q: "How does Impulse block apps and websites on iPhone?",
    a: "On iOS, Impulse uses Apple's Screen Time API to block apps and sites — the same secure framework Apple built for this. On the desktop it runs as a Chrome and Safari extension. You create profiles, pick what to block, then activate on a schedule, on demand with Quick Focus, or under a strict unlock.",
  },
  {
    q: "What if I have a real emergency?",
    a: "Impulse is strict, not cruel. Emergency unlocks let you reach what you genuinely need — but they're intentionally inconvenient, and blocks reactivate automatically afterwards, so one exception never quietly becomes a relapse.",
  },
  {
    q: "Is my data private?",
    a: "Completely. Your usage stats and block lists stay on your device — not on our servers. No tracking, no ads, no analytics, no selling your data to anyone. Your attention is the product everyone else is trying to sell. Not here.",
  },
  {
    q: "Does it work on Android or my laptop?",
    a: "Today Impulse runs on iOS, plus Chrome and Safari on the desktop. Android isn't available yet — it's on the roadmap. Drop your email in the app and we'll tell you the moment it lands.",
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
    <div className="rounded-2xl border border-border-default bg-white px-[22px] shadow-card">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 bg-transparent py-[18px] text-left font-display text-[17px] font-bold text-navy"
      >
        {faq.q}
        <span
          className={`select-none text-[22px] leading-none text-blue transition-transform duration-300 ease-out ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="m-0 pb-[18px] font-body text-[15px] leading-[1.6] text-muted">
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
    <section id="faq" className="mx-auto max-w-[760px] px-6 py-20 md:py-[88px]">
      <div className="mb-11 text-center">
        <Eyebrow center>FAQ</Eyebrow>
        <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
          Questions? Answered.
        </h2>
      </div>
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
    </section>
  );
}
