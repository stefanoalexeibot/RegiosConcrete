"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Tyler B.",
    role: "Homeowner · Ames, Iowa",
    date: "February 2025",
    photo: "/images/testimonials/client-01.jpg",
    content: "Héctor and his crew poured our new driveway and it came out perfect. Clean edges, great finish, and they cleaned up after themselves. Couldn't ask for more.",
    stars: 5,
  },
  {
    name: "Jake & Kara M.",
    role: "Homeowners · Cedar Rapids",
    date: "November 2024",
    photo: "/images/testimonials/client-02.jpg",
    content: "We got a stamped patio done for our backyard and everyone who comes over asks about it. Regios Concrete did an amazing job — fair price and super professional.",
    stars: 5,
  },
  {
    name: "Randy H.",
    role: "Farm Owner · Des Moines",
    date: "January 2025",
    photo: "/images/testimonials/client-03.jpg",
    content: "Had them pour a concrete pad for my equipment on the farm. Solid work, showed up on time, and Héctor was great to work with. Will use them again for sure.",
    stars: 5,
  },
  {
    name: "Brandon C.",
    role: "Homeowner · Ankeny",
    date: "March 2025",
    photo: "/images/testimonials/client-04.jpg",
    content: "Got my garage floor done and the epoxy finish is incredible. The team was fast, professional, and the result is better than I imagined. Highly recommend.",
    stars: 5,
  },
  {
    name: "Chris W.",
    role: "Homeowner · Iowa City",
    date: "December 2024",
    photo: "/images/testimonials/client-05.jpg",
    content: "Regios replaced our cracked driveway and added a walkway to the front door. Everything looks brand new. Great communication from start to finish.",
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
        <h3 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto">
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
              className="w-[88vw] sm:w-[380px] md:w-[400px] flex-shrink-0 bg-slate-50 border border-slate-100 p-7 md:p-10 rounded-[2rem] md:rounded-[3rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 w-16 h-16 text-blue-100/50 group-hover:text-primary/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base md:text-xl text-slate-700 font-medium italic mb-6 md:mb-8 leading-relaxed whitespace-normal">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-2 border-white">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
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

      {/* Google Reviews CTA */}
      <div className="container mx-auto px-4 md:px-6 mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://g.page/r/REPLACE_WITH_YOUR_GOOGLE_PLACE_ID/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg text-slate-800 font-black text-sm px-7 py-4 rounded-2xl transition-all shadow-md"
        >
          {/* Google "G" logo */}
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Leave Us a Google Review
        </a>
        <p className="text-slate-400 text-sm">Your review helps other Iowa homeowners find us.</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}
