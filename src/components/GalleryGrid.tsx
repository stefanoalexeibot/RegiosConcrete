"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.10.02 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.05.52 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.06.49 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.07.45 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.07.45 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.08.27 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.07 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (10).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (5).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (7).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (9).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.18.20 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.18.21 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.18.21 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.19.32 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.22.13 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.22.13 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.22.13 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.22.14 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.25.40 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (3).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.56 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.04.13 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.01.17 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.02 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.11.09 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.11.09 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.12.19 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.12.19 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.12.57 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.12.57 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.58.57 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.06 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.06 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.30 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.30 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.48 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.58 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.59 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.59 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.06.17 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (11).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (12).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (13).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (6).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (8).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.28 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.15.04 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.15.04 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (5).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM (6).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.17.48 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.18.21 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (2).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (4).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.01.58 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.01.59 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.01.59 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.02 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.02 PM (2).jpeg"
];

// Split images into 3 rows for horizontal sliders
const row1 = images.slice(0, 31);
const row2 = images.slice(31, 62);
const row3 = images.slice(62);

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className={`flex gap-6 px-4 md:px-8 w-full overflow-hidden ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <motion.div 
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-6 w-max cursor-grab pb-8"
      >
        {items.map((img, i) => (
          <div 
            key={i}
            className="relative w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 shrink-0"
            data-cursor="view"
          >
            <Image 
              src={img} 
              alt={`Gallery Artifact ${i}`} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none" 
              sizes="(max-width: 768px) 70vw, 25vw"
            />
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function GalleryGrid() {
  return (
    <div className="py-24 w-full mx-auto overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl md:text-7xl font-outfit font-black text-white mb-6 tracking-tighter">THE ARCHIVE</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Drag horizontally to explore our entire 90+ project catalog without endless scrolling.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {/* Row 1 */}
        <MarqueeRow items={row1} />
        {/* Row 2 */}
        <MarqueeRow items={row2} reverse />
        {/* Row 3 */}
        <MarqueeRow items={row3} />
      </div>
    </div>
  );
}
