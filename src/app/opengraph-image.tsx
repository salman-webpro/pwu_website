import { ImageResponse } from "next/og";
import { homeHero } from "@/content/home";
import { site } from "@/content/site";

// Placeholder share image (shown when a link is posted on social media / messaging apps).
// TODO(design): replace with a designed 1200×630 image (drop app/opengraph-image.png in its place).
// ImageResponse only accepts inline styles, so colors here mirror the tokens in globals.css.

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const join = (gradient: boolean) =>
  homeHero.titleLines
    .filter((line) => Boolean(line.gradient) === gradient)
    .map((line) => line.text)
    .join(" ");

export default function OpengraphImage() {
  const headline = { fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #FEE2EA 0%, #F9E4F2 50%, #EFE6FE 100%)",
          color: "#151433",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, color: "#E11D74" }}>{site.name}</div>
        <div style={{ ...headline, marginTop: 24 }}>{join(false)}</div>
        <div style={{ ...headline, color: "#E11D74" }}>{join(true)}</div>
      </div>
    ),
    size,
  );
}
