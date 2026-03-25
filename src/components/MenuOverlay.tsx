"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/", bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" },
  { name: "Services", href: "/#services", bgImage: "https://images.unsplash.com/photo-1590486803833-2c521674330d?q=80&w=2070&auto=format&fit=crop" },
  { name: "Gallery", href: "/gallery", bgImage: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop" },
  { name: "Portfolio", href: "/#portfolio", bgImage: "https://images.unsplash.com/photo-1516216628859-9bccecad13fc?q=80&w=2070&auto=format&fit=crop" },
  { name: "Process", href: "/#process", bgImage: "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=2070&auto=format&fit=crop" },
  { name: "Contact", href: "/#contact", bgImage: "https://images.unsplash.com/photo-1533227268428-f9ed0900e0a5?q=80&w=2070&auto=format&fit=crop" },
];

const serviceLinks = [
  { name: "Driveways", href: "/services/driveways" },
  { name: "Stamped Concrete", href: "/services/stamped" },
  { name: "Patios", href: "/services/patios" },
  { name: "Commercial", href: "/services/commercial" },
];

const menuVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const linkContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
    },
  },
};

const linkVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
  },
  exit: { 
    y: "-100%", 
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
  },
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] bg-[#020617] text-white overflow-hidden flex flex-col"
        >
          {/* Background Overlay Decor */}
          <div className="absolute inset-0 z-0 bg-[#020617] pointer-events-none transition-colors duration-1000">
            <AnimatePresence>
              {hoveredLink && (
                <motion.div 
                  key={hoveredLink}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 z-0"
                >
                  <Image 
                    src={hoveredLink} 
                    alt="Background" 
                    fill 
                    className="object-cover grayscale mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 font-outfit font-black text-[25vw] pointer-events-none whitespace-nowrap z-0 max-w-full truncate mix-blend-difference">
            REGIOS
          </div>

          {/* Header */}
          <div className="container mx-auto px-4 md:px-6 py-5 md:py-8 flex justify-between items-center relative z-10">
            <Link href="/" onClick={onClose}>
              <div className="relative w-36 h-12 md:w-56 md:h-20" data-cursor="hover">
                <Image
                  src="/images/LOGO.png"
                  alt="Regios Concrete"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex items-center gap-2 group hover:text-amber-500 transition-colors"
            >
              <span className="hidden sm:block text-sm font-bold uppercase tracking-widest">Close</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </div>

          {/* Menu Main Content */}
          <div className="flex-1 container mx-auto px-4 md:px-6 flex flex-col justify-center relative z-10 pb-4">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end h-full w-full max-w-6xl mx-auto gap-12 lg:gap-0 mt-10 md:mt-20">
              
              {/* Navigation Links */}
              <motion.div 
                variants={linkContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-2 md:gap-4"
              >
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div variants={linkVariants}>
                      <Link 
                        href={link.href}
                        onClick={() => {
                          onClose();
                          setHoveredLink(null);
                        }}
                        onMouseEnter={() => setHoveredLink(link.bgImage)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group flex items-center gap-6 font-outfit text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter hover:text-amber-500 transition-colors"
                      >
                        <span className="text-sm font-mono text-white/30 tracking-widest mb-6 lg:mb-10 w-8">{`0${i + 1}`}</span>
                        {link.name}
                        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-10 translate-y-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-amber-500" />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col gap-10 mt-12 lg:mt-0"
              >
                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Contact Info</h4>
                  <a href="mailto:regiosconcrete@outlook.com" className="block text-xl md:text-2xl font-medium hover:text-amber-500 transition-colors mb-2">
                    regiosconcrete@outlook.com
                  </a>
                  <a href="tel:+15157216852" className="block text-xl md:text-2xl font-medium hover:text-amber-500 transition-colors">
                    (515) 721-6852
                  </a>
                </div>

                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Location</h4>
                  <p className="text-xl font-medium text-white max-w-xs">
                    Serving all of Iowa with premium concrete solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Services</h4>
                  <ul className="flex flex-col gap-2">
                    {serviceLinks.map((s) => (
                      <li key={s.name}>
                        <Link
                          href={s.href}
                          onClick={() => { onClose(); }}
                          className="text-slate-400 hover:text-amber-500 transition-colors text-base font-medium flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors"></span>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Social</h4>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/regiosconcrete" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all font-bold text-xs uppercase tracking-widest">
                      IG
                    </a>
                    <a href="https://facebook.com/RegiosConcreteLLC" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all font-bold text-xs uppercase tracking-widest">
                      FB
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Menu Footer */}
          <div className="container mx-auto px-4 md:px-6 py-5 border-t border-white/10 flex justify-between items-center relative z-10">
            <div className="relative w-28 h-10 md:w-40 md:h-14">
              <Image
                src="/images/LOGO.png"
                alt="Regios Concrete"
                fill
                className="object-contain object-left opacity-60"
              />
            </div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em]">
              Iowa&apos;s Premier Concrete Artisans
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
