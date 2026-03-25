import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iowa Service Areas — Regios Concrete LLC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const cities = ["Des Moines", "Cedar Rapids", "Iowa City", "Ames", "Davenport", "Sioux City"];

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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 2, background: "#f59e0b" }} />
          <span style={{ color: "#f59e0b", fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
            SERVICE COVERAGE
          </span>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 0.9,
              letterSpacing: -4,
            }}
          >
            We Serve
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
            All of Iowa.
          </span>

          {/* City pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
            {cities.map((city) => (
              <div
                key={city}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  padding: "8px 18px",
                  color: "#cbd5e1",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {city}, IA
              </div>
            ))}
            <div
              style={{
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: 999,
                padding: "8px 18px",
                color: "#f59e0b",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              + 30 more cities
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 900, letterSpacing: -1 }}>
              REGIOS CONCRETE LLC
            </span>
            <span style={{ color: "#64748b", fontSize: 15, fontWeight: 600, letterSpacing: 1 }}>
              regiosconcrete.com/areas
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
