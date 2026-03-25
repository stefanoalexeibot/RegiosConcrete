import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center relative z-10 max-w-2xl">
        {/* Big 404 watermark */}
        <div className="font-outfit font-black text-[30vw] sm:text-[200px] text-white/[0.03] leading-none select-none mb-0 -mb-8">
          404
        </div>

        <span className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
          <span className="w-6 h-px bg-amber-500" />
          Page Not Found
          <span className="w-6 h-px bg-amber-500" />
        </span>

        <h1 className="font-outfit font-black text-4xl sm:text-6xl text-white tracking-tighter leading-[0.9] mb-4">
          This page got<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 italic">
            demolished.
          </span>
        </h1>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Looks like the page you&apos;re looking for doesn&apos;t exist.<br />
          Let&apos;s get you back on solid ground.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-b from-blue-600 to-blue-800 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="tel:+15157216852"
            className="inline-flex items-center justify-center gap-3 border border-white/10 text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/5 transition-all"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            (515) 721-6852
          </Link>
        </div>
      </div>
    </div>
  );
}
