import { ImageResponse } from "next/og";

export const alt =
  "Doctium — An AI-native hospital operating system for African healthcare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded default social-share image (site-wide). Per-post images come later. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0b1424 0%, #163a63 55%, #0e2440 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              display: "flex",
              background: "linear-gradient(135deg, #2f80ed, #8bbbe9)",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            Doctium
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            An AI-native hospital operating system for African healthcare.
          </div>
          <div style={{ fontSize: 26, color: "#8bbbe9" }}>
            Hospital EHR · Telemedicine · Doctium Scribe · Personalized medicine
          </div>
        </div>

        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          doctiumhealth.com
        </div>
      </div>
    ),
    { ...size },
  );
}
