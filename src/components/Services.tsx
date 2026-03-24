"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative h-full w-full ${className}`}
    >
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.15) 0%, transparent 60%)`
          ),
          zIndex: 20,
        }}
        className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
      />
      {children}
    </motion.div>
  );
};

const services = [
  {
    title: "Driveways",
    slug: "driveways",
    size: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    description: "Military-grade concrete driveways designed for Iowa winters.",
    image: "/images/gallery/driveway-after-01.jpeg",
    features: ["Heavy Duty", "Permit Ready"],
  },
  {
    title: "Stamped",
    slug: "stamped",
    size: "col-span-1 row-span-1",
    description: "Exquisite decorative patterns.",
    image: "/images/gallery/stamped-after-01.jpeg",
    features: ["Custom Styles"],
  },
  {
    title: "Patios",
    slug: "patios",
    size: "col-span-1 row-span-1 md:row-span-2",
    description: "Premium outdoor living spaces.",
    image: "/images/gallery/patio-after-01.jpeg",
    features: ["Entertainment Ready"],
  },
  {
    title: "Commercial",
    slug: "commercial",
    size: "col-span-1 row-span-1",
    description: "Military-grade structural concrete.",
    image: "/images/gallery/commercial-after-01.jpeg",
    features: ["Extreme Durability"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Concrete Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>

      {/* Brutalist Watermark */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] z-0 flex justify-center">
        <h2 className="font-outfit text-[22vw] font-black text-white whitespace-nowrap">SERVICES</h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Service Excellence</h2>
            <h3 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Mastering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Hardscape Craft.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm mb-4">
            Combining engineering precision with artistic vision to deliver concrete that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:min-h-[900px]">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.title} 
              className={`${service.size} min-h-[280px] md:min-h-[400px]`}
              delay={index * 0.1}
            >
              <TiltCard>
                <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0f172a] shadow-2xl transition-all hover:border-amber-500/50">
                  <div className="absolute inset-0 z-0 bg-slate-900">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-50 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 h-full p-10 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="font-outfit text-xl md:text-3xl font-black text-white mb-3 tracking-tighter uppercase">{service.title}</h4>
                        <p className="text-slate-300 max-w-xs mb-6 font-medium leading-relaxed group-hover:text-white transition-colors">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map(f => (
                            <span key={f} className="text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        href={`/services/${service.slug}`}
                        aria-label={`View ${service.title} service details`}
                        className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 group-hover:scale-110 transition-all shadow-xl shadow-amber-500/10"
                      >
                        <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
