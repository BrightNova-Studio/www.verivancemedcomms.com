"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Sparkles, Clock, Award, Briefcase, Star, CalendarDays } from "lucide-react"
import { useFreeDemo } from "./free-demo-context"

const courseData = [
  {
    id: 0,
    title: "5-Domain Job-Ready Program",
    image: "/clinical-research-laboratory-students-pharma-train.jpg",
    points: ["Clinical Research + Pharmacovigilance + Medical Writing", "Regulatory Affairs + Clinical Data Management", "3-Month Flagship Program · Industry Certificate"],
    path: "/courses/5-domain-program",
    flagship: true,
  },
  {
    id: 1,
    title: "Advanced Clinical Research Certification",
    image: "/course-clinical-research.jpg",
    points: ["ICH-GCP & Clinical Trial Protocols", "End-to-End Clinical Trial Operations", "Regulatory Compliance & Ethics"],
    path: "/courses/clinical-research",
  },
  {
    id: 3,
    title: "Medical Writing Certification",
    image: "/medical-writing-documentation.jpg",
    points: ["Regulatory Writing (Protocols, CSRs, IBs)", "Clinical Study Reports & Publications", "Medical & Scientific Communication"],
    path: "/courses/medical-writing",
  },
  {
    id: 2,
    title: "Pharmacovigilance & Drug Safety Certification",
    image: "/pharmacovigilance-safety-monitoring.jpg",
    points: ["Adverse Event & Case Processing", "Safety Risk Evaluation & Signal Detection", "Global PV Regulations & Documentation"],
    path: "/courses/pharmacovigilance",
  },
  {
    id: 8,
    title: "AI in Pharma Innovation Program",
    image: "/course-ai-pharma.jpg",
    points: ["AI Applications in Drug Discovery & Clinical Trials", "Pharmacovigilance, Regulatory & Medical Writing AI", "1-Month Program · Online + Self-Paced · Certificate"],
    path: "/courses/ai-in-pharma",
  },
  {
    id: 9,
    title: "Global Regulatory Affairs Program",
    image: "/course-regulatory-affairs.jpg",
    points: ["US FDA + EU MDR + CDSCO (India) Frameworks", "Pharma Regulatory Affairs + Medical Devices RA", "3-Month Program · Online + Internship · Certificate"],
    path: "/courses/regulatory-affairs",
  },
  {
    id: 4,
    title: "Clinical Data Management Certification",
    image: "/clinical-data-management.jpg",
    points: ["CRF Design & EDC Systems", "Data Validation & Quality Control", "Data Integrity & Compliance Standards"],
    path: "/courses/clinical-data-management",
  },
  {
    id: 7,
    title: "Stem Cell & Regenerative Therapy Program",
    image: "/course-stem-cell.jpg",
    points: ["Stem Cell Foundations & Advanced Techniques", "Hands-on Lab Training + Industry Internship", "3-Month Program · Certificate + Placement Support"],
    path: "/courses/stem-cell-therapy",
  },
  {
    id: 6,
    title: "Clinical SAS Certification",
    image: "/course-clinical-sas.jpg",
    points: ["Base SAS & Advanced SAS Programming", "CDISC Standards (SDTM, ADaM, TLF)", "Real-Time Projects & Industry Training"],
    path: "/courses/clinical-sas",
  },
  {
    id: 10,
    title: "Professional Internship Programs",
    image: "/course-internship.jpg",
    points: ["Clinical Research · PV · Medical Writing · CDM", "Live Projects + Expert Mentorship", "Internship Certification + Placement Support"],
    path: "/courses/internship-programs",
  },
]

