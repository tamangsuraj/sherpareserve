import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sherpa Reserve — The Original Chew, a natural Himalayan churpi dog chew";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide default social card. Individual blog posts override this with their
 * own hero photography via per-route Open Graph image metadata.
 */
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
          backgroundColor: "#0F1F1A",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#C9A86A",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <svg width="64" height="40" viewBox="0 0 120 72" fill="none" stroke="#C9A86A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 60 L42 16 L60 40 L76 22 L114 60" />
            <path d="M6 60 L114 60" opacity="0.4" />
          </svg>
          <span>Sherpa Reserve</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ color: "#C9A86A", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", display: "flex" }}>
            The Original Chew
          </div>
          <div style={{ color: "#F2EBDD", fontSize: 76, lineHeight: 1.05, maxWidth: 980, display: "flex" }}>
            The natural Himalayan churpi dog chew.
          </div>
          <div style={{ color: "rgba(242,235,221,0.65)", fontSize: 30, display: "flex" }}>
            Milk · Salt · Lime juice — nothing else.
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(242,235,221,0.45)",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            borderTop: "1px solid #243A2E",
            paddingTop: "28px",
          }}
        >
          <span>Solukhumbu, Nepal</span>
          <span>Cured · Smoked · Aged</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
