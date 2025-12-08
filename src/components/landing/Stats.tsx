"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "users available", value: "500+" },
    { label: "hours saved", value: "1000+" },
    { label: "hours periods", value: "50+" },
    { label: "apps blocked", value: "1M+" },
];

export function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading max-w-4xl mx-auto leading-tight text-slate-900">
                    We&apos;re here because more and more people are becoming aware of the use of technology.
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#FEF9C3] border border-[#FDE047] px-6 py-2 rounded-full flex items-center gap-2"
                        >
                            <span className="font-bold text-[#CA8A04] block">{stat.value}</span>
                            <span className="text-sm font-medium text-[#854D0E] uppercase tracking-wide">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
