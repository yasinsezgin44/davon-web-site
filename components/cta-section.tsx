"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative max-w-5xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Video background */}
            <video
              ref={videoRef}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              className="w-full h-[500px] md:h-[600px] object-cover"
            >
              <source src="/cta-video.mp4" type="video/mp4" />
            </video>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Embedded content over video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-4 text-balance leading-tight drop-shadow-lg">
                Join Leading{" "}
                <span className="font-semibold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                  Healthcare Institutions
                </span>
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Transform your hospital's operational excellence with Davon's cutting-edge CMMS and EAM solutions.
              </p>

              <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <a
              href="mailto:info@davon.com.tr"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@davon.com.tr
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="tel:+902327659030"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +90 (232) 765 90 30
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
