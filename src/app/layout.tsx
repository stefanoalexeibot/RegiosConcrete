import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regios Concrete LLC | Ultra-Premium Concrete Services",
  description: "Iowa's premier concrete artisans. Specialized in high-end residential and commercial flatwork, stamping, and foundations.",
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
