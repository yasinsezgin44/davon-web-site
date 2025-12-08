"use client"

import { useEffect, createContext, useContext, useState, type ReactNode } from "react"

interface ParallaxContextType {
  scrollY: number
}

const ParallaxContext = createContext<ParallaxContextType>({ scrollY: 0 })

export function useParallax() {
  return useContext(ParallaxContext)
}

export function GlobalParallaxProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY * 0.1}px`)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <ParallaxContext.Provider value={{ scrollY }}>{children}</ParallaxContext.Provider>
}
