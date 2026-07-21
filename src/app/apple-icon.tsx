import { ImageResponse } from "next/og";

// Apple touch icon (iOS home screen). Full-bleed navy — iOS aplica su propia máscara.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            color: "#ffffff",
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          i
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#ffdb4c",
              marginLeft: 8,
              marginBottom: 16,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
