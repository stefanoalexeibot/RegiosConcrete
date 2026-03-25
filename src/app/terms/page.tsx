import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Regios Concrete LLC — the terms governing use of our website and concrete services.",
  alternates: { canonical: "https://www.regiosconcrete.com/terms" },
  robots: { index: false },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing our website at regiosconcrete.com or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.

These terms apply to all visitors, clients, and others who access or use our website or hire Regios Concrete LLC for any project.`,
  },
  {
    title: "Services Provided",
    body: `Regios Concrete LLC provides concrete contractor services in the state of Iowa, including but not limited to:

• Concrete driveway installation and replacement
• Outdoor patio construction
• Stamped and decorative concrete
• Commercial flatwork and foundations
• Concrete repair and sealing

All services are subject to a separate written or verbal agreement between the client and Regios Concrete LLC, including a detailed estimate and project scope.`,
  },
  {
    title: "Estimates & Quotes",
    body: `All estimates provided — whether in person, by phone, by email, or via our website form — are non-binding unless confirmed in a signed written contract or agreement.

Estimates are based on information available at the time of the quote. Final pricing may be adjusted if site conditions, material costs, or project scope differ from what was originally presented. We will communicate any changes before proceeding with additional work.`,
  },
  {
    title: "Payment Terms",
    body: `Payment terms are established on a per-project basis and will be communicated clearly before work begins. In general:

• A deposit may be required before project start
• Final payment is due upon project completion
• Accepted payment methods will be confirmed at time of estimate

Failure to make payment as agreed may result in suspension of work or legal action to recover amounts owed.`,
  },
  {
    title: "Project Timelines",
    body: `Project start dates and timelines are estimates and may be affected by weather conditions, material availability, permit processing times, and other factors outside our control. Regios Concrete LLC is not liable for delays caused by circumstances beyond our reasonable control.

We will keep you informed of any significant scheduling changes.`,
  },
  {
    title: "Client Responsibilities",
    body: `As a client, you agree to:

• Provide accurate information about the project site and scope
• Ensure the work area is accessible on scheduled dates
• Obtain any required HOA approvals before work begins
• Not interfere with or alter the work during curing periods
• Notify us promptly of any concerns during or after the project`,
  },
  {
    title: "Workmanship Warranty",
    body: `Regios Concrete LLC stands behind our work. We offer a workmanship warranty on completed projects. The specific warranty terms (duration and coverage) will be communicated in your project agreement.

This warranty covers defects in workmanship. It does not cover:

• Damage caused by misuse, neglect, or improper maintenance
• Natural cracking due to tree roots, ground movement, or acts of nature
• Damage from heavy vehicles or equipment beyond the rated load capacity
• Surface wear from de-icing salts or chemicals not recommended by us`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, Regios Concrete LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website.

Our total liability to you for any claim arising out of or relating to our services shall not exceed the amount you paid us for the project in question.`,
  },
  {
    title: "Website Use",
    body: `Our website is provided for informational purposes only. You may not use our website to:

• Distribute spam or unsolicited communications
• Attempt to gain unauthorized access to any part of our systems
• Engage in any activity that disrupts or interferes with the website

We reserve the right to block access to users who violate these terms.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, photos, videos, logos, and design — is the property of Regios Concrete LLC or used with permission. You may not reproduce, distribute, or use our content without prior written consent.

Project photos may be used by Regios Concrete LLC for portfolio, marketing, and social media purposes unless you expressly request otherwise before the project begins.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service are governed by the laws of the State of Iowa, United States of America, without regard to its conflict of law principles. Any disputes shall be resolved in the courts of the State of Iowa.`,
  },
  {
    title: "Changes to These Terms",
    body: `We reserve the right to update these Terms of Service at any time. Changes take effect immediately upon posting to this page. Your continued use of our website or services constitutes acceptance of the revised terms.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms of Service, contact us at:

Regios Concrete LLC
Phone: (515) 721-6852
Email: regiosconcrete@outlook.com
Service Area: Iowa, USA`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="container mx-auto px-4 md:px-6 pt-36 pb-24 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors mb-12 group text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">Legal</span>
          <h1 className="font-outfit font-black text-4xl sm:text-6xl tracking-tighter text-white mt-3 leading-[0.9]">
            Terms of Service
          </h1>
          <p className="text-slate-400 mt-4 text-sm">
            Effective date: March 24, 2026 &nbsp;·&nbsp; Regios Concrete LLC
          </p>
        </div>

        <p className="text-slate-300 text-base leading-relaxed mb-12 border-l-2 border-amber-500/40 pl-5">
          Please read these Terms of Service carefully before using our website or engaging our concrete services. These terms outline your rights and responsibilities as a client or visitor.
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-white/[0.06] pb-10 last:border-0">
              <h2 className="font-outfit font-black text-xl text-white mb-4 flex items-center gap-3">
                <span className="text-amber-500/50 font-mono text-sm font-normal">{String(i + 1).padStart(2, "0")}</span>
                {section.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <span className="text-slate-500 text-xs">© 2026 Regios Concrete LLC. All rights reserved.</span>
          <Link href="/privacy" className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
