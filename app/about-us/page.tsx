"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Target, Users, Award, TrendingUp, Heart, Zap, ArrowRight, GraduationCap, Briefcase, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useApplyNow } from "@/components/apply-now-context"
import { useFounderModal } from "@/components/founder-modal-context"
import { useAdvisorModal } from "@/components/advisor-modal-context"
import { useState, useRef, useEffect } from "react"

export default function AboutUsPage() {
  const { openModal } = useApplyNow()
  const { openModal: openFounderModal } = useFounderModal()
  const { openModal: openAdvisorModal } = useAdvisorModal()
  
  // Carousel state for mentors
  const [currentMentorIndex, setCurrentMentorIndex] = useState(0)
  const mentorScrollContainerRef = useRef<HTMLDivElement>(null)

  const mentors = [
    {
      name: "Nehalsha Gadikoppula",
      title: "Finance & Business Strategy Expert",
      specialization: "MBA – Technology Management (Finance)",
      initials: "NG",
      image: "/about/nehalsha-gadikoppula.jpg",
      linkedinUrl: "#",
      content: [
        "Finance and strategy professional with expertise in financial planning, performance analysis, and business growth.",
        "Prior experience at Synchrony Financial. Leads budgeting, forecasting, financial modelling, and performance initiatives at Verivance MedComms.",
        "Focused on financial discipline, operational efficiency, and sustainable growth. Known for structured thinking and collaborative leadership aligned with ethical healthcare communication.",
      ],
    },
    {
      name: "Mannam Santhosh Kumar",
      title: "Clinical Data Training Expert",
      specialization: "Data Coordinator",
      initials: "SK",
      image: "/about/santhosh-kumar.jpg",
      linkedinUrl: "#",
      content: [
        "Mannam Santhosh Kumar is a hands-on Clinical Data Management professional with extensive practical experience in CDM operations and data coordination.",
        "As a Data Coordinator, he brings real-world industry expertise in clinical data collection, validation, query management, and database operations. His practical approach ensures students learn industry-standard CDM workflows and best practices.",
        "At Verivance, Santhosh delivers practical, industry-aligned training in Clinical Data Management, focusing on hands-on exercises, real-world case studies, and EDC system operations. He is committed to preparing students for immediate job readiness in CDM roles.",
      ],
    },
    {
      name: "Harshitha",
      title: "GPAT Training Expert",
      specialization: "B.Pharm | MBA (Finance)",
      initials: "H",
      image: "/about/harshitha.jpg",
      linkedinUrl: "#",
      content: [
        "Pharmaceutical professional with academic and industry experience. Started career in Supply Chain Management at Dr. Reddy's Laboratories.",
        "Currently Clinical Trial Associate – Dr. Reddy's Laboratories (Biologics). Experience in clinical operations, CRO coordination, documentation, and trial workflows. National conference presenter.",
        "Dedicated GPAT mentor focused on concept clarity, fundamentals, and exam strategy. Mission: empower GPAT aspirants with confidence and direction.",
      ],
    },
    {
      name: "Kezia Mangallampalli",
      title: "GPAT Training Expert",
      specialization: "M.Pharm (Pharmacology) | Data Scientist",
      initials: "KM",
      image: "/about/kezia-mangallampalli.jpg",
      linkedinUrl: "#",
      content: [
        "Kezia Mangallampalli is a Data Scientist at Gilbert Research Centre with an academic background in M.Pharm (Pharmacology). She brings a strong interdisciplinary skill set that bridges pharmaceutical sciences and data-driven research, enabling meaningful insights in biomedical and clinical research domains.",
        "With her foundation in pharmacology, Kezia applies statistical analysis, machine learning techniques, and data modeling to analyze complex biological and clinical datasets. Her work supports research initiatives focused on drug discovery, safety evaluation, and outcome prediction. She is skilled in data interpretation, model development, and translating analytical findings into actionable research conclusions.",
        "At Gilbert Research Centre, Kezia collaborates with researchers and technical teams to enhance data-driven decision-making, improve research efficiency, and contribute to evidence-based scientific innovation. She is passionate about applying data science methodologies to advance pharmacological research and healthcare outcomes.",
        "Kezia has presented at national pharmaceutical conferences and continues to stay engaged with innovations in research and development. As a GPAT mentor, she is committed to simplifying complex concepts, strengthening fundamentals, and guiding students with structured, exam-oriented strategies. Her mission is to empower every GPAT aspirant with clarity, confidence, and the right direction to excel.",
      ],
    },
  ]

  const scrollToMentor = (index: number) => {
    if (mentorScrollContainerRef.current) {
      const container = mentorScrollContainerRef.current
      const cardElement = container.querySelector(`[data-mentor-index="${index}"]`) as HTMLElement
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        setCurrentMentorIndex(index)
      }
    }
  }

  const scrollMentor = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? Math.max(0, currentMentorIndex - 1)
      : Math.min(mentors.length - 1, currentMentorIndex + 1)
    scrollToMentor(newIndex)
  }

  useEffect(() => {
    const container = mentorScrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cards = container.querySelectorAll('[data-mentor-index]')
      
      let closestIndex = 0
      let closestDistance = Infinity
      
      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const cardLeft = cardElement.offsetLeft
        const cardWidth = cardElement.offsetWidth
        const cardCenter = cardLeft + cardWidth / 2
        const containerCenter = scrollLeft + container.offsetWidth / 2
        const distance = Math.abs(cardCenter - containerCenter)
        
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })
      
      if (closestIndex !== currentMentorIndex) {
        setCurrentMentorIndex(closestIndex)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentMentorIndex])

  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2ec4cc]/15 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              <span className="gradient-text">About Verivance</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
              Verivance is a premier clinical research and pharmaceutical training institute in India, dedicated to developing industry-ready professionals through expertly designed programs, practical exposure, and strong industry partnerships. We specialize in bridging the gap between academic education and real-world clinical research and pharmaceutical industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-8 md:p-10 shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-6 shadow-premium">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Our Mission</h3>
              <p className="text-[#64748b] leading-relaxed">
                To empower aspiring professionals with comprehensive, industry-aligned training in clinical research and pharmaceutical sciences by combining strong scientific foundations, hands-on practical learning, expert mentorship, and structured career support—enabling successful transitions into the pharmaceutical, biotech, and CRO sectors.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-8 md:p-10 shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2ec4cc] to-[#0b3c5d] flex items-center justify-center mb-6 shadow-premium">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Our Vision</h3>
              <p className="text-[#64748b] leading-relaxed">
                To be India's most trusted and recognized training institute for clinical research and pharmaceutical sciences, known for producing competent, ethical, and industry-ready professionals who contribute to innovation, quality, and excellence across global pharmaceutical and clinical research organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#e0f2fe] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2ec4cc]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              <span className="gradient-text">Why We Exist</span>
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              The pharmaceutical and clinical research industries are rapidly evolving and demand professionals with strong practical and regulatory competencies. However, a significant gap exists between traditional academic education and industry expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Industry Skill Gap",
                description: "Many graduates lack hands-on experience, regulatory understanding, and operational exposure required by pharmaceutical companies and CROs, limiting their employability.",
              },
              {
                icon: Award,
                title: "Industry-Relevant Training",
                description: "Verivance addresses this gap through a robust, industry-aligned curriculum incorporating practical training, real-world case studies, and project-based learning.",
              },
              {
                icon: Heart,
                title: "Career-Focused Outcomes",
                description: "Our programs are designed to enable meaningful career transformation by delivering practical expertise, professional confidence, and structured placement assistance.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-6 shadow-premium">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-[#64748b] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              <span className="gradient-text">Our Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Zap,
                title: "Excellence",
                description: "We uphold the highest standards of academic rigor, instructional quality, and professional training across all programs.",
              },
              {
                icon: Users,
                title: "Student-Centric Approach",
                description: "We prioritize student success through personalized mentorship, continuous academic support, and career guidance.",
              },
              {
                icon: Award,
                title: "Industry Alignment",
                description: "Our curriculum is developed and regularly updated in collaboration with industry experts to reflect current practices and regulatory expectations.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We operate with transparency, ethical responsibility, and accountability in all educational and professional engagements.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously enhance our programs to align with emerging industry trends, technologies, and regulatory advancements.",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven Focus",
                description: "Our success is measured by student competency, career progression, and successful placements within the industry.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center mb-4 shadow-premium">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#e0f2fe] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              <span className="gradient-text">What Makes Us Different</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Industry-Experienced Faculty",
                description: "Learn from professionals with extensive experience in pharmaceutical companies, CROs, and clinical research environments, offering practical insights beyond textbooks.",
              },
              {
                title: "Hands-On, Project-Based Learning",
                description: "Each program includes real-world projects, documentation exercises, and case studies that closely simulate actual industry workflows.",
              },
              {
                title: "Comprehensive Placement Support",
                description: "Our dedicated placement team collaborates with a wide network of hiring partners to provide structured interview preparation, resume support, and job opportunities.",
              },
              {
                title: "Global Regulatory Standards",
                description: "Our training is aligned with ICH-GCP, regulatory guidelines, and international best practices, preparing students for both Indian and global roles.",
              },
              {
                title: "Lifetime Career Guidance",
                description: "We provide ongoing career mentorship, professional development support, and guidance even after program completion.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center shadow-premium">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-[#64748b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
              <span className="text-[#0f172a]">Founders</span>
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-4">
              Meet the visionaries behind Verivance MedComms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. B. Radha Madhavi",
                title: "Founder & CEO",
                description: "Visionary pharmacy educator focused on building industry-ready skills through structured, practical, and career-oriented training.",
                founderId: "radha" as const,
                image: "/about/radha.JPG",
                initials: "BRM",
              },
              {
                name: "Naga Pavani Penchikala",
                title: "Co-Founder & Managing Director",
                description: "Industry-driven academic leader bridging preclinical research, clinical operations, and global regulatory standards.",
                founderId: "pavani" as const,
                image: "/about/pavani.jpg",
                initials: "NPP",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-8 shadow-lg border border-[#e2e8f0] hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-300 text-center group"
              >
                <div className="relative mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] shadow-premium group-hover:scale-105 transition-transform duration-300 ring-4 ring-white/20 relative">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ec4cc]/20 to-[#0b3c5d]/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{person.name}</h3>
                <p className="text-lg text-[#2ec4cc] font-semibold mb-4">{person.title}</p>
                <p className="text-[#64748b] leading-relaxed mb-6 text-sm">{person.description}</p>
                <button
                  onClick={() => openFounderModal(person.founderId)}
                  className="inline-flex items-center gap-2 text-[#0b3c5d] font-semibold hover:text-[#2ec4cc] transition-colors group/btn"
                >
                  <span>Know More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Advisors Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#e0f2fe] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2ec4cc]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
              <span className="text-[#0f172a]">Board of Advisors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] mx-auto rounded-full"></div>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-6">
              Industry leaders and academic experts guiding our strategic direction and ensuring excellence in education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Y. V. Jagadeesh Babu, MBBS",
                title: "Medical Officer & Clinical Advisor",
                specialization: "Public Health and Clinical Practice",
                affiliation: "Advisory Committee Member at Verivance MedComms",
                initials: "JVB",
                image: "/about/jagadeesh-babu.jpg",
                linkedinUrl: "#",
                content: [
                  "MBBS graduate from Rajiv Gandhi Institute of Medical Sciences, Ongole.",
                  "Extensive experience in government healthcare institutions. Served as COVID-19 Medical Officer, Assistant RMO at Old Government General Hospital, Vijayawada, and Medical Officer at Mandal Primary Health Center.",
                  "Provides strategic clinical insight and academic guidance as an Advisory Committee Member at Verivance MedComms.",
                ],
              },
              {
                name: "Dr. Vara Prasad Saka, Ph.D. (Pharmacology)",
                title: "Academic & Research Advisor",
                specialization: "Pharmacology & Scientific Writing",
                affiliation: "11+ years in preclinical research and academic instruction",
                initials: "VPS",
                image: "/about/vara-prasad-saka.jpeg",
                linkedinUrl: "#",
                content: [
                  "11+ years in preclinical research and academic instruction with expertise in in-vivo & in-vitro pharmacology.",
                  "Specializes in regulatory-compliant scientific documentation. Serves as Academic Editor at PLOS ONE.",
                  "Experienced peer reviewer and research mentor, providing academic guidance at Verivance MedComms.",
                ],
              },
              {
                name: "Mr. N. Narasimha Rao, M. Pharm",
                title: "Senior Industry Advisor",
                specialization: "Formulation & Technology Transfer",
                affiliation: "25+ years of industry experience",
                initials: "NNR",
                image: "/about/narasimha-rao.jpeg",
                imagePosition: "center 15%",
                linkedinUrl: "#",
                content: [
                  "25+ years of industry experience with expertise in formulation development, scale-up, and technology transfer.",
                  "Worked across pharmaceuticals, nutraceuticals, herbal & personal care sectors.",
                  "Guides curriculum relevance and industry alignment at Verivance MedComms.",
                ],
              },
              {
                name: "B. Sai Mrudula, M.Pharm",
                title: "Scientist II – Pharmacokinetics",
                specialization: "BA/BE Studies & Regulatory Affairs",
                affiliation: "Expert in pharmacokinetics and regulatory processes",
                initials: "BSM",
                image: "/about/b-sai-mrudula.png",
                linkedinUrl: "#",
                content: [
                  "Experience in pharmacokinetics and BA/BE studies, including protocol design & regulatory review.",
                  "Expertise in DCGI regulatory processes, bio-study monitoring & data interpretation.",
                  "Specializes in regulatory query response handling and provides guidance on regulatory compliance.",
                ],
              },
            ].map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
                onClick={() => openAdvisorModal(advisor)}
              >
                <div className="relative mb-5 flex justify-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] shadow-premium group-hover:scale-105 transition-transform duration-300 ring-2 ring-[#2ec4cc]/30 group-hover:ring-[#2ec4cc]/60 relative">
                    {advisor.image ? (
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: (advisor as any).imagePosition || 'center 30%' }}
                        quality={95}
                      />
                    ) : (
                      <span className="text-white font-bold text-2xl flex items-center justify-center w-full h-full">{advisor.initials}</span>
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ec4cc]/20 to-[#0b3c5d]/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{advisor.name}</h3>
                <p className="text-sm font-semibold text-[#2ec4cc] mb-1">{advisor.title}</p>
                {advisor.specialization && (
                  <p className="text-xs text-[#64748b] mb-2">{advisor.specialization}</p>
                )}
                {advisor.affiliation && (
                  <p className="text-xs text-[#64748b] leading-relaxed mb-4">{advisor.affiliation}</p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openAdvisorModal(advisor)
                  }}
                  className="inline-flex items-center gap-1 text-sm text-[#0b3c5d] font-semibold hover:text-[#2ec4cc] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              <span className="gradient-text">Meet the People Who Guide You</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#64748b] max-w-3xl mx-auto leading-relaxed">
              At Verivance, you're guided by mentors who are leaders in their fields, professionals with deep industry experience 
              and a passion for shaping future talent. Through expert-led training in clinical research, medical writing, and 
              pharmacovigilance, they bridge the gap between learning and industry practice. With their guidance, you gain not 
              just skills but the confidence to build a successful career.
            </p>
          </div>

          {/* Mentors Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollMentor('left')}
              disabled={currentMentorIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-all ${
                currentMentorIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              aria-label="Previous mentor"
            >
              <ChevronLeft className="w-6 h-6 text-[#0b3c5d]" />
            </button>

            <button
              onClick={() => scrollMentor('right')}
              disabled={currentMentorIndex === mentors.length - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-all ${
                currentMentorIndex === mentors.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              aria-label="Next mentor"
            >
              <ChevronRight className="w-6 h-6 text-[#0b3c5d]" />
            </button>

            {/* Carousel Container */}
            <div
              ref={mentorScrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 lg:gap-8 pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  data-mentor-index={index}
                  className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[320px] snap-center"
                >
                  <div
                    className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-6 shadow-lg border border-[#e2e8f0] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer h-full"
                    onClick={() => openAdvisorModal(mentor)}
                  >
                    <div className="relative mb-5 flex justify-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] shadow-premium group-hover:scale-105 transition-transform duration-300 ring-2 ring-[#2ec4cc]/30 group-hover:ring-[#2ec4cc]/60">
                        {mentor.image ? (
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            width={128}
                            height={128}
                            quality={100}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 30%' }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">{mentor.initials}</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ec4cc]/20 to-[#0b3c5d]/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2">{mentor.name}</h3>
                    <p className="text-sm font-semibold text-[#2ec4cc] mb-1">{mentor.title}</p>
                    {mentor.specialization && (
                      <p className="text-xs text-[#64748b] mb-4 leading-relaxed">{mentor.specialization}</p>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openAdvisorModal(mentor)
                      }}
                      className="inline-flex items-center gap-1 text-sm text-[#0b3c5d] font-semibold hover:text-[#2ec4cc] transition-colors group/btn"
                    >
                      <span>Know More</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {mentors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToMentor(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentMentorIndex
                      ? 'bg-[#2ec4cc] w-8'
                      : 'bg-[#cbd5e1] hover:bg-[#94a3b8] w-2.5'
                  }`}
                  aria-label={`Go to mentor ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#64748b] mb-4">And many more industry experts...</p>
            <a
              href="/#our-premium-courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-xl hover:shadow-2xl hover:shadow-[#2ec4cc]/40 transition-all font-semibold transform hover:scale-105"
            >
              <GraduationCap size={18} />
              <span>Explore Our Programs</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#0b3c5d] via-[#1a4d6e] to-[#2ec4cc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3c5d]/90 to-[#2ec4cc]/80"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful professionals who have transformed their careers with Verivance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#our-premium-courses"
              className="px-8 py-4 bg-white text-[#0b3c5d] rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all font-semibold transform hover:scale-105"
            >
              Explore Courses
            </a>
            <button
              onClick={openModal}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-semibold transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

