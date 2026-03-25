"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, User, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import ActiveViewers from "./ActiveViewers";

// ─── Step data ────────────────────────────────────────────────────────────────
const services = [
  { id: "driveway", label: "Driveway", icon: "🚗", desc: "New pour or replacement" },
  { id: "patio", label: "Patio", icon: "🏡", desc: "Backyard & outdoor spaces" },
  { id: "stamped", label: "Stamped Concrete", icon: "✦", desc: "Decorative patterns & textures" },
  { id: "commercial", label: "Commercial", icon: "🏗️", desc: "Business & large-scale projects" },
  { id: "repair", label: "Repair", icon: "🔧", desc: "Crack & surface restoration" },
  { id: "other", label: "Other", icon: "💬", desc: "Tell us what you need" },
];

const sizes = [
  { id: "small", label: "Small", sub: "Under 500 sq ft" },
  { id: "medium", label: "Medium", sub: "500 – 1,500 sq ft" },
  { id: "large", label: "Large", sub: "1,500 – 3,000 sq ft" },
  { id: "xlarge", label: "Extra Large", sub: "3,000+ sq ft" },
  { id: "unsure", label: "Not sure", sub: "We'll help you figure it out" },
];

const timelines = [
  { id: "asap", label: "ASAP", sub: "As soon as possible" },
  { id: "month", label: "This month", sub: "Within 30 days" },
  { id: "quarter", label: "Next 3 months", sub: "Planning ahead" },
  { id: "flexible", label: "Flexible", sub: "No rush" },
];

type StepData = {
  service: string;
  size: string;
  timeline: string;
  name: string;
  phone: string;
  notes: string;
};

const TOTAL_STEPS = 3;

