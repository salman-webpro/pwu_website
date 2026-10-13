import { ImageResponse } from "next/og";

// Placeholder browser-tab icon: brand-gradient square with a white "P".
// TODO(design): replace with the real logo mark (drop app/icon.png or app/icon.svg in its place).
// ImageResponse only accepts inline styles, so colors here mirror the tokens in globals.css.

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
          borderRadius: 16,
          background: "linear-gradient(135deg, #FC5440 0%, #E11D74 55%, #A61CAA 100%)",
          color: "white",
          fontSize: 44,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        P
      </div>
    ),
    size,
  );
}
