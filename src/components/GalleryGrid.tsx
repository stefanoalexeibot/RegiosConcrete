"use client";

import { useRef } from "react";
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
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.01 PM.jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.02 PM (1).jpeg",
  "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM/WhatsApp Image 2026-03-23 at 6.10.02 PM (2).jpeg"
];

export default function GalleryGrid() {
  return (
    <div className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Fluid CSS Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ clipPath: "inset(100% 0 0 0)", filter: "brightness(0.5)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "brightness(1)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 break-inside-avoid"
            data-cursor="view"
          >
            <div className="relative w-full" style={{ paddingBottom: i % 3 === 0 ? "130%" : i % 2 === 0 ? "100%" : "75%" }}>
              <motion.div 
                initial={{ scale: 1.2 }}
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
