"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Props {
  variant?: "dark" | "light";
}

export default function ActiveViewers({ variant = "dark" }: Props) {
  const [count, setCount] = useState(randomBetween(3, 7));
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        // Randomly go up or down by 1, stay between 2-9
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.min(9, Math.max(2, prev + delta));
      });
      setBump(true);
      setTimeout(() => setBump(false), 600);
    }, randomBetween(18000, 35000));

    return () => clearInterval(interval);
  }, []);

  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-bold ${
      isDark
        ? "bg-white/5 border border-white/10 text-white/80"
        : "bg-slate-50 border border-slate-200 text-slate-700"
    }`}>
      {/* Live pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ y: bump ? -8 : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`font-black ${isDark ? "text-amber-400" : "text-primary"}`}
        >
          {count}
        </motion.span>
      </AnimatePresence>

      <span className={isDark ? "text-white/50" : "text-slate-500"}>
        people viewing this page
      </span>
    </div>
  );
}
