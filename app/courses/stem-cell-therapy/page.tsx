import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
  description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/stem-cell-therapy" },
  openGraph: {
    title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
    description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/stem-cell-therapy",
    images: [{ url: "/course-stem-cell.png", width: 1200, height: 630, alt: "Stem Cell & Regenerative Therapy Program | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell & Regenerative Therapy Program | Verivance Academy",
    description: "2-month hands-on program in stem cell biology, advanced lab techniques, and industry internship. Certificate and placement support from Verivance Academy, Hyderabad.",
    images: ["/course-stem-cell.png"],
  },
}

export default function StemCellTherapyPageWrapper() {
  return <ClientPage />
}
