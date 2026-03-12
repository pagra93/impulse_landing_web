"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Chrome, Star } from "lucide-react";

export function CTA() {
    return (
        <section id="download" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FDE047]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold text-white leading-[0.95] tracking-tight">
                        Control your impulse.
                        <br />
                        <span className="text-[#FDE047]">Control your time.</span>
                    </h2>

                    <p className="text-white/40 text-lg max-w-md mx-auto">
                        Will Impulse make you perfect? No. But it will make you
                        <strong className="text-white/60"> intentional</strong>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Link
                            href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                            target="_blank"
                            className="bg-[#FDE047] text-[#0a0a0a] px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#FACC15] transition-all duration-200 hover:shadow-[0_0_40px_rgba(253,224,71,0.25)]"
                        >
                            Download for iOS — Free
                        </Link>

                        <Link
                            href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
                            target="_blank"
                            className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/15 transition-all duration-200 border border-white/10"
                        >
                            <Chrome size={16} className="opacity-70" />
                            Add to Chrome
                        </Link>
                    </div>

                    {/* Trust — rating + guarantee */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-sm text-white/30">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={11} className="fill-[#FDE047] text-[#FDE047]" />
                                ))}
                            </div>
                            <span>4.8 on the App Store</span>
                        </div>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                        <span>Free to download · No credit card</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
