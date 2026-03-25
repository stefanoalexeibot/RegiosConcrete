"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Pair {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
}

interface BeforeAfterSliderProps {
  // Single pair (backwards compatible)
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  // Multiple pairs
  pairs?: Pair[];
}

function SingleSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
      onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchStart={(e) => { isDragging.current = true; updatePosition(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (isDragging.current) updatePosition(e.touches[0].clientX); }}
      onTouchEnd={() => { isDragging.current = false; }}
    >
      {/* After */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt="After" fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 80vw" draggable={false} />
      </div>

      {/* Before — clipped */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeSrc} alt="Before" fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 80vw" draggable={false} />
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 pointer-events-none" style={{ left: `${position}%` }} />

      {/* Handle */}
      <div className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none" style={{ left: `${position}%` }}>
        <ChevronLeft className="w-4 h-4 text-slate-800" />
        <ChevronRight className="w-4 h-4 text-slate-800" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-amber-400 text-xs font-black uppercase tracking-widest drop-shadow">{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="text-white text-xs font-black uppercase tracking-widest drop-shadow">{afterLabel}</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  pairs,
}: BeforeAfterSliderProps) {
  const [current, setCurrent] = useState(0);

  // Build pairs array
  const allPairs: Pair[] = pairs ?? (beforeSrc && afterSrc ? [{ beforeSrc, afterSrc }] : []);

  if (allPairs.length === 0) return null;

  // Single pair — no navigation needed
  if (allPairs.length === 1) {
    return (
      <div className="rounded-3xl overflow-hidden">
        <SingleSlider
          beforeSrc={allPairs[0].beforeSrc}
          afterSrc={allPairs[0].afterSrc}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
        />
      </div>
    );
  }

  // Multiple pairs — with navigation
  const prev = () => setCurrent((c) => (c - 1 + allPairs.length) % allPairs.length);
  const next = () => setCurrent((c) => (c + 1) % allPairs.length);

  return (
    <div className="relative rounded-3xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <SingleSlider
            beforeSrc={allPairs[current].beforeSrc}
            afterSrc={allPairs[current].afterSrc}
            beforeLabel={beforeLabel}
            afterLabel={afterLabel}
          />
        </motion.div>
      </AnimatePresence>

      {/* Pair label */}
      {allPairs[current].label && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {allPairs[current].label}
          </span>
        </div>
      )}

      {/* Prev / Next arrows */}
      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors">
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors">
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 pointer-events-none">
        {allPairs.map((_, i) => (
          <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-amber-400 w-4" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
