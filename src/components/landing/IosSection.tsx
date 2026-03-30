"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Block apps and websites instantly or by schedule",
  "Strict levels prevent early cancellation",
  "Emergency button for when you truly need access",
];

export function IosSection() {
  return (
    <section className="bg-bg-primary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Content — Left */}
        <div className="flex flex-col gap-6 flex-1 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold tracking-[4px]"
          >
            iOS APP
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1]">
              MORE CONTROL
            </h2>
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1] text-accent italic">
              ON YOUR PHONE.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-text-secondary text-base leading-[1.5]"
          >
            Regain your peace of mind by blocking apps during focus sessions.
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
              href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-text-on-accent text-sm font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
            >
              DOWNLOAD FOR iOS
            </a>
          </motion.div>
        </div>

        {/* Phone mockup — Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[400px] shrink-0 order-1 lg:order-2"
        >
          <div className="relative h-[572px]">
            <div className="absolute left-[60px] top-0 w-[280px] h-[572px] bg-bg-card rounded-[36px] border-2 border-border-subtle overflow-hidden shadow-2xl p-2">
              <div className="w-full h-full bg-bg-primary rounded-[28px] overflow-hidden relative">
                <Image
                  src="/onboarding/limits.png"
                  alt="Impulse iOS app"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
