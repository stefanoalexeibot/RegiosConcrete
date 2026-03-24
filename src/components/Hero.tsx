"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Award, ShieldCheck, MapPin } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

// ─── AnimatedCounter ──────────────────────────────────────────────────────────
function AnimatedCounter({
  to,
  suffix = "",
  delayMs = 0,
}: {
  to: number;
  suffix?: string;
  delayMs?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1600;
      const startTime = performance.now();
      const frame = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * to));
        if (progress < 1) requestAnimationFrame(frame);
        else setValue(to);
      };
      requestAnimationFrame(frame);
    }, delayMs);
    return () => clearTimeout(timeout);
  }, [to, delayMs]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  { label: "Satisfied Clients", num: 500, suffix: "+", text: null },
  { label: "Years Experience", num: 10, suffix: "+", text: null },
  { label: "Project Success", num: 100, suffix: "%", text: null },
  { label: "Service Areas", num: null, suffix: "", text: "Iowa" },
] as const;

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textVariants = {
    hidden: { y: "150%", rotate: 5, opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { ease: [0.76, 0, 0.24, 1] as [number, number, number, number], duration: 1.2 },
    },
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center pt-24 md:pt-32 lg:pt-48 pb-36 md:pb-40 overflow-hidden bg-slate-950"
    >
      {/* ─── Background ─── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 bg-slate-950">
        <Image
          src="/images/hero_concrete_landscape.png"
          alt="Regios Concrete Hero Showcase"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Reduced via opacity so image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-transparent to-[#020617]/40 z-10" />
      </motion.div>

      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Floating blobs + perspective grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            transform: "rotateX(60deg) translateY(-200px)",
          }}
        />
      </div>

      {/* ─── Main content ─── */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-blue-100 px-5 py-2.5 rounded-full text-sm font-bold mb-8"
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary border border-slate-900 flex items-center justify-center">
                <ShieldCheck className="w-3 h-3" />
              </div>
              <div className="w-6 h-6 rounded-full bg-secondary border border-slate-900 flex items-center justify-center">
                <Award className="w-3 h-3" />
              </div>
            </div>
            <span className="opacity-80">Top-Rated Concrete Experts in</span>
            <span className="flex items-center gap-1 text-secondary font-black">
              <MapPin className="w-3 h-3" /> IOWA
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
            initial="hidden"
            animate="visible"
            className="font-outfit text-[11vw] sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black text-white leading-[0.9] mb-6 md:mb-8 tracking-tighter"
          >
            <div className="overflow-hidden pb-2 lg:pb-4">
              <motion.span
                variants={textVariants}
                className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600"
              >
                Precision.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={textVariants} className="block text-white">
                Crafted for Life.
              </motion.span>
            </div>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium"
          >
            Elevate your home with Iowa&apos;s premier concrete artisans. We don&apos;t just pour
            concrete; we build foundations for your future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 relative z-20"
          >
            <MagneticButton>
              <Link
                href="#contact"
                className="group relative bg-gradient-to-b from-primary to-blue-700 text-white text-base md:text-xl font-black px-8 md:px-12 py-4 md:py-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_70px_-10px_rgba(59,130,246,1)] active:scale-95 border border-blue-400/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  Get a Free Estimate{" "}
                  <ArrowRight className="inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </MagneticButton>
            <Link
              href="tel:+15157216852"
              aria-label="Call us at (515) 721-6852"
              className="bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-xl text-white text-base font-bold px-8 py-4 rounded-2xl border border-white/10 flex items-center justify-center gap-3 transition-all hover:border-white/20 shadow-xl self-center"
            >
              <Phone className="w-4 h-4 text-blue-400" aria-hidden="true" />
              (515) 721-6852
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ─── Stats bar — pinned to bottom, above gradient ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 z-20 pb-5 md:pb-7"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#020617]/90 backdrop-blur-md px-4 py-4 md:px-7 md:py-5 flex flex-col"
              >
                {/* Amber accent line */}
                <span className="block w-6 h-[2px] bg-amber-500/60 mb-3" />
                <span className="font-outfit font-black text-xl md:text-3xl text-amber-400 leading-none tracking-tight">
                  {stat.text != null ? (
                    stat.text
                  ) : (
                    <AnimatedCounter
                      to={stat.num as number}
                      suffix={stat.suffix}
                      delayMs={1300 + i * 130}
                    />
                  )}
                </span>
                <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient — behind stats bar (z-10 < z-20) */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
