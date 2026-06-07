"use client"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Clinical Research Certification | Verivance Academy",
  description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/clinical-research" },
  openGraph: {
    title: "Advanced Clinical Research Certification | Verivance Academy",
    description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/clinical-research",
    images: [{ url: "/course-clinical-research.jpg", width: 1200, height: 630, alt: "Advanced Clinical Research Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Clinical Research Certification | Verivance Academy",
    description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
    images: ["/course-clinical-research.jpg"],
  },
}

import { useState, useEffect } from "react"
import CourseLayout from "@/components/course-layout"
import { useFreeDemo } from "@/components/free-demo-context"
import { useApplyNow } from "@/components/apply-now-context"
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Clock, 
  Monitor, 
  GraduationCap,
  BookOpen,
  Target,
  FileText,
  Shield,
  Briefcase,
  Users,
  Award,
  Lightbulb,
  ClipboardCheck,
  FileCheck,
  AlertCircle,
  Building2,
  UserCheck,
  FolderOpen,
  FileSearch,
  HelpCircle,
  CreditCard,
  CheckCircle,
  Rocket,
  MessageCircle
} from "lucide-react"

export default function ClinicalResearchPage() {
  const { openModal: openFreeDemoModal } = useFreeDemo()
  const { openModal: openApplyNowModal } = useApplyNow()
  const [openWeek, setOpenWeek] = useState<number | null>(null)
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

  // Calculate responsive values based on viewport height
  const isDesktop = windowWidth >= 1024
  const isShortScreen = windowHeight < 800
  const isVeryShortScreen = windowHeight < 700
  
  // Dynamic text sizes based on viewport height
  const getHeadingSize = () => {
    if (isVeryShortScreen) return "text-3xl sm:text-4xl md:text-5xl"
    if (isShortScreen) return "text-4xl sm:text-5xl md:text-6xl"
    return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
  }
  
  const getSubheadingSize = () => {
    if (isVeryShortScreen) return "text-base md:text-lg"
    if (isShortScreen) return "text-lg md:text-xl"
    return "text-lg md:text-xl lg:text-2xl"
  }
  
  const getDescriptionSize = () => {
    if (isVeryShortScreen) return "text-sm md:text-base"
    return "text-base md:text-lg"
  }
  
  // Dynamic spacing based on viewport height
  const getSpacing = () => {
    if (isVeryShortScreen) return { badge: "mb-3", heading: "mb-3", subheading: "mb-2", description: "mb-4", buttons: "mb-4" }
    if (isShortScreen) return { badge: "mb-4", heading: "mb-4", subheading: "mb-3", description: "mb-6", buttons: "mb-6" }
    return { badge: "mb-6", heading: "mb-6", subheading: "mb-4", description: "mb-8", buttons: "mb-8" }
  }
  
  const spacing = getSpacing()

  const toggleWeek = (week: number) => {
    setOpenWeek(openWeek === week ? null : week)
  }

  const curriculum = [
    { week: 1, title: "Introduction to Clinical Research & Drug Development Lifecycle" },
    { week: 2, title: "Clinical Trial Phases, Study Designs & Trial Methodology" },
    { week: 3, title: "ICH-GCP Guidelines, Ethics & Informed Consent Process" },
    { week: 4, title: "Clinical Trial Documentation & Trial Master File (TMF)" },
    { week: 5, title: "Site Management, Monitoring Activities & CRA Responsibilities" },
    { week: 6, title: "Pharmacovigilance Basics: AE & SAE Reporting" },
    { week: 7, title: "Regulatory Submissions, Compliance & Global Guidelines" },
    { week: 8, title: "BA/BE Studies, Practical Assignments & Final Project Work" },
  ]

  return (
    <CourseLayout>
      {/* HERO BANNER */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          minHeight: isDesktop ? (isVeryShortScreen ? "auto" : isShortScreen ? "90vh" : "75vh") : "auto",
          paddingTop: isDesktop ? (isVeryShortScreen ? "132px" : "148px") : "132px",
          paddingBottom: isDesktop ? (isVeryShortScreen ? "40px" : "60px") : "60px",
        }}
      >
        <div className="absolute inset-0 z-0">
          {/* Background Image - HD Premium Look */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/clinical-research-laboratory.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.65) saturate(1.1)",
            }}
          />
          
          {/* Premium Gradient Overlay - Balanced for visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom right, rgba(11, 60, 93, 0.75) 0%, rgba(11, 60, 93, 0.70) 40%, rgba(11, 60, 93, 0.65) 70%, rgba(46, 196, 204, 0.20) 100%)",
            }}
          />
          
          {/* Subtle darkening for text readability */}
          <div 
            className="absolute inset-0 bg-[#0b3c5d]/15"
          />

          {/* Teal Accent Gradients */}
          <div 
            className="absolute top-0 right-1/4 bg-gradient-radial from-[#2EC4CC]/15 to-transparent rounded-full blur-3xl"
            style={{
              width: `min(${windowWidth * 0.3}px, 500px)`,
              height: `min(${windowWidth * 0.3}px, 500px)`,
            }}
          />
          <div 
            className="absolute bottom-1/4 left-0 bg-gradient-radial from-[#2EC4CC]/10 to-transparent rounded-full blur-3xl"
            style={{
              width: `min(${windowWidth * 0.25}px, 400px)`,
              height: `min(${windowWidth * 0.25}px, 400px)`,
            }}
          />
        </div>

        <div 
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
          style={{
            minHeight: isDesktop ? (isVeryShortScreen ? "auto" : "auto") : "auto",
            paddingTop: isDesktop ? (isVeryShortScreen ? "20px" : "0") : "40px",
            paddingBottom: isDesktop ? (isVeryShortScreen ? "20px" : "0") : "40px",
          }}
        >
          <div 
            className={`w-full max-w-4xl text-center lg:text-left transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 ${spacing.badge} px-4 py-2 rounded-full bg-gradient-to-r from-[#2ec4cc]/20 via-[#0b3c5d]/20 to-[#2ec4cc]/20 border border-[#2ec4cc]/40 backdrop-blur-sm`}>
              <Award className={`${isVeryShortScreen ? "w-3 h-3" : "w-4 h-4"} text-[#2ec4cc]`} />
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-semibold text-white`}>Professional Certification Program</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`${getHeadingSize()} font-extrabold ${isVeryShortScreen ? "leading-snug" : "leading-tight"} ${spacing.heading} text-white`}
              style={{
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              Advanced Clinical Research Certification
            </h1>

            {/* Subheading */}
            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Clinical Operations • Regulatory Affairs • Safety • Trial Documentation
            </p>

            {/* Supporting Text */}
            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} ${isVeryShortScreen ? "leading-normal" : "leading-relaxed"} max-w-2xl`}>
              Build a high-growth, global career in Clinical Research through hands-on training, an industry-aligned curriculum, and real-world project exposure designed to meet CRO and pharmaceutical industry standards.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button 
                onClick={() => openFreeDemoModal("Clinical Research")}
                className={`group ${isVeryShortScreen ? "px-6 py-3" : "px-8 py-4"} bg-gradient-to-r from-[#2EC4CC] to-[#0B3C5D] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 font-semibold ${isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"} flex items-center justify-center gap-2`}
                style={{
                  boxShadow: "0 8px 32px rgba(46, 196, 204, 0.4), 0 0 20px rgba(46, 196, 204, 0.2)",
                }}
              >
                Book a Free Demo
                <ArrowRight 
                  size={isVeryShortScreen ? 18 : 20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </button>
            </div>

            {/* Icon Highlight Strip */}
            <div className={`flex flex-wrap items-center ${isVeryShortScreen ? "gap-3 md:gap-4 pt-2" : isShortScreen ? "gap-4 md:gap-6 pt-3" : "gap-6 md:gap-8 pt-4"} border-t border-[#2ec4cc]/30`}>
              {[
                { icon: Clock, text: "8 Weeks Duration" },
                { icon: Target, text: "100% Practical Training" },
                { icon: Rocket, text: "Live Industry Projects" },
                { icon: Users, text: "Placement Support" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className={`${isVeryShortScreen ? "w-4 h-4" : "w-5 h-5"} text-[#2ec4cc]`} />
                    <span className={`${isVeryShortScreen ? "text-xs md:text-sm" : "text-sm md:text-base"} font-semibold text-white`}>{stat.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe]">
        {/* SECTION 1: PROGRAM SNAPSHOT */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Program Snapshot
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Duration: 8 Weeks",
                  "Training Mode: Live Instructor-Led Sessions",
                  "Learning Approach: 100% Practical & Application-Based",
                  "Projects: Real-World Industry Case Studies",
                  "Career Support: Dedicated Placement Assistance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ec4cc] flex-shrink-0 mt-0.5" />
                    <p className="text-base text-[#64748b] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHO SHOULD ENROLL */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Who Should Enroll
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg text-[#64748b] mb-6 text-center font-medium">
                This program is ideal for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Life science graduates: B.Pharm, M.Pharm, B.Sc, M.Sc, B.Tech (Biotechnology)",
                  "Fresh graduates seeking careers in pharma, CROs, and clinical research",
                  "Working professionals in the pharmaceutical industry looking to upskill or transition",
                  "Professionals from medical writing or regulatory backgrounds aiming to enter clinical operations",
                  "Individuals aspiring to build a career in clinical research and trial management",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ec4cc] flex-shrink-0 mt-0.5" />
                    <p className="text-base text-[#64748b] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROGRAM HIGHLIGHTS */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Program Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, text: "Industry-aligned, job-focused curriculum" },
                { icon: Target, text: "Hands-on training with real clinical research scenarios" },
                { icon: FileText, text: "Strong emphasis on regulatory and trial documentation" },
                { icon: Shield, text: "ICH-GCP–focused learning approach" },
                { icon: Lightbulb, text: "Real-world case studies and operational workflows" },
                { icon: Briefcase, text: "Career guidance, resume building & interview preparation" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300 hover:shadow-premium-lg transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-base font-semibold text-[#0b3c5d]">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT YOU WILL LEARN */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              What You Will Learn
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "End-to-end clinical trial process (Phase I–IV)",
                  "ICH-GCP guidelines, ethics, and patient safety principles",
                  "Clinical study designs and trial methodology",
                  "Site management and clinical monitoring activities",
                  "Trial Master File (TMF) and essential documentation",
                  "Adverse Event (AE) and Serious Adverse Event (SAE) reporting",
                  "Regulatory submissions and compliance requirements",
                  "Fundamentals of Bioavailability (BA) & Bioequivalence (BE) studies",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] mt-2 flex-shrink-0"></div>
                    <p className="text-base text-[#64748b] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DETAILED CURRICULUM */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Detailed Curriculum (Week-wise)
            </h2>
            <div className="space-y-4">
              {curriculum.map((item) => (
                <div
                  key={item.week}
                  className="bg-white rounded-2xl shadow-premium border border-[#e2e8f0] overflow-hidden transition-all duration-300 hover:shadow-premium-lg"
                >
                  <button
                    onClick={() => toggleWeek(item.week)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">W{item.week}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0b3c5d]">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={`w-6 h-6 text-[#2ec4cc] transition-transform duration-300 ${
                        openWeek === item.week ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openWeek === item.week && (
                    <div className="px-6 pb-6 border-t border-[#e2e8f0] pt-4">
                      <p className="text-[#64748b] leading-relaxed">
                        Detailed content for {item.title} will be covered in this week's sessions, including practical exercises and case studies.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CAREER OPPORTUNITIES AFTER COMPLETION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Career Opportunities After Completion
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              Graduates of this program can pursue roles such as:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ClipboardCheck, title: "Clinical Research Coordinator (CRC)" },
                { icon: UserCheck, title: "Clinical Research Associate (CRA)" },
                { icon: FolderOpen, title: "TMF Specialist / Documentation Associate" },
                { icon: FileSearch, title: "Regulatory Affairs Assistant" },
                { icon: Briefcase, title: "Clinical Trial Assistant (CTA)" },
                { icon: Users, title: "Clinical Project Support Roles" },
              ].map((career, index) => {
                const Icon = career.icon
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300 hover:shadow-premium-lg transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-base font-semibold text-[#0b3c5d] leading-tight">{career.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 7: PLACEMENT SUPPORT */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Placement Support
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              We provide structured career support to help you transition into industry roles:
            </p>
            <div className="bg-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Dedicated placement assistance" },
                  { icon: Target, text: "Technical & HR interview preparation" },
                  { icon: FileText, text: "Resume writing and LinkedIn profile optimization" },
                  { icon: Building2, text: "Ongoing job support with CROs, pharmaceutical companies, and research organizations" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-base text-[#64748b] leading-relaxed pt-2">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: HOW TO ENROLL */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              How to Enroll
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, icon: FileText, text: "Submit the online enrollment form" },
                { step: 2, icon: HelpCircle, text: "Attend a free career counseling session" },
                { step: 3, icon: CreditCard, text: "Complete fee payment & confirm your batch" },
                { step: 4, icon: CheckCircle, text: "Begin training with onboarding & LMS access" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="relative bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center text-white font-bold shadow-lg">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-base font-semibold text-[#0b3c5d] leading-tight">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] rounded-3xl shadow-premium-lg p-12 md:p-16 border border-[#2ec4cc]/20 text-center relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Career in Global Clinical Research
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the next step toward a rewarding career in clinical research with Verivance Academy's Advanced Clinical Research Certification Program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button 
                    onClick={() => openFreeDemoModal("Clinical Research")}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Book a Free Demo
                    <ArrowRight size={20} />
                  </button>
                  <a
                    href="/brochures/clinical-research-brochure.pdf"
                    download="Clinical-Research-Certification-Brochure.pdf"
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </CourseLayout>
  )
}
