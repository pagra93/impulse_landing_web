"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CtaButton, IOS_URL } from "./primitives";
import { AnnouncementBar } from "./AnnouncementBar";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Physical unlock", href: "#physical" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-[100] border-b border-border-subtle bg-white/[0.82] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-[15px]">
        <a
          href="#"
          className="font-display text-[23px] font-bold text-navy"
          aria-label="Impulse home"
        >
          impulse<span className="text-yellow">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-body transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton variant="gradient" size="md" href={IOS_URL}>
            Get Impulse — Free
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-navy md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border-subtle bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-semibold text-body transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <CtaButton
                variant="gradient"
                size="md"
                href={IOS_URL}
                className="w-full"
              >
                Get Impulse — Free
              </CtaButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
