"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Building2, CheckCircle2, Network } from "lucide-react"

const companies = [
  { id: 1, name: "Pfizer", category: "Global Pharma Leader" },
  { id: 2, name: "Merck", category: "Clinical Research Organization" },
  { id: 3, name: "AstraZeneca", category: "Life Sciences Innovator" },
  { id: 4, name: "Johnson & Johnson", category: "Global Pharma Leader" },
  { id: 5, name: "Roche", category: "Clinical Research Organization" },
  { id: 6, name: "Novartis", category: "Life Sciences Innovator" },
  { id: 7, name: "Eli Lilly", category: "Global Pharma Leader" },
  { id: 8, name: "Bristol Myers", category: "Clinical Research Organization" },
  { id: 9, name: "Biogen", category: "Life Sciences Innovator" },
  { id: 10, name: "IQVIA", category: "Clinical Research Organization" },
  { id: 11, name: "Parexel", category: "Clinical Research Organization" },
  { id: 12, name: "ICON", category: "Clinical Research Organization" },
]

export default function Placements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: "-10% 0px", threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0B3C5D 0%, #1a2332 50%, #2B2F33 100%)",
      }}
    >
      {/* Subtle Noise/Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Additional Depth Gradients */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#0b3c5d]/20 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-t from-[#2b2f33]/30 to-transparent -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#2ec4cc]/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-balance">
            <span className="text-white block">Placement Pathways</span>
            <span className="text-white block">Where Your Skills Are Hired</span>
          </h2>
          
          {/* Glowing Underline */}
          <div className="flex justify-center mb-6">
            <div 
              className="h-1 rounded-full"
              style={{
                width: "140px",
                background: "linear-gradient(to right, transparent, #2ec4cc, transparent)",
                boxShadow: "0 0 20px rgba(46, 196, 204, 0.8), 0 0 40px rgba(46, 196, 204, 0.5)",
              }}
            ></div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed font-medium">
            Building careers with the world's leading pharma and CRO organizations.
          </p>
        </div>

        {/* Trust Bar - Horizontal Strip */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: Building2, text: "100+ Companies", color: "#2ec4cc" },
            { icon: CheckCircle2, text: "99% Placement Support", color: "#2ec4cc" },
            { icon: Network, text: "Global CRO & Pharma Network", color: "#2ec4cc" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(46, 196, 204, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(46, 196, 204, 0.2), rgba(46, 196, 204, 0.1))",
                    border: "1px solid rgba(46, 196, 204, 0.3)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <p className="text-base md:text-lg font-semibold text-white">
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Typographic Brand Tiles Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glassmorphism Tile */}
              <div 
                className="relative h-40 md:h-44 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    boxShadow: "0 0 40px rgba(46, 196, 204, 0.5), 0 0 80px rgba(46, 196, 204, 0.3)",
                  }}
                ></div>

                {/* Border Glow on Hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: "2px solid rgba(46, 196, 204, 0.6)",
                    boxShadow: "inset 0 0 20px rgba(46, 196, 204, 0.2)",
                  }}
                ></div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-6 group-hover:scale-105 transition-transform duration-500">
                  {/* Company Name - Large and Bold */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white text-center leading-tight group-hover:text-[#2ec4cc] transition-colors duration-300">
                    {company.name}
                  </h3>

                  {/* Category - Small Text Below */}
                  <p className="text-xs md:text-sm text-[#94a3b8] text-center font-medium uppercase tracking-wide">
                    {company.category}
                  </p>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
                      transform: "translateX(-100%)",
                      width: "200%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div 
          className={`text-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => {
              const coursesSection = document.getElementById("our-premium-courses")
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #2ec4cc, #0b3c5d)",
              color: "white",
              boxShadow: "0 8px 32px rgba(46, 196, 204, 0.4), 0 0 20px rgba(46, 196, 204, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 48px rgba(46, 196, 204, 0.6), 0 0 30px rgba(46, 196, 204, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(46, 196, 204, 0.4), 0 0 20px rgba(46, 196, 204, 0.2)"
            }}
          >
            <span>View Career Opportunities</span>
            <ArrowRight 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  )
}
