"use client";

import { motion } from "framer-motion";

export function Mission() {
    return (
        <section id="mission" className="py-24 lg:py-40 bg-white relative overflow-hidden">
            {/* Large decorative text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <span className="text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[#0a0a0a]/[0.02] leading-none">
                    WHY
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex w-12 h-px bg-[#FDE047] mb-12" />

                    <blockquote className="text-[clamp(1.25rem,3vw,2rem)] font-heading font-medium leading-relaxed text-[#0a0a0a]/80 mb-8">
                        We don&apos;t believe all screen time is bad. We believe <em className="not-italic text-[#0a0a0a] font-bold">unconscious</em> screen
                        time is. Impulse helps you be intentional — not through guilt or rules, but
                        by giving <em className="not-italic text-[#0a0a0a] font-bold">you</em> control
                        over the impulse, not the dopamine.
                    </blockquote>

                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-[#FDE047] rounded-lg flex items-center justify-center">
                            <span className="text-[#0a0a0a] font-black text-xs font-heading">I</span>
                        </div>
                        <p className="text-sm text-[#0a0a0a]/30 uppercase tracking-[0.15em] font-medium">
                            The Impulse Team
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