export default function Courses() {
  const { openModal } = useFreeDemo()
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Map course titles to modal course names
  const getCourseName = (title: string): string => {
    const courseMap: Record<string, string> = {
      "Advanced Clinical Research Certification": "Clinical Research",
      "Pharmacovigilance & Drug Safety Certification": "Pharmacovigilance",
      "Medical Writing Certification": "Medical Writing",
      "Clinical Data Management Certification": "Clinical Data Management",
      "Clinical SAS Certification": "Clinical SAS",

    }
    return courseMap[title] || title
  }

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true)
            headerObserver.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: "-20% 0px", threshold: 0.3 }
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0", 10)
          setVisibleCards((prev) => {
            const newSet = new Set(prev)
            newSet.add(index)
            return newSet
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section 
      id="our-premium-courses"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe] relative overflow-hidden scroll-smooth"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles
              size={48}
              className="text-[#0b3c5d] shrink-0"
              strokeWidth={2}
            />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #0b3c5d, #2ec4cc, #6d4fc2)",
              }}
            >
              Our Premium Courses
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Industry-recognized training programs designed to build real-world expertise and career readiness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courseData.map((course, index) => (
            (course as any).flagship ? (
              /* ── FLAGSHIP CARD – premium horizontal layout ── */
              <div
                key={course.id}
                ref={(el) => { cardRefs.current[index] = el }}
                data-index={index}
                className={`group md:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden transition-all duration-700 ease-out shadow-2xl border border-[#2ec4cc]/30 ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: "0ms", background: "#fff" }}
              >
                <div className="flex flex-col lg:flex-row min-h-[420px]">

                  {/* Image column */}
                  <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden flex-shrink-0">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    {/* Dark overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0b3c5d]/80 via-[#0b3c5d]/30 to-transparent" />

                    {/* Flagship badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#0b3c5d] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <Star size={12} fill="currentColor" className="text-yellow-400" />
                      Flagship Program
                    </div>

                    {/* Certificate tag */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      <Award size={13} />
                      Industry Certificate Included
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between gap-5">

                    {/* Top: rating + title */}
                    <div>
                      {/* Social proof */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <span className="text-sm text-[#64748b]">4.9 · 1,200+ students enrolled</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-[#64748b] text-sm leading-relaxed">
                        The most comprehensive clinical career launchpad — 5 disciplines, one industry certificate.
                      </p>
                    </div>

                    {/* Highlight strip */}
                    <div className="flex items-center gap-3 bg-[#e0f7fa] border border-[#2ec4cc]/30 rounded-xl px-4 py-3">
                      <CalendarDays size={18} className="text-[#0b3c5d] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#0b3c5d]">3-month flagship program · Next cohort starts soon</span>
                    </div>

                    {/* Domain chips */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Clinical Research", "Pharmacovigilance", "Medical Writing", "Regulatory Affairs", "Clinical Data Mgmt"].map((domain) => (
                        <div key={domain} className="flex items-center gap-2 text-sm text-[#334155]">
                          <div className="w-2 h-2 rounded-full bg-[#2ec4cc] flex-shrink-0" />
                          {domain}
                        </div>
                      ))}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-4 text-xs text-[#64748b]">
                      <span className="flex items-center gap-1.5"><Clock size={13} /> 3 months</span>
                      <span className="flex items-center gap-1.5"><Award size={13} /> Industry certificate</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={13} /> Job-ready outcome</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3 pt-1">
                      <button
                        onClick={() => openModal(getCourseName(course.title))}
                        className="flex-1 py-3 px-5 border border-[#0b3c5d] text-[#0b3c5d] rounded-xl hover:bg-[#0b3c5d] hover:text-white transition-all text-sm font-semibold"
                      >
                        Free Demo
                      </button>
                      <Link
                        href={course.path}
                        prefetch={true}
                        className="flex-[2] py-3 px-5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-xl hover:shadow-lg hover:shadow-[#2ec4cc]/30 transition-all text-sm font-semibold flex items-center justify-center gap-2 group/btn"
                      >
                        Explore Program
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              /* ── REGULAR COURSE CARD ── */
              <div
                key={course.id}
                ref={(el) => { cardRefs.current[index] = el }}
                data-index={index}
                className={`group rounded-2xl overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-4 border border-white/50 hover:border-[#2ec4cc]/50 shadow-md hover:shadow-xl ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: visibleCards.has(index) ? `${index * 80}ms` : "0ms", background: "#fff" }}
                onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc]">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d] via-[#0b3c5d]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-[#2ec4cc] flex items-center justify-center animate-float-up">
                      <Zap size={28} className="text-[#2ec4cc]" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-[#0b3c5d] transition-colors">
                    {course.title}
                  </h3>

                  <ul className="space-y-2.5 mb-8">
                    {course.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#64748b] text-sm">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] mt-1.5 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openModal(getCourseName(course.title))}
                      className="flex-1 py-2.5 px-4 bg-[#f1f5f9] text-[#0b3c5d] rounded-lg hover:bg-gradient-to-r hover:from-[#2ec4cc] hover:to-[#0b3c5d] hover:text-white transition-all text-sm font-semibold shadow-sm hover:shadow-premium"
                    >
                      Free Demo
                    </button>
                    <Link
                      href={course.path}
                      prefetch={true}
                      className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-lg hover:shadow-premium transition-all text-sm font-semibold flex items-center justify-center gap-2 group/btn"
                    >
                      Explore
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
