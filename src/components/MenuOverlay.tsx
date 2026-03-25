"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
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
          className="fixed inset-0 z-[100] bg-[#020617] text-white overflow-y-auto flex flex-col"
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
                {/* Logo above contact info */}
                <div className="relative w-36 h-12 md:w-48 md:h-16">
                  <Image
                    src="/images/LOGO.png"
                    alt="Regios Concrete"
                    fill
                    className="object-contain object-left"
                  />
                </div>

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
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Services</h4>
                  <ul className="flex flex-col divide-y divide-white/5">
                    {serviceLinks.map((s, i) => (
                      <li key={s.name}>
                        <Link
                          href={s.href}
                          onClick={() => { onClose(); }}
                          className="group flex items-center justify-between py-3 transition-all duration-300 hover:pl-1"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-amber-500/40 group-hover:text-amber-500 transition-colors">{`0${i + 1}`}</span>
                            <span className="text-white/60 group-hover:text-white font-medium text-sm transition-colors">{s.name}</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Social</h4>
                  <div className="flex gap-3">
                    <a href="https://instagram.com/regiosconcrete" target="_blank" rel="noreferrer" aria-label="Instagram"
                      className="group w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/RegiosConcreteLLC" target="_blank" rel="noreferrer" aria-label="Facebook"
                      className="group w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
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
