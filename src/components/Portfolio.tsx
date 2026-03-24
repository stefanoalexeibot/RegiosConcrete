"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Vertex Driveway",
    type: "Residential Concrete",
    year: "2023",
    image: "https://images.unsplash.com/photo-1590486803833-2c521674330d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Aura Stamped Patio",
    type: "Decorative Hardscape",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Luminary Walkway",
    type: "Commercial Paving",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Obsidian Garage Floor",
    type: "Epoxy & Surfacing",
    year: "2024",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecad13fc?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[400vh] bg-[#020617]"
      id="portfolio"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 font-outfit font-black text-[25vw] pointer-events-none whitespace-nowrap z-0 max-w-full truncate">
           PORTFOLIO
        </div>

        <div className="container mx-auto px-4 md:px-6 absolute top-20 left-0 w-full z-10">
           <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Selected Works</h2>
           <h3 className="font-outfit text-4xl md:text-6xl font-black text-white leading-tight">
             Masterpieces in <span className="text-secondary italic">Concrete</span>
           </h3>
        </div>

        <motion.div 
           style={{ x }} 
           className="flex gap-10 md:gap-20 px-8 md:px-32 relative z-10 mt-20"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-3xl"
            >
              {/* Image Container with Parallax Effect inside card */}
              <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden rounded-3xl">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              
              {/* Card Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{project.year}</span>
                     <div className="h-px w-8 bg-white/20"></div>
                     <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{project.type}</span>
                  </div>
                  
                  <div className="flex justify-between items-end gap-4">
                    <h4 className="font-outfit text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">
                      {project.title}
                    </h4>
                    
                    <button className="hidden sm:flex shrink-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300">
                       <ArrowUpRight className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
