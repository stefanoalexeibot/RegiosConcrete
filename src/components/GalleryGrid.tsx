"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.58.57 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.06 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.06 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.30 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.30 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 5.59.48 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.58 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.59 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.01.59 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-23 at 6.10.02 PM.jpeg"
];

// Helper to split array into columns for masonry
const getColumns = (cols: number) => {
  const result: string[][] = Array.from({ length: cols }, () => []);
  images.forEach((img, i) => {
    result[i % cols].push(img);
  });
  return result;
};

export default function GalleryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const columns = getColumns(3); // 3 columns for desktop

  // We assign different speeds to each column for a subtle parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const transforms = [y1, y2, y3];

  return (
    <div ref={containerRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile grid (1 column, no complex parallax) */}
      <div className="md:hidden flex flex-col gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ clipPath: "inset(100% 0 0 0)", filter: "brightness(0.5)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "brightness(1)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group"
            data-cursor="view"
          >
            <motion.div 
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={img} 
                alt={`Gallery Work ${i}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Desktop masonry grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 items-start h-[150vh] overflow-visible">
        {columns.map((column, colIndex) => (
          <motion.div 
            key={colIndex} 
            className="flex flex-col gap-8"
            style={{ y: transforms[colIndex] }}
          >
            {column.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ clipPath: "inset(100% 0 0 0)", filter: "brightness(0.5)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "brightness(1)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="relative w-full rounded-2xl overflow-hidden group shadow-2xl shadow-black/50"
                style={{ 
                  aspectRatio: index % 2 === 0 ? "3/4" : "1/1" 
                }}
                data-cursor="view"
              >
                <motion.div
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={img} 
                    alt={`Gallery Work ${colIndex}-${index}`} 
                    fill 
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    sizes="33vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
