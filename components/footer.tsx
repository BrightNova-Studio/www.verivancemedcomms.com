"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  const handleCoursesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      const el = document.getElementById("our-premium-courses")
      el && el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      router.push("/")
      setTimeout(() => {
        const el = document.getElementById("our-premium-courses")
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
          setTimeout(() => {
            const el2 = document.getElementById("our-premium-courses")
            el2 && el2.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 500)
        }
      }, 300)
    }
  }

  const socials = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Verivance" },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/verivancemedcomms/?igsh=MXY4Z2twZDhqa2twbQ%3D%3D#",
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0f1419] via-[#0a2240] to-[#051e2f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2ec4cc]/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2ec4cc]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2ec4cc] to-[#0b3c5d] flex items-center justify-center shadow-premium">
                <span className="text-[#0b3c5d] font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Verivance</span>
            </div>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">
              India's leading clinical research and pharmaceutical training institute, transforming careers through
              expert-designed programs and industry partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold mb-6 text-[#2ec4cc] flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[#2ec4cc] to-transparent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#cbd5e1]">
              {[
                { label: "Home", href: "/" },
                { label: "Courses", href: "/#our-premium-courses", onClick: handleCoursesClick },
                { label: "About Us", href: "/about-us" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={item.onClick}
                    className="hover:text-[#2ec4cc] hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#2ec4cc] transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://blog.verivancemedcomms.com/"
                  className="hover:text-[#2ec4cc] hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#2ec4cc] transition-all" />
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold mb-6 text-[#2ec4cc] flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[#2ec4cc] to-transparent rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3 text-[#cbd5e1]">
              {["Learning Center", "Events", "Contact", "FAQ"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#2ec4cc] hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#2ec4cc] transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h4 className="font-bold mb-6 text-[#2ec4cc] flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[#2ec4cc] to-transparent rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-[#cbd5e1] text-sm">
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform group cursor-pointer">
                <div className="p-2 bg-gradient-to-br from-[#2ec4cc]/20 to-transparent rounded-lg group-hover:from-[#2ec4cc]/40 transition-all">
                  <Mail size={16} className="text-[#2ec4cc]" />
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=verivance@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2ec4cc] transition-colors"
                >
                  verivance@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform group cursor-pointer">
                <div className="p-2 bg-gradient-to-br from-[#2ec4cc]/20 to-transparent rounded-lg group-hover:from-[#2ec4cc]/40 transition-all">
                  <Phone size={16} className="text-[#2ec4cc]" />
                </div>
                <a href="tel:+919550130545" className="hover:text-[#2ec4cc] transition-colors">
                  +91 9550 130 545
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-[#2ec4cc]/20 to-transparent rounded-lg mt-0.5">
                  <MapPin size={16} className="text-[#2ec4cc]" />
                </div>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2ec4cc]/20 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[#cbd5e1] text-sm">© 2025 Verivance. All rights reserved.</p>
              <p className="text-[#94a3b8] text-xs">
                Developed by{" "}
                <a
                  href="https://brightnova.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2ec4cc] hover:underline transition-colors"
                >
                  brightnova.in
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-lg bg-gradient-to-br from-[#2ec4cc]/20 to-transparent hover:from-[#2ec4cc]/40 transition-all text-[#2ec4cc] hover:scale-125 hover:-translate-y-1 transform"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
