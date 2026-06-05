"use client"

import { useEffect } from "react"

export default function PreloadResources() {
  useEffect(() => {
    const hero = document.createElement("link")
    hero.rel = "preload"
    hero.as = "image"
    hero.href = "/clinical-research-laboratory-students-pharma-train.jpg"
    document.head.appendChild(hero)

    const logo = document.createElement("link")
    logo.rel = "preload"
    logo.as = "image"
    logo.href = "/logo.png"
    document.head.appendChild(logo)

    const dns = document.createElement("link")
    dns.rel = "dns-prefetch"
    dns.href = "https://wa.me"
    document.head.appendChild(dns)

    return () => {
      document.head.removeChild(hero)
      document.head.removeChild(logo)
      document.head.removeChild(dns)
    }
  }, [])

  return null
}
