"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Sparkles } from "lucide-react"
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
    id: 8,
    title: "AI in Pharma Innovation Program",
    image: "/advanced-data-management.jpg",
    points: ["AI Applications in Drug Discovery & Clinical Trials", "Pharmacovigilance, Regulatory & Medical Writing AI", "1-Month Program · Online + Self-Paced · Certificate"],
    path: "/courses/ai-in-pharma",
  },
  {
    id: 7,
    title: "Stem Cell & Regenerative Therapy Program",
    image: "/clinical-research-laboratory.jpg",
    points: ["Stem Cell Foundations & Advanced Techniques", "Hands-on Lab Training + Industry Internship", "3-Month Program · Certificate + Placement Support"],
    path: "/courses/stem-cell-therapy",
  },
  {
    id: 1,
    title: "Advanced Clinical Research Certification",
    image: "/clinical-research-laboratory.jpg",
    points: ["ICH-GCP & Clinical Trial Protocols", "End-to-End Clinical Trial Operations", "Regulatory Compliance & Ethics"],
    path: "/courses/clinical-research",
  },
  {
    id: 2,
    title: "Pharmacovigilance & Drug Safety Certification",
    image: "/pharmacovigilance-safety-monitoring.jpg",
    points: ["Adverse Event & Case Processing", "Safety Risk Evaluation & Signal Detection", "Global PV Regulations & Documentation"],
    path: "/courses/pharmacovigilance",
  },
  {
    id: 3,
    title: "Regulatory & Medical Writing Certification",
    image: "/medical-writing-documentation.jpg",
    points: ["Regulatory Writing (Protocols, CSRs, IBs)", "Clinical Study Reports & Publications", "Medical & Scientific Communication"],
    path: "/courses/medical-writing",
  },
  {
    id: 4,
    title: "Clinical Data Management Certification",
    image: "/clinical-data-management.jpg",
    points: ["CRF Design & EDC Systems", "Data Validation & Quality Control", "Data Integrity & Compliance Standards"],
    path: "/courses/clinical-data-management",
  },

  {
    id: 6,
    title: "Clinical SAS Certification",
    image: "/advanced-data-management.jpg",
    points: ["Base SAS & Advanced SAS Programming", "CDISC Standards (SDTM, ADaM, TLF)", "Real-Time Projects & Industry Training"],
    path: "/courses/clinical-sas",
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
      "Regulatory & Medical Writing Certification": "Medical Writing",
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
            <div
              key={course.id}
              ref={(el) => { cardRefs.current[index] = el }}
              data-index={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-4 ${
                (course as any).flagship
                  ? "md:col-span-2 lg:col-span-3 border-2 border-yellow-400/40 shadow-xl shadow-yellow-400/10"
                  : "border border-white/50 hover:border-[#2ec4cc]/50 shadow-md hover:shadow-xl"
              } ${
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
          ))}
        </div>
      </div>
    </section>
  )
}
