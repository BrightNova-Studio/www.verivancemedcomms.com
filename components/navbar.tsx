"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, Sparkles } from "lucide-react"
import { useApplyNow } from "@/components/apply-now-context"
import TopBar from "@/components/top-bar"
import { BookOpen } from "lucide-react"

const courses = [
  { name: "⭐ 5-Domain Job-Ready Program", path: "/courses/5-domain-program" },
  { name: "Stem Cell & Regenerative Therapy", path: "/courses/stem-cell-therapy" },
  { name: "AI in Pharma Innovation Program", path: "/courses/ai-in-pharma" },
  { name: "Clinical Research", path: "/courses/clinical-research" },
  { name: "Pharmacovigilance", path: "/courses/pharmacovigilance" },
  { name: "Medical Writing", path: "/courses/medical-writing" },
  { name: "Clinical Data Management", path: "/courses/clinical-data-management" },
  { name: "Clinical SAS", path: "/courses/clinical-sas" },
  { name: "Internship Programs", path: "/courses/internship-programs" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const { openModal } = useApplyNow()

  const lastScrollY   = useRef(0)
  const idleTimer     = useRef<ReturnType<typeof setTimeout> | null>(null)

  const basePath = pathname?.replace(/\/$/, "") || "/"
  const isCoursesActive = basePath.startsWith("/courses")
  const isActive = (path: string) => basePath === (path.replace(/\/$/, "") || "/")

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current

      // Scroll state for navbar shadow
      setIsScrolled(currentY > 20)

      // Hide top-bar when scrolling DOWN past 60px; show on scroll UP
      if (currentY > 60) {
        setTopBarVisible(!scrollingDown)
      } else {
        setTopBarVisible(true) // always visible at very top
      }

      lastScrollY.current = currentY

      // Re-show after 2 s of no scrolling (idle)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setTopBarVisible(true), 2000)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg shadow-[#0b3c5d]/5"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top info bar — smart show/hide */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: topBarVisible ? "48px" : "0px",
          opacity: topBarVisible ? 1 : 0,
          transition: topBarVisible
            ? "max-height 0.4s ease, opacity 0.4s ease"        /* slide down */
            : "max-height 0.35s ease, opacity 0.25s ease",      /* slide up faster */
        }}
      >
        <TopBar />
      </div>

      <div className="border-t border-[#e2e8f0]/40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop row */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Verivance Logo"
              width={180}
              height={50}
              className="object-contain h-10 sm:h-12 w-auto transition-all duration-300 group-hover:opacity-90"
              style={{ imageRendering: "crisp-edges" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-4 py-2.5 font-semibold text-sm relative group transition-all duration-300 ${
                isActive("/") ? "text-[#2ec4cc]" : "text-[#0f172a]"
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute bottom-0 left-4 h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] transition-all duration-500 ${
                  isActive("/") ? "w-12" : "w-0 group-hover:w-12"
                }`}
              />
            </Link>

            {/* Courses dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-4 py-2.5 font-semibold text-sm relative group transition-all duration-300 ${
                  isCoursesActive ? "text-[#2ec4cc]" : "text-[#0f172a]"
                }`}
              >
                <span className="relative z-10">Courses</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span
                  className={`absolute bottom-0 left-4 h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] transition-all duration-500 ${
                    isCoursesActive ? "w-12" : "w-0 group-hover:w-12"
                  }`}
                />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 z-50 group-hover:mt-2">
                {courses.map((course, i) => {
                  const active = isActive(course.path)
                  return (
                    <Link
                      key={i}
                      href={course.path}
                      prefetch
                      className={`block px-5 py-3 text-sm font-medium transition-all duration-300 relative group/item overflow-hidden ${
                        active
                          ? "text-[#2ec4cc] bg-gradient-to-r from-[#0b3c5d]/[0.08] to-[#2ec4cc]/[0.08]"
                          : "text-[#0f172a] hover:bg-gradient-to-r hover:from-[#0b3c5d]/[0.08] hover:to-[#2ec4cc]/[0.08]"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-[#2ec4cc] transition-opacity duration-300 ${
                            active ? "opacity-100" : "opacity-0 group-hover/item:opacity-100"
                          }`}
                        />
                        {course.name}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] transition-transform duration-500 ${
                          active ? "translate-x-0" : "-translate-x-full group-hover/item:translate-x-0"
                        }`}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>

            <Link
              href="/about-us"
              prefetch
              className={`px-4 py-2.5 font-semibold text-sm relative group transition-all duration-300 ${
                isActive("/about-us") ? "text-[#2ec4cc]" : "text-[#0f172a]"
              }`}
            >
              <span>About Us</span>
              <span
                className={`absolute bottom-0 left-4 h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] transition-all duration-500 ${
                  isActive("/about-us") ? "w-16" : "w-0 group-hover:w-16"
                }`}
              />
            </Link>

            <Link
              href="https://blog.verivancemedcomms.com/"
              className="px-4 py-2.5 text-[#0f172a] font-semibold text-sm relative group transition-all duration-300"
            >
              <span>Blog</span>
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] group-hover:w-10 transition-all duration-500" />
            </Link>

            <button
              onClick={openModal}
              className="ml-4 px-7 py-2.5 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles size={16} className="relative z-10" />
              <span className="relative z-10">Apply Now</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 text-[#0b3c5d] hover:bg-gradient-to-r hover:from-[#0b3c5d]/10 hover:to-[#2ec4cc]/10 rounded-xl transition-all duration-300 transform hover:scale-110"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-fade-in-up">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 border ${
                isActive("/")
                  ? "text-[#2ec4cc] bg-gradient-to-r from-[#0b3c5d]/10 to-[#2ec4cc]/10 border-[#2ec4cc]/30"
                  : "text-[#0f172a] hover:bg-gradient-to-r hover:from-[#0b3c5d]/10 hover:to-[#2ec4cc]/10 border-transparent hover:border-[#2ec4cc]/30"
              }`}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "courses" ? null : "courses")}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold rounded-lg transition-all duration-300 border ${
                  isCoursesActive
                    ? "text-[#2ec4cc] bg-gradient-to-r from-[#0b3c5d]/10 to-[#2ec4cc]/10 border-[#2ec4cc]/30"
                    : "text-[#0f172a] hover:bg-gradient-to-r hover:from-[#0b3c5d]/10 hover:to-[#2ec4cc]/10 border-transparent hover:border-[#2ec4cc]/30"
                }`}
              >
                Courses
                <ChevronDown
                  size={16}
                  className={mobileDropdown === "courses" ? "rotate-180" : ""}
                />
              </button>
              {mobileDropdown === "courses" && (
                <div className="pl-4 mt-2 space-y-1">
                  {courses.map((course, i) => (
                    <Link
                      key={i}
                      href={course.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-2 font-medium rounded-lg transition-all duration-300 text-sm ${
                        isActive(course.path)
                          ? "text-[#2ec4cc] bg-gradient-to-r from-[#0b3c5d]/5 to-[#2ec4cc]/5"
                          : "text-[#64748b] hover:text-[#0b3c5d] hover:bg-gradient-to-r hover:from-[#0b3c5d]/5 hover:to-[#2ec4cc]/5"
                      }`}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 border ${
                isActive("/about-us")
                  ? "text-[#2ec4cc] bg-gradient-to-r from-[#0b3c5d]/10 to-[#2ec4cc]/10 border-[#2ec4cc]/30"
                  : "text-[#0f172a] hover:bg-gradient-to-r hover:from-[#0b3c5d]/10 hover:to-[#2ec4cc]/10 border-transparent hover:border-[#2ec4cc]/30"
              }`}
            >
              About Us
            </Link>

            <Link
              href="https://blog.verivancemedcomms.com/"
              className="block px-4 py-3 text-[#0f172a] hover:bg-gradient-to-r hover:from-[#0b3c5d]/10 hover:to-[#2ec4cc]/10 font-semibold rounded-lg transition-all duration-300 border border-transparent hover:border-[#2ec4cc]/30"
            >
              Blog
            </Link>

            {/* Apply Now */}
            <button
              onClick={() => { openModal(); setMobileOpen(false) }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Sparkles size={16} />
              Apply Now
            </button>

            {/* Our Brochure */}
            <Link
              href="/brochure"
              onClick={() => setMobileOpen(false)}
              className="w-full px-6 py-3 border-2 border-[#2ec4cc]/60 text-[#2ec4cc] rounded-xl hover:bg-[#2ec4cc]/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <BookOpen size={16} />
              Our Brochure
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
