"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Target, Users, Award, TrendingUp, Heart, Zap, ArrowRight,
  GraduationCap, BookOpen, Shield, FileText, Database, Briefcase,
  CheckCircle2, Lightbulb, Star, Globe, HeartHandshake, Rocket,
  FlaskConical, Brain, BarChart3
} from "lucide-react"
import { useApplyNow } from "@/components/apply-now-context"
import { useAdvisorModal } from "@/components/advisor-modal-context"
import type { AdvisorData } from "@/components/advisor-modal-context"
import Image from "next/image"

const advisors: AdvisorData[] = [
  {
    name: "Dr. Y. V. Jagadeesh Babu, MBBS",
    title: "Medical Officer & Clinical Advisor",
    specialization: "Public Health and Clinical Practice",
    affiliation: "Advisory Committee Member at Verivance MedComms",
    initials: "JB",
    image: "/about/jagadeesh-babu.jpg",
    content: [
      "Dr. Y. V. Jagadeesh Babu is a qualified medical professional with expertise in public health, primary healthcare delivery, and clinical practice.",
      "With a strong background in medicine and community health, he brings practical clinical insights that enhance the quality and relevance of Verivance's training programs.",
      "As Medical Officer & Clinical Advisor at Verivance MedComms, Dr. Jagadeesh Babu ensures our curriculum reflects real-world clinical standards and prepares students for healthcare industry expectations.",
    ],
  },
  {
    name: "Dr. Vara Prasad Saka, Ph.D. (Pharmacology)",
    title: "Academic & Research Advisor",
    specialization: "Pharmacology & Scientific Writing",
    affiliation: "11+ years in preclinical research and academic instruction",
    initials: "VP",
    image: "/about/vara-prasad-saka.jpeg",
    linkedinUrl: "#",
    content: [
      "Dr. Vara Prasad Saka holds a Ph.D. in Pharmacology and brings over 11 years of rich experience in preclinical research, drug safety studies, and academic instruction.",
      "His expertise spans pharmacological evaluation, scientific writing, and regulatory compliance — making him an invaluable resource for programs in clinical research, pharmacovigilance, and medical writing.",
      "At Verivance, Dr. Vara Prasad guides curriculum design and ensures programs align with academic excellence and industry relevance.",
    ],
  },
  {
    name: "Mr. N. Narasimha Rao, M. Pharm",
    title: "Senior Industry Advisor",
    specialization: "Formulation & Technology Transfer",
    affiliation: "25+ years of industry experience",
    initials: "NR",
    image: "/about/narasimha-rao.jpeg",
    linkedinUrl: "#",
    content: [
      "Mr. N. Narasimha Rao is a highly experienced pharmaceutical professional with over 25 years in drug formulation, technology transfer, and pharmaceutical manufacturing.",
      "His career spans multiple roles in leading pharma companies where he has led formulation development, process scale-up, and technology transfer activities across Indian and global operations.",
      "At Verivance, he brings unparalleled industry depth to help students understand the practical realities of pharmaceutical operations and regulatory compliance.",
    ],
  },
  {
    name: "B. Sai Mrudula, M.Pharm",
    title: "Scientist II – Pharmacokinetics",
    specialization: "BA/BE Studies & Regulatory Affairs",
    affiliation: "Expert in pharmacokinetics and regulatory processes",
    initials: "SM",
    image: "/about/b-sai-mrudula.png",
    linkedinUrl: "#",
    content: [
      "B. Sai Mrudula is a Scientist II specializing in pharmacokinetics with deep expertise in BA/BE studies, regulatory submissions, and drug safety evaluation.",
      "With hands-on experience in bioanalytical method development, pharmacokinetic data analysis, and regulatory dossier preparation, she brings strong scientific and regulatory expertise to the advisory team.",
      "At Verivance, Sai Mrudula advises on pharmacovigilance and regulatory affairs content, ensuring students gain current and precise industry knowledge.",
    ],
  },
]

const facultyDomains = [
  { icon: FlaskConical, label: "Clinical Research", desc: "ICH-GCP, trial operations, site management" },
  { icon: Shield,       label: "Pharmacovigilance", desc: "ICSR processing, signal detection, PSUR" },
  { icon: FileText,     label: "Medical Writing",   desc: "CSRs, protocols, regulatory documents" },
  { icon: Database,     label: "Clinical Data Management", desc: "EDC systems, data validation, CDISC" },
  { icon: BarChart3,    label: "Clinical SAS",       desc: "SDTM, ADaM, TLF, SAS programming" },
  { icon: Brain,        label: "AI in Pharma",       desc: "AI tools, data analytics, innovation" },
  { icon: Briefcase,    label: "Regulatory Affairs", desc: "Submissions, compliance, global guidelines" },
  { icon: GraduationCap, label: "Career Coaching",  desc: "Resume, interviews, placement support" },
]

