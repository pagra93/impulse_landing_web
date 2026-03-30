"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Calculator() {
  const [hoursPerDay, setHoursPerDay] = useState(4);

  const hoursSavedPerWeek = (hoursPerDay * 0.25 * 7).toFixed(1);
  const daysSavedPerYear = ((hoursPerDay * 0.25 * 365) / 24).toFixed(0);

  return (
    <section id="calculator" className="bg-bg-primary py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-bg-secondary rounded-2xl border border-border-subtle overflow-hidden relative">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-accent text-sm font-bold tracking-[4px]">
                TIME CALCULATOR
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-[44px] font-black tracking-[-1px] text-text-primary mt-4 leading-tight max-w-lg">
                How much time are you losing to your screen?
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              {/* Slider */}
              <div className="space-y-8">
                <div className="flex items-baseline gap-3">
                  <motion.span
                    key={hoursPerDay}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[clamp(4rem,8vw,7rem)] font-black text-text-primary leading-none tabular-nums"
                  >
                    {hoursPerDay}
                  </motion.span>
                  <span className="text-2xl text-text-tertiary font-medium">
                    hours / day
                  </span>
                </div>

                <div className="space-y-3">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) =>
                      setHoursPerDay(parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 rounded-full cursor-pointer"
                    aria-label="Hours per day on screen"
                  />
                  <div className="flex justify-between text-xs text-text-tertiary font-medium">
                    <span>1h</span>
                    <span>6h</span>
                    <span>12h</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-bg-card rounded-2xl p-6 border border-border-subtle">
                  <div className="text-xs text-text-tertiary uppercase tracking-[2px] font-semibold mb-3">
                    Hours / week
                  </div>
                  <motion.div
                    key={hoursSavedPerWeek}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl lg:text-5xl font-black text-accent leading-none"
                  >
                    {hoursSavedPerWeek}
                  </motion.div>
                  <div className="text-xs text-text-tertiary mt-2">
                    saved with Impulse
                  </div>
                </div>

                <div className="bg-bg-card rounded-2xl p-6 border border-border-subtle">
                  <div className="text-xs text-text-tertiary uppercase tracking-[2px] font-semibold mb-3">
                    Days / year
                  </div>
                  <motion.div
                    key={daysSavedPerYear}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl lg:text-5xl font-black text-accent leading-none"
                  >
                    {daysSavedPerYear}
                  </motion.div>
                  <div className="text-xs text-text-tertiary mt-2">
                    full days reclaimed
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border-subtle">
              <p className="text-text-tertiary text-sm">
                Based on reclaiming 25% of unproductive screen time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
