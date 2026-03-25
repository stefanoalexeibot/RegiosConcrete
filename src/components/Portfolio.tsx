"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 2,
    title: "Apex Commercial",
    type: "Structural Foundation",
    year: "2023",
    image: "/images/gallery/commercial-after-01.jpeg",
    video: null,
  },
  {
    id: 5,
    title: "The Vertex Driveway",
    type: "Residential Concrete",
    year: "2024",
    image: "/images/gallery/driveway-after-01.jpeg",
    video: null,
  },
  {
    id: 6,
    title: "Behind the Craft",
    type: "Work in Progress",
    year: "2024",
    image: null,
    video: "/videos/work-showcase-01.mp4",
  },
  {
    id: 7,
    title: "The Pour",
    type: "Live Site Work",
    year: "2024",
    image: null,
    video: "/videos/work-showcase-02.mp4",
  },
  {
    id: 8,
    title: "Finishing Touch",
    type: "Surface Detail",
    year: "2024",
    image: null,
    video: "/videos/work-showcase-03.mp4",
  },
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1
    );
    setActiveDot(index);
  });

  return (
    <section
      ref={targetRef}
      className="relative h-[500vh] bg-[#020617]"
      id="portfolio"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 font-outfit font-black text-[25vw] pointer-events-none whitespace-nowrap z-0 max-w-full truncate">
          PORTFOLIO
        </div>

        <div className="container mx-auto px-4 md:px-6 absolute top-20 left-0 w-full z-10">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Selected Works</h2>
          <div className="flex items-end justify-between">
            <h3 className="font-outfit text-4xl md:text-6xl font-black text-white leading-tight">
              Masterpieces in <span className="text-secondary italic">Concrete</span>
            </h3>
            {/* Mobile scroll hint */}
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-bold uppercase tracking-widest md:hidden">
              <span>Scroll</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-12 lg:gap-20 px-4 md:px-12 lg:px-24 relative z-10 mt-20"
          aria-label="Project portfolio — scroll to explore"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-3xl"
            >
              {/* Media Container */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)", filter: "brightness(0.5)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "brightness(1)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden mb-6 group"
                data-cursor="view"
              >
                {project.video ? (
                  <>
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    {/* Play badge */}
                    <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-xs font-bold uppercase tracking-widest">Live Work</span>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={project.image!}
                      alt={`${project.title} — ${project.type}, ${project.year}`}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                )}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              </motion.div>

              {/* Card Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{project.year}</span>
                    <div className="h-px w-8 bg-white/20"></div>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{project.type}</span>
                  </div>

                  <div className="flex justify-between items-end gap-4">
                    <h4 className="font-outfit text-2xl md:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter">
                      {project.title}
                    </h4>

                    <button
                      className="hidden sm:flex shrink-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300"
                      aria-label={`View ${project.title} project`}
                    >
                      <ArrowUpRight className="w-8 h-8" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pagination dots */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
          role="tablist"
          aria-label="Portfolio projects"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              role="tab"
              aria-selected={activeDot === index}
              aria-label={project.title}
              className={`rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
