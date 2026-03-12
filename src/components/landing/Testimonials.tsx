"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Carlos M.",
        handle: "App Store Review",
        rating: 5,
        text: "I was spending 5+ hours on TikTok daily. After two weeks with Impulse, I'm down to 45 minutes. This app literally changed my life.",
    },
    {
        name: "Sarah K.",
        handle: "App Store Review",
        rating: 5,
        text: "Finally something that actually works. The strict mode is no joke — you CAN'T cheat it. Exactly what I needed.",
    },
    {
        name: "James R.",
        handle: "Chrome Web Store",
        rating: 5,
        text: "Installed the Chrome extension for work and my productivity went through the roof. No more 'just checking Twitter real quick' at 2pm.",
    },
    {
        name: "Ana P.",
        handle: "App Store Review",
        rating: 5,
        text: "I love that it's not preachy. It doesn't guilt trip you. It just... blocks stuff. Simple and effective. Best $0 I ever spent.",
    },
    {
        name: "David L.",
        handle: "App Store Review",
        rating: 4,
        text: "The scheduling feature is brilliant. My phone automatically blocks social media during work hours. Set it once and forget it.",
    },
    {
        name: "Emma T.",
        handle: "Chrome Web Store",
        rating: 5,
        text: "I tried 4 other blockers before this. Impulse is the only one with actual strict mode that you can't disable mid-session. THAT'S the difference.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <p className="text-[#0a0a0a]/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Real stories
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0a0a0a] leading-tight">
                        People love Impulse.
                        <br />
                        <span className="text-[#0a0a0a]/30">Here&apos;s why.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Full-width scrolling testimonials — inspired by Unpluq */}
            <div className="relative">
                {/* Gradient edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Row 1 */}
                <div className="flex gap-5 mb-5 animate-[marquee_40s_linear_infinite]">
                    {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((t, i) => (
                        <div
                            key={`row1-${i}`}
                            className="shrink-0 w-[360px] bg-[#FAFAF9] rounded-2xl p-6 border border-[#0a0a0a]/[0.04]"
                        >
                            <div className="flex items-center gap-0.5 mb-3">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} size={12} className="fill-[#FDE047] text-[#FDE047]" />
                                ))}
                            </div>
                            <p className="text-[#0a0a0a]/70 text-sm leading-relaxed mb-4">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#0a0a0a]/5 flex items-center justify-center">
                                    <span className="text-xs font-bold text-[#0a0a0a]/40">
                                        {t.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0a0a0a]">{t.name}</p>
                                    <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-wider">{t.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2 — opposite direction */}
                <div className="flex gap-5 animate-[marquee_45s_linear_infinite] direction-reverse" style={{ animationDirection: "reverse" }}>
                    {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((t, i) => (
                        <div
                            key={`row2-${i}`}
                            className="shrink-0 w-[360px] bg-[#FAFAF9] rounded-2xl p-6 border border-[#0a0a0a]/[0.04]"
                        >
                            <div className="flex items-center gap-0.5 mb-3">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} size={12} className="fill-[#FDE047] text-[#FDE047]" />
                                ))}
                            </div>
                            <p className="text-[#0a0a0a]/70 text-sm leading-relaxed mb-4">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#0a0a0a]/5 flex items-center justify-center">
                                    <span className="text-xs font-bold text-[#0a0a0a]/40">
                                        {t.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0a0a0a]">{t.name}</p>
                                    <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-wider">{t.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
