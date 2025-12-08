"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Layout, Smartphone, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuresList = [
    {
        icon: <Shield size={32} />,
        title: "App Control",
        desc: "Block distracting apps/websites immediately or schedule them.",
    },
    {
        icon: <Clock size={32} />,
        title: "Schedule Productivity",
        desc: "Automate your focus time by scheduling blocking sessions.",
    },
    {
        icon: <Layout size={32} />,
        title: "Flexibility Access Control",
        desc: "Different strictness levels to prevent you from unblocking while creating healthy habits.",
    },
    {
        icon: <Smartphone size={32} />,
        title: "Digital Well-being",
        desc: "Achieve a balanced digital life by improved awareness of your usage.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 overflow-hidden space-y-32">

            {/* 4 Column Grid */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gray-50/50 rounded-3xl p-12">
                    <div className="flex justify-center mb-8">
                        <span className="bg-[#FDE047] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider transform -rotate-3">
                            Why Impulse?
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {featuresList.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100/50">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold font-heading text-lg">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Section */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FEFCE8] rounded-3xl p-8 md:p-20 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 flex justify-center relative">
                            {/* Placeholder for Phone Image - using a div for now if image missing */}
                            <div className="w-64 h-[500px] bg-white border-8 border-gray-900 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                                <span className="text-gray-300 font-bold text-lg">App UI</span>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">
                                More control on your phone
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Regain your peace of mind and improve your focus by blocking apps on your phone.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Blocking apps and websites immediately or by schedule.",
                                    "Strict levels to prevent you from canceling a session early.",
                                    "Emergency button available just in case you really need access."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                                target="_blank"
                                className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity inline-block"
                            >
                                Download for iOS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Section */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FEFCE8] rounded-3xl p-8 md:p-20 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">
                                Gain productivity in your computer
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Block distracting websites effortlessly on your computer to maintain a focused workflow.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Learn more details of daily usage stats.",
                                    "Extensions available for both Chrome and Safari.",
                                    "Create blocklists easily to manage distractions."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-yellow-100">
                                        <span className="bg-yellow-100 text-yellow-700 p-1 rounded">⚠️</span>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
                                target="_blank"
                                className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity inline-block"
                            >
                                Add to Chrome
                            </Link>
                        </div>
                        <div className="flex justify-center relative">
                            {/* Placeholder for Laptop Image */}
                            <div className="w-[500px] h-[300px] bg-white border-8 border-gray-800 rounded-xl shadow-2xl flex items-center justify-center relative">
                                <div className="absolute -bottom-4 w-full h-4 bg-gray-800 rounded-b-xl opacity-50 blur-xl"></div>
                                <span className="text-gray-300 font-bold text-lg">Web Dashboard UI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
