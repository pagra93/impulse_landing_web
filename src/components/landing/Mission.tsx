"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Mission() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <Quote size={48} className="mx-auto text-slate-300" />
                    <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight text-slate-900">
                        “Our mission is to help people regain control over their time and attention,
                        enabling them to live more intentional and fulfilling lives.”
                    </h2>
                    <div className="text-sm font-semibold tracking-widest uppercase text-slate-500">
                        — The Impulse Team
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
