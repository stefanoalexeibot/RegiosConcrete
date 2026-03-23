import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
             <Link href="/" className="flex flex-col mb-6">
              <span className="font-outfit font-black text-2xl tracking-tighter text-primary">
                REGIOS CONCRETE LLC
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] transform -translate-y-1 text-secondary">
                Quality & Service
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Professional concrete services in Iowa. We take pride in our work and guarantee high-quality craftsmanship for every residential and commercial project.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/RegiosConcreteLLC" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary shadow-sm hover:shadow-md hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="tel:+15157216852" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary shadow-sm hover:shadow-md hover:scale-110 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-colors">Driveways</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-colors">Sidewalks</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-colors">Patios</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-colors">Stamped Concrete</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-colors">Garage Floors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500">
                <MapPin className="w-5 h-5 text-primary opacity-50 shrink-0" />
                Des Moines, IOWA
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="w-5 h-5 text-primary opacity-50 shrink-0" />
                (515) 721-6852
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail className="w-5 h-5 text-primary opacity-50 shrink-0 overflow-hidden text-ellipsis" />
                regiosconcrete@outlook.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
          <p>© {currentYear} Regios Concrete LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
