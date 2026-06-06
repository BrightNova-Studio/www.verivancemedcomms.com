"use client"

import { useState, useEffect } from "react"
import CourseLayout from "@/components/course-layout"
import { useFreeDemo } from "@/components/free-demo-context"
import { useApplyNow } from "@/components/apply-now-context"
import {
  ArrowRight, Download, CheckCircle2, Clock, Monitor, Award,
  Rocket, Star, Users, BookOpen, Briefcase, FileText, Shield,
  Database, Target, CheckCircle, GraduationCap, Layers, Zap
} from "lucide-react"

const domains = [
  {
    num: "01",
    title: "Clinical Research",
    icon: BookOpen,
    color: "from-[#0b3c5d] to-[#1a6a7a]",
    description: "Understand clinical trials, GCP guidelines, study monitoring and drug development processes.",
  },
  {
    num: "02",
    title: "Pharmacovigilance",
    icon: Shield,
    color: "from-[#1a6a7a] to-[#2ec4cc]",
    description: "Ensure patient safety through drug safety monitoring, case processing and adverse event reporting.",
  },
  {
    num: "03",
    title: "Medical Writing",
    icon: FileText,
    color: "from-[#0b3c5d] to-[#2ec4cc]",
    description: "Create clear, accurate and regulatory documents including protocols, CSRs and scientific reports.",
  },
  {
    num: "04",
    title: "Regulatory Affairs",
    icon: Briefcase,
    color: "from-[#1a4a6b] to-[#2ec4cc]",
    description: "Navigate global regulations, ensure product compliance and manage submissions.",
  },
  {
    num: "05",
    title: "Clinical Data Management",
    icon: Database,
    color: "from-[#0b3c5d] to-[#1a6a7a]",
    description: "Manage, clean and analyze clinical trial data with accuracy using industry standards.",
  },
]

const whatYouGain = [
  "Comprehensive knowledge of 5 high-demand pharma domains",
  "Real-time projects and practical exposure",
  "Job-ready skills with multi-domain expertise",
  "Career flexibility across CROs, Pharma & Healthcare industries",
  "Industry-recognized certification to boost your profile",
  "Dedicated placement support and career guidance",
]

const careerOpportunities = [
  "Clinical Research Associate (CRA)",
  "Drug Safety Associate",
  "Medical Writer",
  "Regulatory Affairs Associate",
  "Clinical Data Coordinator",
  "Data Analyst",
  "SAS Programmer",
  "Pharmacovigilance Associate",
  "Regulatory Documentation Specialist",
  "Clinical Trial Assistant (CTA)",
  "Safety Narrative Writer",
  "And Many More",
]

const programIncludes = [
  { icon: Users, text: "Live interactive sessions by industry experts" },
  { icon: Target, text: "Real-time projects & case studies" },
  { icon: GraduationCap, text: "Dedicated mentor support" },
  { icon: CheckCircle, text: "Interview preparation & career guidance" },
  { icon: Briefcase, text: "Resume building & LinkedIn optimisation" },
  { icon: Award, text: "Industry-recognised certification on completion" },
]

const enrollSteps = [
  { step: 1, text: "Submit the online enrollment form" },
  { step: 2, text: "Attend a free career counselling session" },
  { step: 3, text: "Complete fee payment & confirm your batch" },
  { step: 4, text: "Begin training with onboarding & LMS access" },
]

