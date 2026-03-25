import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Project Gallery — Regios Concrete LLC Iowa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 2, background: "#f59e0b" }} />
          <span style={{ color: "#f59e0b", fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
            OUR WORK · IOWA
          </span>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 0.9,
              letterSpacing: -4,
            }}
          >
            The Real
          </span>
          <span
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "#f59e0b",
              lineHeight: 0.9,
              letterSpacing: -4,
              fontStyle: "italic",
            }}
          >
            Results.
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#94a3b8",
              fontWeight: 500,
              maxWidth: 580,
              lineHeight: 1.5,
              marginTop: 16,
            }}
          >
            85+ concrete projects across Iowa — driveways, stamped patios, commercial flatwork &amp; more.
          </span>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 900, letterSpacing: -1 }}>
              REGIOS CONCRETE LLC
            </span>
            <span style={{ color: "#64748b", fontSize: 15, fontWeight: 600, letterSpacing: 1 }}>
              regiosconcrete.com/gallery
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "14px 26px",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 18, fontWeight: 700 }}>
              View Gallery →
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
