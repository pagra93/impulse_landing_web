"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades content up on entrance, once.
 *
 * Two things this deliberately handles:
 *
 * - `prefers-reduced-motion`. With the preference set, `initial={false}` paints
 *   the content in its final state instead of animating into it.
 * - No JavaScript. Framer Motion serialises `initial` into the SSR markup, so
 *   the old version shipped `opacity: 0` inline and, without JS, never animated
 *   to 1 — the content was invisible to anything that does not execute scripts.
 *   The `data-reveal` hook below is targeted by a <noscript> rule in the root
 *   layout that forces it visible.
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
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-reveal=""
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
