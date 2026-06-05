import { NextResponse } from "next/server"

export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#0b3c5d"/>
      <stop offset="50%"  stop-color="#1a6a7a"/>
      <stop offset="100%" stop-color="#2ec4cc"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background rounded square -->
  <rect width="180" height="180" rx="38" fill="url(#bg)"/>

  <!-- Subtle top shine overlay -->
  <rect width="180" height="90" rx="38" fill="url(#shine)"/>

  <!-- Bold "V" mark — two angled strokes meeting at a point -->
  <path
    d="M38 44 L90 136 L142 44"
    stroke="white"
    stroke-width="22"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
</svg>`

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
