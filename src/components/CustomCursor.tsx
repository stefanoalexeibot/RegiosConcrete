"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for a fluid, natural feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = "none";

    // Track mouse movement
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track when hovering over clickable elements
    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
      // Force hide default cursor on interactive elements too
      (el as HTMLElement).style.cursor = "none";
    });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[99999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isVisible ? (isHovered ? 3 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/30 mix-blend-difference pointer-events-none z-[99998]"
        style={{
          x: cursorX, // Immediate track without spring
          y: cursorY, // Immediate track without spring
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isVisible ? (isHovered ? 0 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </>
  );
}
