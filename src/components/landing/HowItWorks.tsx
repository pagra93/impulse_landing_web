"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Choose what to block",
        desc: "Select the apps and websites that steal your time. Instagram, TikTok, Twitter — you know the ones.",
        image: "/onboarding/limits.png",
    },
    {
        number: "02",
        title: "Set your schedule",
        desc: "Block during work hours, bedtime, or anytime. Or start a quick focus session on demand.",
        image: "/onboarding/periods.png",
    },
    {
        number: "03",
        title: "Pick your strictness",
        desc: "From a gentle reminder to full lockdown. Strict mode makes it impossible to cheat — even for you.",
        image: "/onboarding/strict.png",
    },
    {
        number: "04",
        title: "Live your life",
        desc: "Impulse handles the discipline. You handle everything else. Focus, create, rest — distraction-free.",
        image: "/onboarding/welcome.png",
    },
];

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-[#FAFAF9]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <p className="text-[#0a0a0a]/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        How it works
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0a0a0a] max-w-lg leading-tight">
                        Simple by design.
                        <br />
                        <span className="text-[#0a0a0a]/30">Powerful by nature.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Steps — left */}
                    <div className="space-y-2 order-2 md:order-1">
                        {steps.map((step, i) => (
                            <motion.button
                                key={step.number}
                                onClick={() => setActiveStep(i)}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                                    activeStep === i
                                        ? "bg-white shadow-sm"
                                        : "hover:bg-white/50"
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <span className={`text-xs font-bold tabular-nums mt-1 transition-colors duration-300 ${
                                        activeStep === i ? "text-[#FDE047]" : "text-[#0a0a0a]/20"
                                    }`}>
                                        {step.number}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className={`font-bold font-heading text-lg mb-1 transition-colors duration-300 ${
                                            activeStep === i ? "text-[#0a0a0a]" : "text-[#0a0a0a]/50"
                                        }`}>
                                            {step.title}
                                        </h3>
                                        <AnimatePresence mode="wait">
                                            {activeStep === i && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                    className="text-sm text-[#0a0a0a]/50 leading-relaxed"
                                                >
                                                    {step.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                {activeStep === i && (
                                    <motion.div
                                        className="mt-4 ml-8 h-0.5 bg-[#FDE047] rounded-full origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        onAnimationComplete={() => {
                                            setActiveStep((prev) => (prev + 1) % steps.length);
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Screenshot preview — right */}
                    <div className="order-1 md:order-2 md:sticky md:top-32">
                        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Image
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        width={1596}
                                        height={1192}
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
