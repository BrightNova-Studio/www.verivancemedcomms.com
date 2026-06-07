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
  Search,
  MessageCircle
} from "lucide-react"

export default function PharmacovigilancePage() {
  const { openModal: openFreeDemoModal } = useFreeDemo()
  const { openModal: openApplyNowModal } = useApplyNow()
  const [openModule, setOpenModule] = useState<number | null>(null)
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

  const toggleModule = (module: number) => {
    setOpenModule(openModule === module ? null : module)
  }

  const curriculum = [
    { module: 1, title: "Introduction to Pharmacovigilance & Drug Safety Concepts" },
    { module: 2, title: "Adverse Event (AE), Serious Adverse Event (SAE) & SUSAR Management" },
    { module: 3, title: "ICSR Case Processing, Triage & Workflow Management" },
    { module: 4, title: "Safety Narrative Writing & Medical Review Fundamentals" },
    { module: 5, title: "MedDRA & WHO-Drug Dictionary Coding" },
    { module: 6, title: "Global Safety Reporting: DSUR, PSUR, RMP & CIOMS" },
    { module: 7, title: "Safety Databases, Quality Compliance & Inspections" },
    { module: 8, title: "Signal Detection, Risk Management & Final Case Project" },
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
              backgroundImage: `url('/pharmacovigilance-safety-monitoring.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.60) saturate(1.15)",
            }}
          />
          
          {/* Premium Gradient Overlay - Balanced for visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom right, rgba(11, 60, 93, 0.78) 0%, rgba(11, 60, 93, 0.72) 40%, rgba(11, 60, 93, 0.68) 70%, rgba(46, 196, 204, 0.18) 100%)",
            }}
          />
          
          {/* Subtle darkening for text readability */}
          <div 
            className="absolute inset-0 bg-[#0b3c5d]/18"
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
              Pharmacovigilance & Drug Safety Certification Program
            </h1>

            {/* Subheading */}
            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Build a high-demand global career in drug safety, case processing, and regulatory reporting
            </p>

            {/* Short Description */}
            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} ${isVeryShortScreen ? "leading-normal" : "leading-relaxed"} max-w-2xl`}>
              Develop in-demand expertise in pharmacovigilance operations, individual case safety report (ICSR) management, and global safety regulations through hands-on training aligned with CRO and pharmaceutical industry standards.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button 
                onClick={() => openFreeDemoModal("Pharmacovigilance")}
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

            {/* Quick Stats Bar */}
            <div className={`flex flex-wrap items-center ${isVeryShortScreen ? "gap-3 md:gap-4 pt-2" : isShortScreen ? "gap-4 md:gap-6 pt-3" : "gap-6 md:gap-8 pt-4"} border-t border-[#2ec4cc]/30`}>
              {[
                { icon: Clock, text: "8 Weeks" },
                { icon: Target, text: "100% Practical" },
                { icon: Globe, text: "Global Safety Tools" },
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
                  "Training Mode: Live, Instructor-Led Sessions",
                  "Learning Model: 100% Practical & Workflow-Based",
                  "Tools Exposure: Global Safety Databases & Coding Systems",
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

        {/* SECTION 2: COURSE OVERVIEW */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Course Overview
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto mb-4">
                This program delivers comprehensive, hands-on training in pharmacovigilance and drug safety operations, covering end-to-end ICSR lifecycle management, global safety reporting, and regulatory compliance.
              </p>
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto">
                Learners gain exposure to real-world safety workflows, international reporting standards, and industry tools used by multinational CROs and pharmaceutical companies.
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
                This program is suitable for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Life science graduates: B.Pharm, M.Pharm, BSc, MSc, PharmD",
                  "Fresh graduates aiming to build careers in drug safety and pharmacovigilance",
                  "Clinical research professionals seeking to transition into PV roles",
                  "Healthcare professionals interested in global safety operations",
                  "Medical reviewers and regulatory professionals expanding into pharmacovigilance",
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

        {/* SECTION 4: WHAT YOU WILL LEARN */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              What You Will Learn
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: AlertCircle, text: "Identification and classification of AE, SAE, and SUSARs" },
                { icon: ClipboardCheck, text: "Case intake, triage, and end-to-end case processing workflows" },
                { icon: PenTool, text: "Safety narrative writing and medical review basics" },
                { icon: FileSearch, text: "MedDRA and WHO-DD coding principles" },
                { icon: FileBarChart, text: "Global safety reporting: DSUR, PSUR, RMP, CIOMS" },
                { icon: Activity, text: "ICSR lifecycle management and quality checks" },
                { icon: Database, text: "Safety database workflows and compliance requirements" },
                { icon: Search, text: "Fundamentals of signal detection and risk management" },
                { icon: Shield, text: "Audit and inspection readiness" },
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

        {/* SECTION 5: PROGRAM HIGHLIGHTS */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Program Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, text: "Industry-aligned pharmacovigilance curriculum" },
                { icon: Database, text: "Hands-on exposure to safety databases and coding systems" },
                { icon: Lightbulb, text: "Real-world case studies and safety scenarios" },
                { icon: Globe, text: "Global regulatory reporting and compliance training" },
                { icon: Search, text: "Introduction to signal detection and risk evaluation" },
                { icon: Target, text: "Career-focused guidance and interview preparation" },
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

        {/* SECTION 6: DETAILED CURRICULUM */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Detailed Curriculum (Module-Based)
            </h2>
            <div className="space-y-4">
              {curriculum.map((item) => (
                <div
                  key={item.module}
                  className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium border border-[#e2e8f0] overflow-hidden transition-all duration-300 hover:shadow-premium-lg"
                >
                  <button
                    onClick={() => toggleModule(item.module)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">M{item.module}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0b3c5d]">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={`w-6 h-6 text-[#2ec4cc] transition-transform duration-300 ${
                        openModule === item.module ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openModule === item.module && (
                    <div className="px-6 pb-6 border-t border-[#e2e8f0] pt-4">
                      <p className="text-[#64748b] leading-relaxed">
                        Detailed content for {item.title} will be covered in this module, including practical exercises and case studies.
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
                { icon: Shield, title: "Drug Safety Associate" },
                { icon: FileCheck, title: "Pharmacovigilance Case Processor" },
                { icon: UserCheck, title: "Pharmacovigilance Specialist" },
                { icon: PenTool, title: "Safety Narrative Writer" },
                { icon: ClipboardCheck, title: "Medical Reviewer Assistant" },
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

        {/* SECTION 7: PLACEMENT SUPPORT */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Placement Support
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              We provide structured career support to help learners secure industry roles:
            </p>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Dedicated placement assistance" },
                  { icon: FileText, text: "Resume writing and LinkedIn profile optimization" },
                  { icon: Target, text: "Mock technical and HR interviews with industry experts" },
                  { icon: Building2, text: "Placement support with CROs, pharmaceutical companies, and KPOs" },
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
                { step: 2, icon: HelpCircle, text: "Attend a free career counseling and guidance session" },
                { step: 3, icon: CreditCard, text: "Complete fee payment and confirm your batch" },
                { step: 4, icon: CheckCircle, text: "Begin training with onboarding and LMS access" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl shadow-premium p-6 border border-[#e2e8f0] hover:border-[#2ec4cc] transition-all duration-300"
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
                  Start Your Career in Global Drug Safety Today
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the next step toward a rewarding career in pharmacovigilance with Verivance Academy's Pharmacovigilance & Drug Safety Certification Program.
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
                      const message = encodeURIComponent("Hello Verivance, I am looking for some details about Pharmacovigilance & Drug Safety Certification Program, is it right time to talk?")
                      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Talk to a Career Advisor
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
