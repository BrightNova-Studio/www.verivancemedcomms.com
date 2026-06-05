"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import { useFounderModal } from "@/components/founder-modal-context"

const FOUNDERS = {
  radha: {
    name: "Dr. B. Radha Madhavi",
    title: "Founder & CEO",
    initials: "BRM",
    image: "/about/radha.JPG",
    linkedinUrl: "#",
    content: [
      "Dr. B. Radha Madhavi is the driving force behind the academy's vision and direction. With a strong foundation in pharmacy and extensive experience in teaching, medical communication, and skill-based training, she has guided numerous learners transition into impactful roles across healthcare and life sciences.",
      "Through years of close interaction with students, she identified a critical gap between academic knowledge and industry expectations. This insight led to the creation of a structured platform combining practical exposure, mentorship, and career-focused learning.",
      "As Founder & CEO, she leads with clarity, compassion, and purpose, ensuring every program delivers real professional value. Her commitment continues to shape Verivance as a trusted centre for pharmacy skill development.",
    ],
  },
  pavani: {
    name: "Naga Pavani Penchikala",
    title: "Co-Founder & Managing Director",
    initials: "NPP",
    image: "/about/pavani.jpg",
    linkedinUrl: "#",
    content: [
      "Naga Pavani Penchikala is the Co-Founder and Managing Director of Verivance MedComms, bringing deep expertise across preclinical research, clinical research operations, and pharmaceutical training.",
      "With hands-on experience as a Preclinical Pharmacologist, Toxicologist, and Clinical Researcher in the Biologics domain, she offers end-to-end insight into the drug development lifecycle—from in vivo pharmacology to clinical documentation, data management, pharmacovigilance, and medical writing.",
      "She leads curriculum design, academic–industry alignment, and learner mentorship, ensuring Verivance delivers outcome-driven, industry-relevant programs aligned with ICH-GCP, GLP, and global standards. Her mission is to empower pharmacy graduates with ethical, job-ready competencies and structured career pathways.",
    ],
  },
}

export default function FounderModal() {
  const { isOpen, founder, closeModal } = useFounderModal()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) closeModal() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeModal])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  if (!founder) return null
  const data = FOUNDERS[founder]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={closeModal} />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-white via-[#f8fafc] to-white rounded-2xl border-2 border-[#2ec4cc]/30 shadow-2xl overflow-hidden flex flex-col pointer-events-auto backdrop-blur-xl"
              style={{ boxShadow: "0 20px 60px rgba(11,60,93,0.3), 0 0 40px rgba(46,196,204,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] p-6 md:p-8 lg:p-10 border-b border-[#2ec4cc]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white/20 ring-offset-2 ring-offset-[#0b3c5d]/50 bg-gradient-to-br from-[#2ec4cc] to-[#0b3c5d] relative">
                          <Image src={data.image} alt={data.name} width={128} height={128} className="w-full h-full object-cover" priority />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ec4cc]/30 to-[#0b3c5d]/30 blur-xl -z-10" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{data.name}</h2>
                          <p className="text-[#cbd5e1] text-base md:text-lg font-medium">{data.title}</p>
                        </div>
                        <button onClick={closeModal} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 flex-shrink-0" aria-label="Close modal">
                          <X size={24} />
                        </button>
                      </div>
                      <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#2ec4cc] transition-all duration-300 group/linkedin w-fit"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group-hover/linkedin:scale-110">
                          <Linkedin size={20} className="text-[#2ec4cc]" />
                        </div>
                        <span className="text-sm text-white/80 group-hover/linkedin:text-white transition-colors">Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                <div className="max-w-3xl mx-auto space-y-6">
                  {data.content.map((para, i) => (
                    <p key={i} className="text-[#64748b] leading-relaxed text-base md:text-lg" style={{ lineHeight: "1.8" }}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#e2e8f0] p-4 md:p-6 bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="flex justify-end">
                  <button onClick={closeModal} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-xl hover:shadow-lg hover:shadow-[#2ec4cc]/40 transition-all duration-300 font-semibold transform hover:scale-105 group/close">
                    <span>Close</span>
                    <ArrowRight size={18} className="group-hover/close:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
