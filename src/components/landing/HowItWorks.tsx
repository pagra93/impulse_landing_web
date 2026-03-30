"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "CHOOSE WHAT TO BLOCK",
    desc: "Select the apps and websites that steal your focus. Instagram, TikTok, Twitter — you name it.",
  },
  {
    num: "02",
    title: "SET YOUR SCHEDULE",
    desc: "Define when you need to focus. Work hours, study sessions, or custom time blocks.",
  },
  {
    num: "03",
    title: "PICK YOUR STRICTNESS",
    desc: "Choose how hard it is to unblock. From gentle reminders to unbreakable lockdowns.",
  },
  {
    num: "04",
    title: "LIVE YOUR LIFE",
    desc: "Watch your screen time drop. Reclaim hours every day for what actually matters.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-primary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-accent text-sm font-bold tracking-[4px]">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] text-center">
            SIMPLE BY DESIGN. POWERFUL BY NATURE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col gap-4"
            >
              <span className="text-accent text-sm font-bold tracking-[2px]">
                {step.num}
              </span>
              <h3 className="text-text-primary text-xl font-extrabold tracking-[0.5px]">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-[1.5]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
