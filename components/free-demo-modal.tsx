"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertCircle, CheckCircle2 } from "lucide-react"
import { useFreeDemo } from "@/components/free-demo-context"

const MODES = ["Online", "Classroom"]

interface FormData {
  name: string
  email: string
  phone: string
  course: string
  mode: string
  message: string
}

export default function FreeDemoModal() {
  const { isOpen, selectedCourse, closeModal } = useFreeDemo()
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", course: selectedCourse, mode: "", message: "" })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isOpen) setForm((f) => ({ ...f, course: selectedCourse }))
  }, [isOpen, selectedCourse])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) closeModal() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeModal])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      const digits = value.replace(/\D/g, "")
      if (digits.length <= 10) setForm((f) => ({ ...f, [name]: digits }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
    if (errors[name as keyof FormData]) setErrors((e) => ({ ...e, [name]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = "Full name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address"
    if (!form.phone.trim()) errs.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(form.phone)) errs.phone = "Phone number must be exactly 10 digits"
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    try {
      const fd = new FormData()
      fd.append("name", form.name.trim())
      fd.append("email", form.email.trim())
      fd.append("phone", form.phone.trim())
      fd.append("course", form.course)
      fd.append("mode", form.mode || "")
      fd.append("message", form.message.trim() || "")
      fd.append("_captcha", "false")
      fd.append("_template", "table")
      fd.append("_subject", "Free Demo Request - Verivance")
      fd.append("_next", `${window.location.origin}/?demo=success`)
      const res = await fetch("https://formsubmit.co/ajax/verivance@gmail.com", {
        method: "POST", body: fd, headers: { Accept: "application/json" }, mode: "cors",
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      setForm({ name: "", email: "", phone: "", course: "", mode: "", message: "" })
      setErrors({})
      closeModal()
      window.history.pushState({}, "", "/?demo=success")
      window.dispatchEvent(new Event("popstate"))
    } catch (err) {
      window.dispatchEvent(new CustomEvent("showErrorToast", {
        detail: { message: err instanceof Error ? err.message : "❌ Submission failed. Please try again." },
      }))
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] focus:border-transparent ${
      errors[field] ? "border-[#ef4444] bg-[#fef2f2]" : "border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50"
    }`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={closeModal} />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] bg-gradient-to-br from-white via-[#f8fafc] to-white rounded-2xl border-2 border-[#2ec4cc]/30 shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              style={{ boxShadow: "0 20px 60px rgba(11,60,93,0.3), 0 0 40px rgba(46,196,204,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gradient-to-r from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] p-6 md:p-8 border-b border-[#2ec4cc]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Book a Free Demo</h2>
                    <p className="text-[#cbd5e1] text-sm md:text-base">Experience our training first-hand</p>
                  </div>
                  <button onClick={closeModal} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110" aria-label="Close modal">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Full Name <span className="text-[#ef4444]">*</span></label>
                    <input type="text" id="demo-name" name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Enter your full name" />
                    {errors.name && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Email <span className="text-[#ef4444]">*</span></label>
                    <input type="email" id="demo-email" name="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="your.email@example.com" />
                    {errors.email && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Phone Number <span className="text-[#ef4444]">*</span></label>
                    <div className="relative">
                      <input type="tel" id="demo-phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="Enter 10 digit phone number" maxLength={10} inputMode="numeric" />
                      {form.phone && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#64748b]">{form.phone.length}/10</span>}
                    </div>
                    {errors.phone && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-course" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Selected Course <span className="text-[#ef4444]">*</span></label>
                    <input type="text" id="demo-course" name="course" value={form.course} readOnly className="w-full px-4 py-3 rounded-xl border-2 border-[#cbd5e1] bg-[#f1f5f9] text-[#64748b] cursor-not-allowed" placeholder="Course will be auto-filled" />
                  </div>
                  <div>
                    <label htmlFor="demo-mode" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Preferred Mode</label>
                    <select id="demo-mode" name="mode" value={form.mode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] appearance-none cursor-pointer">
                      <option value="">Select mode (optional)</option>
                      {MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="demo-message" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Message (Optional)</label>
                    <textarea id="demo-message" name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] resize-none" placeholder="Tell us about your goals or any questions..." />
                  </div>
                  <div className="pt-2">
                    <button type="submit" disabled={submitting} className="w-full px-8 py-4 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
                      {submitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                      ) : (
                        <><CheckCircle2 size={20} />Request Free Demo</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
