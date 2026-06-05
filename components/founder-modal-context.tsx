"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface FounderModalContextType {
  isOpen: boolean
  founder: "radha" | "pavani" | null
  openModal: (founder: "radha" | "pavani") => void
  closeModal: () => void
}

const FounderModalContext = createContext<FounderModalContextType | undefined>(undefined)

export function FounderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [founder, setFounder] = useState<"radha" | "pavani" | null>(null)

  const openModal = (founder: "radha" | "pavani") => {
    setFounder(founder)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setFounder(null)
  }

  return (
    <FounderModalContext.Provider value={{ isOpen, founder, openModal, closeModal }}>
      {children}
    </FounderModalContext.Provider>
  )
}

export function useFounderModal() {
  const context = useContext(FounderModalContext)
  if (context === undefined) {
    throw new Error("useFounderModal must be used within a FounderModalProvider")
  }
  return context
}

