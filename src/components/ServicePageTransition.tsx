"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * Full-page curtain that slides upward on page enter.
 * Place as the very first child of <main>.
 */
export function PageCurtain() {
  return (
    <motion.div
      className="fixed inset-0 z-[150] bg-[#020617] origin-top pointer-events-none"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
    />
  );
}

/**
 * On-mount fade + slide-up — for hero content (not scroll-triggered).
 */
export function HeroFadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 + delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-triggered fade + slide-up — for sections below the fold.
 */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-triggered horizontal clip-path wipe — great for images.
 */
export function ImageWipe({
  children,
  className,
  direction = "left",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}) {
  const initial =
    direction === "left"
      ? "inset(0 100% 0 0 round 24px)"
      : "inset(0 0 0 100% round 24px)";

  return (
    <motion.div
      className={className}
      initial={{ clipPath: initial }}
      whileInView={{ clipPath: "inset(0 0% 0 0% round 24px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
