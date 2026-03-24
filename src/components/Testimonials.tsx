"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Des Moines",
    date: "January 2025",
    avatarColor: "bg-violet-500",
    content: "The stamped concrete patio Regios built for us is a work of art. Héctor was professional, on time, and the quality is beyond anything we expected.",
    stars: 5,
  },
  {
    name: "Michael Ross",
    role: "Property Manager",
    date: "October 2024",
    avatarColor: "bg-emerald-600",
    content: "We've used Regios for multiple commercial sidewalks. Their attention to levels and drainage is impressive. Reliable and highly recommended.",
    stars: 5,
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    date: "March 2025",
    avatarColor: "bg-rose-500",
    content: "Regios Concrete understands aesthetics. They helped me design a custom garage floor that perfectly matches the rest of the home's style.",
    stars: 5,
  },
  {
    name: "David Wilson",
    role: "Business Owner",
    date: "December 2024",
    avatarColor: "bg-amber-600",
    content: "Foundations are everything. Regios delivered exactly what we needed for our warehouse expansion. Fast, solid, and professional.",
    stars: 5,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Referrals</h2>
        <h3 className="font-outfit text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto">
          Built on Trust. <br />
          <span className="text-primary italic">Preferred by Iowans.</span>
        </h3>
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
          ))}
          <span className="ml-2 font-bold text-slate-900">5.0 / 5.0 Precision Rating</span>
        </div>
      </div>

      {/* Screen-reader accessible testimonials */}
      <ul className="sr-only">
        {testimonials.map((t) => (
          <li key={t.name}>
            <blockquote>
              <p>{t.content}</p>
              <footer>{t.name}, {t.role} — {t.date}</footer>
            </blockquote>
          </li>
        ))}
      </ul>

      <div className="relative flex overflow-hidden py-10" aria-hidden="true">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {marqueeItems.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="w-[400px] flex-shrink-0 bg-slate-50 border border-slate-100 p-10 rounded-[3rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 w-16 h-16 text-blue-100/50 group-hover:text-primary/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-700 font-medium italic mb-8 leading-relaxed whitespace-normal">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${t.avatarColor} rounded-full flex items-center justify-center font-outfit font-black text-white text-lg shadow-lg`}>
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-outfit text-lg font-black text-slate-900">{t.name}</h4>
                    <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}
