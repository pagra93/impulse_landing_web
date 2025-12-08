"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Calculator() {
    const [hoursPerDay, setHoursPerDay] = useState(4);

    // Logic: 25% saving assumption
    const hoursSavedPerWeek = (hoursPerDay * 0.25 * 7).toFixed(1);
    const daysSavedPerYear = ((hoursPerDay * 0.25 * 365) / 24).toFixed(2);

    return (
        <section id="calculator" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-black text-white rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Col: Slider */}
                        <div className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading">
                                How much do you use your phone/computer every day?
                            </h2>

                            <div className="flex items-center gap-6">
                                {/* Custom Slider Styling */}
                                <div className="h-64 bg-gray-800 rounded-full w-4 relative">
                                    <div
                                        className="absolute bottom-0 w-full bg-[#FDE047] rounded-full"
                                        style={{ height: `${(hoursPerDay / 12) * 100}%`, maxHeight: '100%' }}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-6xl font-bold font-heading">{hoursPerDay} h</span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        step="0.5"
                                        value={hoursPerDay}
                                        onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                                        className="w-full accent-[#FDE047] h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Results */}
                        <div className="space-y-10">
                            <div>
                                <div className="text-sm uppercase tracking-widest text-gray-400 mb-1">Hours saved per week</div>
                                <motion.div
                                    key={hoursSavedPerWeek}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-5xl md:text-6xl font-bold text-[#FDE047] font-heading"
                                >
                                    {hoursSavedPerWeek}
                                </motion.div>
                                <div className="text-gray-500 text-sm mt-2">Based on reclaiming 25% of your time</div>
                            </div>

                            <div>
                                <div className="text-sm uppercase tracking-widest text-gray-400 mb-1">Days saved per year</div>
                                <motion.div
                                    key={daysSavedPerYear}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-5xl md:text-6xl font-bold text-[#FDE047] font-heading"
                                >
                                    {daysSavedPerYear}
                                </motion.div>
                                <div className="text-gray-500 text-sm mt-2">Full days of your life reclaimed</div>
                            </div>

                            <div className="pt-4">
                                <span className="text-[#FDE047] text-sm uppercase tracking-widest font-bold border-b border-[#FDE047] pb-1 cursor-pointer hover:opacity-80">
                                    It&apos;s time to take back your time!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
