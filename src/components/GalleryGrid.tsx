"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Zap, MoveRight } from "lucide-react";

type Category = "all" | "sidewalks" | "patios" | "stamped" | "commercial";

type GalleryItem =
  | { type: "single"; src: string; category: Exclude<Category, "all"> }
  | { type: "pair"; before: string; after: string; category: Exclude<Category, "all"> };

const allImages: GalleryItem[] = [
  // Keeping high-quality pairs for the "Before & After" interaction
  { before: "/images/gallery/driveway-after-07.jpeg", after: "/images/gallery/driveway-after-08.jpeg", category: "sidewalks", type: "pair" },
  { before: "/images/gallery/stamped-after-04.jpeg", after: "/images/gallery/stamped-after-03.jpeg", category: "stamped", type: "pair" },
  { before: "/images/gallery/patio-after-17.jpeg", after: "/images/gallery/patio-after-18.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/patio-after-27.jpeg", after: "/images/gallery/patio-after-29.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/patio-after-31.jpeg", after: "/images/gallery/patio-after-30.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/driveway-after-13.jpeg", after: "/images/gallery/driveway-after-12.jpeg", category: "sidewalks", type: "pair" },
  { before: "/images/gallery/slab-before-01.jpeg", after: "/images/gallery/slab-after-01.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/patio-after-16.jpeg", after: "/images/gallery/patio-after-20.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/patio-after-26.jpeg", after: "/images/gallery/patio-after-25.jpeg", category: "patios", type: "pair" },
  { before: "/images/gallery/patio-after-38.jpeg", after: "/images/gallery/patio-after-37.jpeg", category: "patios", type: "pair" },

  // Commercial Afters (Singles)
  { src: "/images/gallery/commercial-after-01.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-02.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-03.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-04.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-05.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-06.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-07.jpeg", category: "commercial", type: "single" },
  { src: "/images/gallery/commercial-after-08.jpeg", category: "commercial", type: "single" },

  // Sidewalk Afters (Filtered Singles)
  { src: "/images/gallery/driveway-after-02.jpeg", category: "sidewalks", type: "single" },
  { src: "/images/gallery/driveway-after-03.jpeg", category: "sidewalks", type: "single" },
  { src: "/images/gallery/driveway-after-04.jpeg", category: "sidewalks", type: "single" },
  { src: "/images/gallery/driveway-after-05.jpeg", category: "sidewalks", type: "single" },
  { src: "/images/gallery/driveway-after-10.jpeg", category: "sidewalks", type: "single" },
  { src: "/images/gallery/driveway-after-11.jpeg", category: "sidewalks", type: "single" },

  // Patio Afters (Filtered Singles - CRITICALLY REMOVED 07, 09, 15 as requested)
  { src: "/images/gallery/patio-after-01.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-02.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-03.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-04.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-05.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-11.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-12.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-13.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-14.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-19.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-21.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-22.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-28.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-32.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-33.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-34.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-35.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-36.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-39.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-40.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-41.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-42.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-43.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-44.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-45.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-47.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-49.jpeg", category: "patios", type: "single" },
  { src: "/images/gallery/patio-after-50.jpeg", category: "patios", type: "single" },

  // Stamped Afters (Filtered Singles)
  { src: "/images/gallery/stamped-after-01.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-02.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-05.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-06.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-07.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-08.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-10.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-11.jpeg", category: "stamped", type: "single" },
  { src: "/images/gallery/stamped-after-12.jpeg", category: "stamped", type: "single" },
];

const InteractiveCard = ({ item }: { item: GalleryItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { margin: "-20%" });

  // Auto-peek effect on mobile when scrolling into view
  const [hasPeeked, setHasPeeked] = useState(false);
  useEffect(() => {
    if (isInView && !hasPeeked && item.type === "pair") {
      setHasPeeked(true);
      setIsTapped(true);
      setTimeout(() => setIsTapped(false), 800);
    }
  }, [isInView, hasPeeked, item]);

  const activeView = isHovered || isTapped ? "before" : "after";

  if (item.type === "single") {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 group shadow-2xl shadow-black/50 border border-white/5">
        <Image
          src={item.src}
          alt="Regios Concrete Project Showcase"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 backdrop-blur-md px-3 py-1 rounded border border-blue-400/20">
              {item.category}
             </span>
            <div className="h-px flex-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MoveRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
          </div>
        </div>
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer group shadow-2xl shadow-black/50 border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsTapped(!isTapped)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeView === "before" ? item.before : item.after}
            alt="Transformation Showcase"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating UI Elements */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="bg-red-500/90 text-white text-[9px] font-black px-2 py-1 rounded-sm backdrop-blur-sm flex items-center gap-1 shadow-lg ring-1 ring-white/20">
          <Zap size={10} className="fill-current" />
           TRANSFORMATION
        </div>
        <div className={`transition-all duration-300 ${activeView === "before" ? "bg-amber-500 text-black" : "bg-blue-600 text-white"} text-[9px] font-black px-2 py-1 rounded-sm backdrop-blur-sm w-fit uppercase tracking-wider`}>
          {activeView}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3 text-white">
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.category}</span>
          <div className="h-px flex-1 bg-white/20" />
          <MoveRight size={14} className="text-blue-500" />
        </div>
        <p className="text-white/60 text-[9px] mt-2 font-medium">Interaction enabled: Reveal original work</p>
      </div>

      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
};

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");

  const filtered = allImages.filter((img) =>
    active === "all" ? true : img.category === active
  );

  const filters: { label: string; value: Category; count: number }[] = [
    { label: "All Work", value: "all", count: allImages.length },
    { label: "Sidewalks", value: "sidewalks", count: allImages.filter(i => i.category === "sidewalks").length },
    { label: "Patios", value: "patios", count: allImages.filter(i => i.category === "patios").length },
    { label: "Stamped", value: "stamped", count: allImages.filter(i => i.category === "stamped").length },
    { label: "Commercial", value: "commercial", count: allImages.filter(i => i.category === "commercial").length },
  ];

  return (
    <section id="gallery" className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-blue-600" />
              <span className="text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase">
                Portfolio Showcase
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black text-zinc-100 tracking-tighter leading-[0.9]"
            >
              QUALITY IN <br />
              <span className="text-blue-600">EVERY POUR.</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  active === f.value
                    ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    : "bg-transparent border-white/10 text-zinc-500 hover:border-white/40 hover:text-white"
                }`}
              >
                {f.label}
                <span className="ml-3 opacity-40">{f.count}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
            layout 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.type === "single" ? item.src : item.after}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                    duration: 0.8, 
                    delay: (index % 4) * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <InteractiveCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest max-w-sm text-center md:text-left leading-loose">
                Every photo represents a real job site in Des Moines & surrounding areas. Hover over transform badges to see original site conditions.
            </p>
            <button className="group relative px-12 py-6 bg-zinc-100 hover:bg-blue-600 transition-all duration-500 rounded-full overflow-hidden">
                <span className="relative z-10 text-black group-hover:text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                    Start Your Project <ArrowRight size={16} />
                </span>
            </button>
        </motion.div>
      </div>
    </section>
  );
}
