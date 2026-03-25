"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, pct)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden select-none cursor-col-resize"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After image — full container */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt="After"
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 80vw"
          draggable={false}
        />
      </div>

      {/* Before image — clipped from left */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt="Before"
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 80vw"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft className="w-4 h-4 text-slate-800" aria-hidden="true" />
        <ChevronRight className="w-4 h-4 text-slate-800" aria-hidden="true" />
      </div>

      {/* BEFORE label */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-amber-400 text-xs font-black uppercase tracking-widest">
          {beforeLabel}
        </span>
      </div>

      {/* AFTER label */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="text-white text-xs font-black uppercase tracking-widest">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
