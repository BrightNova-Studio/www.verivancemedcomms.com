"use client"

import { ArrowRight, Download, Award } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1920)

  useEffect(() => {
    setIsLoaded(true)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section 
      className="relative w-full overflow-visible"
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(120px, 14vh, 140px)",  /* top-bar + navbar */
        paddingBottom: "60px",
      }}
    >
      <div className="absolute inset-0 z-0">
        {/* Responsive Background image - Always fits, never zooms or cuts */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `url('/clinical-research-laboratory-students-pharma-train.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: windowWidth >= 1024 ? "fixed" : "scroll",
            minHeight: "100%",
            width: "100%",
            height: "100%",
          }}
        />
        {/* Dark overlay for authority and readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, rgba(11, 60, 93, 0.88) 0%, rgba(11, 60, 93, 0.82) 50%, rgba(43, 47, 51, 0.88) 100%)",
          }}
        />

        {/* Responsive teal accent gradients */}
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
        className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center"
        style={{
          minHeight: "calc(100vh - 160px)",
          padding: `${Math.max(30, windowWidth * 0.025)}px ${Math.max(16, windowWidth * 0.03)}px`,
        }}
      >
        <div 
          className="w-full max-w-4xl mx-auto text-center lg:text-left"
          style={{
            paddingTop: "0",
            paddingBottom: "0",
          }}
        >
          <div className="text-white flex flex-col justify-center">
            {/* Badge */}
            <div
              className={`relative inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border-2 border-[#2ec4cc]/60 backdrop-blur-md w-fit overflow-hidden badge-ring-pulse ${
                isLoaded ? "animate-stagger-1" : "opacity-0"
              }`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 badge-gradient-animate rounded-full"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#2ec4cc] flex-shrink-0" style={{ filter: "drop-shadow(0 0 8px rgba(46, 196, 204, 0.8))" }} />
                <span className="text-base md:text-lg font-bold text-white tracking-wide" style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
                  India's Leading Institute
                </span>
              </div>
            </div>

            {/* Main Heading with fluid typography based on viewport */}
            <h1
              className={`font-bold text-balance tracking-tight mb-[clamp(1rem,4vh,2rem)] ${
                isLoaded ? "animate-stagger-2" : "opacity-0"
              }`}
              style={{
                fontSize: `${Math.max(32, Math.min(windowWidth * 0.05, 64))}px`,
                lineHeight: "1.2",
                marginTop: "0",
                paddingTop: "0",
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span className="block mb-[clamp(0.25rem,1vh,0.5rem)]">Clinical Research &</span>
              <span className="block mb-[clamp(0.25rem,1vh,0.5rem)]">Pharma Careers</span>
            </h1>

            {/* Tagline with fluid typography */}
            <p
              className={`text-[#cbd5e1] mb-[clamp(1.5rem,4vh,2.5rem)] leading-relaxed max-w-3xl mx-auto lg:mx-0 ${
                isLoaded ? "animate-stagger-3" : "opacity-0"
              }`}
              style={{
                fontSize: `${Math.max(16, Math.min(windowWidth * 0.02, 22))}px`,
              }}
            >
              Launch a successful career with <strong>industry-aligned, expert-designed programs</strong> in Clinical Research, Pharmacovigilance, Medical Writing, Clinical Data Management, and Clinical SAS — built to prepare you for real opportunities in leading CROs and pharmaceutical companies.
            </p>

            {/* CTA Buttons with responsive sizing */}
            <div 
              className={`flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)] mb-[clamp(1.5rem,4vh,2.5rem)] justify-center lg:justify-start ${
                isLoaded ? "animate-stagger-4" : "opacity-0"
              }`}
            >
              <button 
                onClick={() => {
                  const coursesSection = document.getElementById("our-premium-courses")
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="group btn-glow bg-[#2EC4CC] text-[#0B3C5D] rounded-lg hover:bg-[#26b0b8] transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl"
                style={{
                  padding: `${Math.max(10, windowWidth * 0.01)}px ${Math.max(20, windowWidth * 0.025)}px`,
                  fontSize: `${Math.max(14, Math.min(windowWidth * 0.015, 18))}px`,
                }}
              >
                Your Future Starts Now
                <ArrowRight 
                  className="group-hover:translate-x-1 transition-transform"
                  style={{
                    width: `${Math.max(16, Math.min(windowWidth * 0.015, 20))}px`,
                    height: `${Math.max(16, Math.min(windowWidth * 0.015, 20))}px`,
                  }}
                />
              </button>
              <a
                href="/brochures/verivance-training-academy-brochure.pdf"
                download="Verivance-Training-Academy-Brochure.pdf"
                className="border-2 border-[#2EC4CC] text-[#2EC4CC] rounded-lg hover:bg-[#2EC4CC]/10 transition-all font-semibold flex items-center justify-center gap-2 w-full sm:w-auto hover:border-[#2EC4CC]/80"
                style={{
                  padding: `${Math.max(10, windowWidth * 0.01)}px ${Math.max(20, windowWidth * 0.025)}px`,
                  fontSize: `${Math.max(14, Math.min(windowWidth * 0.015, 18))}px`,
                }}
              >
                <Download 
                  style={{
                    width: `${Math.max(16, Math.min(windowWidth * 0.015, 20))}px`,
                    height: `${Math.max(16, Math.min(windowWidth * 0.015, 20))}px`,
                  }}
                />
                Download Brochure
              </a>
            </div>

            {/* Stats Grid with responsive sizing */}
            <div 
              className="grid grid-cols-3 border-t border-[#2EC4CC]/30 max-w-2xl mx-auto lg:mx-0"
              style={{
                gap: `${Math.max(12, windowWidth * 0.015)}px`,
                paddingTop: `${Math.max(20, windowWidth * 0.025)}px`,
              }}
            >
              <div className="text-center lg:text-left">
                <p 
                  className="font-bold text-[#2EC4CC] mb-1"
                  style={{
                    fontSize: `${Math.max(20, Math.min(windowWidth * 0.03, 32))}px`,
                  }}
                >
                  1000+
                </p>
                <p 
                  className="text-[#cbd5e1] leading-tight"
                  style={{
                    fontSize: `${Math.max(12, Math.min(windowWidth * 0.012, 16))}px`,
                  }}
                >
                  Students Trained
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p 
                  className="font-bold text-[#2EC4CC] mb-1"
                  style={{
                    fontSize: `${Math.max(20, Math.min(windowWidth * 0.03, 32))}px`,
                  }}
                >
                  100+
                </p>
                <p 
                  className="text-[#cbd5e1] leading-tight"
                  style={{
                    fontSize: `${Math.max(12, Math.min(windowWidth * 0.012, 16))}px`,
                  }}
                >
                  Hiring Partners
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p 
                  className="font-bold text-[#2EC4CC] mb-1"
                  style={{
                    fontSize: `${Math.max(20, Math.min(windowWidth * 0.03, 32))}px`,
                  }}
                >
                  100%
                </p>
                <p 
                  className="text-[#cbd5e1] leading-tight"
                  style={{
                    fontSize: `${Math.max(12, Math.min(windowWidth * 0.012, 16))}px`,
                  }}
                >
                  Placement-Focused
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
