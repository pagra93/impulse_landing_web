"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#FDE047] rounded-lg flex items-center justify-center">
                        <span className="text-[#0a0a0a] font-black text-sm font-heading">I</span>
                    </div>
                    <span className={cn(
                        "text-lg font-bold tracking-tight font-heading transition-colors duration-500",
                        scrolled ? "text-white" : "text-[#0a0a0a]"
                    )}>
                        Impulse
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {[
                        { name: "Features", href: "#features" },
                        { name: "How it Works", href: "#how-it-works" },
                        { name: "Calculator", href: "#calculator" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                scrolled
                                    ? "text-white/70 hover:text-white hover:bg-white/10"
                                    : "text-[#0a0a0a]/60 hover:text-[#0a0a0a] hover:bg-[#0a0a0a]/5"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#download"
                        className="ml-3 bg-[#FDE047] text-[#0a0a0a] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#FACC15] transition-colors duration-200"
                    >
                        Get Impulse
                    </Link>
                </nav>

                <button
                    className={cn(
                        "md:hidden p-2 rounded-lg transition-colors",
                        scrolled ? "text-white" : "text-[#0a0a0a]"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-[#0a0a0a] overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-1">
                            {[
                                { name: "Features", href: "#features" },
                                { name: "How it Works", href: "#how-it-works" },
                                { name: "Calculator", href: "#calculator" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block py-3 text-white/70 hover:text-white text-lg font-medium transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                                className="pt-4"
                            >
                                <Link
                                    href="#download"
                                    className="block bg-[#FDE047] text-[#0a0a0a] px-6 py-3.5 rounded-full text-center text-sm font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Impulse
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
