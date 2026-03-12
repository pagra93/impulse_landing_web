"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Calculator() {
    const [hoursPerDay, setHoursPerDay] = useState(4);

    const hoursSavedPerWeek = (hoursPerDay * 0.25 * 7).toFixed(1);
    const daysSavedPerYear = ((hoursPerDay * 0.25 * 365) / 24).toFixed(0);

    return (
        <section id="calculator" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden relative">
                    {/* Subtle grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "40px 40px"
                        }}
                    />

                    <div className="relative z-10 p-8 md:p-12 lg:p-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-12"
                        >
                            <p className="text-[#FDE047] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                                Time calculator
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white max-w-lg leading-tight">
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
                                        className="text-[clamp(4rem,8vw,7rem)] font-heading font-bold text-white leading-none tabular-nums"
                                    >
                                        {hoursPerDay}
                                    </motion.span>
                                    <span className="text-2xl text-white/30 font-heading font-medium">hours / day</span>
                                </div>

                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        step="0.5"
                                        value={hoursPerDay}
                                        onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                                        className="w-full h-1.5 rounded-full cursor-pointer"
                                        aria-label="Hours per day on screen"
                                    />
                                    <div className="flex justify-between text-xs text-white/20 font-medium">
                                        <span>1h</span>
                                        <span>6h</span>
                                        <span>12h</span>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                    <div className="text-xs text-white/30 uppercase tracking-[0.15em] font-medium mb-3">
                                        Hours / week
                                    </div>
                                    <motion.div
                                        key={hoursSavedPerWeek}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl lg:text-5xl font-heading font-bold text-[#FDE047] leading-none"
                                    >
                                        {hoursSavedPerWeek}
                                    </motion.div>
                                    <div className="text-xs text-white/20 mt-2">saved with Impulse</div>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                    <div className="text-xs text-white/30 uppercase tracking-[0.15em] font-medium mb-3">
                                        Days / year
                                    </div>
                                    <motion.div
                                        key={daysSavedPerYear}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-4xl lg:text-5xl font-heading font-bold text-[#FDE047] leading-none"
                                    >
                                        {daysSavedPerYear}
                                    </motion.div>
                                    <div className="text-xs text-white/20 mt-2">full days reclaimed</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/5">
                            <p className="text-white/20 text-sm">
                                Based on reclaiming 25% of unproductive screen time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
