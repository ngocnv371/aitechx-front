"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, REVEAL_DURATION } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in pixels before the element settles into place. */
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
}

/** Fades and slides its children into view the first time they are scrolled to. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  duration = REVEAL_DURATION,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
