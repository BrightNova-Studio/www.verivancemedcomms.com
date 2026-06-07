"use client"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI in Pharma Innovation Program | Verivance Academy",
  description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/ai-in-pharma" },
  openGraph: {
    title: "AI in Pharma Innovation Program | Verivance Academy",
    description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/ai-in-pharma",
    images: [{ url: "/course-ai-pharma.jpg", width: 1200, height: 630, alt: "AI in Pharma Innovation Program | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Pharma Innovation Program | Verivance Academy",
    description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
    images: ["/course-ai-pharma.jpg"],
  },
}

import { useState, useEffect } from "react"
import CourseLayout from "@/components/course-layout"
import { useFreeDemo } from "@/components/free-demo-context"
import { useApplyNow } from "@/components/apply-now-context"
import {
  ArrowRight, Download, CheckCircle2, Clock, Monitor, Award,
  Rocket, Brain, Zap, Target, Database, FileText, Shield,
  BarChart3, Lightbulb, Users, GraduationCap, CheckCircle,
  Cpu, FlaskConical, BookOpen, Briefcase
} from "lucide-react"

const whatYouLearn = [
  { icon: Brain,     text: "AI Applications in Drug Discovery" },
  { icon: Shield,    text: "Pharmacovigilance & Safety Monitoring" },
  { icon: FlaskConical, text: "AI in Clinical Trials" },
  { icon: FileText,  text: "Regulatory & Medical Writing Support" },
  { icon: Target,    text: "Personalized Medicine" },
  { icon: BarChart3, text: "Data Analytics & Healthcare Insights" },
]

const practicalExposure = [
  "AI Tool Demonstrations",
  "Pharma AI Use-Case Discussions",
  "Medical Writing AI Applications",
  "Case-Based Learning",
]

const careerOpportunities = [
  "AI-Enabled Medical Writer",
  "Clinical Research Associate (AI-assisted workflows)",
  "Pharmacovigilance Associate",
  "Regulatory Documentation Support",
  "Pharma Data & Research Support Roles",
]

const enrollSteps = [
  { step: 1, text: "Submit the online enrollment form" },
  { step: 2, text: "Attend a free counselling session" },
  { step: 3, text: "Complete fee payment & confirm your batch" },
  { step: 4, text: "Begin training with onboarding & LMS access" },
]

export default function AiInPharmaPage() {
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
            backgroundImage: `url('/course-ai-pharma.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
            filter: "brightness(0.50) saturate(1.2)",
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg,rgba(11,60,93,0.88) 0%,rgba(11,60,93,0.72) 50%,rgba(46,196,204,0.22) 100%)",
          }} />
          {/* Futuristic circuit-like glow */}
          <div className="absolute top-0 right-0 pointer-events-none" style={{
            width:"min(600px,50vw)", height:"min(600px,50vw)",
            background:"radial-gradient(circle,rgba(46,196,204,0.18) 0%,transparent 70%)",
          }} />
          <div className="absolute bottom-0 left-0 pointer-events-none" style={{
            width:"min(400px,35vw)", height:"min(400px,35vw)",
            background:"radial-gradient(circle,rgba(109,79,194,0.12) 0%,transparent 70%)",
          }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`w-full max-w-4xl text-center lg:text-left transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Badge */}
            <div className={`inline-flex items-center gap-2 ${sp.badge} px-4 py-2 rounded-full border border-[#2ec4cc]/40 backdrop-blur-sm bg-gradient-to-r from-[#2ec4cc]/20 via-[#0b3c5d]/20 to-[#2ec4cc]/20`}>
              <Cpu className={`${isVeryShortScreen ? "w-3 h-3" : "w-4 h-4"} text-[#2ec4cc]`} />
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-semibold text-white`}>Our Courses</span>
            </div>

            <h1 className={`${getHeadingSize()} font-extrabold leading-tight ${sp.heading} text-white`}
              style={{ textShadow:"0 2px 20px rgba(0,0,0,0.3)" }}>
              AI in Pharma{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage:"linear-gradient(to right,#2ec4cc,#7edde3)" }}>
                Innovation
              </span>{" "}
              Program
            </h1>

            <p className={`${getSubSize()} text-[#cbd5e1] ${sp.sub} font-medium`}>
              From Data to Discovery
            </p>

            <p className={`${getDescSize()} text-[#e2e8f0] ${sp.desc} leading-relaxed max-w-2xl`}>
              Learn how Artificial Intelligence is transforming pharmaceutical research, drug development,
              clinical trials, and healthcare innovation. Gain future-ready skills in just 1 month.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${sp.btns}`}>
              <button onClick={() => openFreeDemoModal("AI in Pharma Innovation Program")}
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
                { icon: Clock,   label: "1 Month Duration" },
                { icon: Monitor, label: "Online + Self-Paced" },
                { icon: Brain,   label: "Expert-Led Sessions" },
                { icon: Award,   label: "Industry Certificate" },
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

      {/* ── MAIN CONTENT + SIDEBAR ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* LEFT — content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">Overview</h2>
                </div>
                <p className="text-[#64748b] leading-relaxed text-base md:text-lg border-l-2 border-[#2ec4cc]/40 pl-5">
                  Learn how Artificial Intelligence is transforming pharmaceutical research, drug development,
                  clinical trials, and healthcare innovation.
                </p>
              </div>

              {/* What You Will Learn */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">What You Will Learn</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whatYouLearn.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-md transition-all duration-200 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className="text-[#334155] font-medium text-sm leading-relaxed pt-1">{text}</span>
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
                <div className="rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#2ec4cc]/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0b3c5d] to-[#1a6a7a]">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                      <Zap size={18} className="text-white" />
                    </div>
                    <p className="text-white font-bold">Hands-on AI Applications in Pharma</p>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-3 bg-white">
                    {practicalExposure.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#0b3c5d]/5 to-[#2ec4cc]/5 border border-[#2ec4cc]/15">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0">
                          <CheckCircle2 size={13} className="text-white" />
                        </div>
                        <span className="text-[#334155] text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-1 h-7 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">Career Opportunities</h2>
                </div>
                <div className="space-y-3">
                  {careerOpportunities.map((role, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-md hover:translate-x-1 transition-all duration-200">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] shrink-0" />
                      <span className="text-[#334155] font-medium text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="flex flex-col md:flex-row items-start gap-6 p-7 rounded-2xl border-2 border-[#2ec4cc]/30"
                style={{ background:"linear-gradient(135deg,rgba(11,60,93,0.05),rgba(46,196,204,0.05))" }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 shadow-lg">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-[#2ec4cc] font-bold tracking-widest text-xs uppercase mb-2">Outcome</p>
                  <p className="text-[#334155] leading-relaxed">
                    Gain practical understanding of AI applications in pharmaceutical and healthcare industries
                    and develop future-ready skills to stay ahead in a rapidly evolving industry.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT — sticky sidebar */}
            <div>
              <div className="rounded-2xl border-2 border-[#2ec4cc]/30 overflow-hidden sticky top-36">
                <div className="px-6 py-4 bg-gradient-to-r from-[#0b3c5d] to-[#1a6a7a]">
                  <h3 className="text-white font-extrabold text-lg tracking-wide">Program Details</h3>
                </div>
                <div className="bg-white divide-y divide-[#e2e8f0]">
                  {[
                    { label:"Duration",      value:"1 Month",                        icon: Clock    },
                    { label:"Mode",          value:"Online + Self-Paced + Expert-Led", icon: Monitor  },
                    { label:"Certification", value:"Industry-Recognized Certificate", icon: Award    },
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
                  <div className="px-6 py-4">
                    <p className="text-[#2ec4cc] text-xs font-bold uppercase tracking-widest mb-3">Who Can Apply</p>
                    <p className="text-[#334155] text-sm leading-relaxed">
                      Students, Pharma Professionals, Researchers &amp; Healthcare Enthusiasts
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-b from-white to-[#f8fafc] border-t border-[#e2e8f0] space-y-3">
                  <button onClick={() => openFreeDemoModal("AI in Pharma Innovation Program")}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2ec4cc]/40 bg-[#2ec4cc]/10 mb-6">
            <Cpu size={14} className="text-[#2ec4cc]" />
            <span className="text-[#2ec4cc] text-xs font-bold tracking-wider uppercase">AI + Pharma</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Step Into the Future of{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage:"linear-gradient(to right,#2ec4cc,#7edde3)" }}>
              Pharma Innovation
            </span>
          </h2>
          <p className="text-[#94a3b8] mb-10 text-base md:text-lg leading-relaxed">
            Enroll in Verivance Academy's AI in Pharma Innovation Program and build the skills the industry
            needs most — in just one month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openFreeDemoModal("AI in Pharma Innovation Program")}
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
