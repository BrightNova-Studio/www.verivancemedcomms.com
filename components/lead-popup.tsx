"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, GraduationCap, ChevronRight, Sparkles } from "lucide-react"
import { useFreeDemo } from "@/components/free-demo-context"

const STORAGE_KEY = "verivance_lead_popup_seen"
const DELAY_MS    = 20_000   // 20 s
const SCROLL_PCT  = 50       // 50 % page depth

const courses = [
  "Clinical Research",
  "Pharmacovigilance",
  "Medical Writing",
  "Clinical Data Management",
  "Clinical SAS",
  "Internship Programs",
  "5-Domain Job-Ready Program",
  "Not sure yet",
]

export default function LeadPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { openModal: openFreeDemo } = useFreeDemo()

  const tryShow = useCallback(() => {
    if (dismissed) return
    if (typeof window === "undefined") return
    if (localStorage.getItem(STORAGE_KEY)) return   // already shown ever
    setVisible(true)
  }, [dismissed])

  useEffect(() => {
    // Don't show on the brochure page
    if (window.location.pathname.startsWith("/brochure")) return

    const timer = setTimeout(tryShow, DELAY_MS)

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrolled >= SCROLL_PCT) tryShow()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [tryShow])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
    localStorage.setItem(STORAGE_KEY, "1")
  }

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Verivance! I'm exploring your courses and would love some guidance on which program is right for me."
    )
    window.open(`https://wa.me/919550130545?text=${msg}`, "_blank")
    dismiss()
  }

  const handleFreeDemo = () => {
    openFreeDemo()
    dismiss()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-[90] w-[calc(100vw-2rem)] max-w-sm"
          style={{
            boxShadow: "0 20px 60px rgba(11,60,93,0.3), 0 0 40px rgba(46,196,204,0.15)",
          }}
        >
          <div className="rounded-2xl overflow-hidden border border-[#2ec4cc]/30 bg-white">

            {/* Header */}
            <div className="relative px-5 pt-5 pb-4"
              style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 100%)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent" />

              {/* Close */}
              <button onClick={dismiss} aria-label="Close"
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all z-10">
                <X size={14} />
              </button>

              <div className="relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ec4cc] to-[#0b3c5d] flex items-center justify-center shrink-0 shadow-lg">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 mb-2">
                    <Sparkles size={10} className="text-yellow-300" />
                    <span className="text-yellow-300 text-[10px] font-bold uppercase tracking-wider">Free Guidance</span>
                  </div>
                  <h3 className="text-white font-bold text-sm leading-snug">
                    Not sure which course<br />is right for you?
                  </h3>
                  <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">
                    Talk to our experts — they'll help you choose the perfect program in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4 bg-white space-y-3">

              {/* WhatsApp CTA */}
              <button onClick={handleWhatsApp}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                style={{
                  background: "linear-gradient(135deg,#25D366,#20BA5A)",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                  color: "#fff",
                }}>
                <div className="flex items-center gap-2.5">
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </div>
                <ChevronRight size={16} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Free Demo CTA */}
              <button onClick={handleFreeDemo}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                style={{
                  background: "linear-gradient(135deg,#0b3c5d,#2ec4cc)",
                  boxShadow: "0 4px 16px rgba(46,196,204,0.25)",
                  color: "#fff",
                }}>
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={18} />
                  <span>Book a Free Demo Class</span>
                </div>
                <ChevronRight size={16} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button onClick={dismiss}
                className="w-full text-center text-[#94a3b8] hover:text-[#64748b] text-xs py-1 transition-colors">
                I'll explore on my own
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