export default function FiveDomainProgramPage() {
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
    if (isShortScreen) return "text-4xl sm:text-5xl md:text-6xl"
    return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
  }
  const getSubheadingSize = () => isVeryShortScreen ? "text-base md:text-lg" : "text-lg md:text-xl lg:text-2xl"
  const getDescriptionSize = () => isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"
  const getSpacing = () => {
    if (isVeryShortScreen) return { badge: "mb-3", heading: "mb-3", subheading: "mb-2", description: "mb-4", buttons: "mb-4" }
    if (isShortScreen)     return { badge: "mb-4", heading: "mb-4", subheading: "mb-3", description: "mb-6", buttons: "mb-6" }
    return                        { badge: "mb-6", heading: "mb-6", subheading: "mb-4", description: "mb-8", buttons: "mb-8" }
  }
  const spacing = getSpacing()

  return (
    <CourseLayout>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: isDesktop ? (isVeryShortScreen ? "auto" : "75vh") : "auto",
          paddingTop:    isDesktop ? (isVeryShortScreen ? "132px" : "148px") : "132px",
          paddingBottom: isDesktop ? (isVeryShortScreen ? "40px" : "60px") : "60px",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/clinical-research-laboratory-students-pharma-train.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.6) saturate(1.1)",
            }}
          />
          {/* Multi-colour overlay — signals multi-domain */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(11,60,93,0.82) 0%, rgba(11,60,93,0.72) 40%, rgba(46,196,204,0.25) 100%)",
            }}
          />
          {/* Flagship gold shimmer */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: "min(500px, 40vw)",
              height: "min(500px, 40vw)",
              background: "radial-gradient(circle, rgba(255,200,80,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`w-full max-w-4xl text-center lg:text-left transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Flagship badge */}
            <div className={`inline-flex items-center gap-2 ${spacing.badge} px-4 py-2 rounded-full border backdrop-blur-sm`}
              style={{ background: "rgba(255,200,80,0.12)", borderColor: "rgba(255,200,80,0.4)" }}>
              <Star className={`${isVeryShortScreen ? "w-3 h-3" : "w-4 h-4"}`} style={{ color: "#ffc850" }} />
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-bold tracking-wider`} style={{ color: "#ffc850" }}>
                OUR FLAGSHIP PROGRAM
              </span>
            </div>

            <h1
              className={`${getHeadingSize()} font-extrabold leading-tight ${spacing.heading} text-white`}
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              5-Domain{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right,#2ec4cc,#7edde3)" }}
              >
                Job-Ready
              </span>{" "}
              Program
            </h1>

            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Clinical Research • Pharmacovigilance • Medical Writing • Regulatory Affairs • Clinical Data Management
            </p>

            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} leading-relaxed max-w-2xl`}>
              Master 5 high-demand pharma domains and become industry-ready. This comprehensive 3-month program
              provides end-to-end training across key clinical and pharma disciplines — preparing you for multiple
              career opportunities in leading CROs and pharmaceutical companies.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button
                onClick={() => openFreeDemoModal("5-Domain Job-Ready Program")}
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-[#0b3c5d] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow: "0 4px 24px rgba(46,196,204,0.4)" }}
              >
                <Rocket size={20} />
                Book a Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/brochures/verivance-training-academy-brochure.pdf"
                download
                className="px-8 py-4 rounded-xl font-bold text-[#2ec4cc] border-2 border-[#2ec4cc]/60 flex items-center justify-center gap-2 hover:bg-[#2ec4cc]/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Download size={18} />
                Download Brochure
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                { icon: Clock, label: "3 Months Duration" },
                { icon: Monitor, label: "Online + Practical" },
                { icon: Award, label: "Industry Certificate" },
                { icon: Layers, label: "5 Pharma Domains" },
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

      {/* ── 5 DOMAINS ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">The Program</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3c5d] mb-3">
              5 Powerful Domains. Endless Opportunities.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {domains.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.num}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-extrabold text-base">{d.num}</span>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-3 opacity-80`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-[#0b3c5d] font-bold text-sm uppercase tracking-wide mb-2 leading-snug">{d.title}</h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded mb-3" />
                  <p className="text-[#64748b] text-xs leading-relaxed">{d.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GAIN + PROGRAM INCLUDES ─────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

            {/* What you will gain */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">What You Will Gain</h2>
              </div>
              <div className="space-y-4">
                {whatYouGain.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-md transition-all duration-200">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-white" />
                    </div>
                    <span className="text-[#334155] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program includes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#0b3c5d] to-[#2ec4cc] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d]">Program Includes</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programIncludes.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#2ec4cc]/40 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0b3c5d]/10 to-[#2ec4cc]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#0b3c5d]" />
                    </div>
                    <span className="text-[#334155] text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES ─────────────────────────────────── */}
      <section className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">After Completion</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Career Opportunities</h2>
            <p className="text-[#94a3b8] max-w-xl mx-auto text-sm md:text-base">
              A single program that opens doors across the entire pharma industry.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {careerOpportunities.map((role, i) => (
              <div key={i}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#2ec4cc]/40 transition-all duration-200 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2ec4cc] shrink-0" />
                <span className="text-white/80 text-xs font-medium leading-snug">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl border-2 border-[#2ec4cc]/30"
            style={{ background: "linear-gradient(135deg,rgba(11,60,93,0.05),rgba(46,196,204,0.05))" }}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 shadow-xl">
              <GraduationCap size={38} className="text-white" />
            </div>
            <div>
              <p className="text-[#2ec4cc] font-bold tracking-widest text-xs uppercase mb-2">Outcome</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c5d] mb-3">
                One Program. Five Domains. Endless Career Possibilities.
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                Become job-ready across multiple pharma domains with strong practical exposure and
                industry-relevant skills. Graduate with a recognised certification, a project portfolio,
                and dedicated placement support to launch your career with confidence.
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
        style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ background: "rgba(255,200,80,0.1)", borderColor: "rgba(255,200,80,0.4)" }}>
            <Rocket size={14} style={{ color: "#ffc850" }} />
            <span className="text-xs font-bold tracking-wider" style={{ color: "#ffc850" }}>
              FLAGSHIP PROGRAM
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Start Your Career in{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right,#2ec4cc,#7edde3)" }}>
              Global Pharma
            </span>{" "}
            Today
          </h2>
          <p className="text-[#94a3b8] mb-10 text-base md:text-lg leading-relaxed">
            Join Verivance Academy's 5-Domain Job-Ready Program and build expertise across the full spectrum
            of clinical and pharmaceutical sciences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openFreeDemoModal("5-Domain Job-Ready Program")}
              className="group px-8 py-4 rounded-xl font-bold text-[#0b3c5d] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow: "0 4px 24px rgba(46,196,204,0.4)" }}
            >
              <Rocket size={18} />
              Book a Free Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openApplyNowModal}
              className="px-8 py-4 rounded-xl font-bold text-[#2ec4cc] border-2 border-[#2ec4cc]/60 flex items-center justify-center gap-2 hover:bg-[#2ec4cc]/10 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

    </CourseLayout>
  )
}
