"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/gallery/patio-after-03.jpeg",
  "/images/gallery/patio-after-04.jpeg",
  "/images/gallery/patio-after-05.jpeg",
  "/images/gallery/stamped-after-01.jpeg",
  "/images/gallery/commercial-after-01.jpeg",
  "/images/gallery/commercial-after-03.jpeg",
  "/images/gallery/stamped-after-02.jpeg",
  "/images/gallery/stamped-after-03.jpeg",
  "/images/gallery/stamped-after-04.jpeg",
  "/images/gallery/driveway-after-05.jpeg",
  "/images/gallery/driveway-after-06.jpeg",
  "/images/gallery/patio-after-06.jpeg",
  "/images/gallery/patio-after-07.jpeg",
  "/images/gallery/patio-after-08.jpeg",
  "/images/gallery/patio-after-09.jpeg",
  "/images/gallery/patio-after-10.jpeg",
  "/images/gallery/patio-after-11.jpeg",
  "/images/gallery/patio-after-16.jpeg",
  "/images/gallery/patio-after-17.jpeg",
  "/images/gallery/patio-after-18.jpeg",
  "/images/gallery/patio-after-20.jpeg",
  "/images/gallery/patio-after-22.jpeg",
  "/images/gallery/patio-after-27.jpeg",
  "/images/gallery/patio-after-28.jpeg",
  "/images/gallery/patio-after-29.jpeg",
  "/images/gallery/patio-after-30.jpeg",
  "/images/gallery/patio-after-31.jpeg",
  "/images/gallery/patio-after-32.jpeg",
  "/images/gallery/patio-after-33.jpeg",
  "/images/gallery/patio-after-34.jpeg",
  "/images/gallery/patio-after-39.jpeg",
  "/images/gallery/stamped-after-05.jpeg",
  "/images/gallery/stamped-after-06.jpeg",
  "/images/gallery/patio-after-40.jpeg",
  "/images/gallery/commercial-after-04.jpeg",
  "/images/gallery/commercial-after-05.jpeg",
  "/images/gallery/commercial-after-06.jpeg",
  "/images/gallery/commercial-after-07.jpeg",
  "/images/gallery/commercial-after-08.jpeg",
  "/images/gallery/stamped-after-08.jpeg",
  "/images/gallery/stamped-after-09.jpeg",
  "/images/gallery/patio-after-43.jpeg",
  "/images/gallery/patio-after-44.jpeg",
  "/images/gallery/patio-after-45.jpeg",
  "/images/gallery/stamped-after-10.jpeg",
  "/images/gallery/patio-after-47.jpeg",
  "/images/gallery/patio-after-48.jpeg",
  "/images/gallery/patio-after-49.jpeg",
  "/images/gallery/patio-after-50.jpeg",
  "/images/gallery/stamped-after-13.jpeg",
  "/images/gallery/driveway-after-10.jpeg",
  "/images/gallery/driveway-after-11.jpeg",
  "/images/gallery/driveway-after-12.jpeg",
  "/images/gallery/driveway-after-13.jpeg",
  "/images/gallery/driveway-after-01.jpeg",
  "/images/gallery/driveway-after-02.jpeg",
  "/images/gallery/driveway-after-03.jpeg",
  "/images/gallery/patio-after-01.jpeg",
  "/images/gallery/patio-after-02.jpeg",
  "/images/gallery/driveway-after-04.jpeg",
  "/images/gallery/commercial-after-02.jpeg",
  "/images/gallery/patio-after-12.jpeg",
  "/images/gallery/patio-after-13.jpeg",
  "/images/gallery/patio-after-14.jpeg",
  "/images/gallery/patio-after-15.jpeg",
  "/images/gallery/patio-after-19.jpeg",
  "/images/gallery/patio-after-21.jpeg",
  "/images/gallery/patio-after-23.jpeg",
  "/images/gallery/patio-after-24.jpeg",
  "/images/gallery/patio-after-25.jpeg",
  "/images/gallery/patio-after-26.jpeg",
  "/images/gallery/patio-after-35.jpeg",
  "/images/gallery/patio-after-36.jpeg",
  "/images/gallery/patio-after-37.jpeg",
  "/images/gallery/patio-after-38.jpeg",
  "/images/gallery/stamped-after-07.jpeg",
  "/images/gallery/driveway-after-07.jpeg",
  "/images/gallery/patio-after-41.jpeg",
  "/images/gallery/driveway-after-08.jpeg",
  "/images/gallery/patio-after-42.jpeg",
  "/images/gallery/patio-after-46.jpeg",
  "/images/gallery/driveway-after-09.jpeg",
  "/images/gallery/stamped-after-11.jpeg",
  "/images/gallery/stamped-after-12.jpeg"
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
