import CourseLayout from "@/components/course-layout"
import { Construction, Home } from "lucide-react"
import Link from "next/link"

export default function UnderDevelopmentPage() {
  return (
    <CourseLayout>
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe] relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0b3c5d]/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] mb-6 shadow-premium">
              <Construction size={48} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              <span className="gradient-text">Under Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed mb-8">
              We're working hard to bring you this feature. Please check back soon!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] text-white rounded-lg hover:shadow-premium transition-all text-base font-semibold group"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </CourseLayout>
  )
}

