"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxWrapper({ children, speed = 0.5, className = "" }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const offset = (scrollY - elementTop) * speed
      ref.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
