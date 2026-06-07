import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Clinical Data Management Certification | Verivance Academy",
  description: "Learn CRF design, EDC systems, data validation, query management, and CDISC standards. Industry-certified CDM program from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/clinical-data-management" },
  openGraph: {
    title: "Clinical Data Management Certification | Verivance Academy",
    description: "Learn CRF design, EDC systems, data validation, query management, and CDISC standards. Industry-certified CDM program from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/clinical-data-management",
    images: [{ url: "/clinical-data-management.jpg", width: 1200, height: 630, alt: "Clinical Data Management Certification | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Data Management Certification | Verivance Academy",
    description: "Learn CRF design, EDC systems, data validation, query management, and CDISC standards. Industry-certified CDM program from Verivance Academy, Hyderabad.",
    images: ["/clinical-data-management.jpg"],
  },
}

export default function ClinicalDataManagementPageWrapper() {
  return <ClientPage />
}
