import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Award, ShieldCheck, MapPin } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Cinematic Video Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 bg-slate-950"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/25/86274-593649987_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-[#020617]/40 to-[#020617]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent"></div>
      </motion.div>

      {/* Floating Elements / Decals */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-0"></div>

      {/* Floating 3D-effect elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        />
        
        {/* Animated Grid lines for 3D perspective */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
               perspective: '1000px',
               transform: 'rotateX(60deg) translateY(-200px)'
             }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-blue-100 px-5 py-2.5 rounded-full text-sm font-bold mb-8"
          >
            <div className="flex -space-x-2">
               <div className="w-6 h-6 rounded-full bg-primary border border-slate-900 flex items-center justify-center"><ShieldCheck className="w-3 h-3" /></div>
               <div className="w-6 h-6 rounded-full bg-secondary border border-slate-900 flex items-center justify-center"><Award className="w-3 h-3" /></div>
            </div>
            <span className="opacity-80">Top-Rated Concrete Experts in</span>
            <span className="flex items-center gap-1 text-secondary font-black">
              <MapPin className="w-3 h-3" /> IOWA
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-outfit text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-8 tracking-tighter"
          >
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Precision.</span>
            Crafted for <br />
            Life.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            Elevate your home with Iowa&apos;s premier concrete artisans. We don&apos;t just pour concrete; we build foundations for your future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 relative z-20"
          >
            <MagneticButton>
              <Link 
                href="#contact" 
                className="group relative bg-gradient-to-b from-primary to-blue-700 text-white text-lg font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.9)] active:scale-95 border border-blue-400/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center gap-3">Get a Free Estimate <ArrowRight className="inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </MagneticButton>
            <Link 
              href="tel:+15157216852" 
              className="bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-xl text-white text-lg font-bold px-10 py-5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 transition-all hover:border-white/20 shadow-xl"
            >
              <Phone className="w-5 h-5 text-blue-400" />
              (515) 721-6852
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Satisfied Clients", val: "500+" },
              { label: "Years Experience", val: "10+" },
              { label: "Project Success", val: "100%" },
              { label: "Service Areas", val: "Iowa Statewide" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-white/10 pl-5">
                <span className="text-white text-2xl font-black font-outfit">{stat.val}</span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
