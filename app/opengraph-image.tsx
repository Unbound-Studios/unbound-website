import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Unbound Studios. We make things people actually use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const [martianMono, figtree] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/MartianMono-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Figtree-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#faf9f6",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Green square top-left */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 80,
            width: 28,
            height: 28,
            borderRadius: 6,
            backgroundColor: "#3b9c6f",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontFamily: "Martian Mono",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: 20,
          }}
        >
          Unbound Studios
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            fontFamily: "Figtree",
            fontWeight: 500,
            color: "#7a7a7a",
            lineHeight: 1.4,
          }}
        >
          We make things people actually use.
        </div>

        {/* Green bar bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#3b9c6f",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Martian Mono", data: martianMono, weight: 700 },
        { name: "Figtree", data: figtree, weight: 500 },
      ],
    },
  );
}
