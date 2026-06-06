"use client"

import { Users, BookOpen, Briefcase, Award, Target, Zap } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description: "Our programs are designed to match current industry expectations, covering real clinical trial workflows, regulatory standards, and documentation used in CROs and pharma companies.",
  },
  {
    icon: Users,
    title: "Expert mentors with real experience",
    description: "Learn directly from experienced clinical research and pharmaceutical professionals who bring real-world insights, practical examples, and industry best practices into every session.",
  },
  {
    icon: Briefcase,
    title: "Strong placement & career support",
    description: "Get end-to-end career assistance including resume building, LinkedIn optimization, mock interviews, and continuous job support with leading pharma, CROs, and healthcare organizations.",
  },
  {
    icon: Award,
    title: "Recognized Certification",
    description: "Earn industry-recognized certifications that add credibility to your profile and enhance employability in Clinical Research, Pharmacovigilance, Medical Writing, Clinical Data Management, and Clinical SAS roles.",
  },
  {
    icon: Zap,
    title: "Hands-on exposure to industry tools",
    description: "Gain exposure to industry-relevant tools, templates, and workflows, ensuring you are comfortable with modern clinical research and pharma operations from day one.",
  },
  {
    icon: Target,
    title: "Practical, goal-oriented learning",
    description: "Our training is goal-focused, helping you move from theory to application through hands-on assignments, case studies, and portfolio development.",
  },
]

export default function WhyVerivance() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#e0f2fe] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2ec4cc]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-[#0f172a]">Why </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #2ec4cc, #0b3c5d)" }}
            >
              Choose Verivance?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just teach — we prepare you for real pharmaceutical and clinical research careers.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-[#e8edf2] shadow-md hover:shadow-xl hover:border-[#2ec4cc]/40 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon size={26} className="text-white" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#0b3c5d] transition-colors leading-snug">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-[#64748b] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