export default function Contact() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<StepData>({
    service: "", size: "", timeline: "", name: "", phone: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSubmit = () => {
    const serviceLabel = services.find(s => s.id === data.service)?.label ?? data.service;
    const sizeLabel = sizes.find(s => s.id === data.size)?.label ?? data.size;
    const timelineLabel = timelines.find(t => t.id === data.timeline)?.label ?? data.timeline;

    const subject = encodeURIComponent(`Quote Request: ${serviceLabel} — ${data.name}`);
    const body = encodeURIComponent(
      `Hi Héctor,\n\nNew quote request:\n\nService: ${serviceLabel}\nProject Size: ${sizeLabel}\nTimeline: ${timelineLabel}\nName: ${data.name}\nPhone: ${data.phone}\nNotes: ${data.notes || "None"}`
    );
    window.location.href = `mailto:regiosconcrete@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const canNext = () => {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.size && !!data.timeline;
    if (step === 3) return !!data.name.trim() && !!data.phone.trim();
    return false;
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ─── Left col ─── */}
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="font-outfit text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
              Ready to Start Your <span className="text-secondary">Project?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-xl">
              Don&apos;t wait to improve your property. Contact H&eacute;ctor Mart&iacute;nez today for a professional, no-obligation estimate on your next concrete project in Iowa.
            </p>

            <div className="space-y-8">
              {[
                { icon: <User className="w-6 h-6 text-primary group-hover:text-white" />, label: "Expert Contact", value: "Héctor Martínez", href: undefined },
                { icon: <Phone className="w-6 h-6 text-primary group-hover:text-white" />, label: "Call for Estimate", value: "(515) 721-6852", href: "tel:+15157216852" },
                { icon: <Mail className="w-6 h-6 text-primary group-hover:text-white" />, label: "Email Us", value: "regiosconcrete@outlook.com", href: "mailto:regiosconcrete@outlook.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-300 uppercase tracking-widest text-xs mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold font-outfit hover:text-secondary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-xl font-bold font-outfit">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a href="https://facebook.com/RegiosConcreteLLC" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/regiosconcrete" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all hover:scale-110">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-widest underline underline-offset-4 decoration-primary decoration-2">Follow our work</span>
            </div>
          </div>

          {/* ─── Right col — multi-step form ─── */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl text-slate-900 relative overflow-hidden">

            {/* Active viewers */}
            <div className="mb-6">
              <ActiveViewers variant="light" />
            </div>

            {/* Free badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold leading-none animate-pulse rotate-12 shadow-xl shadow-secondary/30" aria-hidden="true">
              <div className="text-center">
                <span className="block text-2xl font-black">Free</span>
                <span className="block text-xs uppercase tracking-tighter">Estimate</span>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                <h4 className="font-outfit text-3xl font-black text-slate-900 mb-3">Request Sent!</h4>
                <p className="text-slate-500 text-lg mb-8">Héctor will get back to you shortly.</p>
                <button onClick={() => { setSubmitted(false); setStep(1); setData({ service: "", size: "", timeline: "", name: "", phone: "", notes: "" }); }}
                  className="text-primary font-bold underline underline-offset-4 hover:text-primary/70 transition-colors">
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {step} of {TOTAL_STEPS}</span>
                    <span className="text-xs font-bold text-primary">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    {/* ── Step 1: Service ── */}
                    {step === 1 && (
                      <motion.div key="step1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                        <h4 className="font-outfit text-2xl font-black mb-1">What do you need?</h4>
                        <p className="text-slate-400 text-sm mb-6">Select the service you&apos;re interested in.</p>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => setData(d => ({ ...d, service: s.id }))}
                              className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 ${data.service === s.id
                                ? "border-primary bg-primary/5"
                                : "border-slate-100 hover:border-slate-200 bg-slate-50"}`}
                            >
                              <span className="text-2xl block mb-1">{s.icon}</span>
                              <span className="font-black text-sm text-slate-900 block">{s.label}</span>
                              <span className="text-xs text-slate-400">{s.desc}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 2: Details ── */}
                    {step === 2 && (
                      <motion.div key="step2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                        <h4 className="font-outfit text-2xl font-black mb-1">Project details</h4>
                        <p className="text-slate-400 text-sm mb-5">Help us understand the scope.</p>

                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Approximate size</p>
                        <div className="grid grid-cols-1 gap-2 mb-6">
                          {sizes.map((s) => (
                            <button key={s.id} onClick={() => setData(d => ({ ...d, size: s.id }))}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all text-left ${data.size === s.id ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200 bg-slate-50"}`}>
                              <span className="font-bold text-sm text-slate-900">{s.label}</span>
                              <span className="text-xs text-slate-400">{s.sub}</span>
                            </button>
                          ))}
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">When do you need it?</p>
                        <div className="grid grid-cols-2 gap-2">
                          {timelines.map((t) => (
                            <button key={t.id} onClick={() => setData(d => ({ ...d, timeline: t.id }))}
                              className={`px-4 py-3 rounded-xl border-2 transition-all text-left ${data.timeline === t.id ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200 bg-slate-50"}`}>
                              <span className="font-bold text-sm text-slate-900 block">{t.label}</span>
                              <span className="text-xs text-slate-400">{t.sub}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 3: Contact info ── */}
                    {step === 3 && (
                      <motion.div key="step3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit">
                        <h4 className="font-outfit text-2xl font-black mb-1">Your contact info</h4>
                        <p className="text-slate-400 text-sm mb-6">We&apos;ll reach out to schedule your free estimate.</p>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                            <input type="text" value={data.name} onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                              placeholder="Your name"
                              className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium outline-none transition-colors" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number *</label>
                            <input type="tel" value={data.phone} onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
                              placeholder="(515) 123-4567"
                              className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium outline-none transition-colors" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Additional notes <span className="normal-case font-normal text-slate-400">(optional)</span></label>
                            <textarea rows={3} value={data.notes} onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
                              placeholder="Anything else we should know..."
                              className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium outline-none transition-colors resize-none" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <button onClick={() => go(step - 1)}
                      className="flex items-center gap-2 px-5 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  )}
                  {step < TOTAL_STEPS ? (
                    <button onClick={() => go(step + 1)} disabled={!canNext()}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary disabled:opacity-40 hover:bg-primary/90 text-white font-black text-sm py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} disabled={!canNext()}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary disabled:opacity-40 hover:bg-primary/90 text-white font-black text-sm py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all">
                      Send Request <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
