"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, ThumbsUp, MapPin, Star, Heart } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: Award, text: "Certified Craftsmanship" },
  { icon: ThumbsUp, text: "Top Rated in Iowa" },
  { icon: MapPin, text: "Local Family Owned" },
  { icon: Star, text: "5-Star Reviews" },
  { icon: Heart, text: "Customer Obsessed" },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-[#020617] relative border-y border-white/5 overflow-hidden">
      {/* Concrete Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>

      <div className="flex whitespace-nowrap relative z-10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-12"
        >
          {[...trustItems, ...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]">
                <item.icon className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-white font-outfit font-black text-xl uppercase tracking-tighter opacity-80">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
