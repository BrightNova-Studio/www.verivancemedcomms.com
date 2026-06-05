"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ApplyNowContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ApplyNowContext = createContext<ApplyNowContextType | undefined>(undefined)

export function ApplyNowProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ApplyNowContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ApplyNowContext.Provider>
  )
}

export function useApplyNow() {
  const context = useContext(ApplyNowContext)
  if (context === undefined) {
    throw new Error("useApplyNow must be used within an ApplyNowProvider")
  }
  return context
}
