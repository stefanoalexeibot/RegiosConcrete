import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const CoverageBlock = () => {
  const cities = [
    "Des Moines", "Cedar Rapids", "Davenport",
    "Sioux City", "Iowa City", "Waterloo",
    "Ames", "Council Bluffs", "Ankeny",
  ];
  return (
    <div className="flex flex-col gap-6">
      {/* Big IOWA stamp */}
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 flex items-end justify-between">
        <div>
          <span className="block font-outfit font-black text-[4.5rem] leading-none tracking-tighter text-white/5 select-none absolute inset-0 flex items-center px-4 pointer-events-none text-[9rem]">
            IA
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500/60 block mb-2">Serving</span>
          <span className="font-outfit font-black text-4xl text-white leading-none tracking-tight">All of<br /><span className="text-amber-400">Iowa</span></span>
        </div>
        <div className="text-right">
          <span className="block font-outfit font-black text-5xl text-amber-400 leading-none">500+</span>
          <span className="block text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">Projects done</span>
        </div>
      </div>

      {/* City list */}
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-3">Cities we&apos;ve worked in</span>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <span
              key={city}
              className="text-xs font-bold text-white/50 border border-white/10 rounded-full px-3 py-1 hover:border-amber-500/40 hover:text-amber-400 transition-colors cursor-default"
            >
              {city}
            </span>
          ))}
          <span className="text-xs font-bold text-amber-500/60 border border-amber-500/20 rounded-full px-3 py-1">
            + more
          </span>
        </div>
      </div>
    </div>
  );
};

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
          className="object-cover object-center opacity-60"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />
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
              <div className="relative w-48 h-16 md:w-64 md:h-20 mb-4">
                <Image
                  src="/images/LOGO.png"
                  alt="Regios Concrete"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
                Iowa&apos;s premier concrete artisans. We combine military precision with artistic vision to build work that lasts generations.
              </p>
            </div>

            {/* Quick service links */}
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Our Services</h5>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "Driveways", href: "/services/driveways", num: "01" },
                  { name: "Stamped Concrete", href: "/services/stamped", num: "02" },
                  { name: "Patios", href: "/services/patios", num: "03" },
                  { name: "Commercial", href: "/services/commercial", num: "04" },
                ].map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      className="group flex items-center justify-between border-b border-white/5 hover:border-amber-500/40 py-3 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-amber-500/40 group-hover:text-amber-500 transition-colors">{s.num}</span>
                        <span className="text-white/70 group-hover:text-white font-medium text-sm tracking-wide transition-colors">{s.name}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-amber-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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

          {/* Coverage Block */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Coverage Area</h4>
            <CoverageBlock />
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
