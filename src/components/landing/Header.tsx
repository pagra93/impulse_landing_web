"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Lockup } from "@/components/brand/Mark";
import { CtaButton } from "./primitives";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { LINKS } from "@/lib/links";

const NAV = [
  { key: "howItWorks", href: "#como" },
  { key: "features", href: "#funciones" },
  { key: "desktop", href: "#ordenador" },
  { key: "friction", href: "#friccion" },
  { key: "faq", href: "#faq" },
] as const;

/**
 * Floating pill navigation over the dark opening — the pattern Opal, Brick and
 * Jomo all use. Replaces a full-width sticky bar plus an announcement strip
 * that pushed a not-yet-shipped accessory above the product itself.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const reduce = useReducedMotion();

  return (
    <div className="sticky top-0 z-[100] px-6 pt-4">
      <nav className="mx-auto flex max-w-shell items-center gap-4 rounded-full border border-border-on-dark bg-void/80 py-2 pl-4 pr-2 backdrop-blur-[18px] sm:gap-7 sm:pl-6">
        <Link
          href="/"
          aria-label={t("home")}
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
        >
          <Lockup size={28} />
        </Link>

        <div className="ml-1 hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded text-[14.5px] font-medium text-on-dark-mid transition-colors hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher className="hidden sm:flex" />
          <CtaButton
            variant="yellow"
            size="md"
            href={LINKS.ios}
            className="!px-4 !text-[13px] sm:!px-5 sm:!text-sm"
          >
            {t("cta")}
          </CtaButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="grid size-9 shrink-0 place-items-center rounded-full text-on-dark-mid sm:size-10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="nav-mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="mx-auto mt-2 max-w-shell overflow-hidden rounded-3xl border border-border-on-dark bg-void/95 backdrop-blur-[18px] lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-on-dark-mid hover:bg-surface-on-dark hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
                >
                  {t(item.key)}
                </a>
              ))}
              <LocaleSwitcher className="px-3 pt-2 sm:hidden" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
