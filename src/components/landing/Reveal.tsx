"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades content up on entrance, once.
 * Content is rendered server-side inside this client wrapper, so it stays
 * SEO-safe and visible without JS.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
