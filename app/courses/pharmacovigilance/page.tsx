import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Pharmacovigilance & Drug Safety Certification | Verivance Academy",
  description: "Learn adverse event case processing, safety signal detection, and global PV regulations. Industry-recognized Pharmacovigilance certification from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/pharmacovigilance" },
  openGraph: {
    title: "Pharmacovigilance & Drug Safety Certification | Verivance Academy",
    description: "Learn adverse event case processing, safety signal detection, and global PV regulations. Industry-recognized Pharmacovigilance certification from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/pharmacovigilance",
    images: [{ url: "/pharmacovigilance-safety-monitoring.jpg", width: 1200, height: 630, alt: "Pharmacovigilance & Drug Safety Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacovigilance & Drug Safety Certification | Verivance Academy",
    description: "Learn adverse event case processing, safety signal detection, and global PV regulations. Industry-recognized Pharmacovigilance certification from Verivance Academy, Hyderabad.",
    images: ["/pharmacovigilance-safety-monitoring.jpg"],
  },
}

export default function PharmacovigilancePageWrapper() {
  return <ClientPage />
}
