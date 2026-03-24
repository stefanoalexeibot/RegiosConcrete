import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import type { Metadata } from "next";

const services = {
  driveways: {
    title: "Concrete Driveways",
    headline: "Military-Grade.",
    headlineAccent: "Iowa-Ready.",
    description:
      "Your driveway takes the hardest punishment of any surface on your property — Iowa winters, heavy vehicles, and constant use. We engineer driveways that don't just look stunning on day one, but stand strong for decades.",
    color: "from-blue-600 to-blue-900",
    features: [
      { title: "Fiber-Reinforced Mix", desc: "Polypropylene fibers added to every pour for superior crack resistance." },
      { title: "Expansion Joints", desc: "Strategically placed to prevent cracking from Iowa freeze-thaw cycles." },
      { title: "Permit Ready", desc: "We handle all city permits and code compliance for your peace of mind." },
      { title: "Sealed Finish", desc: "Premium sealer applied to protect against stains, salt, and UV damage." },
      { title: "Custom Edging", desc: "Decorative borders, exposed aggregate, and broom finishes available." },
      { title: "10-Year Workmanship", desc: "Every driveway backed by our industry-leading guarantee." },
    ],
    images: [
      "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (1).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (1).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (2).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (3).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.16.43 PM (1).jpeg",
    ],
    stat1: { val: "500+", label: "Driveways Poured" },
    stat2: { val: "10yr", label: "Workmanship Guarantee" },
  },
  stamped: {
    title: "Stamped Concrete",
    headline: "Where Art",
    headlineAccent: "Meets Engineering.",
    description:
      "Stamped concrete transforms an ordinary surface into a showpiece. From cobblestone courtyards to slate-look patios, we replicate premium materials at a fraction of the cost — with none of the maintenance.",
    color: "from-amber-600 to-orange-900",
    features: [
      { title: "50+ Pattern Options", desc: "Cobblestone, slate, brick, wood plank, flagstone, and custom designs." },
      { title: "Integrated Color", desc: "Color hardener and release agents for depth and variation that lasts." },
      { title: "Sealed Protection", desc: "Penetrating sealer enhances color and protects for years." },
      { title: "Custom Borders", desc: "Contrasting border bands for an upscale framed look." },
      { title: "Texture Variety", desc: "From smooth ashlar to deep-texture stone, matched to your vision." },
      { title: "UV Stable", desc: "Color stays vibrant through Iowa summers and harsh winters." },
    ],
    images: [
      "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (2).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.09 PM (4).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (1).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (2).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM.jpeg",
    ],
    stat1: { val: "50+", label: "Pattern Styles" },
    stat2: { val: "100%", label: "Custom Design" },
  },
  patios: {
    title: "Outdoor Patios",
    headline: "Premium",
    headlineAccent: "Outdoor Living.",
    description:
      "A well-designed patio extends your living space and adds real value to your home. We design and pour patios that become the heart of your outdoor life — built for Iowa weather and crafted to impress.",
    color: "from-emerald-700 to-slate-900",
    features: [
      { title: "Entertainment Ready", desc: "Engineered for outdoor kitchens, fire pits, furniture, and gatherings." },
      { title: "Custom Shapes", desc: "Curved edges, inlaid patterns, and multi-level designs available." },
      { title: "Drainage Engineering", desc: "Proper slope calculations prevent pooling and water damage." },
      { title: "Stamped Options", desc: "Upgrade any patio with decorative stamping and integrated color." },
      { title: "Durable Finish", desc: "Broom, exposed aggregate, or polished finishes for style and grip." },
      { title: "Lighting Ready", desc: "Conduit installation for low-voltage landscape lighting systems." },
    ],
    images: [
      "/images/gallery/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (3).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (3).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.02.44 PM (4).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (1).jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM/WhatsApp Image 2026-03-23 at 8.03.40 PM (2).jpeg",
    ],
    stat1: { val: "10+", label: "Years Building Patios" },
    stat2: { val: "∞", label: "Design Possibilities" },
  },
  commercial: {
    title: "Commercial Concrete",
    headline: "Structural Integrity.",
    headlineAccent: "Business Grade.",
    description:
      "Commercial projects demand more — tighter schedules, higher load specs, and zero tolerance for rework. Our commercial division delivers large-scale flatwork with the same precision we apply to every residential project.",
    color: "from-slate-600 to-slate-900",
    features: [
      { title: "Heavy Load Design", desc: "Mix designs engineered for forklifts, semi-trucks, and heavy equipment." },
      { title: "Fast Turnaround", desc: "Experienced crew minimizes business disruption and downtime." },
      { title: "ADA Compliant", desc: "All walkways, ramps, and entries meet ADA accessibility standards." },
      { title: "Saw-Cut Joints", desc: "Precision saw-cutting for a clean, professional appearance." },
      { title: "Vapor Barriers", desc: "Proper moisture management for warehouse and industrial floors." },
      { title: "Project Management", desc: "Coordinated scheduling with general contractors and subcontractors." },
    ],
    images: [
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.05.52 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.06.17 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.06.49 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.07.45 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.08.27 PM.jpeg",
      "/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM/WhatsApp Image 2026-03-23 at 8.14.08 PM (4).jpeg",
    ],
    stat1: { val: "50K+", label: "Sq. Ft. Commercial Poured" },
    stat2: { val: "0", label: "Missed Deadlines" },
  },
};

