import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/whatsapp-button"
import LeadPopup from "@/components/lead-popup"
import { ApplyNowProvider } from "@/components/apply-now-context"
import ApplyNowForm from "@/components/apply-now-form"
import { FreeDemoProvider } from "@/components/free-demo-context"
import FreeDemoModal from "@/components/free-demo-modal"
import { FounderModalProvider } from "@/components/founder-modal-context"
import FounderModal from "@/components/founder-modal"
import { AdvisorModalProvider } from "@/components/advisor-modal-context"
import AdvisorModal from "@/components/advisor-modal"
import SuccessToast from "@/components/success-toast"
import ErrorToast from "@/components/error-toast"
import PreloadResources from "@/components/preload-resources"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://verivancemedcomms.com"),

  title: {
    default: "Verivance Academy | Clinical Research & Pharma Training Institute – Hyderabad",
    template: "%s | Verivance Academy",
  },
  description:
    "India's leading pharma training institute in Hyderabad. Expert-designed courses in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, Clinical Data Management, Clinical SAS & AI in Pharma. 1000+ students trained, 100+ hiring partners.",
  keywords: [
    "clinical research training institute India",
    "clinical research course Hyderabad",
    "pharmacovigilance training India",
    "medical writing certification",
    "clinical data management course",
    "clinical SAS training Hyderabad",
    "regulatory affairs course India",
    "AI in pharma course",
    "stem cell therapy course",
    "pharma training institute Hyderabad",
    "5 domain job ready program",
    "CRO career training India",
    "drug safety pharmacovigilance course",
    "verivance academy",
    "pharma internship Hyderabad",
  ],
  authors: [{ name: "Verivance Academy", url: "https://verivancemedcomms.com" }],
  creator: "Verivance Academy",
  publisher: "Verivance Academy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://verivancemedcomms.com",
    siteName: "Verivance Academy",
    title: "Verivance Academy | Clinical Research & Pharma Training – Hyderabad",
    description:
      "India's leading pharma training institute. Courses in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, CDM, Clinical SAS & AI in Pharma. 1000+ students trained.",
    images: [
      {
        url: "/clinical-research-laboratory-students-pharma-train.jpg",
        width: 1200,
        height: 630,
        alt: "Verivance Academy – Clinical Research & Pharma Training Institute Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Verivance",
    creator: "@Verivance",
    title: "Verivance Academy | Clinical Research & Pharma Training – Hyderabad",
    description:
      "India's leading pharma training institute. Courses in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, CDM, Clinical SAS & AI in Pharma.",
    images: ["/clinical-research-laboratory-students-pharma-train.jpg"],
  },

  alternates: {
    canonical: "https://verivancemedcomms.com",
  },

  icons: {
    icon: [{ url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" }],
    apple: "/apple-icon.png",
    shortcut: "/icon-light-32x32.png",
  },

  verification: {
    google: "",   // add your Google Search Console verification token here
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <PreloadResources />
        <ApplyNowProvider>
          <FreeDemoProvider>
            <FounderModalProvider>
              <AdvisorModalProvider>
                {children}
                <ApplyNowForm />
                <FreeDemoModal />
                <FounderModal />
                <AdvisorModal />
                <SuccessToast />
                <ErrorToast />
                <WhatsAppButton />
                <LeadPopup />
                <Analytics />
              </AdvisorModalProvider>
            </FounderModalProvider>
          </FreeDemoProvider>
        </ApplyNowProvider>
      </body>
    </html>
  )
}
