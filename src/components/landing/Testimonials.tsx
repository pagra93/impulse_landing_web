"use client";

import { motion } from "framer-motion";

const row1 = [
  {
    quote:
      "\"I was spending 5+ hours on TikTok daily. After two weeks with Impulse, I'm down to 45 minutes. This app literally changed my life.\"",
    author: "Carlos M. — App Store",
  },
  {
    quote:
      "\"Finally something that actually works. The strict mode is no joke — you CAN'T cheat it. Exactly what I needed.\"",
    author: "Sarah K. — App Store",
  },
  {
    quote:
      "\"Installed the Chrome extension for work and my productivity went through the roof. No more 'just checking Twitter' at 2pm.\"",
    author: "James R. — Chrome Web Store",
  },
];

const row2 = [
  {
    quote:
      "\"I love that it's not preachy. It doesn't guilt trip you. It just... blocks stuff. Simple and effective. Best $0 I ever spent.\"",
    author: "Ana P. — App Store",
  },
  {
    quote:
      "\"The scheduling feature is brilliant. My phone automatically blocks social media during work hours. Set it once and forget it.\"",
    author: "David L. — App Store",
  },
  {
    quote:
      "\"I tried 4 other blockers before this. Impulse is the only one with actual strict mode that you can't disable mid-session. THAT'S the difference.\"",
    author: "Emma T. — Chrome Web Store",
  },
];

export function Testimonials() {
  return (
    <section className="bg-bg-primary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-accent text-sm font-bold tracking-[4px]">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] text-center">
            PEOPLE LOVE IMPULSE. HERE&apos;S WHY.
          </h2>
        </motion.div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {row1.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-text-primary text-sm leading-[1.6] flex-1">
                {t.quote}
              </p>
              <span className="text-text-tertiary text-xs font-semibold">
                {t.author}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {row2.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-text-primary text-sm leading-[1.6] flex-1">
                {t.quote}
              </p>
              <span className="text-text-tertiary text-xs font-semibold">
                {t.author}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
