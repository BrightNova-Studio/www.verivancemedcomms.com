import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/whatsapp-button"
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
  title: "Verivance - Clinical Research & Pharma Training Institute",
  description:
    "India's leading institute for Clinical Research, Pharmacovigilance, Medical Writing, Clinical Data Management, and Clinical SAS. Launch your successful career with expert-designed programs.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  other: {
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0",
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
                <Analytics />
              </AdvisorModalProvider>
            </FounderModalProvider>
          </FreeDemoProvider>
        </ApplyNowProvider>
      </body>
    </html>
  )
}
