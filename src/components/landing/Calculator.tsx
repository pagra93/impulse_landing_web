"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock } from "lucide-react";

export function Calculator() {
    const [hoursPerDay, setHoursPerDay] = useState(4);
    const [hourlyRate, setHourlyRate] = useState(50);

    const hoursSavedPerYear = Math.round(hoursPerDay * 0.25 * 365); // Assuming 25% reduction
    const moneySavedPerYear = hoursSavedPerYear * hourlyRate;

    return (
        <section id="calculator" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            How much is your distraction costing you?
                        </h2>
                        <p className="text-gray-600">
                            Calculate the potential value of reclaiming your focus.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Hours spent on phone per day
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        step="0.5"
                                        value={hoursPerDay}
                                        onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                    />
                                    <span className="w-16 text-right font-mono font-bold text-xl">
                                        {hoursPerDay}h
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Your hourly value ($)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <DollarSign size={18} />
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={hourlyRate}
                                        onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                                        className="block w-full pl-10 pr-3 py-3 border-gray-200 rounded-xl focus:ring-black focus:border-black transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                key={moneySavedPerYear}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-black text-white p-8 rounded-2xl text-center shadow-xl"
                            >
                                <div className="text-sm opacity-80 uppercase tracking-widest mb-2">
                                    Potential Yearly Value
                                </div>
                                <div className="text-5xl font-bold font-heading text-green-400">
                                    ${moneySavedPerYear.toLocaleString('en-US')}
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/20 text-sm opacity-70">
                                    Based on reclaiming 25% of your screen time
                                </div>
                            </motion.div>

                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                                <Clock size={16} />
                                <span>~{hoursSavedPerYear} hours reclaimed per year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
