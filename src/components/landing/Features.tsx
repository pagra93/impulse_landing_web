"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Smartphone, Monitor } from "lucide-react";


const phoneFeatures = [
    "Block apps with Strict Mode",
    "Set daily usage limits",
    "Schedule downtime",
    "Track your screen time trends",
];

const chromeFeatures = [
    "Block distracting websites",
    "Hide YouTube recommendations",
    "Remove Facebook news feed",
    "Sync settings across devices",
];

export function Features() {
    return (
        <section id="features" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 space-y-32">
                {/* Mobile Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1 relative"
                    >
                        {/* Placeholder for Phone Image */}
                        <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                                <Smartphone size={64} />
                                {/* Ideally replace with actual screenshot */}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-2">
                            <Shield size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">
                            More control on your phone
                        </h2>
                        <p className="text-lg text-gray-600">
                            Impulse gives you the tools to manage your digital habits effectively on iOS.
                            Block apps permanently or set schedules that fit your lifestyle.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {phoneFeatures.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check size={14} />
                                    </div>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Desktop Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 mb-2">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">
                            Gain productivity in your computer
                        </h2>
                        <p className="text-lg text-gray-600">
                            The Impulse Chrome extension isn&apos;t just a site blocker. It modifies
                            websites to make them less addictive, removing feeds and recommendations.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {chromeFeatures.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check size={14} />
                                    </div>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Placeholder for Laptop Image */}
                        <div className="relative mx-auto w-full max-w-[600px] aspect-video bg-slate-900 rounded-xl shadow-2xl overflow-hidden border-8 border-slate-900">
                            <div className="absolute bottom-0 w-full h-[15%] bg-slate-800"></div>
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                                <Monitor size={64} />
                                {/* Ideally replace with actual screenshot */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
