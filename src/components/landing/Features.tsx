"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Layers, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: Shield,
        title: "Block instantly",
        desc: "One tap to block distracting apps and websites. No delays, no excuses.",
    },
    {
        icon: Clock,
        title: "Schedule focus",
        desc: "Automate blocking sessions so discipline runs on autopilot.",
    },
    {
        icon: Layers,
        title: "Strict levels",
        desc: "Choose how hard it is to unblock — from gentle nudge to full lockdown.",
    },
    {
        icon: Smartphone,
        title: "Cross-platform",
        desc: "Works on iOS, Chrome, and Safari. Your focus follows you everywhere.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 lg:py-32 overflow-hidden">

            {/* Feature grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <p className="text-[#0a0a0a]/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Why Impulse
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0a0a0a] max-w-xl leading-tight">
                        Everything you need to take back control.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0a0a0a]/[0.06] rounded-2xl overflow-hidden">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="bg-white p-8 lg:p-10 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#FDE047]/20 flex items-center justify-center mb-6 group-hover:bg-[#FDE047] transition-colors duration-300">
                                    <Icon size={20} className="text-[#0a0a0a]/70" />
                                </div>
                                <h3 className="font-bold font-heading text-lg text-[#0a0a0a] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#0a0a0a]/50 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="bg-[#FEFCE8] rounded-[2rem] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Content */}
                        <div className="p-8 md:p-12 md:p-14 flex flex-col justify-center order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <p className="text-[#0a0a0a]/40 text-xs font-bold uppercase tracking-[0.2em]">
                                    iOS App
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0a0a0a] leading-tight">
                                    More control
                                    <br />on your phone.
                                </h2>
                                <p className="text-[#0a0a0a]/50 text-base leading-relaxed max-w-sm">
                                    Regain your peace of mind by blocking apps during focus sessions.
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {[
                                        "Block apps and websites instantly or by schedule",
                                        "Strict levels prevent early cancellation",
                                        "Emergency button for when you truly need access",
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -12 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                                            className="flex items-start gap-3 text-sm text-[#0a0a0a]/70"
                                        >
                                            <span className="mt-2 w-1 h-1 rounded-full bg-[#0a0a0a]/30 shrink-0" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Link
                                        href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                                        target="_blank"
                                        className="inline-flex bg-[#0a0a0a] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#0a0a0a]/80 transition-colors duration-200"
                                    >
                                        Download for iOS
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Screenshot — natural aspect ratio */}
                        <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-[400px]"
                            >
                                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                                    <Image
                                        src="/onboarding/strict.png"
                                        alt="Impulse strict mode"
                                        width={1590}
                                        height={1186}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Browser mockup */}
                        <div className="flex items-center justify-center p-8 md:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-[480px]"
                            >
                                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
                                    {/* Browser chrome */}
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        </div>
                                        <div className="flex-1 mx-8 bg-white/5 rounded-md h-6 flex items-center justify-center">
                                            <span className="text-[10px] text-white/20">impulsecontrolapp.com</span>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <Image
                                        src="/onboarding/singletab.png"
                                        alt="Impulse browser extension"
                                        width={2144}
                                        height={1298}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 md:p-14 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
                                    Browser Extension
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
                                    Focus on your
                                    <br />computer too.
                                </h2>
                                <p className="text-white/40 text-base leading-relaxed max-w-sm">
                                    Block distracting websites effortlessly on Chrome and Safari.
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {[
                                        "Detailed daily usage statistics",
                                        "Available for Chrome and Safari",
                                        "Create and manage blocklists easily",
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -12 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                                            className="flex items-start gap-3 text-sm text-white/50"
                                        >
                                            <span className="mt-2 w-1 h-1 rounded-full bg-[#FDE047] shrink-0" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Link
                                        href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
                                        target="_blank"
                                        className="inline-flex bg-[#FDE047] text-[#0a0a0a] px-7 py-3 rounded-full text-sm font-bold hover:bg-[#FACC15] transition-colors duration-200"
                                    >
                                        Add to Chrome
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
