import type { Metadata } from "next"
import Link from "next/link"
import { Download, ArrowLeft, Smartphone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BrochurePageClient from "@/components/brochure-page-client"

export const metadata: Metadata = {
  title: "Brochure — Verivance Training Academy",
  description:
    "Browse the Verivance Training Academy brochure. Explore our clinical research, pharmacovigilance, medical writing and GPAT coaching programs.",
}

export default function BrochurePage() {
  return (
    <>
      <Navbar />

      {/* ── Desktop: full-screen flipbook ── */}
      <div
        className="hidden md:flex flex-col"
        style={{
          minHeight: "100vh",
          paddingTop: "132px", /* same offset as hero — topbar + navbar */
          background: "linear-gradient(160deg,#071525 0%,#0b2a45 45%,#0b3c5d 100%)",
        }}
      >
        {/* Sub-header bar */}
        <div className="flex items-center justify-between px-8 py-3 border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/50 hover:text-white transition text-sm"
          >
            <ArrowLeft size={15} />
            Back to site
          </Link>

          <p className="text-white/50 text-sm tracking-wide">
            Verivance Training Academy · Brochure
          </p>

          <a
            href="/brochures/verivance-training-academy-brochure.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#0b3c5d,#2ec4cc)",
              boxShadow: "0 4px 20px rgba(46,196,204,0.3)",
              color: "#fff",
            }}
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        {/* FlipBook area */}
        <BrochurePageClient />
      </div>

      {/* ── Mobile: clean download page ── */}
      <div
        className="md:hidden flex flex-col items-center justify-center px-6 py-12 gap-8"
        style={{
          minHeight: "100vh",
          paddingTop: "132px",
          background: "linear-gradient(160deg,#071525 0%,#0b2a45 45%,#0b3c5d 100%)",
        }}
      >
        {/* PDF icon */}
        <div
          className="w-28 h-28 rounded-3xl flex items-center justify-center border border-[#2ec4cc]/30"
          style={{
            background: "linear-gradient(135deg,rgba(46,196,204,0.15),rgba(11,60,93,0.5))",
            boxShadow: "0 0 40px rgba(46,196,204,0.15)",
          }}
        >
          <svg viewBox="0 0 48 48" className="w-14 h-14 fill-[#2ec4cc]">
            <path d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V16L28 4H12z" opacity=".25" />
            <path d="M28 4v12h12L28 4z" />
            <rect x="16" y="24" width="16" height="2" rx="1" />
            <rect x="16" y="29" width="12" height="2" rx="1" />
            <rect x="16" y="34" width="14" height="2" rx="1" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-3">Verivance Brochure</h1>
          <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
            Explore our full program guide — Clinical Research, Pharmacovigilance,
            Medical Writing, Clinical SAS &amp; GPAT Coaching.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a
            href="/brochures/verivance-training-academy-brochure.pdf"
            download
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base transition hover:scale-[1.02] active:scale-95"
            style={{
              background: "linear-gradient(135deg,#0b3c5d,#2ec4cc)",
              boxShadow: "0 4px 24px rgba(46,196,204,0.35)",
              color: "#fff",
            }}
          >
            <Download size={18} />
            Download Brochure
          </a>

          <a
            href="/brochures/verivance-training-academy-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-[#2ec4cc]/50 text-[#2ec4cc] font-semibold text-base hover:bg-[#2ec4cc]/10 transition"
          >
            <Smartphone size={18} />
            Open in PDF Viewer
          </a>
        </div>

        <p className="text-white/25 text-xs text-center max-w-xs">
          Flip-book view is available on desktop / laptop
        </p>

        <Link href="/" className="flex items-center gap-1.5 text-white/35 hover:text-white/60 text-sm transition">
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>

      <Footer />
    </>
  )
}
