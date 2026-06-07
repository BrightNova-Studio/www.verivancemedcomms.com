"use client"



import { useState, useEffect } from "react"
import CourseLayout from "@/components/course-layout"
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
  UserCircle,
  Sparkles,
  BriefcaseIcon,
  Rocket,
  Star
} from "lucide-react"

export default function InternshipProgramsPage() {
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

  const internships = [
    {
      title: "Clinical Research Internship",
      description: "Gain practical exposure to clinical trial operations, essential documentation, site-level activities, and regulatory compliance processes followed in CROs and pharmaceutical organizations.",
      icon: ClipboardCheck,
    },
    {
      title: "Pharmacovigilance Internship",
      description: "Develop hands-on experience in drug safety case processing, adverse event reporting, global pharmacovigilance workflows, and regulatory safety documentation.",
      icon: Shield,
    },
    {
      title: "Medical Writing Internship",
      description: "Train in the preparation of regulatory documents, clinical manuscripts, and medical communications content under expert review with real-world writing assignments.",
      icon: PenTool,
    },
    {
      title: "Clinical Data Management Internship",
      description: "Work on simulated EDC systems, data validation, query management, and database lifecycle processes aligned with global CDM practices.",
      icon: Database,
    },
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
          {/* Professional Background - Premium Corporate Look */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/clinical-research-laboratory.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.5) saturate(0.9) contrast(1.1)",
            }}
          />
          
          {/* Premium Professional Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(11, 60, 93, 0.85) 0%, rgba(11, 60, 93, 0.80) 30%, rgba(11, 60, 93, 0.75) 60%, rgba(46, 196, 204, 0.25) 100%)",
            }}
          />
          
          {/* Professional Pattern Overlay - Subtle geometric */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(46, 196, 204, 0.1) 10px,
                rgba(46, 196, 204, 0.1) 20px
              )`,
            }}
          />
          
          {/* Subtle darkening for text readability */}
          <div 
            className="absolute inset-0 bg-[#0b3c5d]/20"
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
              <Briefcase className={`${isVeryShortScreen ? "w-3 h-3" : "w-4 h-4"} text-[#2ec4cc]`} />
              <span className={`${isVeryShortScreen ? "text-xs" : "text-sm"} font-semibold text-white`}>Live Industry Internship Program</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`${getHeadingSize()} font-extrabold ${isVeryShortScreen ? "leading-snug" : "leading-tight"} ${spacing.heading} text-white`}
              style={{
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              Professional Internship Programs
            </h1>

            {/* Subheading */}
            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Gain Real-World Industry Experience Through Live Projects and Expert Mentorship
            </p>

            {/* Short Description */}
            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} ${isVeryShortScreen ? "leading-normal" : "leading-relaxed"} max-w-2xl`}>
              Verivance Academy's Professional Internship Programs are designed to provide structured, hands-on industry exposure through live projects, domain-specific training, formal reporting, and expert mentor evaluation across key pharmaceutical and clinical research disciplines.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button 
                onClick={openApplyNowModal}
                className={`group ${isVeryShortScreen ? "px-6 py-3" : "px-8 py-4"} bg-gradient-to-r from-[#2EC4CC] to-[#0B3C5D] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 font-semibold ${isVeryShortScreen ? "text-sm md:text-base" : "text-base md:text-lg"} flex items-center justify-center gap-2`}
                style={{
                  boxShadow: "0 8px 32px rgba(46, 196, 204, 0.4), 0 0 20px rgba(46, 196, 204, 0.2)",
                }}
              >
                Apply for Internship
                <ArrowRight 
                  size={isVeryShortScreen ? 18 : 20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </button>
            </div>

            {/* Quick Highlights Bar */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4 border-t border-[#2ec4cc]/30">
              {[
                { icon: Rocket, text: "Live Industry Projects" },
                { icon: UserCircle, text: "Expert Mentorship" },
                { icon: Award, text: "Certification" },
                { icon: Target, text: "Career Guidance" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#2ec4cc]" />
                    <span className="text-sm md:text-base font-semibold text-white">{stat.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe]">
        {/* SECTION 1: PROGRAM HIGHLIGHTS */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Program Highlights
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Live industry-aligned project assignments",
                  "One-to-one mentorship from industry professionals",
                  "Structured learning and evaluation framework",
                  "Professional internship certification",
                  "Career guidance and job-readiness training",
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

        {/* SECTION 2: INTERNSHIPS OFFERED */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Internships Offered
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internships.map((internship, index) => {
                const Icon = internship.icon
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300 hover:shadow-premium-lg transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0b3c5d] mb-3">{internship.title}</h3>
                    <p className="text-sm text-[#64748b] mb-4 leading-relaxed">{internship.description}</p>
                    <button 
                      onClick={openApplyNowModal}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 group/btn"
                    >
                      Apply Now
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERNSHIP PROGRAM OVERVIEW */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Internship Program Overview
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto">
                These professional internships are structured to bridge the gap between academic knowledge and industry expectations. Each program follows a project-driven approach that includes real-time assignments, weekly reporting, mentor-led evaluations, and final project certification to enhance employability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT YOU WILL GAIN */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              What You Will Gain
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Real-world project exposure",
                  "Practical understanding of industry workflows",
                  "Technical skill enhancement",
                  "Professional documentation and report-writing experience",
                  "Personalized mentor feedback",
                  "Performance evaluation and improvement guidance",
                  "Industry-recognized internship certification",
                  "Career readiness and confidence",
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

        {/* SECTION 5: HOW THE INTERNSHIP WORKS */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              How the Internship Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, icon: HelpCircle, text: "Internship orientation and domain selection" },
                { step: 2, icon: Rocket, text: "Live project allocation and structured training" },
                { step: 3, icon: FileText, text: "Weekly progress reporting and mentor evaluation" },
                { step: 4, icon: Award, text: "Final project review, assessment, and certification" },
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
                    <p className="text-base font-semibold text-[#0b3c5d] leading-tight">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: WHO SHOULD APPLY */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Who Should Apply
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Life science and pharmacy students",
                  "Fresh graduates seeking industry exposure",
                  "Clinical research and pharmacovigilance aspirants",
                  "Medical writing beginners",
                  "Clinical data management and data-focused learners",
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

        {/* SECTION 7: CAREER BENEFITS AFTER INTERNSHIP */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Career Benefits After Internship
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Enhanced job readiness and confidence",
                  "Practical industry experience",
                  "Strong project portfolio and documentation",
                  "Recognized certification for job applications",
                  "Improved placement and interview success",
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

        {/* SECTION 8: PLACEMENT AND CAREER SUPPORT */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Placement and Career Support
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: FileText, text: "Resume and LinkedIn profile optimization" },
                  { icon: Target, text: "Mock interviews and HR readiness training" },
                  { icon: Briefcase, text: "Personalized career roadmap planning" },
                  { icon: Users, text: "Placement assistance support with CROs and pharma organizations" },
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

        {/* SECTION 8: FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] rounded-3xl shadow-premium-lg p-12 md:p-16 border border-[#2ec4cc]/20 text-center relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Professional Career with Real Industry Internship Experience
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Build practical skills, gain industry exposure, and improve employability with Verivance Academy's Professional Internship Programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button 
                    onClick={openApplyNowModal}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      const whatsappNumber = "919550130545"
                      const message = encodeURIComponent("Hello Verivance, I am looking for some details about Professional Internship Programs, is it right time to talk?")
                      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Talk to an Internship Advisor
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
