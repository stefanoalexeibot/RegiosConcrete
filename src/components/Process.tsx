"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Search, FileText, Hammer, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Onsite Estimate",
    description: "Héctor Martínez visits your property for a precision measurement and professional evaluation.",
    icon: Search,
    color: "bg-blue-500",
    duration: "Within 24–48 hrs",
  },
  {
    title: "Custom Planning",
    description: "We select the perfect mix and finish, from standard driveways to exquisite stamped designs.",
    icon: FileText,
    color: "bg-primary",
    duration: "1–3 days",
  },
  {
    title: "Expert Pouring",
    description: "Our team executes with military precision, focusing on levels, durability, and aesthetics.",
    icon: Hammer,
    color: "bg-secondary",
    duration: "1–3 days",
  },
  {
    title: "Perfect Finish",
    description: "Curing and sealing to ensure your investment stays beautiful in the Iowa climate.",
    icon: Sparkles,
    color: "bg-blue-300",
    duration: "7 days curing",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#050914] relative overflow-hidden">
      {/* Concrete Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 -z-0"></div>
      
      {/* Brutalist Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h2 className="font-outfit text-[18vw] font-black text-white whitespace-nowrap">METHODOLOGY</h2>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h2>
          <h3 className="font-outfit text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            Precision in every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 italic">Square Inch.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.15}>
              <div className="relative group">
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black/50 group-hover:scale-110 transition-transform border border-white/10 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <step.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.4rem] left-24 w-[calc(100%-1.5rem)] h-2 -z-10 overflow-hidden">
                    <svg width="100%" height="4" preserveAspectRatio="none">
                      <motion.line
                        x1="0"
                        y1="2"
                        x2="100%"
                        y2="2"
                        stroke="#f59e0b" // amber-500
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                )}
                
                <h4 className="font-outfit text-2xl font-black text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{step.description}</p>

                <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span className="text-amber-400 text-xs font-bold tracking-wide">{step.duration}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-amber-500 font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Step {index + 1}</span>
                  <div className="w-10 h-px bg-amber-500"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
