"use client"

import { MapPin, Mail, Phone, BookOpen } from "lucide-react"

export default function TopBar() {
  return (
    <div className="w-full bg-[#0b1f35] border-b border-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Mobile layout: single centred row with icon-only items ── */}
        <div className="flex md:hidden items-center justify-center h-11 gap-3">
          <a href="tel:+919550130545"
            className="flex items-center gap-1.5 text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap">
            <Phone size={13} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">+91 9550 130 545</span>
          </a>
          <span className="text-[#2ec4cc]/30 text-sm leading-none">|</span>
          <a href="mailto:info@verivancemedcomms.com"
            className="flex items-center gap-1.5 text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap">
            <Mail size={13} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">info@verivancemedcomms.com</span>
          </a>
        </div>

        {/* ── Desktop layout: all items centred inline ── */}
        <div className="hidden md:flex items-center justify-center h-12 gap-4">
          <div className="flex items-center gap-2 text-[#94a3b8] whitespace-nowrap">
            <MapPin size={14} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">Hyderabad, India</span>
          </div>

          <span className="text-[#2ec4cc]/30 text-sm leading-none">|</span>

          <a href="mailto:info@verivancemedcomms.com"
            className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap">
            <Mail size={14} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">info@verivancemedcomms.com</span>
          </a>

          <span className="text-[#2ec4cc]/30 text-sm leading-none">|</span>

          <a href="tel:+919550130545"
            className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap">
            <Phone size={14} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">+91 9550 130 545</span>
          </a>

          <span className="text-[#2ec4cc]/30 text-sm leading-none">|</span>

          <a href="/brochure"
            className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap">
            <BookOpen size={14} className="text-[#2ec4cc] shrink-0" />
            <span className="text-xs font-medium">Our Brochure</span>
          </a>
        </div>
      </div>
    </div>
  )
}
