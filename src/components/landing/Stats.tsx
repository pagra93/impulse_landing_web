"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Users Worldwide", value: "500+" },
    { label: "Hours Saved", value: "10k+" },
    { label: "Distractions Blocked", value: "1M+" },
];

export function Stats() {
    return (
        <section className="py-12 border-y border-gray-50 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="pt-8 md:pt-0 px-4"
                        >
                            <div className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-500 uppercase tracking-wide font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
