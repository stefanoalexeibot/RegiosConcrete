"use client";

import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Driveways",
    size: "col-span-2 row-span-2",
    description: "Military-grade concrete driveways designed for Iowa winters.",
    image: "https://images.unsplash.com/photo-1590486803833-2c521674330d?q=80&w=2070&auto=format&fit=crop",
    features: ["Heavy Duty", "Permit Ready"],
  },
  {
    title: "Stamped",
    size: "col-span-1 row-span-1",
    description: "Exquisite decorative patterns.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop",
    features: ["Custom Styles"],
  },
  {
    title: "Patios",
    size: "col-span-1 row-span-2",
    description: "Premium outdoor living spaces.",
    image: "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=2070&auto=format&fit=crop",
    features: ["Entertainment Ready"],
  },
  {
    title: "Repairs",
    size: "col-span-1 row-span-1",
    description: "Structural restoration.",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecad13fc?q=80&w=2070&auto=format&fit=crop",
    features: ["Crack Fix", "Resurfacing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Service Excellence</h2>
            <h3 className="font-outfit text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Mastering the <br />
              <span className="text-blue-400">Hardscape Craft.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm mb-4">
            Combining engineering precision with artistic vision to deliver concrete that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} className={service.size} delay={index * 0.1}>
              <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl transition-all hover:border-primary/50">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-outfit text-3xl font-black text-white mb-3 tracking-tighter uppercase">{service.title}</h4>
                      <p className="text-slate-300 max-w-xs mb-6 font-medium leading-relaxed group-hover:text-white transition-colors">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map(f => (
                          <span key={f} className="text-[10px] font-black uppercase tracking-widest bg-primary/20 text-blue-300 px-3 py-1 rounded-full border border-primary/20">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
