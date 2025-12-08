"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type FeatureCard = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const features: FeatureCard[] = [
  {
    title: "Technology Consultancy",
    description:
      "Davon's Technology Consulting service guides healthcare organizations through complex technology needs. Our expert team assists clients in identifying and implementing the most suitable technology solutions, enhancing business efficiency and providing a competitive edge.",
    imageSrc: "/images/04.-Kokpit-Grafiklerin-Bazilari-scaled.webp",
    imageAlt: "Davon technology consulting and operational cockpit dashboard for hospital management",
  },
  {
    title: "Enterprise Asset Management",
    description:
      "Davon's Enterprise Asset Management (EAM) solution helps healthcare institutions optimize their asset management processes. This system ensures efficient tracking of all assets in healthcare facilities and provides critical data for planning maintenance processes.",
    imageSrc: "/images/Enterprise_Asset_Management.png",
    imageAlt: "Enterprise asset management dashboard for hospital equipment",
  },
  {
    title: "Maintenance Management",
    description:
      "Davon's Maintenance Management System (CMMS) offers a comprehensive solution for managing maintenance processes that are critically important in the healthcare sector. Specifically designed for healthcare institutions, this system enhances reliability and efficiency.",
    imageSrc: "/images/Maintenance_Management.png",
    imageAlt: "Maintenance management interface for hospital biomedical equipment",
  },
  {
    title: "Asset Tracking",
    description:
      "Davon's Asset Tracking System helps healthcare institutions optimize their asset processes. In hospital settings, accurately and efficiently tracking and managing highly mobile equipment is crucial. This solution simplifies inventory management and reduces losses.",
    imageSrc: "/images/Asset_Tracking.png",
    imageAlt: "Hospital asset tracking system showing real-time equipment locations",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
              Patient Safety & Operational Efficiency
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
              Patient Safety and Operational Efficiency{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                are our top priorities!
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              We prepare your institution for the future, with over 20 years of experience in the healthcare industry.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group transition-all duration-1000"
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-red-200">
                  <div className="mb-6">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
