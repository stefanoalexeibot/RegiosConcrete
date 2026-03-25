import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Regios Concrete LLC — how we collect, use, and protect your information.",
  alternates: { canonical: "https://www.regiosconcrete.com/privacy" },
  robots: { index: false },
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you contact us through our website, by phone, or via WhatsApp, we may collect the following information:

• Your name and contact details (phone number, email address)
• Project details you share with us (address, type of work, photos)
• Communication history between you and Regios Concrete LLC

We do not collect payment information through this website. All payment arrangements are handled directly and securely between you and our team.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information you provide solely to:

• Respond to your estimate requests and inquiries
• Schedule site visits and project consultations
• Communicate project updates and timelines
• Send follow-up communications related to your project

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Phone & WhatsApp Communications",
    body: `When you contact us by phone or WhatsApp at (515) 721-6852, your messages and call history are retained only for the purpose of managing your project. We may use WhatsApp to send project photos, estimates, and scheduling updates.

By initiating contact via WhatsApp, you consent to receiving project-related communications through that platform.`,
  },
  {
    title: "Website Analytics",
    body: `Our website may use basic analytics tools to understand how visitors interact with our site (pages visited, time spent, general location by region). This data is aggregated and anonymous — it cannot be used to identify you personally.

We do not use cookies to track you across other websites.`,
  },
  {
    title: "Data Retention",
    body: `We retain your contact and project information for as long as necessary to complete your project and for a reasonable period afterward in case you need warranty service or wish to work with us again. You may request deletion of your information at any time by contacting us directly.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to:

• Request access to the personal information we hold about you
• Request correction of any inaccurate information
• Request deletion of your information
• Opt out of any future communications

To exercise any of these rights, contact us at regiosconcrete@outlook.com or call (515) 721-6852.`,
  },
  {
    title: "Children's Privacy",
    body: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website or services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about this Privacy Policy, please reach out:

Regios Concrete LLC
Phone: (515) 721-6852
Email: regiosconcrete@outlook.com
Service Area: Iowa, USA`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-400 mt-4 text-sm">
            Effective date: March 24, 2026 &nbsp;·&nbsp; Regios Concrete LLC
          </p>
        </div>

        <p className="text-slate-300 text-base leading-relaxed mb-12 border-l-2 border-amber-500/40 pl-5">
          Regios Concrete LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy explains what information we collect when you use our website or contact us, how we use it, and your rights regarding that information.
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
          <Link href="/terms" className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
