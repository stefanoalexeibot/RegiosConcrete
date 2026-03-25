import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services: Record<string, { title: string; headline: string; accent: string; tagline: string }> = {
  driveways: {
    title: "Concrete Driveways",
    headline: "Military-Grade.",
    accent: "Iowa-Ready.",
    tagline: "Built to survive Iowa winters and outlast every driveway on your block.",
  },
  patios: {
    title: "Outdoor Patios",
    headline: "Premium",
    accent: "Outdoor Living.",
    tagline: "Turn your backyard into the best room in the house.",
  },
  stamped: {
    title: "Stamped Concrete",
    headline: "Where Art",
    accent: "Meets Engineering.",
    tagline: "Premium patterns, permanent color — at a fraction of natural stone cost.",
  },
  commercial: {
    title: "Commercial Concrete",
    headline: "Structural Integrity.",
    accent: "Business Grade.",
    tagline: "Large-scale flatwork delivered on schedule, built to code, built to last.",
  },
};

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services[slug];
  return [{ id: slug, alt: svc ? `${svc.title} — Regios Concrete Iowa` : "Regios Concrete LLC" }];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services[slug] ?? services.driveways;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Top — service label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 2, background: "#f59e0b" }} />
          <span style={{ color: "#f59e0b", fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
            REGIOS CONCRETE — IOWA
          </span>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 0.9,
              letterSpacing: -4,
            }}
          >
            {svc.headline}
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#f59e0b",
              lineHeight: 0.9,
              letterSpacing: -4,
              fontStyle: "italic",
            }}
          >
            {svc.accent}
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#94a3b8",
              fontWeight: 500,
              maxWidth: 580,
              lineHeight: 1.5,
              marginTop: 12,
            }}
          >
            {svc.tagline}
          </span>
        </div>

        {/* Bottom — company + cta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 900, letterSpacing: -1 }}>
              REGIOS CONCRETE LLC
            </span>
            <span style={{ color: "#64748b", fontSize: 15, fontWeight: 600, letterSpacing: 1 }}>
              regiosconcrete.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#f59e0b",
              borderRadius: 14,
              padding: "14px 26px",
            }}
          >
            <span style={{ color: "#000000", fontSize: 20, fontWeight: 900 }}>
              Free Estimate →
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
