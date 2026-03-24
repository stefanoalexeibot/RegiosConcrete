"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  className, 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }} className={`${className} h-full`}>
      <motion.div
        className="w-full h-full"
        variants={{
          hidden: { 
            opacity: 0, 
            y: directions[direction].y, 
            x: directions[direction].x 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
