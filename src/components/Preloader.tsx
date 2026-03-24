"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Scroll intentionally to top on load so the UX is predictable
    window.scrollTo(0, 0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 3;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 800);
      }
      setProgress(currentProgress);
    }, 120);

    return () => {
        clearInterval(interval);
        document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 to-[#020617]"></div>
          
          {/* Subtle moving grid */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                 backgroundSize: '100px 100px',
                 perspective: '1000px',
                 transform: 'rotateX(60deg) translateY(-200px)'
               }} 
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center mb-6"
            >
              <div className="font-outfit text-white font-black text-6xl md:text-8xl tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                REGIOS
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-8 bg-amber-500/60"></div>
                <span className="text-amber-500/80 font-bold uppercase tracking-[0.3em] text-xs">Concrete LLC</span>
                <div className="h-px w-8 bg-amber-500/60"></div>
              </div>
            </motion.div>
            <div className="h-[2px] w-64 bg-white/10 overflow-hidden relative mb-4 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/50 font-mono text-sm tracking-[0.2em]"
            >
              {progress === 100 ? "READY" : `${progress}%`}
            </motion.div>
          </div>
          
          {/* Brutalist Watermark */}
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 opacity-5 pointer-events-none">
             <span className="font-outfit text-[15vw] font-black text-white whitespace-nowrap tracking-tighter">
                CONCRETE
             </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
