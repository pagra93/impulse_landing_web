"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "ACTIVE USERS", accent: false },
  { value: "10K+", label: "HOURS RECLAIMED", accent: true },
  { value: "1M+", label: "DISTRACTIONS BLOCKED", accent: false },
  { value: "4.8 ★", label: "APP STORE", accent: false },
];

export function Stats() {
  return (
    <section className="bg-bg-secondary border-y border-border-subtle">
      <div className="flex flex-wrap justify-around items-center gap-8 px-6 md:px-20 py-8 max-w-[1440px] mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className={`text-[32px] font-black ${
                stat.accent ? "text-accent" : "text-text-primary"
              }`}
            >
              {stat.value}
            </span>
            <span className="text-text-tertiary text-[11px] font-semibold tracking-[2px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
