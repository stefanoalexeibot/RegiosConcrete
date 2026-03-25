import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas — Iowa Concrete Contractors",
  description:
    "Regios Concrete LLC serves all of Iowa — Des Moines, Cedar Rapids, Iowa City, Ames, Davenport, Sioux City & more. Top-rated concrete driveways, patios & commercial flatwork. Free estimates.",
  keywords: [
    "concrete contractor Des Moines Iowa",
    "concrete contractor Cedar Rapids Iowa",
    "concrete contractor Ames Iowa",
    "concrete contractor Iowa City Iowa",
    "concrete contractor Davenport Iowa",
    "concrete contractor Sioux City Iowa",
    "Iowa concrete company",
    "concrete near me Iowa",
  ],
  openGraph: {
    title: "Iowa Concrete Contractors — Service Areas | Regios Concrete LLC",
    description:
      "Serving all of Iowa. Driveways, patios, stamped concrete & commercial flatwork in Des Moines, Cedar Rapids, Ames & beyond.",
    images: [{ url: "/images/gallery/commercial-after-01.jpeg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.regiosconcrete.com/areas" },
};

const primaryCities = [
  {
    city: "Des Moines",
    county: "Polk County",
    slug: "des-moines",
    services: ["Concrete Driveways", "Stamped Patios", "Commercial Flatwork"],
    description:
      "Iowa's capital city is our home base. We've completed 200+ projects across Des Moines — from Beaverdale driveways to Ankeny commercial pads.",
  },
  {
    city: "Cedar Rapids",
    county: "Linn County",
    slug: "cedar-rapids",
    services: ["Concrete Driveways", "Outdoor Patios", "Stamped Concrete"],
    description:
      "Iowa's second-largest city. We serve all Cedar Rapids neighborhoods including NE, SW, and Marion with same-crew precision work.",
  },
  {
    city: "Iowa City",
    county: "Johnson County",
    slug: "iowa-city",
    services: ["Residential Concrete", "Patio Installation", "Sidewalks"],
    description:
      "Home of the Hawkeyes and some of Iowa's most demanding homeowners. We deliver university-town quality on every project.",
  },
  {
    city: "Ames",
    county: "Story County",
    slug: "ames",
    services: ["Driveways", "Garage Aprons", "Commercial Concrete"],
    description:
      "Serving Ames homeowners and commercial clients around Iowa State University. Fast turnaround, zero compromise on quality.",
  },
  {
    city: "Davenport",
    county: "Scott County",
    slug: "davenport",
    services: ["Concrete Driveways", "Stamped Concrete", "Patios"],
    description:
      "Quad Cities area coverage. We serve Davenport, Bettendorf, and surrounding Scott County with our full concrete service lineup.",
  },
  {
    city: "Sioux City",
    county: "Woodbury County",
    slug: "sioux-city",
    services: ["Driveways", "Patios", "Commercial Flatwork"],
    description:
      "Western Iowa coverage. Sioux City and surrounding communities served by our experienced crew with the same Iowa-standard craftsmanship.",
  },
];

const additionalCities = [
  "Ankeny", "West Des Moines", "Urbandale", "Johnston", "Waukee",
  "Clive", "Grimes", "Altoona", "Norwalk", "Indianola",
  "Waterloo", "Council Bluffs", "Dubuque", "Mason City", "Ottumwa",
  "Burlington", "Clinton", "Fort Dodge", "Marshalltown", "Newton",
  "Coralville", "North Liberty", "Solon", "Tipton", "Washington",
  "Boone", "Ames", "Story City", "Nevada", "Huxley",
];

const services = [
  { label: "Concrete Driveways", href: "/services/driveways" },
  { label: "Outdoor Patios", href: "/services/patios" },
  { label: "Stamped Concrete", href: "/services/stamped" },
  { label: "Commercial Flatwork", href: "/services/commercial" },
];

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-[#020617] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
              <MapPin className="w-3 h-3" />
              Service Coverage
            </span>
            <h1 className="font-outfit font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white">
                We Serve
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 italic">
                All of Iowa.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
              From Des Moines to Sioux City, Regios Concrete LLC brings Iowa&apos;s highest-rated
              concrete craftsmanship to your neighborhood. No job too big, no city too far.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-b from-blue-600 to-blue-800 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
              >
                Get a Free Estimate
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
      </section>

      {/* ─── SERVICES QUICK LINKS ─── */}
      <section className="py-10 border-y border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Services:</span>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-500/40 px-4 py-2 rounded-full"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIMARY CITIES ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">Primary Service Areas</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
              Major Iowa Cities <span className="text-white/30">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryCities.map((city) => (
              <div
                key={city.city}
                className="group bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-amber-500/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-outfit font-black text-2xl text-white group-hover:text-amber-400 transition-colors">
                      {city.city}
                    </h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">
                      {city.county}
                    </p>
                  </div>
                  <MapPin className="w-5 h-5 text-amber-500/60 shrink-0 mt-1" />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {city.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {city.services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {svc}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all"
                >
                  Get Estimate for {city.city}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL CITIES ─── */}
      <section className="py-16 md:py-24 bg-[#030b1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">All Service Locations</span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
              Don&apos;t see your city?{" "}
              <span className="text-white/30">We&apos;re likely there too.</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl">
              We travel across Iowa for the right project. If your city isn&apos;t listed below, call us — chances are we serve your area.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {additionalCities.map((city) => (
              <span
                key={city}
                className="text-slate-300 text-sm font-medium bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2"
              >
                {city}, IA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US / SEO TEXT BLOCK ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">Why Iowa Chooses Us</span>
              <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tighter mt-3">
                Iowa&apos;s Top-Rated{" "}
                <span className="text-amber-400 italic">Concrete Crew</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 text-base leading-relaxed">
              <div>
                <h3 className="font-outfit font-black text-white text-xl mb-3">
                  Concrete Driveways Across Iowa
                </h3>
                <p>
                  Regios Concrete LLC has poured over 500 concrete driveways throughout Iowa. Our fiber-reinforced mix and properly placed expansion joints are engineered specifically for Iowa&apos;s freeze-thaw cycles — the #1 cause of driveway failure in the midwest.
                </p>
              </div>
              <div>
                <h3 className="font-outfit font-black text-white text-xl mb-3">
                  Stamped Patios in Des Moines &amp; Beyond
                </h3>
                <p>
                  Stamped concrete is one of the most requested upgrades for Iowa homeowners. We offer 50+ pattern styles and UV-stable color systems that stay vibrant through hot Iowa summers and harsh winters — at a fraction of natural stone cost.
                </p>
              </div>
              <div>
                <h3 className="font-outfit font-black text-white text-xl mb-3">
                  Commercial Concrete in Cedar Rapids
                </h3>
                <p>
                  Our commercial division delivers large-scale flatwork on time and to spec. From warehouse floors in Cedar Rapids to parking lots in Ames, we coordinate with general contractors to minimize business disruption.
                </p>
              </div>
              <div>
                <h3 className="font-outfit font-black text-white text-xl mb-3">
                  Iowa City &amp; Johnson County
                </h3>
                <p>
                  University towns demand precision. We&apos;ve completed dozens of projects in Iowa City, Coralville, and North Liberty — residential driveways, stamped patios, and multi-family concrete work. Same crew, same quality, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-32 bg-[#030b1a]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
            <span className="w-6 h-px bg-amber-500" />
            Ready to Start?
            <span className="w-6 h-px bg-amber-500" />
          </span>
          <h2 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-4">
            Free estimates
          </h2>
          <h2 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 italic">
            anywhere in Iowa.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-black font-black text-lg px-10 py-5 rounded-2xl hover:bg-amber-400 transition-all shadow-2xl"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+15157216852"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              (515) 721-6852
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
