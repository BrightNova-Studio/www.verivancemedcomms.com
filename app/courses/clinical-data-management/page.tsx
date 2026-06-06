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
  MessageCircle
} from "lucide-react"

export default function ClinicalDataManagementPage() {
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
          paddingTop: isDesktop ? (isVeryShortScreen ? "132px" : "148px") : "132px",
          paddingBottom: isDesktop ? (isVeryShortScreen ? "40px" : "60px") : "60px",
        }}
      >
        <div className="absolute inset-0 z-0">
          {/* Background Image - HD Premium Look */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/clinical-data-management.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
              filter: "brightness(0.63) saturate(1.12)",
            }}
          />
          
          {/* Premium Gradient Overlay - Balanced for visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom right, rgba(11, 60, 93, 0.77) 0%, rgba(11, 60, 93, 0.72) 40%, rgba(11, 60, 93, 0.68) 70%, rgba(46, 196, 204, 0.19) 100%)",
            }}
          />
          
          {/* Subtle darkening for text readability */}
          <div 
            className="absolute inset-0 bg-[#0b3c5d]/17"
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
              Clinical Data Management (CDM) Certification Program
            </h1>

            {/* Subheading */}
            <p className={`${getSubheadingSize()} text-[#cbd5e1] ${spacing.subheading} font-medium`}>
              Become an Industry-Ready CDM professional in 2 Months
            </p>

            {/* Description */}
            <p className={`${getDescriptionSize()} text-[#e2e8f0] ${spacing.description} ${isVeryShortScreen ? "leading-normal" : "leading-relaxed"} max-w-2xl`}>
              A fast-track, immersive 2-month training designed to prepare students for real-world roles in Clinical Data Management.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${spacing.buttons}`}>
              <button 
                onClick={() => openFreeDemoModal("Clinical Data Management")}
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
                { icon: Clock, text: "12 Weeks" },
                { icon: Monitor, text: "Live Online (2 Days/Week)" },
                { icon: Target, text: "Job Ready + Industry Simulation" },
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
              Course Summary
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Mode: Live Online Classes (2 Days/Week)",
                  "Duration: 12 Weeks",
                  "Outcome: Professional in CDM + Job Readiness + Industry Simulation Experience",
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
                This program equips learners with the essential skills, tools, and practical exposure needed to begin a successful career in CDM. Each week focuses on industry-aligned competencies, hands-on assignments, and structured feedback to ensure complete mastery.
              </p>
              <p className="text-lg md:text-xl text-[#64748b] leading-relaxed text-center max-w-4xl mx-auto">
                The curriculum provides an introduction and background information for the spectrum of clinical data management tasks. Explains the high-level flow of a clinical trial from creation of the protocol through study lock.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: DETAILED CURRICULUM */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Detailed Curriculum
            </h2>
            <div className="space-y-4">
              {[
                {
                  week: 1,
                  title: "Introduction to Clinical Trials",
                  topics: [
                    "Testing in Humans",
                    "Clinical Trial Protocols",
                    "Clinical Trial Process",
                    "The Importance of Clinical Data Management",
                    "Regulations, Guidance, and ICH E6 (GCP)",
                  ],
                },
                {
                  week: 2,
                  title: "Study Startup",
                  topics: [
                    "Purpose of Data Management Plans",
                    "Contents of the DMP",
                    "CRF Design Considerations",
                    "Selecting Edit Checks",
                    "Patient Reported Outcomes",
                  ],
                },
                {
                  week: 3,
                  title: "Study Conduct - (Part 1)",
                  topics: [
                    "Overseeing eCRF Data Entry",
                    "Tracking Participants Enrolled",
                    "Forms Entered vs Forms Expected",
                    "SOPs and Study Plans for Data Collection",
                  ],
                },
                {
                  week: 4,
                  title: "Study Conduct - (Part 2)",
                  topics: [
                    "Query Management",
                    "Tracking Open Queries",
                    "Quality Control for Queries",
                    "Using Queries to Improve Data Quality",
                    "SOPs and Study Plans for Managing Queries",
                  ],
                },
                {
                  week: 5,
                  title: "Study Conduct - (Part 3)",
                  topics: [
                    "Collecting AEs and SAEs",
                    "Adverse Event Forms",
                    "Storing and Cleaning AE Data",
                    "Coding Adverse Event Terms",
                    "Reconciling Serious Adverse Events",
                    "SOPs and Study Plans for AE Data",
                  ],
                },
                {
                  week: 6,
                  title: "Study Conduct - (Part 4)",
                  topics: [
                    "Receiving Non-CRF Data",
                    "Receiving Electronic Files from a Vendor",
                    "Cleaning Non-CRF Data",
                    "SOPs and Study Plans for Non-CRF Data",
                    "Edit Checks vs Data Review",
                    "Data Review Plan",
                    "Performing Data Review",
                  ],
                },
                {
                  week: 7,
                  title: "Study Lock",
                  topics: [
                    "Core Requirements for Study Lock",
                    "Final Study Lock",
                    "Interim Study Lock",
                    "Data Extract Plans or Specifications",
                    "Soft Lock",
                    "Time to Study Database Lock",
                    "Database Closeout Procedures",
                    "SOPs and Study Plans for Study Locks",
                  ],
                },
                {
                  week: 8,
                  title: "After Study Lock",
                  topics: [
                    "Post-Lock Activities",
                    "Unlocking EDC Studies",
                    "Data Quality and TMF Quality",
                    "SOPs and Study Plans for Post-Lock and Unlock",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-premium border border-[#e2e8f0] overflow-hidden transition-all duration-300 hover:shadow-premium-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">W{item.week}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0b3c5d]">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 pl-16">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] mt-2 flex-shrink-0"></div>
                          <p className="text-base text-[#64748b] leading-relaxed">{topic}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: LEARNING OUTCOMES */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Learning Outcomes
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg text-[#64748b] mb-6 text-center font-medium">
                By the end of the course, students will confidently be able to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Understand the critical role of clinical data managers in ensuring the success of clinical trials",
                  "Create, validate, and maintain clinical trial databases with precision",
                  "Familiar with Clinical Trial studies Timeline by focusing on Clinical Data Management activities",
                  "Apply confidently to entry-level and mid-level CDM roles",
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

        {/* SECTION 5: WHO SHOULD ENROLL */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-8 text-center">
              Who Should Enroll?
            </h2>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <p className="text-lg text-[#64748b] mb-6 text-center font-medium">
                This program is ideal for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Life science graduates (BPharm, MPharm, PharmD, MSc, PhD)",
                  "Doctors, dentists, and allied health professionals",
                  "Research scholars",
                  "Professionals seeking a career transition into medical writing",
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

        {/* SECTION 6: WHY THIS COURSE STANDS OUT */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Why This Course Stands Out
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, text: "Structured, week-by-week learning" },
                { icon: Target, text: "Strong focus on CDM (high hiring demand)" },
                { icon: Users, text: "Personalized feedback & interview preparation" },
                { icon: Briefcase, text: "Portfolio development support to boost job applications" },
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

        {/* SECTION 7: CAREER OPPORTUNITIES AFTER COMPLETION */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Career Opportunities After Completion
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              Graduates of this program can pursue roles such as:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: UserCheck, title: "Clinical Data Management (CDM) Associate" },
                { icon: FileText, title: "Clinical Data Entry Specialist" },
                { icon: Settings, title: "EDC / Database Coordinator" },
                { icon: BarChart3, title: "Clinical Data Analyst" },
                { icon: Briefcase, title: "Data Operations Support Roles" },
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

        {/* SECTION 8: PLACEMENT SUPPORT */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              Placement Support
            </h2>
            <p className="text-lg text-[#64748b] mb-8 text-center">
              We provide structured career assistance to support your transition into CDM roles:
            </p>
            <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl shadow-premium p-8 md:p-10 border border-[#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Dedicated placement assistance" },
                  { icon: FileText, text: "Resume writing and LinkedIn profile optimization" },
                  { icon: Target, text: "Mock technical and HR interviews" },
                  { icon: Building2, text: "Placement support with CROs and pharmaceutical companies" },
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

        {/* SECTION 9: HOW TO ENROLL */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c5d] mb-12 text-center">
              How to Enroll
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, icon: FileText, text: "Submit the online enrollment form" },
                { step: 2, icon: HelpCircle, text: "Attend a free career counseling session" },
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

        {/* SECTION 10: FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0b3c5d] via-[#1a4a6b] to-[#0b3c5d] rounded-3xl shadow-premium-lg p-12 md:p-16 border border-[#2ec4cc]/20 text-center relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ec4cc]/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Become a Clinical Data Management Professional
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the next step toward a data-driven career in clinical research with Verivance Academy's Clinical Data Management Certification Program.
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
                      const message = encodeURIComponent("Hello Verivance, I am looking for some details about Clinical Data Management (CDM) Certification Program, is it right time to talk?")
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
