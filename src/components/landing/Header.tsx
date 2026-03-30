"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "FEATURES", href: "#features" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "CALCULATOR", href: "#calculator" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-[1440px] mx-auto">
        <a href="#" className="text-accent font-black text-xl tracking-[2px]">
          IMPULSE
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary text-[13px] font-semibold tracking-[1px] hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-text-on-accent text-[13px] font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            GET IMPULSE
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-bg-primary border-b border-border-subtle"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary text-[13px] font-semibold tracking-[1px] hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-text-on-accent text-[13px] font-bold tracking-[1px] px-7 py-3.5 rounded-lg text-center hover:bg-accent-dark transition-colors"
              >
                GET IMPULSE
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
