import { Phone, Mail, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="font-outfit text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              Ready to Start Your <span className="text-secondary">Project?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-xl">
              Don&apos;t wait to improve your property. Contact H&eacute;ctor Mart&iacute;nez today for a professional, no-obligation estimate on your next concrete project in Iowa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors">
                  <User className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 uppercase tracking-widest text-xs mb-1">Expert Contact</h4>
                  <p className="text-xl font-bold font-outfit">Héctor Martínez</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 uppercase tracking-widest text-xs mb-1">Call for Estimate</h4>
                  <a href="tel:+15157216852" className="text-xl font-bold font-outfit hover:text-secondary transition-colors">
                    (515) 721-6852
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 uppercase tracking-widest text-xs mb-1">Email Us</h4>
                  <a href="mailto:regiosconcrete@outlook.com" className="text-xl font-bold font-outfit hover:text-secondary transition-colors">
                    regiosconcrete@outlook.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <a 
                href="https://facebook.com/RegiosConcreteLLC" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-widest underline underline-offset-4 decoration-primary decoration-2">
                Follow our work on Facebook
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl text-slate-900 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold leading-none animate-pulse rotate-12 shadow-xl shadow-secondary/30">
              <div className="text-center">
                <span className="block text-2xl font-black">Free</span>
                <span className="block text-xs uppercase tracking-tighter">Estimate</span>
              </div>
            </div>
            
            <h4 className="font-outfit text-3xl font-black mb-2">Request Quote</h4>
            <p className="text-slate-500 mb-8">Fill out the form and we&apos;ll get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="(515) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>Driveway Installation</option>
                  <option>New Patio</option>
                  <option>Stamped Concrete</option>
                  <option>Repair & Restoration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-black text-lg py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
