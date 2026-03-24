import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#020617] relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900 to-[#020617] z-0"></div>
      
      {/* Brutalist Watermark */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.02] z-0 flex justify-center">
        <h2 className="font-outfit text-[18vw] font-black text-white whitespace-nowrap">MASTERPIECES</h2>
      </div>

      <main className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors mb-12 group uppercase tracking-widest text-xs font-bold" data-cursor="hover">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Home
          </Link>
          
          <div className="max-w-4xl mb-16">
            <h1 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Our Work</h1>
            <h2 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              The Real <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 italic">Results.</span>
            </h2>
            <p className="mt-8 text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              Explore our recent projects across Iowa. From stamped patios to military-grade driveways, our craftsmanship speaks for itself.
            </p>
          </div>
        </div>

        <GalleryGrid />
      </main>
    </div>
  );
}