const stats = [
  { value: "1000+", label: "Students Trained",    icon: GraduationCap },
  { value: "100+",  label: "Hiring Partners",      icon: Briefcase     },
  { value: "99%",   label: "Placement Support",    icon: CheckCircle2  },
  { value: "8+",    label: "Program Specialisations", icon: BookOpen   },
]

const coreValues = [
  { icon: Zap,          title: "Excellence",             description: "We uphold the highest standards of academic rigor, instructional quality, and professional training across all programs." },
  { icon: Users,        title: "Student-Centric",        description: "We prioritise student success through personalised mentorship, continuous academic support, and career guidance." },
  { icon: Award,        title: "Industry Alignment",     description: "Our curriculum is developed and regularly updated with industry experts to reflect current practices and regulatory expectations." },
  { icon: Heart,        title: "Integrity",              description: "We operate with transparency, ethical responsibility, and accountability in all educational and professional engagements." },
  { icon: Lightbulb,    title: "Innovation",             description: "We continuously enhance our programs to align with emerging industry trends, technologies, and regulatory advancements." },
  { icon: TrendingUp,   title: "Results-Driven",         description: "Our success is measured by student competency, career progression, and successful placements within the industry." },
]

const differentiators = [
  { title: "Industry-Experienced Faculty",       description: "Learn from professionals with extensive experience in pharmaceutical companies, CROs, and clinical research environments, offering practical insights beyond textbooks." },
  { title: "Hands-On, Project-Based Learning",   description: "Each program includes real-world projects, documentation exercises, and case studies that closely simulate actual industry workflows." },
  { title: "Comprehensive Placement Support",    description: "Our dedicated placement team collaborates with a wide network of hiring partners to provide structured interview preparation, resume support, and job opportunities." },
  { title: "Global Regulatory Standards",        description: "Our training is aligned with ICH-GCP, regulatory guidelines, and international best practices, preparing students for both Indian and global roles." },
  { title: "Lifetime Career Guidance",           description: "We provide ongoing career mentorship, professional development support, and guidance even after program completion." },
]

