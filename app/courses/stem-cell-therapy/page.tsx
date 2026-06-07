"use client"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
  description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/stem-cell-therapy" },
  openGraph: {
    title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
    description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/stem-cell-therapy",
    images: [{ url: "/course-stem-cell.png", width: 1200, height: 630, alt: "Stem Cell & Regenerative Therapy Program | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
    description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
    images: ["/course-stem-cell.png"],
  },
}

import { useState, useEffect } from "react"
import CourseLayout from "@/components/course-layout"
import { useFreeDemo } from "@/components/free-demo-context"
import { useApplyNow } from "@/components/apply-now-context"
import {
  ArrowRight, Download, CheckCircle2, Clock, Monitor, Award,
  Microscope, FlaskConical, Dna, Zap, Users, GraduationCap,
  Briefcase, Target, CheckCircle, Rocket, BookOpen, Layers,
  Building2, HeartPulse, TestTube, Star
} from "lucide-react"

const modules = [
  {
    group: "Modules 1–3",
    label: "Stem Cell Foundations",
    color: "from-[#0b3c5d] to-[#1a6a7a]",
    items: [
      "Introduction to Stem Cells & Regenerative Medicine",
      "Stem Cell Types, Classification & Applications",
      "Amniotic Stem Cells & Therapy",
      "Cord Blood Banking & Clinical Applications",
      "Stem Cell Derivation & Potential Applications",
    ],
  },
  {
    group: "Modules 4–5",
    label: "Advanced Techniques & Therapies",
    color: "from-[#1a4a6b] to-[#2ec4cc]",
    items: [
      "Embryoid Body Formation",
      "Isolation of Mesenchymal Stem Cells (MSCs) from Bone Marrow & Umbilical Cord",
      "Isolation of Umbilical Cord MSCs Using Explant Method",
      "Cancer Stem Cells: Niche & Models",
      "CRISPR: Gene Editing & Applications",
      "Stem Cell Therapy in Regenerative Medicine",
      "Stem Cell Therapy for Neurodegenerative & Other Disorders",
    ],
  },
]

const practicalPhases = [
  {
    phase: "Phase 2",
    title: "Hands-on Training (Weeks 5–6)",
    icon: TestTube,
    items: [
      "Laboratory exposure & experimental techniques",
      "Cell culture, isolation methods & analysis",
      "Real-time demonstrations & guided practice",
    ],
  },
  {
    phase: "Phase 3",
    title: "Internship Opportunity",
    icon: Briefcase,
    items: [
      "Internship provided immediately after course completion",
      "Work on live research projects in regenerative medicine",
    ],
  },
]

const careerGroups = [
  {
    num: "1",
    title: "Research & Development",
    icon: Dna,
    roles: ["Stem Cell Scientist", "Research Scientist in Cellular Engineering", "Molecular Biologist"],
  },
  {
    num: "2",
    title: "Clinical & Therapeutic Applications",
    icon: HeartPulse,
    roles: ["Regenerative Medicine Specialist", "Clinical Research Coordinator", "Clinical Trial Manager"],
  },
  {
    num: "3",
    title: "Technical & Laboratory Roles",
    icon: FlaskConical,
    roles: ["Laboratory Technician", "Tissue Processing Technician", "Bioprocessing Specialist"],
  },
  {
    num: "4",
    title: "Industry & Specialized Roles",
    icon: Building2,
    roles: [
      "Cell Biologist (e.g., 3D Bioprinting)",
      "Product Manager (Cell Therapy)",
      "Scientific Sales / Cord Blood Banking",
    ],
  },
]

const whoCanAttend = [
  "Life Science Graduates (BSc, MSc, PhD)",
  "Biotechnology, Microbiology & Biochemistry Students",
  "Medical, Dental & Pharmacy Students",
  "Research Scholars & Academicians",
  "Industry Professionals & Career Switchers",
  "Entrepreneurs & Biotech Enthusiasts",
]

const enrollSteps = [
  { step: 1, text: "Submit the online enrollment form" },
  { step: 2, text: "Attend a free career counselling session" },
  { step: 3, text: "Complete fee payment & confirm your batch" },
  { step: 4, text: "Begin training with onboarding & LMS access" },
]

export default function StemCellTherapyPage() {
  const { openModal: openFreeDemoModal } = useFreeDemo()
  const { openModal: openApplyNowModal } = useApplyNow()
  const [isLoaded, setIsLoaded] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1920)
  const [windowHeight, setWindowHeight] = useState(1080)

  useEffect(() => {
    setIsLoaded(true)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isDesktop = windowWidth >= 1024
  const isVeryShortScreen = windowHeight < 700
  const isShortScreen = windowHeight < 800

  const getHeadingSize = () => {
    if (isVeryShortScreen) return "text-3xl sm:text-4xl md:text-5xl"
    if (isShortScreen)     return "text-4xl sm:text-5xl md:text-6xl"
    return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
  }
  const getSubSize  = () => isVeryShortScreen ? "text-base md:text-lg" : "text-lg md:text-xl lg:text-2xl"
  const getDescSize = () => isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"
  const sp = (() => {
    if (isVeryShortScreen) return { badge:"mb-3", heading:"mb-3", sub:"mb-2", desc:"mb-4", btns:"mb-4" }
    if (isShortScreen)     return { badge:"mb-4", heading:"mb-4", sub:"mb-3", desc:"mb-6", btns:"mb-6" }
    return                        { badge:"mb-6", heading:"mb-6", sub:"mb-4", desc:"mb-8", btns:"mb-8" }
  })()

  return (
    <CourseLayout>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden"
        style={{
          minHeight: isDesktop ? (isVeryShortScreen ? "auto" : "75vh") : "auto",
          paddingTop:    isDesktop ? (isVeryShortScreen ? "132px" : "148px") : "132px",
          paddingBottom: isDesktop ? (isVeryShortScreen ? "40px"  : "60px")  : "60px",
        }}>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/clinical-research-laboratory.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
            filter: "brightness(0.55) saturate(1.2)",
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg,rgba(11,60,93,0.85) 0%,rgba(11,60,93,0.70) 50%,rgba(46,196,204,0.20) 100%)",
          }} />
          {/* Science-themed accent — soft green/teal glow */}
          <div className="absolute bottom-0 right-0 pointer-events-none" style={{
            width:"min(600px,50vw)", height:"min(600px,50vw)",
            background:"radial-gradient(circle,rgba(46,196,204,0.12) 0%,transparent 70%)",
          }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`w-full max-w-4xl text-center lg:text-left transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Badge */}
            <div className={`inline-flex items-center gap-2 ${sp.badge} px-4 py-2 rounded-full border border-[#2ec4cc]/40 backdrop-blur-sm bg-gradient-to-r from-[#2ec4cc]/20 via-[#0b3c5d]/20 to-[#2ec4cc]/20`}>
              <Award className={`${isVeryShortScreen ? "w-3 h-3" : "w-4 h-4"} text-[#2ec4cc]`} />
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-semibold text-white`}>Our Courses</span>
            </div>

            <h1 className={`${getHeadingSize()} font-extrabold leading-tight ${sp.heading} text-white`}
              style={{ textShadow:"0 2px 20px rgba(0,0,0,0.3)" }}>
              Stem Cell &{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage:"linear-gradient(to right,#2ec4cc,#7edde3)" }}>
                Regenerative Therapy
              </span>{" "}
              Program
            </h1>

            <p className={`${getSubSize()} text-[#cbd5e1] ${sp.sub} font-medium`}>
              Industry-Oriented Training for Future Leaders in Regenerative Medicine
            </p>

            <p className={`${getDescSize()} text-[#e2e8f0] ${sp.desc} leading-relaxed max-w-2xl`}>
              Gain practical expertise in stem cell technologies and regenerative medicine. From lab fundamentals
              to industry internship — this comprehensive 2-month program prepares you for high-demand roles
              in life sciences, biotech, and clinical research.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${sp.btns}`}>
              <button onClick={() => openFreeDemoModal("Stem Cell & Regenerative Therapy Program")}
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-[#0b3c5d] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background:"linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow:"0 4px 24px rgba(46,196,204,0.4)" }}>
                <Rocket size={20} />
                Book a Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="/brochures/verivance-training-academy-brochure.pdf" download
                className="px-8 py-4 rounded-xl font-bold text-[#2ec4cc] border-2 border-[#2ec4cc]/60 flex items-center justify-center gap-2 hover:bg-[#2ec4cc]/10 transition-all duration-300 backdrop-blur-sm">
                <Download size={18} />
                Download Brochure
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Clock,         label: "2 Months Duration" },
                { icon: Monitor,       label: "Online + Hands-on" },
                { icon: Briefcase,     label: "Internship Included" },
                { icon: Award,         label: "Industry Certificate" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Icon size={14} className="text-[#2ec4cc]" />
                  <span className="text-white/90 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">Overview</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-semibold">
            {["Learn Fundamentals","Hands-on Training","Industry Internship","Get Certified","Launch Your Career"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0b3c5d]/10 to-[#2ec4cc]/10 border border-[#2ec4cc]/30 text-[#0b3c5d]">{step}</span>
                {i < arr.length - 1 && <ArrowRight size={16} className="text-[#2ec4cc] shrink-0" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM + SIDEBAR ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* LEFT — curriculum */}
            <div className="lg:col-span-2 space-y-10">

              {/* What You Will Learn */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">What You Will Learn</h2>
                </div>
                <div className="space-y-6">
                  {modules.map((mod) => (
                    <div key={mod.group} className="rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#2ec4cc]/40 hover:shadow-lg transition-all duration-300">
                      <div className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${mod.color}`}>
                        <BookOpen size={18} className="text-white shrink-0" />
                        <div>
                          <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{mod.group}</span>
                          <p className="text-white font-bold text-sm md:text-base">{mod.label}</p>
                        </div>
                      </div>
                      <div className="p-6 space-y-2.5 bg-white">
                        {mod.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={11} className="text-white" />
                            </div>
                            <span className="text-[#334155] text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Exposure */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">Practical Exposure</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {practicalPhases.map(({ phase, title, icon: Icon, items }) => (
                    <div key={phase} className="rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#2ec4cc]/40 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#0b3c5d] to-[#1a6a7a]">
                        <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-white" />
                        </div>
                        <div>
                          <span className="text-[#2ec4cc] text-xs font-bold uppercase tracking-widest">{phase}</span>
                          <p className="text-white font-bold text-sm">{title}</p>
                        </div>
                      </div>
                      <div className="p-5 space-y-2 bg-white">
                        {items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle size={15} className="text-[#2ec4cc] shrink-0 mt-0.5" />
                            <span className="text-[#334155] text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — sidebar */}
            <div className="space-y-6">

              {/* Program Details card */}
              <div className="rounded-2xl border-2 border-[#2ec4cc]/30 overflow-hidden sticky top-36">
                <div className="px-6 py-4 bg-gradient-to-r from-[#0b3c5d] to-[#1a6a7a]">
                  <h3 className="text-white font-extrabold text-lg tracking-wide">Program Details</h3>
                </div>
                <div className="bg-white divide-y divide-[#e2e8f0]">
                  {[
                    { label: "Duration", value: "2 Months", icon: Clock },
                    { label: "Mode",     value: "Online + Hands-on + Internship", icon: Monitor },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3 px-6 py-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0b3c5d]/10 to-[#2ec4cc]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-[#0b3c5d]" />
                      </div>
                      <div>
                        <p className="text-[#2ec4cc] text-xs font-bold uppercase tracking-widest">{label}</p>
                        <p className="text-[#0b3c5d] font-semibold text-sm mt-0.5">{value}</p>
                      </div>
                    </div>
                  ))}

                  {/* Who Can Attend */}
                  <div className="px-6 py-4">
                    <p className="text-[#2ec4cc] text-xs font-bold uppercase tracking-widest mb-3">Who Can Attend</p>
                    <div className="space-y-2">
                      {whoCanAttend.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0b3c5d] shrink-0 mt-1.5" />
                          <span className="text-[#334155] text-xs leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#0b3c5d]/5 to-[#2ec4cc]/5 border border-[#2ec4cc]/20">
                      <p className="text-[#0b3c5d] text-xs font-semibold text-center leading-relaxed">
                        No prior lab experience required –<br />Just passion to learn & innovate!
                      </p>
                    </div>
                  </div>

                  {/* Internship Benefits */}
                  <div className="px-6 py-4">
                    <p className="text-[#2ec4cc] text-xs font-bold uppercase tracking-widest mb-3">Internship Benefits</p>
                    <div className="flex flex-col gap-2">
                      {["100% Practical Exposure", "Internship Support"].map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-[#2ec4cc]" />
                          <span className="text-[#0b3c5d] font-semibold text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA inside sidebar */}
                <div className="p-5 bg-gradient-to-b from-white to-[#f8fafc] border-t border-[#e2e8f0] space-y-3">
                  <button onClick={() => openFreeDemoModal("Stem Cell & Regenerative Therapy Program")}
                    className="w-full py-3 rounded-xl font-bold text-[#0b3c5d] text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                    style={{ background:"linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow:"0 4px 16px rgba(46,196,204,0.35)" }}>
                    <Rocket size={15} />
                    Book a Free Demo
                  </button>
                  <button onClick={openApplyNowModal}
                    className="w-full py-3 rounded-xl font-bold text-[#0b3c5d] text-sm border-2 border-[#0b3c5d]/30 hover:border-[#0b3c5d] hover:bg-[#0b3c5d]/5 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES ─────────────────────────────────── */}
      <section className="py-16 md:py-24"
        style={{ background:"linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">After Completion</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Career Opportunities</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] rounded-full mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {careerGroups.map(({ num, title, icon: Icon, roles }) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#2ec4cc]/40 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2ec4cc]/30 to-[#0b3c5d]/50 flex items-center justify-center">
                    <Icon size={18} className="text-[#2ec4cc]" />
                  </div>
                  <div>
                    <span className="text-[#2ec4cc] text-xs font-bold">Group {num}</span>
                    <p className="text-white font-bold text-xs leading-snug">{title}</p>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  {roles.map((role, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2ec4cc] shrink-0 mt-1.5" />
                      <span className="text-white/70 text-xs leading-relaxed">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl border-2 border-[#2ec4cc]/30"
            style={{ background:"linear-gradient(135deg,rgba(11,60,93,0.05),rgba(46,196,204,0.05))" }}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 shadow-xl">
              <GraduationCap size={38} className="text-white" />
            </div>
            <div>
              <p className="text-[#2ec4cc] font-bold tracking-widest text-xs uppercase mb-2">Outcome</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d] mb-3">
                Become an Industry-Ready Stem Cell Professional
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Gain practical expertise in stem cell technologies and regenerative medicine with real industry
                exposure. Graduate with hands-on lab experience, an internship credential, and placement support
                to launch your career in one of the fastest-growing fields in life sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO ENROLL ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3c5d] mb-3">How to Enroll</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollSteps.map(({ step, text }) => (
              <div key={step} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 shadow-md">
                  <span className="text-white font-extrabold text-lg">{step}</span>
                </div>
                <p className="text-[#334155] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24"
        style={{ background:"linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Start Your Career in{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage:"linear-gradient(to right,#2ec4cc,#7edde3)" }}>
              Regenerative Medicine
            </span>{" "}
            Today
          </h2>
          <p className="text-[#94a3b8] mb-10 text-base md:text-lg leading-relaxed">
            Join Verivance Academy's Stem Cell & Regenerative Therapy Program and gain the
            practical skills, lab experience, and industry connections to lead in tomorrow's healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openFreeDemoModal("Stem Cell & Regenerative Therapy Program")}
              className="group px-8 py-4 rounded-xl font-bold text-[#0b3c5d] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ background:"linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow:"0 4px 24px rgba(46,196,204,0.4)" }}>
              <Rocket size={18} />
              Book a Free Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={openApplyNowModal}
              className="px-8 py-4 rounded-xl font-bold text-[#2ec4cc] border-2 border-[#2ec4cc]/60 flex items-center justify-center gap-2 hover:bg-[#2ec4cc]/10 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </section>

    </CourseLayout>
  )
}
