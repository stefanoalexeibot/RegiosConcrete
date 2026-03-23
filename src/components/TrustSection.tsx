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
    <section className="py-12 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
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
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20">
                <item.icon className="w-5 h-5 text-primary" />
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
