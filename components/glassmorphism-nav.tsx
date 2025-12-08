"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "About Davon", href: "/about-davon" },
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "R&D", href: "/r-d" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }

        const whiteSections = document.querySelectorAll('.bg-white, [data-white-section="true"]')
        let overWhite = false
        whiteSections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          if (rect.top < 100 && rect.bottom > 0) {
            overWhite = true
          }
        })
        setIsOnWhiteSection(overWhite)

        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      controlNavbar() // Initial check

      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("/") && !href.includes("#")) {
      return
    }

    // Handle hash links on other pages
    if (href.includes("#") && !href.startsWith("/#")) {
      return
    }

    const hashPart = href.includes("#") ? href.split("#")[1] : href.replace("#", "")
    const element = document.querySelector(`#${hashPart}`)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const textColor = isOnWhiteSection ? "text-slate-800" : "text-white"
  const textColorMuted = isOnWhiteSection ? "text-slate-600" : "text-white/80"
  const bgColor = isOnWhiteSection ? "bg-slate-900/10 border-slate-200" : "bg-white/10 border-white/20"
  const logoAccent = "text-red-500"

  return (
    <>
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="w-[90vw] max-w-xs md:max-w-4xl mx-auto">
          <div
            className={`${bgColor} backdrop-blur-md border rounded-full px-4 py-3 md:px-6 md:py-2 transition-colors duration-300`}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <span
                  className={`text-2xl md:text-3xl font-light tracking-wider ${textColor} transition-colors duration-300`}
                >
                  D<span className={logoAccent}>A</span>VON
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) =>
                  item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${textColorMuted} hover:${textColor} hover:scale-105 transition-all duration-200 font-medium cursor-pointer`}
                    >
                      {item.name}
                    </Link>
                  ) : item.href.startsWith("/#") ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        if (pathname === "/") {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }
                      }}
                      className={`${textColorMuted} hover:${textColor} hover:scale-105 transition-all duration-200 font-medium cursor-pointer`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`${textColorMuted} hover:${textColor} hover:scale-105 transition-all duration-200 font-medium cursor-pointer`}
                    >
                      {item.name}
                    </button>
                  ),
                )}
              </div>

              <div className="hidden md:block">
                <button
                  className={`relative ${isOnWhiteSection ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-white hover:bg-gray-50 text-black"} font-medium px-6 py-2 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group`}
                  onClick={() => {
                    if (pathname === "/") {
                      scrollToSection("#contact")
                    } else {
                      window.location.href = "/#contact"
                    }
                  }}
                >
                  <span className="mr-2">Contact</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden ${textColor} hover:scale-110 transition-transform duration-200 cursor-pointer`}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden relative">
          <div
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
          />

          <div
            className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${
              isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
            }`}
          >
            <div
              className={`${bgColor} backdrop-blur-md border rounded-2xl p-4 shadow-2xl transition-colors duration-300`}
            >
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) =>
                  item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${textColorMuted} hover:${textColor} hover:bg-white/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${
                        isOpen ? "animate-mobile-menu-item" : ""
                      }`}
                      style={{
                        animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.href.startsWith("/#") && pathname !== "/") {
                          window.location.href = item.href
                        } else {
                          scrollToSection(item.href)
                        }
                      }}
                      className={`${textColorMuted} hover:${textColor} hover:bg-white/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${
                        isOpen ? "animate-mobile-menu-item" : ""
                      }`}
                      style={{
                        animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
                      }}
                    >
                      {item.name}
                    </button>
                  ),
                )}
                <div className="h-px bg-white/10 my-2" />
                <button
                  className={`relative ${isOnWhiteSection ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-white hover:bg-gray-50 text-black"} font-medium px-6 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group transform ${
                    isOpen ? "animate-mobile-menu-item" : ""
                  }`}
                  style={{
                    animationDelay: isOpen ? `${navigation.length * 80 + 150}ms` : "0ms",
                  }}
                  onClick={() => {
                    if (pathname === "/") {
                      scrollToSection("#contact")
                    } else {
                      window.location.href = "/#contact"
                    }
                  }}
                >
                  <span className="mr-2">Contact</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