type Slug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as Slug];
  if (!service) return {};
  return {
    title: `${service.title} | Regios Concrete LLC`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as Slug];
  if (!service) notFound();

  const allSlugs = Object.keys(services) as Slug[];
  const otherServices = allSlugs.filter((s) => s !== slug);

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/40" />
        </div>

        {/* Floating orb */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            All Services
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <span className="inline-block text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">
                Regios Concrete — Iowa
              </span>
              <h1 className="font-outfit font-black tracking-tighter leading-[0.9]">
                <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] text-white">
                  {service.headline}
                </span>
                <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 italic">
                  {service.headlineAccent}
                </span>
              </h1>
            </div>

            <div className="flex gap-6 md:gap-8 shrink-0">
              <div className="border-l border-white/10 pl-6">
                <span className="block font-outfit font-black text-2xl md:text-4xl text-white">{service.stat1.val}</span>
                <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{service.stat1.label}</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block font-outfit font-black text-2xl md:text-4xl text-white">{service.stat2.val}</span>
                <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{service.stat2.label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-outfit text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6 md:mb-8">
                What Makes Our <br />
                <span className="text-amber-500 italic">{service.title}</span><br />
                Different
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10">
                {service.description}
              </p>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-primary to-blue-700 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
              >
                Get a Free Estimate
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-white/[0.07] transition-all group"
                >
                  <CheckCircle2 className="w-6 h-6 text-amber-500 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-outfit font-black text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-[#030b1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Work</span>
            <h2 className="font-outfit text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mt-4">
              {service.title} <span className="text-white/30">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {service.images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-slate-900 ${i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
              >
                <Image
                  src={img}
                  alt={`${service.title} project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6 block">Ready to Start?</span>
          <h2 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 md:mb-10">
            Let&apos;s build your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 italic">
              {service.title.toLowerCase()}.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-b from-primary to-blue-700 text-white font-black text-xl px-12 py-6 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="tel:+15157216852"
              className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-black text-xl px-12 py-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5 text-blue-400" aria-hidden="true" />
              (515) 721-6852
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 border-t border-white/5 bg-[#030b1a]">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">Explore Other Services</h3>
          <div className="flex flex-wrap gap-4">
            {otherServices.map((s) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:border-amber-500/40 hover:bg-white/10 transition-all text-sm font-bold capitalize"
              >
                {services[s].title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
