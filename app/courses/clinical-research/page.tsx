import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Advanced Clinical Research Certification | Verivance Academy",
  description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/clinical-research" },
  openGraph: {
    title: "Advanced Clinical Research Certification | Verivance Academy",
    description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/clinical-research",
    images: [{ url: "/course-clinical-research.jpg", width: 1200, height: 630, alt: "Advanced Clinical Research Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Clinical Research Certification | Verivance Academy",
    description: "Learn Clinical Research with ICH-GCP guidelines, clinical trial operations, and regulatory compliance. Industry-recognized certification from Verivance Academy, Hyderabad.",
    images: ["/course-clinical-research.jpg"],
  },
}

export default function ClinicalResearchPageWrapper() {
  return <ClientPage />
}
