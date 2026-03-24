"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "drag">("default");
  
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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const cursorView = target.closest('[data-cursor="view"]');
      const cursorDrag = target.closest('[data-cursor="drag"]');
      const clickable = target.closest('a, button, input, textarea, [role="button"], select');

      if (cursorView) setCursorType("view");
      else if (cursorDrag) setCursorType("drag");
      else if (clickable) setCursorType("hover");
      else setCursorType("default");
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[99999] text-black font-black text-[10px] tracking-widest uppercase overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" || cursorType === "drag" ? 72 : cursorType === "hover" ? 48 : 16,
          height: cursorType === "view" || cursorType === "drag" ? 72 : cursorType === "hover" ? 48 : 16,
          backgroundColor: cursorType === "view" || cursorType === "drag" ? "#f59e0b" : "white",
          mixBlendMode: cursorType === "view" || cursorType === "drag" ? "normal" : "difference",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        <AnimatePresence>
          {(cursorType === "view" || cursorType === "drag") && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute pointer-events-none select-none"
            >
              {cursorType}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/30 mix-blend-difference pointer-events-none z-[99998]"
        style={{
          x: cursorX, // Immediate track without spring
          y: cursorY, // Immediate track without spring
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: 48,
          height: 48,
          scale: isVisible ? (cursorType === "hover" || cursorType === "view" || cursorType === "drag" ? 0 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </>
  );
}
