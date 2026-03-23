"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Des Moines",
    content: "The stamped concrete patio Regios built for us is a work of art. Héctor was professional, on time, and the quality is beyond anything we expected.",
    stars: 5,
  },
  {
    name: "Michael Ross",
    role: "Property Manager",
    content: "We've used Regios for multiple commercial sidewalks. Their attention to levels and drainage is impressive. Reliable and highly recommended.",
    stars: 5,
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    content: "Regios Concrete understands aesthetics. They helped me design a custom garage floor that perfectly matches the rest of the home's style.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Referrals</h2>
            <h3 className="font-outfit text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
              Trusted by <br />
              <span className="text-secondary italic">Iowans.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our reputation is built on solid results. See why homeowners and businesses across the state trust Regios Concrete LLC.
            </p>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-bold text-slate-900">5.0 / 5.0 Rating</span>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex flex-col gap-6">
              {testimonials.map((t, index) => (
                <motion.div 
                  key={t.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-blue-950/5 transition-all"
                >
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100 group-hover:text-blue-200 transition-colors" />
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-700 italic mb-6 leading-relaxed">&quot;{t.content}&quot;</p>
                  <div>
                    <h4 className="font-outfit text-lg font-black text-slate-900">{t.name}</h4>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
