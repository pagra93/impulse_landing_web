"use client";

import { motion } from "framer-motion";

export function Mission() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#1C1C1E] rounded-3xl p-8 md:p-20 text-center shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-xl md:text-3xl font-medium leading-relaxed text-gray-300 italic">
                            &quot;Our mission is to be able to help people to control the impulse to enter certain websites/apps unconsciously, and that they are the ones who control the impulse and not the dopamine.&quot;
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
