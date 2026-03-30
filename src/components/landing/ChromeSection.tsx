"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Detailed daily usage statistics",
  "Available for Chrome and Safari",
  "Create and manage blocklists easily",
];

export function ChromeSection() {
  return (
    <section className="bg-bg-secondary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* MacBook mockup — Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[540px] shrink-0"
        >
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0 bg-bg-card rounded-xl border border-border-subtle overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-card-elevated border-b border-border-subtle">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-bg-primary rounded-md px-3 py-1 text-text-tertiary text-xs text-center">
                    impulsecontrolapp.com
                  </div>
                </div>
              </div>
              <div className="relative w-full h-full bg-bg-primary">
                <Image
                  src="/onboarding/singletab.png"
                  alt="Impulse Chrome extension"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content — Right */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold tracking-[4px]"
          >
            BROWSER EXTENSION
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1]">
              FOCUS ON YOUR
            </h2>
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1] text-accent italic">
              COMPUTER TOO.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-text-secondary text-base leading-[1.5]"
          >
            Block distracting websites effortlessly on Chrome and Safari.
          </motion.p>

          <div className="flex flex-col gap-3">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <Check size={20} className="text-accent shrink-0" />
                <span className="text-text-primary text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-accent text-accent text-sm font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent/10 transition-colors"
            >
              ADD TO CHROME
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
