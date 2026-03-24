"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/5 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex flex-col group relative z-50">
              <div className="relative w-32 h-10 md:w-40 md:h-12 overflow-hidden">
                <Image 
                  src="/images/LOGO.png" 
                  alt="Regios Concrete Logo" 
                  fill
                  className="object-contain object-left drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                />
              </div>
            </Link>

            {/* Menu Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 group relative z-50 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/10 pr-2 pl-4 py-1.5 hover:bg-white/10 transition-all hover:border-amber-500/50"
            >
               <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">Menu</span>
               <div className="w-8 h-8 bg-amber-500 text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Menu className="w-4 h-4" />
               </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
