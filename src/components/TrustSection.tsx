"use client";

import { ShieldCheck, Award, ThumbsUp, MapPin, Star, Heart } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: Award, text: "Certified Craftsmanship" },
  { icon: ThumbsUp, text: "Top Rated in Iowa" },
  { icon: MapPin, text: "Local Family Owned" },
  { icon: Star, text: "5-Star Reviews" },
  { icon: Heart, text: "Customer Obsessed" },
];

// Duplicate for seamless loop
const row = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

export default function TrustSection() {
  return (
    <section className="py-12 bg-[#020617] relative border-y border-white/5 overflow-hidden">
      {/* Screen-reader summary */}
      <ul className="sr-only">
        {trustItems.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>

      {/* Concrete texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}
      />

      <div className="relative z-10 flex flex-col gap-6 overflow-hidden" aria-hidden="true">
        {/* Row 1 — left */}
        <div className="flex">
          <div
            className="flex items-center gap-12 shrink-0"
            style={{ animation: "marquee-left 30s linear infinite", willChange: "transform" }}
          >
            {row.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <item.icon className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-white font-outfit font-black text-xl md:text-2xl uppercase tracking-tighter opacity-80 whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex">
          <div
            className="flex items-center gap-12 shrink-0"
            style={{ animation: "marquee-right 30s linear infinite", willChange: "transform" }}
          >
            {row.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6">
                <span className="text-white/20 font-outfit font-black text-2xl md:text-4xl uppercase tracking-tighter whitespace-nowrap">
                  {item.text}
                </span>
                <div className="w-2 h-2 rounded-full bg-amber-500/50 mx-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge masks */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
