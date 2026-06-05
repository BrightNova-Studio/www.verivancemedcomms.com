"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface FreeDemoContextType {
  isOpen: boolean
  selectedCourse: string
  openModal: (courseName?: string) => void
  closeModal: () => void
}

const FreeDemoContext = createContext<FreeDemoContextType | undefined>(undefined)

export function FreeDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")

  const openModal = (courseName?: string) => {
    setSelectedCourse(courseName || "")
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Clear course after a short delay to allow modal close animation
    setTimeout(() => setSelectedCourse(""), 300)
  }

  return (
    <FreeDemoContext.Provider value={{ isOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </FreeDemoContext.Provider>
  )
}

export function useFreeDemo() {
  const context = useContext(FreeDemoContext)
  if (context === undefined) {
    throw new Error("useFreeDemo must be used within a FreeDemoProvider")
  }
  return context
}

