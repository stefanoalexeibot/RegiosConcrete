import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const IowaMap = () => (
  <div className="relative w-full rounded-3xl bg-[#030a18] border border-amber-500/20 overflow-hidden" style={{ aspectRatio: "16/10" }}>
    {/* Scanline grid */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />

    {/* Iowa SVG map */}
    <svg viewBox="0 0 300 188" className="absolute inset-0 w-full h-full p-5" aria-label="Iowa statewide coverage map">
      <defs>
        <filter id="glow-state">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-dot">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="iowa-fill" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
        </radialGradient>
      </defs>

      {/* Iowa state outline */}
      <path
        d="M 24,22 L 268,15 L 278,40 L 270,54 L 278,73 L 283,94 L 281,165 L 190,171 L 97,168 L 24,164 L 9,141 L 11,101 L 13,61 L 19,37 Z"
        fill="url(#iowa-fill)"
        stroke="rgba(245,158,11,0.65)"
        strokeWidth="1.5"
        filter="url(#glow-state)"
      />

      {/* Des Moines — capital, main pulse */}
      <circle cx="155" cy="131" r="4" fill="#f59e0b" filter="url(#glow-dot)" />
      <circle cx="155" cy="131" r="9" fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.6">
        <animate attributeName="r" values="9;20;9" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="131" r="16" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="16;28;16" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* Cedar Rapids */}
      <circle cx="220" cy="99" r="2.5" fill="#f59e0b" opacity="0.75" filter="url(#glow-dot)" />
      {/* Davenport */}
      <circle cx="270" cy="116" r="2.5" fill="#f59e0b" opacity="0.75" filter="url(#glow-dot)" />
      {/* Sioux City */}
      <circle cx="28" cy="64" r="2.5" fill="#f59e0b" opacity="0.75" filter="url(#glow-dot)" />
      {/* Waterloo */}
      <circle cx="200" cy="78" r="2.5" fill="#f59e0b" opacity="0.75" filter="url(#glow-dot)" />
      {/* Iowa City */}
      <circle cx="237" cy="119" r="2.5" fill="#f59e0b" opacity="0.75" filter="url(#glow-dot)" />
      {/* Ames */}
      <circle cx="155" cy="108" r="2" fill="#f59e0b" opacity="0.5" filter="url(#glow-dot)" />
    </svg>

    {/* Top label */}
    <div className="absolute top-4 left-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500/60">Coverage Area</span>
    </div>

    {/* Bottom info */}
    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
      <div>
        <span className="block font-outfit font-black text-3xl text-amber-400 leading-none tracking-widest">IOWA</span>
        <span className="block text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mt-1">Statewide Service</span>
      </div>
      <div className="text-right">
        <span className="block text-amber-500 font-black text-xl font-outfit">500+</span>
        <span className="block text-white/30 text-[10px] font-bold uppercase tracking-widest">Projects</span>
      </div>
    </div>

    {/* Corner amber glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-white pb-10 border-t border-white/5" id="footer">

      {/* ─── LET'S BUILD. — Hero CTA con imagen ─── */}
      <div className="relative overflow-hidden py-28 md:py-44">
        {/* Imagen de fondo */}
        <Image
          src="/images/gallery/patio-after-03.jpeg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          aria-hidden="true"
        />
        {/* Gradiente negro — igual que el Hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />
        {/* Glow amber abajo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/10 rounded-[100%] blur-[120px] pointer-events-none z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">Start Your Project</h2>
          <div className="font-outfit text-[18vw] font-black text-white leading-[0.8] tracking-tighter mb-12 w-full overflow-hidden flex flex-col items-center">
            <span className="block hover:text-amber-500 transition-colors duration-500 cursor-default">LET&apos;S</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 hover:scale-105 transition-transform duration-500 cursor-default">BUILD.</span>
          </div>
          <Link
            href="tel:+15157216852"
            className="group relative bg-white text-black font-black text-xl md:text-2xl px-12 py-6 rounded-full flex items-center gap-4 overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-amber-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 italic">Call Us Today</span>
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center relative z-10 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 border-t border-white/10 pt-12 md:pt-16">
          {/* Brand + Services */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <div>
              <h4 className="font-outfit text-3xl font-black mb-3 tracking-tighter">
                REGIOS <span className="text-amber-500 italic">CONCRETE</span>
              </h4>
              <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
                Iowa&apos;s premier concrete artisans. We combine military precision with artistic vision to build work that lasts generations.
              </p>
            </div>

            {/* Quick service links */}
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Our Services</h5>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  { name: "Driveways", href: "/services/driveways" },
                  { name: "Stamped Concrete", href: "/services/stamped" },
                  { name: "Patios", href: "/services/patios" },
                  { name: "Commercial", href: "/services/commercial" },
                ].map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm font-medium"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors"></span>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Get In Touch</h4>
            <a
              href="tel:+15157216852"
              className="group flex items-center gap-4 hover:text-amber-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold">(515) 721-6852</span>
            </a>
            <a
              href="mailto:regiosconcrete@outlook.com"
              className="group flex items-center gap-4 hover:text-amber-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium break-all">regiosconcrete@outlook.com</span>
            </a>

            {/* Socials */}
            <div className="mt-2">
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Follow</h5>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/RegiosConcreteLLC"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all font-bold text-xs"
                >FB</a>
                <a
                  href="https://instagram.com/regiosconcrete"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent transition-all font-bold text-xs"
                >IG</a>
              </div>
            </div>
          </div>

          {/* Iowa SVG Map */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Coverage Area</h4>
            <IowaMap />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© {currentYear} Regios Concrete LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
