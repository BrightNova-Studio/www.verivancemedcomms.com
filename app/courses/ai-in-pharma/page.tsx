import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "AI in Pharma Innovation Program | Verivance Academy",
  description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
  alternates: { canonical: "https://verivancemedcomms.com/courses/ai-in-pharma" },
  openGraph: {
    title: "AI in Pharma Innovation Program | Verivance Academy",
    description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
    url: "https://verivancemedcomms.com/courses/ai-in-pharma",
    images: [{ url: "/course-ai-pharma.jpg", width: 1200, height: 630, alt: "AI in Pharma Innovation Program | Verivance Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Pharma Innovation Program | Verivance Academy",
    description: "Explore AI applications in drug discovery, clinical trials, pharmacovigilance, and regulatory affairs. Cutting-edge AI in Pharma program from Verivance Academy, Hyderabad.",
    images: ["/course-ai-pharma.jpg"],
  },
}

export default function AiInPharmaPageWrapper() {
  return <ClientPage />
}
