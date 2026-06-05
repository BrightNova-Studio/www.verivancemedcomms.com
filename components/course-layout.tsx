import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

