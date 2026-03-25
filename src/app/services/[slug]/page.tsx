import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Star } from "lucide-react";
import type { Metadata } from "next";
import { PageCurtain, HeroFadeUp, FadeUp, ImageWipe } from "@/components/ServicePageTransition";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const services = {
  driveways: {
    title: "Concrete Driveways",
    headline: "Military-Grade.",
    headlineAccent: "Iowa-Ready.",
    tagline: "Built to survive Iowa winters and outlast every driveway on your block.",
    description:
      "Your driveway takes the hardest punishment of any surface on your property — Iowa winters, heavy vehicles, and constant use. We engineer driveways that don't just look stunning on day one, but stand strong for decades.",
    features: [
      { num: "01", title: "Fiber-Reinforced Mix", desc: "Polypropylene fibers added to every pour for superior crack resistance." },
      { num: "02", title: "Expansion Joints", desc: "Strategically placed to prevent cracking from Iowa freeze-thaw cycles." },
      { num: "03", title: "Permit Ready", desc: "We handle all city permits and code compliance for your peace of mind." },
      { num: "04", title: "Sealed Finish", desc: "Premium sealer applied to protect against stains, salt, and UV damage." },
      { num: "05", title: "Custom Edging", desc: "Decorative borders, exposed aggregate, and broom finishes available." },
      { num: "06", title: "10-Year Guarantee", desc: "Every driveway backed by our industry-leading workmanship warranty." },
    ],
    images: [
      "/images/gallery/driveway-after-01.jpeg",
      "/images/gallery/driveway-after-06.jpeg",
      "/images/gallery/driveway-after-07.jpeg",
      "/images/gallery/driveway-after-08.jpeg",
      "/images/gallery/driveway-after-09.jpeg",
      "/images/gallery/driveway-after-10.jpeg",
    ],
    stats: [
      { val: "500+", label: "Driveways Poured" },
      { val: "10yr", label: "Guarantee" },
      { val: "5.0", label: "Star Rating" },
    ],
  },
  stamped: {
    title: "Stamped Concrete",
    headline: "Where Art",
    headlineAccent: "Meets Engineering.",
    tagline: "Premium patterns, permanent color — at a fraction of natural stone cost.",
    description:
      "Stamped concrete transforms an ordinary surface into a showpiece. From cobblestone courtyards to slate-look patios, we replicate premium materials at a fraction of the cost — with none of the maintenance.",
    features: [
      { num: "01", title: "50+ Pattern Options", desc: "Cobblestone, slate, brick, wood plank, flagstone, and custom designs." },
      { num: "02", title: "Integrated Color", desc: "Color hardener and release agents for depth and variation that lasts." },
      { num: "03", title: "Sealed Protection", desc: "Penetrating sealer enhances color and protects for years." },
      { num: "04", title: "Custom Borders", desc: "Contrasting border bands for an upscale framed look." },
      { num: "05", title: "Texture Variety", desc: "From smooth ashlar to deep-texture stone, matched to your vision." },
      { num: "06", title: "UV Stable Color", desc: "Color stays vibrant through Iowa summers and harsh winters." },
    ],
    images: [
      "/images/gallery/stamped-after-01.jpeg",
      "/images/gallery/stamped-after-02.jpeg",
      "/images/gallery/stamped-after-03.jpeg",
      "/images/gallery/stamped-after-04.jpeg",
      "/images/gallery/stamped-after-05.jpeg",
      "/images/gallery/stamped-after-06.jpeg",
    ],
    stats: [
      { val: "50+", label: "Pattern Styles" },
      { val: "100%", label: "Custom Design" },
      { val: "5.0", label: "Star Rating" },
    ],
  },
  patios: {
    title: "Outdoor Patios",
    headline: "Premium",
    headlineAccent: "Outdoor Living.",
    tagline: "Turn your backyard into the best room in the house.",
    description:
      "A well-designed patio extends your living space and adds real value to your home. We design and pour patios that become the heart of your outdoor life — built for Iowa weather and crafted to impress.",
    features: [
      { num: "01", title: "Entertainment Ready", desc: "Engineered for outdoor kitchens, fire pits, furniture, and gatherings." },
      { num: "02", title: "Custom Shapes", desc: "Curved edges, inlaid patterns, and multi-level designs available." },
      { num: "03", title: "Drainage Engineering", desc: "Proper slope calculations prevent pooling and water damage." },
      { num: "04", title: "Stamped Options", desc: "Upgrade any patio with decorative stamping and integrated color." },
      { num: "05", title: "Durable Finish", desc: "Broom, exposed aggregate, or polished finishes for style and grip." },
      { num: "06", title: "Lighting Ready", desc: "Conduit installation for low-voltage landscape lighting systems." },
    ],
    images: [
      "/images/gallery/patio-after-01.jpeg",
      "/images/gallery/patio-after-02.jpeg",
      "/images/gallery/patio-after-03.jpeg",
      "/images/gallery/patio-after-04.jpeg",
      "/images/gallery/patio-after-05.jpeg",
      "/images/gallery/patio-after-06.jpeg",
    ],
    stats: [
      { val: "10+", label: "Years Experience" },
      { val: "∞", label: "Design Options" },
      { val: "5.0", label: "Star Rating" },
    ],
  },
  commercial: {
    title: "Commercial Concrete",
    headline: "Structural Integrity.",
    headlineAccent: "Business Grade.",
    tagline: "Large-scale flatwork delivered on schedule, built to code, built to last.",
    description:
      "Commercial projects demand more — tighter schedules, higher load specs, and zero tolerance for rework. Our commercial division delivers large-scale flatwork with the same precision we apply to every residential project.",
    features: [
      { num: "01", title: "Heavy Load Design", desc: "Mix designs engineered for forklifts, semi-trucks, and heavy equipment." },
      { num: "02", title: "Fast Turnaround", desc: "Experienced crew minimizes business disruption and downtime." },
      { num: "03", title: "ADA Compliant", desc: "All walkways, ramps, and entries meet ADA accessibility standards." },
      { num: "04", title: "Saw-Cut Joints", desc: "Precision saw-cutting for a clean, professional appearance." },
      { num: "05", title: "Vapor Barriers", desc: "Proper moisture management for warehouse and industrial floors." },
      { num: "06", title: "Project Management", desc: "Coordinated scheduling with general contractors and subcontractors." },
    ],
    images: [
      "/images/gallery/commercial-after-01.jpeg",
      "/images/gallery/commercial-after-02.jpeg",
      "/images/gallery/commercial-after-03.jpeg",
      "/images/gallery/commercial-after-04.jpeg",
      "/images/gallery/commercial-after-05.jpeg",
      "/images/gallery/commercial-after-06.jpeg",
    ],
    stats: [
      { val: "50K+", label: "Sq. Ft. Poured" },
      { val: "0", label: "Missed Deadlines" },
      { val: "5.0", label: "Star Rating" },
    ],
  },
};

