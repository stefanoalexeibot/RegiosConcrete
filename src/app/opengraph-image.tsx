import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Regios Concrete LLC — Iowa's #1 Concrete Contractors";
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
        {/* Amber glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Blue glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top row — badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: "10px 20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            />
            <span style={{ color: "#94a3b8", fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
              TOP-RATED · IOWA
            </span>
          </div>
        </div>

        {/* Center — main text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 0.9,
                letterSpacing: -4,
              }}
            >
              Precision.
            </span>
            <span
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: "#f59e0b",
                lineHeight: 0.9,
                letterSpacing: -4,
                fontStyle: "italic",
              }}
            >
              Crafted for Life.
            </span>
          </div>
          <span
            style={{
              fontSize: 24,
              color: "#94a3b8",
              fontWeight: 500,
              maxWidth: 600,
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            Iowa&apos;s premier concrete artisans. Driveways, patios, stamped concrete &amp; commercial flatwork.
          </span>
        </div>

        {/* Bottom row — company + phone */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>
              REGIOS CONCRETE LLC
            </span>
            <span style={{ color: "#f59e0b", fontSize: 16, fontWeight: 700, letterSpacing: 1 }}>
              regiosconcrete.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#f59e0b",
              borderRadius: 16,
              padding: "16px 28px",
            }}
          >
            <span style={{ color: "#000000", fontSize: 22, fontWeight: 900 }}>
              (515) 721-6852
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
