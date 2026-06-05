"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertCircle, CheckCircle2 } from "lucide-react"
import { useApplyNow } from "@/components/apply-now-context"

const COURSES = [
  "Clinical Research",
  "Pharmacovigilance",
  "Medical Writing",
  "Clinical Data Management",
  "Clinical SAS",
  "GPAT Coaching",
  "Internship Programs",
]
const MODES = ["Online", "Classroom"]

interface FormData {
  name: string
  email: string
  phone: string
  course: string
  mode: string
  message: string
}

export default function ApplyNowForm() {
  const { isOpen, closeModal } = useApplyNow()
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", course: "", mode: "", message: "" })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitting, setSubmitting] = useState(false)

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

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = "Full name is required"
    if (!form.email.trim()) e.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address"
    if (!form.phone.trim()) e.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Phone number must be exactly 10 digits"
    if (!form.course) e.course = "Please select a course"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
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
      fd.append("_subject", "New Course Application - Verivance")
      fd.append("_next", `${window.location.origin}/?apply=success`)
      fd.append("_format", "plain")
      const res = await fetch("https://formsubmit.co/ajax/verivance@gmail.com", {
        method: "POST", body: fd, headers: { Accept: "application/json" }, mode: "cors",
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      let json: { success: boolean; message?: string }
      try { json = await res.json() } catch { json = { success: true } }
      if (json && json.success !== false) {
        setForm({ name: "", email: "", phone: "", course: "", mode: "", message: "" })
        setErrors({})
        closeModal()
        window.history.pushState({}, "", "/?apply=success")
        window.dispatchEvent(new Event("popstate"))
      } else {
        throw new Error(json.message || "Submission failed.")
      }
    } catch (err) {
      window.dispatchEvent(new CustomEvent("showErrorToast", {
        detail: { message: err instanceof Error ? err.message : "❌ Submission failed. Please try again." },
      }))
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    setForm({ name: "", email: "", phone: "", course: "", mode: "", message: "" })
    setErrors({})
    closeModal()
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] focus:border-transparent ${
      errors[field]
        ? "border-[#ef4444] bg-[#fef2f2]"
        : "border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50 focus:shadow-[0_0_0_3px_rgba(46,196,204,0.1)]"
    }`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] bg-gradient-to-br from-white via-[#f8fafc] to-white rounded-2xl border-2 border-[#2ec4cc]/30 shadow-2xl overflow-hidden flex flex-col pointer-events-auto backdrop-blur-xl"
              style={{ boxShadow: "0 20px 60px rgba(11,60,93,0.3), 0 0 40px rgba(46,196,204,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] p-6 md:p-8 border-b border-[#2ec4cc]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Apply Now</h2>
                    <p className="text-[#cbd5e1] text-sm md:text-base">Start your journey with Verivance</p>
                  </div>
                  <button onClick={handleClose} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110" aria-label="Close modal">
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0b3c5d] mb-2">
                      Full Name <span className="text-[#ef4444]">*</span>
                    </label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Enter your full name" />
                    {errors.name && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0b3c5d] mb-2">
                      Email <span className="text-[#ef4444]">*</span>
                    </label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="your.email@example.com" />
                    {errors.email && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0b3c5d] mb-2">
                      Phone Number <span className="text-[#ef4444]">*</span>
                    </label>
                    <div className="relative">
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="Enter 10 digit phone number" maxLength={10} inputMode="numeric" />
                      {form.phone && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#64748b]">{form.phone.length}/10</span>}
                    </div>
                    {errors.phone && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                  </div>

                  {/* Course */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-[#0b3c5d] mb-2">
                      Select Course <span className="text-[#ef4444]">*</span>
                    </label>
                    <select id="course" name="course" value={form.course} onChange={handleChange} className={`${inputClass("course")} appearance-none cursor-pointer`}>
                      <option value="">Select a course</option>
                      {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1"><AlertCircle size={14} />{errors.course}</p>}
                  </div>

                  {/* Mode */}
                  <div>
                    <label htmlFor="mode" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Preferred Mode</label>
                    <select id="mode" name="mode" value={form.mode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] focus:border-transparent appearance-none cursor-pointer">
                      <option value="">Select mode (optional)</option>
                      {MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0b3c5d] mb-2">Message (Optional)</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] bg-white hover:border-[#2ec4cc]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4cc] focus:border-transparent resize-none" placeholder="Tell us about your goals..." />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={submitting} className="w-full px-8 py-4 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
                      {submitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                      ) : (
                        <><CheckCircle2 size={20} />Submit Application</>
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
