"use client";

import Script from "next/script";

// ─── Replace with your real GA4 Measurement ID ───────────────────────────────
// Find it at: analytics.google.com → Admin → Data Streams → your stream
const GA_ID = "G-XXXXXXXXXX";

export default function GoogleAnalytics() {
  if (GA_ID === "G-XXXXXXXXXX") return null; // Don't load until ID is set

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