type Slug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

const serviceKeywords: Record<string, string[]> = {
  driveways: [
    "concrete driveway Iowa",
    "concrete driveway Des Moines",
    "concrete driveway installation Iowa",
    "driveway contractors Iowa",
    "residential concrete Iowa",
  ],
  patios: [
    "concrete patio Iowa",
    "outdoor patio contractor Iowa",
    "concrete patio Des Moines",
    "patio installation Iowa",
    "backyard concrete Iowa",
  ],
  stamped: [
    "stamped concrete Iowa",
    "decorative concrete Iowa",
    "stamped concrete patio Des Moines",
    "stamped concrete contractor Iowa",
    "colored concrete Iowa",
  ],
  commercial: [
    "commercial concrete Iowa",
    "commercial concrete contractor Des Moines",
    "commercial flatwork Iowa",
    "industrial concrete Iowa",
    "warehouse concrete floor Iowa",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as Slug];
  if (!service) return {};
  const keywords = serviceKeywords[slug] ?? [];
  const canonicalUrl = `https://www.regiosconcrete.com/services/${slug}`;
  return {
    title: `${service.title} in Iowa`,
    description: `${service.tagline} Regios Concrete LLC serves Des Moines, Cedar Rapids, Ames & all of Iowa. Free estimates — call (515) 721-6852.`,
    keywords,
    openGraph: {
      title: `${service.title} Iowa | Regios Concrete LLC`,
      description: service.tagline,
      images: [{ url: service.images[0], width: 1200, height: 630, alt: `${service.title} — Regios Concrete Iowa` }],
    },
    alternates: { canonical: canonicalUrl },
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

      {/* ─── Page entrance curtain ─── */}
      <PageCurtain />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        {/* Background image — brighter */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-[#020617]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-transparent to-transparent" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-36">
          {/* Breadcrumb */}
          <HeroFadeUp delay={0}>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12 group"
            >
              <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              All Services
            </Link>
          </HeroFadeUp>

          {/* Heading */}
          <HeroFadeUp delay={0.1} className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
              <span className="w-8 h-px bg-amber-500"></span>
              Regios Concrete — Iowa
            </span>
            <h1 className="font-outfit font-black tracking-tighter leading-[0.88] mb-6">
              <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] text-white">
                {service.headline}
              </span>
              <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 italic">
                {service.headlineAccent}
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl max-w-xl font-medium leading-relaxed">
              {service.tagline}
            </p>
          </HeroFadeUp>

          {/* Stats bar */}
          <HeroFadeUp delay={0.22}>
            <div className="flex flex-wrap gap-px bg-white/10 rounded-2xl overflow-hidden w-fit">
              {service.stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm px-6 py-4 flex flex-col">
                  <span className="font-outfit font-black text-2xl text-white flex items-center gap-1">
                    {stat.val}
                    {stat.val === "5.0" && <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />}
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </HeroFadeUp>
        </div>
      </section>

      {/* ─── OVERVIEW — Split layout ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left — Text */}
            <FadeUp>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
                Precision on every<br />
                <span className="text-amber-500 italic">square inch.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-b from-primary to-blue-800 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
                >
                  Get a Free Estimate
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  href="tel:+15157216852"
                  className="inline-flex items-center justify-center gap-3 border border-white/10 text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  (515) 721-6852
                </Link>
              </div>
            </FadeUp>

            {/* Right — Second image in frame */}
            <ImageWipe className="relative" direction="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={service.images[1]}
                  alt={`${service.title} detail`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 bg-amber-500 text-black font-outfit font-black text-sm px-5 py-3 rounded-2xl shadow-xl shadow-amber-500/30">
                Iowa&apos;s #1 Concrete Crew
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/10 rounded-full" />
              <div className="absolute -top-2 -right-2 w-16 h-16 border border-amber-500/20 rounded-full" />
            </ImageWipe>
          </div>
        </div>
      </section>

      {/* ─── FEATURES — Numbered list style ─── */}
      <section className="py-20 md:py-32 bg-[#030b1a] relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 font-outfit font-black text-[20vw] text-white/[0.015] whitespace-nowrap pointer-events-none select-none">
          FEATURES
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="mb-14">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">What&apos;s Included</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
              Every detail,<br />
              <span className="text-white/40">covered.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden">
            {service.features.map((f, i) => (
              <div
                key={f.title}
                className={`group flex gap-6 p-7 md:p-8 hover:bg-white/[0.04] transition-colors border-white/10
                  ${i % 2 === 0 ? "md:border-r" : ""}
                  ${i < service.features.length - 2 ? "border-b" : ""}
                  ${i === service.features.length - 2 && service.features.length % 2 === 0 ? "md:border-b-0 border-b" : ""}
                `}
              >
                <span className="font-outfit font-black text-4xl text-white/10 group-hover:text-amber-500/30 transition-colors leading-none shrink-0 mt-1">
                  {f.num}
                </span>
                <div>
                  <h3 className="font-outfit font-black text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── BEFORE & AFTER ─── */}
      {(slug === "driveways" || slug === "patios") && (
        <section className="py-20 md:py-32 bg-[#030b1a]">
          <div className="container mx-auto px-4 md:px-6">
            <FadeUp className="mb-10 md:mb-14">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">The Transformation</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
                Before <span className="text-white/30">&</span> After
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <BeforeAfterSlider
                beforeSrc={slug === "driveways" ? "/images/gallery/driveway-before-01.jpeg" : "/images/gallery/patio-before-05.jpeg"}
                afterSrc={slug === "driveways" ? "/images/gallery/driveway-after-12.jpeg" : "/images/gallery/patio-after-48.jpeg"}
              />
            </FadeUp>
          </div>
        </section>
      )}

      {/* ─── GALLERY ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">Our Work</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
                {service.title}<br />
                <span className="text-white/30">Gallery</span>
              </h2>
            </div>
            <span className="text-white/20 font-outfit font-black text-5xl md:text-7xl">{service.images.length}</span>
          </FadeUp>

          {/* Featured image — full width */}
          <FadeUp delay={0.1}>
          <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden mb-4 md:mb-6 group">
            <Image
              src={service.images[0]}
              alt={`${service.title} — featured project`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">Featured Project</span>
            </div>
          </div>
          </FadeUp>

          {/* Remaining images grid */}
          <FadeUp delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {service.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group bg-slate-900"
              >
                <Image
                  src={img}
                  alt={`${service.title} project ${i + 2}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── CTA — With background image ─── */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <Image
          src={service.images[2] ?? service.images[0]}
          alt=""
          fill
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeUp>
          <span className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
            <span className="w-6 h-px bg-amber-500"></span>
            Ready to Start?
            <span className="w-6 h-px bg-amber-500"></span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-4">
            Let&apos;s build your
          </h2>
          <h2 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 italic">
            {service.title.toLowerCase()}.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black font-black text-lg px-10 py-5 rounded-2xl hover:bg-amber-400 transition-all active:scale-[0.98] shadow-2xl"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="tel:+15157216852"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              (515) 721-6852
            </Link>
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── OTHER SERVICES — Image cards ─── */}
      <section className="py-16 md:py-24 bg-[#030b1a]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp>
          <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">Explore Other Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900"
              >
                <Image
                  src={services[s].images[0]}
                  alt={services[s].title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between">
                  <div>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">Service</p>
                    <h4 className="font-outfit font-black text-white text-lg md:text-xl leading-tight">
                      {services[s].title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
