import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Global Regulatory Affairs Program | Verivance Academy",
  description: "Comprehensive training in US FDA, EU MDR, and CDSCO regulatory frameworks. CTD/ACTD dossier, medical devices RA, and global submissions from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/regulatory-affairs" },
  openGraph: {
    title: "Global Regulatory Affairs Program | Verivance Academy",
    description: "Comprehensive training in US FDA, EU MDR, and CDSCO regulatory frameworks. CTD/ACTD dossier, medical devices RA, and global submissions from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/regulatory-affairs",
    images: [{ url: "/course-regulatory-affairs.jpg", width: 1200, height: 630, alt: "Global Regulatory Affairs Program | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Regulatory Affairs Program | Verivance Academy",
    description: "Comprehensive training in US FDA, EU MDR, and CDSCO regulatory frameworks. CTD/ACTD dossier, medical devices RA, and global submissions from Verivance Academy, Hyderabad.",
    images: ["/course-regulatory-affairs.jpg"],
  },
}

export default function RegulatoryAffairsPageWrapper() {
  return <ClientPage />
}
