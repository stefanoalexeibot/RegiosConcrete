"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does a concrete driveway or patio take?",
    a: "Most residential projects take 1–3 days of active work. After the pour, concrete needs 24–48 hours before light foot traffic and 7 days before vehicle traffic. Full cure is 28 days, though it reaches ~80% strength in the first week.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — always. Héctor will visit your property, assess the project, and give you a detailed written quote at no cost and with zero obligation.",
  },
  {
    q: "Do you work year-round in Iowa?",
    a: "We work spring through late fall. Concrete should not be poured when temperatures drop below 40°F consistently, as it affects the cure. We schedule projects accordingly and will let you know the best window for your area.",
  },
  {
    q: "How much does a concrete driveway cost?",
    a: "Pricing depends on size, thickness, finish, and site conditions. As a general range, residential driveways run $6–$12 per square foot. Stamped or decorative concrete is higher. Contact us for an accurate quote — we don't believe in one-size-fits-all pricing.",
  },
  {
    q: "What's the difference between stamped and regular concrete?",
    a: "Regular concrete is poured and finished smooth or brushed. Stamped concrete uses textured molds pressed into the surface before it cures, creating patterns that mimic stone, brick, slate, or wood — at a fraction of the cost of those materials.",
  },
  {
    q: "Do you handle commercial projects?",
    a: "Yes. We work on parking lots, warehouse slabs, commercial sidewalks, loading docks, and foundations. Commercial jobs are quoted separately based on scope and timeline requirements.",
  },
  {
    q: "Is there a warranty on your work?",
    a: "We stand behind everything we pour. If a defect results from our workmanship — not normal weathering or ground movement — we will make it right. Ask Héctor about warranty terms during your estimate.",
  },
  {
    q: "How do I maintain my new concrete?",
    a: "Seal it every 2–3 years to protect against moisture and staining. Avoid de-icing salts the first winter. Clean spills promptly. Stamped concrete benefits from re-sealing more frequently to maintain color and sheen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — sticky heading */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-32">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">FAQ</p>
              <h2 className="font-outfit text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-6">
                Questions <br />
                <span className="text-primary italic">Answered.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Everything you need to know before starting your project. Still have questions? Héctor is one call away.
              </p>
              <a
                href="tel:+15157216852"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-primary text-white font-black px-7 py-4 rounded-2xl transition-all duration-300 text-sm uppercase tracking-widest"
              >
                Call Héctor
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:w-3/5 flex flex-col divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span className={`font-outfit font-black text-lg md:text-xl leading-snug transition-colors duration-200 ${open === i ? "text-primary" : "text-slate-900 group-hover:text-primary"}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${open === i ? "border-primary bg-primary text-white" : "border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary"}`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 text-base md:text-lg leading-relaxed pb-7 max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
