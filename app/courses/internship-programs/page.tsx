import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Professional Internship Programs | Verivance Academy",
  description: "Gain real industry experience through live projects and expert mentorship in Clinical Research, Pharmacovigilance, Medical Writing, and CDM. Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/internship-programs" },
  openGraph: {
    title: "Professional Internship Programs | Verivance Academy",
    description: "Gain real industry experience through live projects and expert mentorship in Clinical Research, Pharmacovigilance, Medical Writing, and CDM. Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/internship-programs",
    images: [{ url: "/course-internship.jpg", width: 1200, height: 630, alt: "Professional Internship Programs | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Internship Programs | Verivance Academy",
    description: "Gain real industry experience through live projects and expert mentorship in Clinical Research, Pharmacovigilance, Medical Writing, and CDM. Verivance Academy, Hyderabad.",
    images: ["/course-internship.jpg"],
  },
}

export default function InternshipProgramsPageWrapper() {
  return <ClientPage />
}
