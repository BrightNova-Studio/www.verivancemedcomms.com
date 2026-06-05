"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface AdvisorData {
  name: string
  title: string
  specialization?: string
  affiliation?: string
  initials: string
  image?: string
  linkedinUrl?: string
  content: string[]
}

interface AdvisorModalContextType {
  isOpen: boolean
  advisor: AdvisorData | null
  openModal: (advisor: AdvisorData) => void
  closeModal: () => void
}

const AdvisorModalContext = createContext<AdvisorModalContextType | undefined>(undefined)

export function AdvisorModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [advisor, setAdvisor] = useState<AdvisorData | null>(null)

  const openModal = (advisor: AdvisorData) => {
    setAdvisor(advisor)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setAdvisor(null)
  }

  return (
    <AdvisorModalContext.Provider value={{ isOpen, advisor, openModal, closeModal }}>
      {children}
    </AdvisorModalContext.Provider>
  )
}

export function useAdvisorModal() {
  const context = useContext(AdvisorModalContext)
  if (context === undefined) {
    throw new Error("useAdvisorModal must be used within an AdvisorModalProvider")
  }
  return context
}

