"use client";

import { motion } from "framer-motion";

const pressLogos = [
    { name: "Product Hunt", label: "#1 Product of the Day" },
    { name: "App Store", label: "Editor's Choice" },
    { name: "TechCrunch", label: "Featured" },
];

export function SocialProof() {
    return (
        <section className="py-16 bg-white border-b border-[#0a0a0a]/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                >
                    <span className="text-xs text-[#0a0a0a]/30 uppercase tracking-[0.2em] font-medium shrink-0">
                        As seen on
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
                        {pressLogos.map((logo, i) => (
                            <motion.div
                                key={logo.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="flex flex-col items-center gap-1"
                            >
                                <span className="text-lg font-bold font-heading text-[#0a0a0a]/70">
                                    {logo.name}
                                </span>
                                <span className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-wider font-medium">
                                    {logo.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
