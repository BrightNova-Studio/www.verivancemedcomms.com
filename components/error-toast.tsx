"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CircleX } from "lucide-react"

export default function ErrorToast() {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const handler = (e: CustomEvent<{ message: string }>) => {
      setMessage(e.detail?.message || "❌ Submission failed. Please try again.")
      setShow(true)
      const timer = setTimeout(() => setShow(false), 4000)
      return () => clearTimeout(timer)
    }
    window.addEventListener("showErrorToast", handler as unknown as EventListener)
    return () => window.removeEventListener("showErrorToast", handler as unknown as EventListener)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.3 }}
          className="fixed top-20 right-4 md:right-8 z-[102] bg-white rounded-xl shadow-2xl border border-[#ef4444]/30 p-4 md:p-6 max-w-md"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] flex items-center justify-center">
              <CircleX className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#0b3c5d] mb-1">{message}</h3>
            </div>
            <button onClick={() => setShow(false)} className="flex-shrink-0 p-1 rounded-lg hover:bg-[#f1f5f9] transition-colors" aria-label="Close">
              <X size={18} className="text-[#64748b]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
