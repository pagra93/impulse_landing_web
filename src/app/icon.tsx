import { ImageResponse } from "next/og";

// Favicon generado (App Router file convention). Marca Impulse: navy + acento amarillo.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#203b50",
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            color: "#ffffff",
            fontSize: 44,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          i
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#ffdb4c",
              marginLeft: 3,
              marginBottom: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
