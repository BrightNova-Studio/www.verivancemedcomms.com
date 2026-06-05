"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useApplyNow } from "@/components/apply-now-context"
import { useFreeDemo } from "@/components/free-demo-context"

export default function SuccessToast() {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")
  const { closeModal: closeApply } = useApplyNow()
  const { closeModal: closeDemo } = useFreeDemo()

  useEffect(() => {
    const handler = () => {
      const params = new URLSearchParams(window.location.search)
      const isApply = params.get("apply") === "success"
      const isDemo = params.get("demo") === "success"
      if (isApply) {
        setMessage("Application Submitted Successfully!")
        setShow(true)
        closeApply()
        setTimeout(() => {
          const url = new URL(window.location.href)
          url.searchParams.delete("apply")
          window.history.replaceState({}, "", url.pathname + url.search)
        }, 2000)
      } else if (isDemo) {
        setMessage("Demo request submitted successfully! Our team will contact you shortly.")
        setShow(true)
        closeDemo()
        setTimeout(() => {
          const url = new URL(window.location.href)
          url.searchParams.delete("demo")
          window.history.replaceState({}, "", url.pathname + url.search)
        }, 2000)
      }
    }
    handler()
    window.addEventListener("popstate", handler)
    return () => window.removeEventListener("popstate", handler)
  }, [closeApply, closeDemo])

  const handleClose = () => {
    setShow(false)
    const url = new URL(window.location.href)
    window.history.replaceState({}, "", url.pathname)
  }

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[102] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-b from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] p-6 sm:p-8 rounded-3xl shadow-[0_0_30px_rgba(46,196,204,0.3)] w-[90%] max-w-md text-center border-2 border-[#2ec4cc]/40"
          >
            <button aria-label="Close popup" onClick={handleClose}
              className="absolute top-3 right-3 text-[#2ec4cc]/70 hover:text-[#2ec4cc] transition text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
              ✖
            </button>
            <div className="flex justify-center mb-4">
              <div className="relative h-14 w-auto">
                <Image src="/logo.png" alt="Verivance Logo" width={160} height={70} className="h-14 w-auto object-contain animate-pulse" />
              </div>
            </div>
            <div className="text-[#2ec4cc] text-5xl mb-3 drop-shadow-[0_0_10px_rgba(46,196,204,0.7)]">✨</div>
            <h2 className="text-2xl font-semibold text-white mb-3 drop-shadow-[0_0_8px_rgba(46,196,204,0.5)]">
              {message || "Application Submitted Successfully!"}
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {message.includes("Demo") ? (
                <>Thank you for requesting a demo from <span className="text-[#2ec4cc] font-medium">Verivance</span>.<br />Our team will contact you shortly.</>
              ) : (
                <>Thank you for applying to <span className="text-[#2ec4cc] font-medium">Verivance</span>.<br />Our team will contact you shortly.</>
              )}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/919550130545?text=${encodeURIComponent("Hello Verivance, I have submitted my form and would like to know more details, is it right time to talk?")}`}
                target="_blank" rel="noopener noreferrer" aria-label="Contact Verivance on WhatsApp"
                className="bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white font-semibold px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />Contact Us (If urgent)
              </a>
              <button onClick={handleClose} className="text-gray-300 hover:text-[#2ec4cc] underline transition text-sm">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
