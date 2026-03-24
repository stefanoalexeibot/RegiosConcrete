import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      
      <Services />
      
      <Portfolio />
      
      <Process />
      
      {/* About Section - Premium Redesign */}
      <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="lg:w-1/2">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
                  <div className="relative z-10 p-4 bg-slate-900 rounded-[3.5rem] shadow-2xl rotate-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem]">
                      <Image
                        src="/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.07 PM.jpeg"
                        alt="Regios Concrete — Quality Work"
                        fill
                        className="object-cover hover:grayscale transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 bg-primary p-5 md:p-8 rounded-3xl shadow-2xl border-4 border-white">
                      <span className="block text-2xl md:text-4xl font-black text-white font-outfit tracking-tighter">10+</span>
                      <span className="block text-xs font-bold text-white/80 uppercase tracking-widest mt-1">Years of Mastery</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-1/2">
              <ScrollReveal direction="right">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</h2>
                <h3 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-[0.95] tracking-tighter">
                  Solid Foundation, <br />
                  <span className="text-primary italic">Better Future.</span>
                </h3>
                <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
                  Led by H&eacute;ctor Mart&iacute;nez, Regios Concrete LLC is a family-owned powerhouse serving Iowa. We combine old-world craftsmanship with modern technology to deliver concrete that is as beautiful as it is durable.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 md:mb-12">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary font-black text-3xl md:text-5xl font-outfit tracking-tighter italic">IOWA</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Primary Coverage Area</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-primary font-black text-3xl md:text-5xl font-outfit tracking-tighter italic">PRCSN</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Precision Standard</span>
                  </div>
                </div>
                
                <Link 
                  href="tel:+15157216852" 
                  className="group inline-flex items-center gap-4 text-lg md:text-2xl font-black text-slate-900 transition-all"
                >
                  <span className="group-hover:text-primary transition-colors">Talk with Héctor</span>
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white group-hover:rotate-45 transition-transform shadow-xl shadow-blue-500/20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
