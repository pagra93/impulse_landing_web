"use client";

import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="bg-bg-secondary py-20 px-6 md:px-[200px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto flex flex-col items-center gap-8"
      >
        <span className="text-accent text-sm font-bold tracking-[4px]">
          WHY
        </span>

        <p className="text-text-primary text-lg md:text-xl italic font-normal leading-[1.7] text-center">
          We don&apos;t believe all screen time is bad. We believe unconscious
          screen time is. Impulse helps you be intentional — not through guilt
          or rules, but by giving you control over the impulse, not the
          dopamine.
        </p>

        <span className="text-text-tertiary text-sm font-semibold">
          — The Impulse Team
        </span>
      </motion.div>
    </section>
  );
}
