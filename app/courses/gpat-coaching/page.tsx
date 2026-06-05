"use client"

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
  PenTool,
  Globe,
  Presentation,
  FileEdit,
  Activity,
  Database,
  FileBarChart,
  Laptop,
  BarChart3,
  Settings,
  MessageSquare,
  Lock,
  TrendingUp,
  MessageCircle,
  BookMarked,
  TestTube,
  Calculator,
  Brain,
  TrendingDown,
  UserCircle,
  Sparkles
} from "lucide-react"

export default function GPATCoachingPage() {
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

  return (
    <CourseLayout>
      {/* HERO BANNER */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          minHeight: isDesktop ? (isVeryShortScreen ? "auto" : isShortScreen ? "90vh" : "75vh") : "auto",
          paddingTop: isDesktop ? (isVeryShortScreen ? "80px" : "100px") : "80px",
          paddingBottom: isDesktop ? (isVeryShortScreen ? "40px" : "60px") : "60px",
        }}
      >
        <div className="absolute inset-0 z-0">
          {/* Background Image - HD Premium Look */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/pharmacy-examination-preparation.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.64) saturate(1.1)",
            }}
          />
          
          {/* Premium Gradient Overlay - Balanced for visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom right, rgba(11, 60, 93, 0.75) 0%, rgba(11, 60, 93, 0.70) 40%, rgba(11, 60, 93, 0.66) 70%, rgba(46, 196, 204, 0.21) 100%)",
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
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-semibold text-white`}>India's Trusted GPAT Coaching Program</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`${getHeadingSize()} font-extrabold ${isVeryShortScreen ? "leading-snug" : "leading-tight"} ${spacing.heading} text-white`}
              style={{
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              GPAT Coaching & Rank Enhancement Program
            </h1>

            {/* Subheading */}
            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Crack GPAT with a High Rank and Secure Admission into Top M.Pharm Institutions
            </p>

            {/* Short Description */}
            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} ${isVeryShortScreen ? "leading-normal" : "leading-relaxed"} max-w-2xl`}>
              A comprehensive, result-driven GPAT preparation program designed to strengthen core pharmaceutical concepts, enhance problem-solving accuracy, and maximize exam performance through expert-led coaching and structured test practice.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button 
                onClick={() => openFreeDemoModal("GPAT Coaching")}
                className={`group ${isVeryShortScreen ? "px-6 py-3" : "px-8 py-4"} bg-gradient-to-r from-[#2EC4CC] to-[#0B3C5D] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 font-semibold ${isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"} flex items-center justify-center gap-2`}
                style={{
                  boxShadow: "0 8px 32px rgba(46, 196, 204, 0.4), 0 0 20px rgba(46, 196, 204, 0.2)",
                }}
              >
                Enroll for Free Demo
                <ArrowRight 
                  size={isVeryShortScreen ? 18 : 20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </button>
              <button 
                className={`${isVeryShortScreen ? "px-6 py-3" : "px-8 py-4"} border-2 border-[#2EC4CC] text-[#2EC4CC] rounded-xl hover:bg-[#2EC4CC]/10 transition-all duration-300 font-semibold ${isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"} flex items-center justify-center gap-2`}
                style={{
                  boxShadow: "0 4px 16px rgba(46, 196, 204, 0.2)",
                }}
              >
                <Download size={isVeryShortScreen ? 18 : 20} />
                Download Syllabus
              </button>
            </div>

            {/* Quick Stats Bar */}
            <div className={`flex flex-wrap items-center ${isVeryShortScreen ? "gap-3 md:gap-4 pt-2" : isShortScreen ? "gap-4 md:gap-6 pt-3" : "gap-6 md:gap-8 pt-4"} border-t border-[#2ec4cc]/30`}>
              {[
                { icon: BookOpen, text: "Complete Syllabus Coverage" },
                { icon: Monitor, text: "Daily Live Classes" },
                { icon: ClipboardCheck, text: "Weekly Mock Tests" },
                { icon: UserCircle, text: "Personalized Mentorship" },
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
                  "Coverage: Complete GPAT Syllabus",
                  "Training Mode:  Live Interactive Classes",
                  "Assessments: Weekly & Full-Length Mock Tests",
                  "Mentorship: Personalized Academic Guidance",
                  "Outcome: High GPAT Rank & Top College Admissions",
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

        {/* SECTION 2: COURSE OVERVIEW */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Course Overview
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto mb-4">
                The GPAT Coaching & Rank Enhancement Program is a focused and systematic training pathway for pharmacy students aiming to secure top GPAT ranks.
              </p>
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto">
                The program emphasizes concept clarity, exam-oriented problem solving, speed optimization, and accuracy, supported by daily practice, regular assessments, and full-length GPAT simulation tests to ensure consistent performance improvement.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO SHOULD ENROLL */}
        <section className="py-16 md:py-24 bg-white relative">
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
                  "B.Pharm final-year students preparing for GPAT",
                  "B.Pharm graduates appearing for GPAT",
                  "M.Pharm aspirants targeting top institutions",
                  "Students preparing for NIPER and other pharmacy entrance examinations",
                  "Repeat GPAT aspirants aiming to significantly improve their rank",
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

        {/* SECTION 4: PROGRAM FEATURES */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Program Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, text: "Complete GPAT syllabus coverage across all core subjects" },
                { icon: Monitor, text: "Daily topic-wise classes led by experienced faculty" },
                { icon: Brain, text: "Structured concept-building and revision sessions" },
                { icon: ClipboardCheck, text: "Weekly performance-based mock tests" },
                { icon: BarChart3, text: "Full-length GPAT test series with detailed rank analysis" },
                { icon: UserCircle, text: "Individualized doubt-clearing and mentoring sessions" },
                { icon: Sparkles, text: "Exam-oriented shortcuts, numerical techniques, and time-management strategies" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300 hover:shadow-premium-lg transform hover:-translate-y-1"
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

        {/* SECTION 5: SUBJECTS COVERED */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Subjects Covered
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TestTube, text: "Pharmaceutical Analysis" },
                { icon: BookMarked, text: "Pharmaceutics" },
                { icon: Activity, text: "Pharmacology" },
                { icon: FileEdit, text: "Pharmaceutical Chemistry" },
                { icon: BookMarked, text: "Pharmacognosy" },
                { icon: Brain, text: "Biochemistry & Pathophysiology" },
                { icon: Shield, text: "Pharmaceutical Jurisprudence" },
                { icon: Calculator, text: "Calculations and GPAT-specific problem-solving techniques" },
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
                    <p className="text-base font-semibold text-[#0b3c5d] leading-tight">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: TEST & PERFORMANCE TRACKING */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Mock Tests & Performance Tracking
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: ClipboardCheck, text: "Weekly subject-wise assessments" },
                  { icon: FileBarChart, text: "Full-length GPAT simulation exams" },
                  { icon: TrendingUp, text: "Rank-based performance reports" },
                  { icon: Target, text: "Strength & weakness analysis" },
                  { icon: UserCircle, text: "Faculty-guided improvement plans" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-base font-semibold text-[#0b3c5d] leading-relaxed pt-2">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: OPPORTUNITIES AFTER GPAT */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Opportunities After GPAT
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              Successful GPAT candidates can pursue:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Admission into top M.Pharm colleges across India" },
                { icon: Building2, title: "Entry into NIPERs and Central Universities" },
                { icon: BookOpen, title: "Careers in research, academia, and pharmaceutical R&D" },
                { icon: TrendingUp, title: "Higher education and specialization in pharmaceutical sciences" },
              ].map((career, index) => {
                const Icon = career.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300 hover:shadow-premium-lg transform hover:-translate-y-1"
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

        {/* SECTION 7: HOW TO ENROLL */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              How to Enroll
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, icon: UserCircle, text: "Register for a free demo class" },
                { step: 2, icon: HelpCircle, text: "Attend academic counseling and performance evaluation" },
                { step: 3, icon: CreditCard, text: "Confirm enrollment and select your batch" },
                { step: 4, icon: CheckCircle, text: "Begin structured GPAT preparation with expert guidance" },
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

        {/* SECTION 8: FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] rounded-3xl shadow-premium-lg p-12 md:p-16 border border-[#2ec4cc]/20 text-center relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your GPAT Preparation with Expert Guidance Today
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Achieve your academic and professional goals with Verivance Academy's GPAT Coaching & Rank Enhancement Program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button 
                    onClick={() => openFreeDemoModal("GPAT Coaching")}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <UserCircle size={20} />
                    Enroll for Free Demo
                  </button>
                  <button 
                    onClick={() => {
                      const whatsappNumber = "919550130545"
                      const message = encodeURIComponent("Hello Verivance, I am looking for some details about GPAT Coaching & Rank Enhancement Program, is it right time to talk?")
                      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Talk to an Academic Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer to prevent content from being hidden behind any fixed elements */}
        <div className="h-12"></div>
      </div>
    </CourseLayout>
  )
}
