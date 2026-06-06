"use client"

import dynamic from "next/dynamic"

const BrochureViewer = dynamic(
  () => import("@/components/brochure-viewer"),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(160deg,#0b1f35 0%,#0b3c5d 60%,#0e4a60 100%)" }}
      >
        <div className="text-center text-white/60">
          <div className="w-12 h-12 border-2 border-[#2ec4cc]/40 border-t-[#2ec4cc] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm">Loading brochure…</p>
        </div>
      </div>
    ),
  }
)

export default function BrochurePageClient() {
  return <BrochureViewer />
}
