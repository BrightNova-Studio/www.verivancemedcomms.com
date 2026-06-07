import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Medical Writing Certification | Verivance Academy",
  description: "Master regulatory writing, clinical study reports, IBs, CSRs, and medical communications. Industry-certified Medical Writing course from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/medical-writing" },
  openGraph: {
    title: "Medical Writing Certification | Verivance Academy",
    description: "Master regulatory writing, clinical study reports, IBs, CSRs, and medical communications. Industry-certified Medical Writing course from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/medical-writing",
    images: [{ url: "/medical-writing-documentation.jpg", width: 1200, height: 630, alt: "Medical Writing Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Writing Certification | Verivance Academy",
    description: "Master regulatory writing, clinical study reports, IBs, CSRs, and medical communications. Industry-certified Medical Writing course from Verivance Academy, Hyderabad.",
    images: ["/medical-writing-documentation.jpg"],
  },
}

export default function MedicalWritingPageWrapper() {
  return <ClientPage />
}
