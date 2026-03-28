"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "driveways" | "patios" | "stamped" | "commercial";

const allImages: { src: string; category: Exclude<Category, "all"> }[] = [
  // --- PROJECT: FOUNDATION & EXCAVATION ---
  { src: "/images/gallery/patio-before-02.jpeg", category: "patios" }, // Bobcat Excavation
  { src: "/images/gallery/patio-before-06.jpeg", category: "patios" }, // Preparation detail

  // --- PROJECT: STAMPED DECK PATIO (Before -> During -> After) ---
  { src: "/images/gallery/patio-before-05.jpeg", category: "stamped" }, // Gravel base
  { src: "/images/gallery/patio-before-04.jpeg", category: "stamped" }, // Rebar/Mesh
  { src: "/images/gallery/stamped-after-01.jpeg", category: "stamped" }, // Stamping process (blue molds)
  { src: "/images/gallery/stamped-after-02.jpeg", category: "stamped" }, // Stamped finished
  { src: "/images/gallery/stamped-after-04.jpeg", category: "stamped" }, // Stamped alternative view

  // --- PROJECT: WHITE SHED SLAB (Before -> After) ---
  { src: "/images/gallery/driveway-before-01.jpeg", category: "patios" }, // Path leading to shed (Before)
  { src: "/images/gallery/patio-after-03.jpeg", category: "patios" },  // Rebar for shed slab
  { src: "/images/gallery/patio-after-04.jpeg", category: "patios" },  // Finished shed slab
  { src: "/images/gallery/patio-after-05.jpeg", category: "patios" },  // Shed slab alt

  // --- PROJECT: BRICK HOUSE PATIO ---
  { src: "/images/gallery/patio-before-01.jpeg", category: "patios" }, // AC units area (Before)
  { src: "/images/gallery/patio-after-01.jpeg", category: "patios" },  // Finished brick house patio

  // --- PROJECT: LONG NARROW DRIVEWAY/PATH ---
  { src: "/images/gallery/driveway-after-01.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-02.jpeg", category: "driveways" },

  // --- ADDITIONAL DRIVEWAYS ---
  { src: "/images/gallery/driveway-after-03.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-04.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-05.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-06.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-07.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-08.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-09.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-10.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-11.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-12.jpeg", category: "driveways" },
  { src: "/images/gallery/driveway-after-13.jpeg", category: "driveways" },

  // --- ADDITIONAL PATIOS ---
  { src: "/images/gallery/patio-after-02.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-06.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-07.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-08.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-09.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-10.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-11.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-12.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-13.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-14.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-15.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-16.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-17.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-18.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-19.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-20.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-21.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-22.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-23.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-24.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-25.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-26.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-27.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-28.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-29.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-30.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-31.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-32.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-33.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-34.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-35.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-36.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-37.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-38.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-39.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-40.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-41.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-42.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-43.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-44.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-45.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-46.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-47.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-48.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-49.jpeg", category: "patios" },
  { src: "/images/gallery/patio-after-50.jpeg", category: "patios" },

  // --- ADDITIONAL STAMPED ---
  { src: "/images/gallery/stamped-after-03.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-05.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-06.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-07.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-08.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-09.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-10.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-11.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-12.jpeg", category: "stamped" },
  { src: "/images/gallery/stamped-after-13.jpeg", category: "stamped" },

  // --- PROJECT: COMMERCIAL SLABS ---
  { src: "/images/gallery/commercial-after-01.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-02.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-03.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-04.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-05.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-06.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-07.jpeg", category: "commercial" },
  { src: "/images/gallery/commercial-after-08.jpeg", category: "commercial" },
];

const filters: { label: string; value: Category; count: number }[] = [
  { label: "All", value: "all", count: allImages.length },
  { label: "Driveways", value: "driveways", count: allImages.filter(i => i.category === "driveways").length },
  { label: "Patios", value: "patios", count: allImages.filter(i => i.category === "patios").length },
  { label: "Stamped", value: "stamped", count: allImages.filter(i => i.category === "stamped").length },
  { label: "Commercial", value: "commercial", count: allImages.filter(i => i.category === "commercial").length },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? allImages : allImages.filter(i => i.category === active);

  return (
    <div className="py-24 w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl md:text-7xl font-outfit font-black text-white mb-6 tracking-tighter">THE ARCHIVE</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-10">
          Over 85 finished projects — filter by service type.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                active === f.value
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
              <span className={`ml-2 text-xs font-black ${active === f.value ? "text-black/60" : "text-white/30"}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-8">
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group shadow-xl shadow-black/40"
                data-cursor="view"
              >
                <Image
                  src={img.src}
                  alt={`${img.category} concrete project`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay with category label */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
