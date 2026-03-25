import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import SocialProofToast from "@/components/SocialProofToast";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://www.regiosconcrete.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Regios Concrete LLC | Iowa's #1 Concrete Contractors",
    template: "%s | Regios Concrete LLC",
  },
  description:
    "Iowa's top-rated concrete contractors. Driveways, patios, stamped concrete & commercial flatwork in Des Moines, Cedar Rapids, Ames & across Iowa. 500+ satisfied clients. Free estimates.",
  keywords: [
    "concrete contractors Iowa",
    "concrete driveway Des Moines",
    "stamped concrete Iowa",
    "concrete patio Cedar Rapids",
    "commercial concrete Iowa",
    "concrete contractor Ames Iowa",
    "concrete company Iowa",
    "Regios Concrete",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Regios Concrete LLC",
    title: "Regios Concrete LLC | Iowa's #1 Concrete Contractors",
    description:
      "Iowa's top-rated concrete contractors. Driveways, patios, stamped concrete & commercial flatwork across Iowa. 500+ satisfied clients.",
    images: [
      {
        url: "/images/gallery/driveway-after-05.jpeg",
        width: 1200,
        height: 630,
        alt: "Regios Concrete LLC — Iowa's Premier Concrete Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regios Concrete LLC | Iowa's #1 Concrete Contractors",
    description: "Iowa's top-rated concrete contractors. Free estimates. Call (515) 721-6852.",
    images: ["/images/gallery/driveway-after-05.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Regios Concrete LLC",
  "description": "Iowa's premier concrete artisans. Specialized in high-end residential and commercial flatwork, stamping, and foundations.",
  "telephone": "+15157216852",
  "email": "regiosconcrete@outlook.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "IA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Iowa"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Concrete Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Driveway Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stamped Concrete" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Patio Construction" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Concrete" } }
    ]
  },
  "priceRange": "$$",
  "sameAs": ["https://facebook.com/RegiosConcreteLLC"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans relative`}
      >
        <Preloader />
        <SocialProofToast />
        <WhatsAppButton />
        <SmoothScroll>
          <NoiseOverlay />
          
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
