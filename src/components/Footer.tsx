import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-white pt-32 pb-10 overflow-hidden border-t border-white/5" id="footer">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">Start Your Project</h2>
          <div className="font-outfit text-[18vw] font-black text-white leading-[0.8] tracking-tighter mb-12 w-full overflow-hidden flex flex-col items-center">
            <span className="block hover:text-amber-500 transition-colors duration-500 cursor-default">LET&apos;S</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 hover:scale-105 transition-transform duration-500 cursor-default">BUILD.</span>
          </div>
          
          <Link href="tel:+15157216852" className="group relative bg-white text-black font-black text-xl md:text-2xl px-12 py-6 rounded-full flex items-center gap-4 overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]">
            <div className="absolute inset-0 bg-amber-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 italic">Call Us Today</span>
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center relative z-10 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-t border-white/10 pt-16">
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-outfit text-3xl font-black mb-6 tracking-tighter">REGIOS <span className="text-amber-500 italic">CONCRETE</span></h4>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              Iowa&apos;s premier concrete artisans. We combine military precision with artistic vision.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-outfit text-xl font-bold mb-6 text-white/50 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4">
              <li><a href="mailto:info@regiosconcrete.com" className="text-white hover:text-amber-500 transition-colors text-lg font-medium">info@regiosconcrete.com</a></li>
              <li><a href="tel:+15157216852" className="text-white hover:text-amber-500 transition-colors text-lg font-medium">(515) 721-6852</a></li>
              <li className="text-slate-400 text-lg">Des Moines, IOWA</li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-outfit text-xl font-bold mb-6 text-white/50 tracking-wide uppercase text-sm">Socials</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com/RegiosConcreteLLC" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all font-bold text-xs uppercase tracking-widest">
                FB
              </a>
              <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all font-bold text-xs uppercase tracking-widest">
                IG
              </a>
            </div>
          </div>
        </div>

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