export default function AboutUsPage() {
  const { openModal }          = useApplyNow()
  const { openModal: openAdvisorModal } = useAdvisorModal()

  return (
    <main className="w-full overflow-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#ffffff 50%,#e0f2fe 100%)" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2ec4cc]/12 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0b3c5d]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2ec4cc]/30 bg-[#2ec4cc]/8 mb-6">
            <Star size={14} className="text-[#2ec4cc]" />
            <span className="text-[#0b3c5d] text-xs font-bold tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-[#0b3c5d]">About </span>
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right,#0b3c5d,#2ec4cc)" }}>
              Verivance
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
            Verivance is a premier clinical research and pharmaceutical training institute in India, dedicated
            to developing industry-ready professionals through expertly designed programs, practical exposure,
            and strong industry partnerships. We specialise in bridging the gap between academic education
            and real-world pharmaceutical industry requirements.
          </p>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────────── */}
      <section className="py-12 md:py-16"
        style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ec4cc]/20 to-[#0b3c5d]/40 border border-[#2ec4cc]/30 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#2ec4cc]" />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-[#94a3b8] text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Target,    color: "from-[#0b3c5d] to-[#2ec4cc]", title: "Our Mission",
                text: "To empower aspiring professionals with comprehensive, industry-aligned training in clinical research and pharmaceutical sciences by combining strong scientific foundations, hands-on practical learning, expert mentorship, and structured career support — enabling successful transitions into the pharmaceutical, biotech, and CRO sectors." },
              { icon: Globe,     color: "from-[#2ec4cc] to-[#0b3c5d]", title: "Our Vision",
                text: "To be India's most trusted and recognised training institute for clinical research and pharmaceutical sciences, known for producing competent, ethical, and industry-ready professionals who contribute to innovation, quality, and excellence across global pharmaceutical and clinical research organisations." },
            ].map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-8 md:p-10 shadow-lg border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0b3c5d] mb-4">{title}</h3>
                <p className="text-[#64748b] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#ffffff 60%,#e0f2fe 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2ec4cc]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">How We Started</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3c5d] mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "The Insight",
                text: "Through years of observing pharmacy graduates entering the workforce, our founding team identified a critical gap — students possessed strong theoretical knowledge but lacked the practical, regulatory, and operational skills that CROs and pharma companies actually need." },
              { icon: Rocket, title: "The Mission",
                text: "Verivance was created with a single purpose: build a structured platform that combines industry-aligned training, hands-on practical learning, expert mentorship, and dedicated career support — everything academia leaves out." },
              { icon: HeartHandshake, title: "The Impact",
                text: "Today, Verivance has trained 1000+ students across Clinical Research, Pharmacovigilance, Medical Writing, Clinical Data Management, and Clinical SAS — with a growing network of 100+ hiring partners across India." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-md border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-5 shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0b3c5d] mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">The Problem We Solve</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3c5d] mb-4">Why We Exist</h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              The pharmaceutical industry demands professionals with strong practical and regulatory competencies.
              A significant gap exists between traditional academic education and industry expectations.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users,  title: "Industry Skill Gap",
                description: "Many graduates lack hands-on experience, regulatory understanding, and operational exposure required by pharma companies and CROs, limiting their employability." },
              { icon: Award,  title: "Industry-Relevant Training",
                description: "Verivance addresses this gap through a robust, industry-aligned curriculum incorporating practical training, real-world case studies, and project-based learning." },
              { icon: Heart,  title: "Career-Focused Outcomes",
                description: "Our programs are designed to enable meaningful career transformation by delivering practical expertise, professional confidence, and structured placement assistance." },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-md border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b3c5d] mb-3">{title}</h3>
                <p className="text-[#64748b] leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#ffffff 60%,#e0f2fe 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3c5d] mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-[#e2e8f0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#0b3c5d] mb-2">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">Our Advantage</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3c5d] mb-4">What Makes Us Different</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto" />
          </div>
          <div className="space-y-5">
            {differentiators.map(({ title, description }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-[#e2e8f0] hover:shadow-xl hover:border-[#2ec4cc]/30 transition-all duration-300 flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white font-extrabold text-sm">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b3c5d] mb-1.5">{title}</h3>
                  <p className="text-[#64748b] leading-relaxed text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERT FACULTY NETWORK ───────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">Who Guides You</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Our Expert Faculty Network
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              At Verivance, you are guided by industry professionals and academic leaders with deep expertise
              in their respective domains. Our faculty brings real-world insights, practical experience, and
              a passion for shaping the next generation of pharma and clinical research professionals.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2ec4cc] to-[#0b3c5d] rounded-full mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {facultyDomains.map(({ icon: Icon, label, desc }) => (
              <div key={label}
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#2ec4cc]/40 transition-all duration-300 p-5 text-center group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ec4cc]/30 to-[#0b3c5d]/50 border border-[#2ec4cc]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-[#2ec4cc]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5">{label}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#94a3b8]/60 text-xs mt-8">
            Our trainers are industry professionals — their expertise speaks, not their titles.
          </p>
        </div>
      </section>

      {/* ── BOARD OF ADVISORS ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#2ec4cc] font-bold tracking-widest text-sm uppercase mb-2">Strategic Guidance</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3c5d] mb-4">
              Board of Advisors
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm md:text-base">
              Industry leaders and academic experts guiding our strategic direction and ensuring excellence in education.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] rounded-full mx-auto mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, i) => (
              <div key={i}
                className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-6 shadow-md border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                {/* Photo */}
                <div className="relative mb-5 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] shadow-md ring-4 ring-white group-hover:ring-[#2ec4cc]/30 transition-all">
                    {advisor.image ? (
                      <Image src={advisor.image} alt={advisor.name} width={96} height={96}
                        className="w-full h-full object-cover" style={{ objectPosition:"center 20%" }} />
                    ) : (
                      <span className="text-white font-bold text-2xl flex items-center justify-center w-full h-full">
                        {advisor.initials.slice(0,2)}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0b3c5d] mb-1 leading-snug">{advisor.name}</h3>
                <p className="text-[#2ec4cc] text-xs font-semibold mb-1">{advisor.title}</p>
                {advisor.specialization && (
                  <p className="text-[#64748b] text-xs mb-1">{advisor.specialization}</p>
                )}
                {advisor.affiliation && (
                  <p className="text-[#94a3b8] text-xs mb-4">{advisor.affiliation}</p>
                )}
                <button
                  onClick={() => openAdvisorModal(advisor)}
                  className="inline-flex items-center gap-1.5 text-[#0b3c5d] text-xs font-semibold hover:text-[#2ec4cc] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#071525 0%,#0b3c5d 60%,#0e4a60 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Transform{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right,#2ec4cc,#7edde3)" }}>
              Your Career?
            </span>
          </h2>
          <p className="text-[#94a3b8] mb-10 text-base md:text-lg leading-relaxed">
            Join hundreds of successful professionals who have transformed their careers with Verivance.
            Explore our programs or speak with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal}
              className="group px-8 py-4 rounded-xl font-bold text-[#0b3c5d] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#2ec4cc,#7edde3)", boxShadow: "0 4px 24px rgba(46,196,204,0.4)" }}>
              <Rocket size={18} />
              Apply Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/#our-premium-courses"
              className="px-8 py-4 rounded-xl font-bold text-[#2ec4cc] border-2 border-[#2ec4cc]/60 flex items-center justify-center gap-2 hover:bg-[#2ec4cc]/10 transition-all duration-300">
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
