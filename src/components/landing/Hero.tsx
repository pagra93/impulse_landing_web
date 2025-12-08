"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple, Chrome } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-50/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-4">
                        <span>New: Strict Mode available</span>
                        <ArrowRight size={12} />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-slate-900">
                        Control your focus, <br className="hidden md:block" />
                        <span className="text-gray-500">block distractions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Are distractions killing your productivity? Impulse is designed to help you
                        to block specified apps/websites during time slots to maintain focus and
                        productivity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="https://apps.apple.com/app/id6447600329"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-[#FDE047] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-sm"
                        >
                            <span className="text-sm font-bold uppercase tracking-wide">Download for iOS</span>
                        </Link>

                        <Link
                            href="https://chrome.google.com/webstore/detail/impulse-block-distractin/..."
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-sm"
                        >
                            <Chrome size={18} />
                            <span className="text-sm font-bold uppercase tracking-wide">Add to Chrome</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
