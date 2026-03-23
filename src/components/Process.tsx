"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Search, FileText, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Onsite Estimate",
    description: "Héctor Martínez visits your property for a precision measurement and professional evaluation.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Custom Planning",
    description: "We select the perfect mix and finish, from standard driveways to exquisite stamped designs.",
    icon: FileText,
    color: "bg-primary",
  },
  {
    title: "Expert Pouring",
    description: "Our team executes with military precision, focusing on levels, durability, and aesthetics.",
    icon: Hammer,
    color: "bg-secondary",
  },
  {
    title: "Perfect Finish",
    description: "Curing and sealing to ensure your investment stays beautiful in the Iowa climate.",
    icon: Sparkles,
    color: "bg-blue-300",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h2>
          <h3 className="font-outfit text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
            Precision in every <br />
            <span className="text-primary italic">Square Inch.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.15}>
              <div className="relative group">
                <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-24 w-full h-px border-t-2 border-dashed border-slate-200 -z-10"></div>
                )}
                
                <h4 className="font-outfit text-2xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                
                <div className="mt-6 flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Step {index + 1}</span>
                  <div className="w-10 h-px bg-primary"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
