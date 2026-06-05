import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhyVerivance from "@/components/why-verivance"
import Courses from "@/components/courses"
import Placements from "@/components/placements"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <WhyVerivance />
      <Courses />
      <Placements />
      <Testimonials />
      <Footer />
    </main>
  )
}
