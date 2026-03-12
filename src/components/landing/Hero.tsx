"use client";

import { motion } from "framer-motion";
import { Chrome, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
            />

            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDE047]/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-10">
                    {/* Left — Copy */}
                    <div className="space-y-8 flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* App Store trust badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={14} className="fill-[#FDE047] text-[#FDE047]" />
                                    ))}
                                </div>
                                <span className="text-white/40 text-sm">4.8 on the App Store</span>
                            </div>

                            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-heading leading-[0.95] tracking-tight text-white">
                                Less scrolling,
                                <br />
                                <span className="text-[#FDE047]">more living.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg text-white/50 max-w-md leading-relaxed"
                        >
                            Impulse users save an average of <strong className="text-white/70">2+ hours per day</strong> by
                            blocking distracting apps and websites. No willpower required.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-3 pt-2"
                        >
                            <Link
                                href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                                target="_blank"
                                className="bg-[#FDE047] text-[#0a0a0a] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#FACC15] transition-all duration-200 hover:shadow-[0_0_30px_rgba(253,224,71,0.3)]"
                            >
                                Download for iOS — Free
                            </Link>

                            <Link
                                href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
                                target="_blank"
                                className="flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/15 transition-all duration-200 border border-white/10"
                            >
                                <Chrome size={16} className="opacity-70" />
                                Add to Chrome
                            </Link>
                        </motion.div>

                        {/* Social proof line */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <div className="flex -space-x-2">
                                {["bg-[#FDE047]", "bg-blue-400", "bg-emerald-400", "bg-purple-400"].map((bg, i) => (
                                    <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-[#0a0a0a] flex items-center justify-center`}>
                                        <span className="text-[10px] font-bold text-[#0a0a0a]/60">
                                            {["P", "A", "M", "S"][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-white/30">
                                Join <strong className="text-white/50">500+</strong> people taking back their time
                            </span>
                        </motion.div>
                    </div>

                    {/* Right — App preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden md:block w-[340px] lg:w-[400px] shrink-0 relative"
                    >
                        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                            <Image
                                src="/onboarding/welcome.png"
                                alt="Impulse app interface"
                                width={1596}
                                height={1192}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Floating notification */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -left-12 bottom-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-xl"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-[#FDE047] rounded-md flex items-center justify-center shrink-0">
                                    <span className="text-[#0a0a0a] font-black text-[8px]">I</span>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-semibold">Focus session active</p>
                                    <p className="text-white/40 text-[10px]">3 apps blocked · 45 min left</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FDE047]/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 rounded-full bg-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
