"use client";

import { motion } from "framer-motion";
import { Zap, Timer, Gauge, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Zap,
    title: "BLOCK INSTANTLY",
    desc: "One tap to block distracting apps and websites. No complex setup, just instant focus.",
  },
  {
    icon: Timer,
    title: "SCHEDULE FOCUS",
    desc: "Automate your blocking sessions. Set it once and forget it — focus on autopilot.",
  },
  {
    icon: Gauge,
    title: "STRICT LEVELS",
    desc: "Customize unlock difficulty. From gentle nudges to unbreakable lockdowns you can't cheat.",
  },
  {
    icon: MonitorSmartphone,
    title: "CROSS-PLATFORM",
    desc: "Works on iOS, Chrome, and Safari. Block distractions everywhere you go.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-bg-secondary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[400px] shrink-0"
        >
          <div className="relative h-[572px]">
            <div className="absolute left-[60px] top-0 w-[280px] h-[572px] bg-bg-card rounded-[36px] border-2 border-border-subtle overflow-hidden shadow-2xl p-2">
              <div className="w-full h-full bg-bg-primary rounded-[28px] overflow-hidden relative">
                <Image
                  src="/onboarding/strict.png"
                  alt="Impulse app features"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-sm font-bold tracking-[4px]">
              FEATURES
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1]">
              EVERYTHING YOU NEED TO
            </h2>
            <h2 className="text-3xl md:text-[44px] font-black tracking-[-1px] leading-[1.1] text-accent italic">
              TAKE BACK CONTROL.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <Icon size={24} className="text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-primary text-base font-bold">
                      {f.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-[1.5]">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
