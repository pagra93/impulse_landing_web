"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Lock, Clock, Brain, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Step {
    id: number;
    type: "welcome" | "feature" | "summary";
    title: string;
    subtitle?: string;
    description?: string;
    example?: string; // For the specific "Best for..." or usage examples
    microLabel?: {
        icon: React.ElementType;
        text: string;
        color: string;
    };
    image?: string;
    color: string;
}

const steps: Step[] = [
    {
        id: 1,
        type: "welcome",
        title: "Welcome to Impulse",
        subtitle: "Choose how much control you want.\nFrom gentle limits to no-exit blocks.",
        description: "Three ways to stop distractions:\n\nStrict Blocks — no access\nFlexible Limits — controlled access\nSingle-tab mode — fewer tab switches\n\nMost people mix them.",
        image: "/onboarding/welcome.png",
        color: "from-amber-50 to-orange-50",
    },
    {
        id: 2,
        type: "feature",
        title: "Strict Blocks",
        subtitle: "Completely block distracting sites",
        description: "Set a strict block and you won’t be able to access the site at all. No unlocks. No pauses. No exceptions.",
        example: "Best for deep work, sleep time, or moments where access is not an option.",
        microLabel: {
            icon: Lock,
            text: "100% blocked",
            color: "bg-red-100 text-red-700 border-red-200",
        },
        image: "/onboarding/strict.png",
        color: "from-rose-50 to-red-50",
    },
    {
        id: 3,
        type: "feature",
        title: "Flexible Limits",
        subtitle: "Control how much, not whether",
        description: "Set daily time or open limits. You can still access the site, but only within the limits you define.",
        example: "Best for social media, news, or sites you don’t want to quit completely.",
        microLabel: {
            icon: Clock,
            text: "Limited access",
            color: "bg-amber-100 text-amber-700 border-amber-200",
        },
        image: "/onboarding/limits.png",
        color: "from-amber-50 to-yellow-50",
    },
    {
        id: 4,
        type: "feature",
        title: "Single-tab mode",
        subtitle: "Stay on one tab without distractions",
        description: "Lock the current tab. To leave, you’ll need to type a phrase before continuing. This creates a pause before switching tabs.",
        example: "Prevents impulsive tab switching during focused sessions.",
        microLabel: {
            icon: Brain,
            text: "Focus aid",
            color: "bg-blue-100 text-blue-700 border-blue-200",
        },
        image: "/onboarding/singletab.png",
        color: "from-blue-50 to-indigo-50",
    },
    {
        id: 5,
        type: "summary",
        title: "You can mix them",
        description: "Most people use a combination tailored to their day:",
        color: "from-slate-50 to-zinc-100",
    },
];

export default function OnboardingSlider() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setDirection(1);
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    const step = steps[currentStep];

    return (
        <div className="relative w-full h-[100dvh] overflow-hidden bg-white flex flex-col font-sans">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-colors duration-1000 opacity-60`} />

            {/* Skip Button */}
            {currentStep < steps.length - 1 && (
                <button
                    onClick={() => window.location.href = '/'}
                    className="absolute top-8 right-8 z-50 px-4 py-2 text-slate-500 hover:text-slate-900 font-medium transition-colors text-sm rounded-full hover:bg-black/5"
                >
                    Skip
                </button>
            )}

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-black/5 z-50">
                <motion.div
                    className="h-full bg-black"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Main Content */}
            <div className="relative flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center"
                    >
                        {step.type === "summary" ? (
                            // SUMMARY SCREEN LAYOUT
                            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20"
                                >
                                    <Check className="w-12 h-12 text-white" />
                                </motion.div>

                                <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">{step.title}</h1>
                                <p className="text-xl text-slate-600 mb-12">{step.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-12">
                                    <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
                                        <Lock className="w-8 h-8 text-red-500 mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Strict Blocks</h3>
                                        <p className="text-sm text-slate-500">For deep focus</p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
                                        <Clock className="w-8 h-8 text-amber-500 mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Limits</h3>
                                        <p className="text-sm text-slate-500">For daily control</p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
                                        <Brain className="w-8 h-8 text-blue-500 mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Single-tab</h3>
                                        <p className="text-sm text-slate-500">For focused sessions</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // STANDARD & WELCOME LAYOUT
                            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                                {/* Visual Part with Browser Window */}
                                <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                                    <motion.div
                                        className="w-full max-w-[600px] hover:scale-[1.02] transition-transform duration-500"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                    >
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                                            {step.image && (
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="w-full h-auto object-contain block"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                                {/* Text Part */}
                                <div className="w-full md:w-1/2 flex flex-col items-start text-left order-1 md:order-2">
                                    {step.microLabel && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 font-medium text-sm ${step.microLabel.color}`}
                                        >
                                            <step.microLabel.icon className="w-4 h-4" />
                                            {step.microLabel.text}
                                        </motion.div>
                                    )}

                                    <motion.h1
                                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6 leading-[1.1] tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {step.title}
                                    </motion.h1>

                                    {step.subtitle && (
                                        <motion.h2
                                            className="text-2xl md:text-3xl text-slate-800 font-medium mb-6 whitespace-pre-wrap"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {step.subtitle}
                                        </motion.h2>
                                    )}

                                    <motion.p
                                        className="text-xl text-slate-500 leading-relaxed mb-8 max-w-lg font-light whitespace-pre-wrap"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {step.description}
                                    </motion.p>

                                    {step.example && (
                                        <motion.div
                                            className="pl-4 border-l-2 border-slate-200"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <p className="text-slate-400 italic text-lg">{step.example}</p>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Footer */}
            <div className="relative z-10 p-8 md:p-12 flex items-center justify-between max-w-7xl w-full mx-auto">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`group flex items-center gap-2 text-slate-400 font-medium transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-slate-900'}`}
                >
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <span>Back</span>
                </button>

                <div className="flex gap-4">
                    {steps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentStep ? 1 : -1);
                                setCurrentStep(idx);
                            }}
                            className={`transition-all duration-300 ${idx === currentStep ? 'w-3 h-3 bg-black rounded-full' : 'w-3 h-3 bg-slate-200 rounded-full hover:bg-slate-300 scale-75'}`}
                        />
                    ))}
                </div>

                {currentStep === steps.length - 1 ? (
                    <button
                        onClick={() => window.location.href = '/'}
                        className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Start configuring
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {currentStep === 0 ? "See the 3 control modes" : "Next"}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                )}
            </div>

            <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
