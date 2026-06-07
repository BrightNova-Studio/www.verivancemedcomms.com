import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Clinical SAS Certification | Verivance Academy",
  description: "Master Base SAS, Advanced SAS, CDISC standards (SDTM, ADaM, TLF), and real-time industry projects. Clinical SAS certification from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/clinical-sas" },
  openGraph: {
    title: "Clinical SAS Certification | Verivance Academy",
    description: "Master Base SAS, Advanced SAS, CDISC standards (SDTM, ADaM, TLF), and real-time industry projects. Clinical SAS certification from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/clinical-sas",
    images: [{ url: "/course-clinical-sas.jpg", width: 1200, height: 630, alt: "Clinical SAS Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical SAS Certification | Verivance Academy",
    description: "Master Base SAS, Advanced SAS, CDISC standards (SDTM, ADaM, TLF), and real-time industry projects. Clinical SAS certification from Verivance Academy, Hyderabad.",
    images: ["/course-clinical-sas.jpg"],
  },
}

export default function ClinicalSASPageWrapper() {
  return <ClientPage />
}
