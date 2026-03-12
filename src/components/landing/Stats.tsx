"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1200;
        const start = performance.now();
        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, value]);

    return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

const stats = [
    { value: 500, suffix: "+", label: "Active users" },
    { value: 1000, suffix: "+", label: "Hours reclaimed" },
    { value: 1, suffix: "M+", label: "Distractions blocked" },
];

export function Stats() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Marquee text */}
                <div className="overflow-hidden mb-20 -mx-6 lg:-mx-8">
                    <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <span key={i} className="text-[clamp(3rem,8vw,6rem)] font-heading font-bold text-[#0a0a0a]/[0.04] mx-4 select-none">
                                Focus more · Scroll less · Live better ·
                            </span>
                        ))}
                    </div>
                </div>

                {/* Stats row — forced horizontal */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-0">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center">
                            {i > 0 && (
                                <div className="hidden sm:block w-px h-16 bg-[#0a0a0a]/10 mx-10 lg:mx-16" />
                            )}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-[clamp(2.5rem,5vw,4.5rem)] font-heading font-bold text-[#0a0a0a] leading-none">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-[#0a0a0a]/40 font-medium uppercase tracking-widest mt-3">
                                    {stat.label}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
