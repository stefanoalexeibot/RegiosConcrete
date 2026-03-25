import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const guarantees = [
  "Defects in workmanship repaired at no charge",
  "Fiber-reinforced mix on every residential pour",
  "Properly placed expansion joints — no shortcuts",
  "Premium sealer applied before we leave",
  "We come back. No excuses, no runaround.",
];

export default function GuaranteeSection() {
  return (
    <section className="py-20 md:py-28 bg-[#020617] relative overflow-hidden">
      {/* Amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="border border-amber-500/20 bg-amber-500/5 rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left — shield badge */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/30 mb-5">
              <ShieldCheck className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2">Our Promise</span>
            <h2 className="font-outfit font-black text-5xl md:text-7xl text-white tracking-tighter leading-[0.9]">
              10-Year
            </h2>
            <h2 className="font-outfit font-black text-5xl md:text-7xl text-amber-400 tracking-tighter leading-[0.9] italic">
              Guarantee.
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-xs leading-relaxed">
              Every project we pour is backed by Iowa&apos;s most comprehensive concrete workmanship warranty.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch bg-amber-500/15" />

          {/* Right — what's covered */}
          <div className="flex-1">
            <p className="text-slate-300 text-base font-bold uppercase tracking-widest mb-6">
              What&apos;s Covered
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {guarantees.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-7 py-4 rounded-2xl transition-all shadow-xl shadow-amber-500/20 uppercase tracking-wide"
            >
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
