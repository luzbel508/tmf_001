import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#03202F",
          borderRadius: 16,
          boxShadow: "inset 0 0 0 2px rgba(245,241,232,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "#A71930",
            color: "#F5F1E8",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: -1.25,
          }}
        >
          LK
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
