"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Chrome } from "lucide-react";

export function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FDE047] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-xl">
                    <div className="space-y-8 max-w-xl z-10">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                            Control your Impulse, <br /> Control your Time.
                        </h2>
                        <p className="text-gray-800 text-lg opacity-80">
                            The simplest way to regain your focus and block distractions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wide hover:scale-105 transition-transform"
                            >
                                Download App
                            </Link>
                            <Link
                                href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wide hover:scale-105 transition-transform"
                            >
                                <Chrome size={16} />
                                Add to Chrome
                            </Link>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative w-full max-w-md h-64 md:h-auto flex items-end justify-center">
                        {/* Visual representation of devices similar to screenshot */}
                        <div className="w-48 h-32 bg-white border-4 border-black rounded-t-xl mx-auto shadow-2xl translate-y-4 translate-x-12 z-0"></div>
                        <div className="w-24 h-48 bg-white border-4 border-black rounded-2xl shadow-xl z-10 relative"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
