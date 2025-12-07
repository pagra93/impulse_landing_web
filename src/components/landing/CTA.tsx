"use client";

import Link from "next/link";
import { Apple, Chrome } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section id="download" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">
                        Use your phone for things you truly care about and happily miss out on everything else.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                        Less screen, more life. Impulse helps you manage digital habits and live with purpose.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="https://apps.apple.com/app/id6447600329"
                            target="_blank"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            <Apple size={24} fill="currentColor" />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase opacity-80">Download on the</span>
                                <span className="text-lg font-semibold">App Store</span>
                            </div>
                        </Link>

                        <Link
                            href="https://chrome.google.com/webstore/detail/impulse-block-distractin/..." // TODO: Add actual link
                            target="_blank"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-slate-600 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            <Chrome size={24} />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase opacity-80">Add to</span>
                                <span className="text-lg font-semibold">Chrome</span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
