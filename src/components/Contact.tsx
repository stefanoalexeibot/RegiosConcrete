"use client";

import { useState } from "react";
import { Phone, Mail, User, CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormStatus = "idle" | "submitting" | "success";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "Driveway Installation",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.message.trim()) e.message = "Please describe your project";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");

    const subject = encodeURIComponent(
      `Quote Request: ${formData.service} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Héctor,\n\nI'd like to request a quote.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:regiosconcrete@outlook.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 800);
  };

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
                  <User className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300 uppercase tracking-widest text-xs mb-1">Expert Contact</h4>
                  <p className="text-xl font-bold font-outfit">Héctor Martínez</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
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
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
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
                aria-label="Regios Concrete on Facebook"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/regiosconcrete"
                target="_blank"
                rel="noreferrer"
                aria-label="Regios Concrete on Instagram"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-widest underline underline-offset-4 decoration-primary decoration-2">
                Follow our work
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl text-slate-900 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold leading-none animate-pulse rotate-12 shadow-xl shadow-secondary/30" aria-hidden="true">
              <div className="text-center">
                <span className="block text-2xl font-black">Free</span>
                <span className="block text-xs uppercase tracking-tighter">Estimate</span>
              </div>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" aria-hidden="true" />
                <h4 className="font-outfit text-3xl font-black text-slate-900 mb-3">Message Ready!</h4>
                <p className="text-slate-500 text-lg mb-8">
                  Your email client has opened with your request pre-filled. Héctor will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", phone: "", service: "Driveway Installation", message: "" });
                  }}
                  className="text-primary font-bold underline underline-offset-4 hover:text-primary/70 transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <h4 className="font-outfit text-3xl font-black mb-2">Request Quote</h4>
                <p className="text-slate-500 mb-8">Fill out the form and we&apos;ll get back to you shortly.</p>

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-2">
                        Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 font-semibold">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700 mb-2">
                        Phone <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.phone ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                        placeholder="(515) 123-4567"
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-500 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                    >
                      <option>Driveway Installation</option>
                      <option>New Patio</option>
                      <option>Stamped Concrete</option>
                      <option>Repair &amp; Restoration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.message ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500 font-semibold">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-black text-lg py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
