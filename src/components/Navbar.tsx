"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className={`font-outfit font-bold text-xl md:text-2xl tracking-tighter ${isScrolled ? "text-primary" : "text-white"}`}>
              REGIOS CONCRETE LLC
            </span>
            <span className={`text-[10px] uppercase font-bold tracking-[0.2em] transform -translate-y-1 ${isScrolled ? "text-secondary" : "text-white/80"}`}>
              Quality & Service
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+15157216852"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              (515) 721-6852
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? "text-primary" : "text-white"}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-6 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-800 text-lg font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+15157216852"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Free Estimate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
