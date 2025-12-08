"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
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

  const testimonials = [
    {
      text: "Davon transformed our maintenance operations. Equipment downtime reduced by 40% and our team works more efficiently than ever.",
      name: "Dr. Mehmet Yılmaz",
      role: "Hospital Director",
    },
    {
      text: "The compliance tracking feature alone saved us hundreds of hours during our JCI accreditation. Highly recommended for any healthcare facility.",
      name: "Ayşe Demir",
      role: "Quality Manager",
    },
    {
      text: "With Davon, we finally have complete visibility over our 50,000+ assets. The preventive maintenance scheduling has been a game-changer.",
      name: "Ahmet Kaya",
      role: "Technical Director",
    },
    {
      text: "Patient safety improved significantly since implementing Davon. Critical equipment is always maintained and ready when needed.",
      name: "Dr. Fatma Özcan",
      role: "Chief Medical Officer",
    },
    {
      text: "The work order management system streamlined our entire maintenance workflow. Response times improved by 60%.",
      name: "Murat Arslan",
      role: "Facilities Manager",
    },
    {
      text: "Davon's analytics helped us identify cost-saving opportunities we never knew existed. ROI was achieved within 6 months.",
      name: "Zeynep Yıldız",
      role: "CFO, Hospital Group",
    },
    {
      text: "Managing medical equipment across multiple facilities is now seamless. The centralized dashboard gives us real-time insights.",
      name: "Emre Şahin",
      role: "Regional Operations Director",
    },
    {
      text: "The inventory management module eliminated stockouts of critical spare parts. Our maintenance team can now work without delays.",
      name: "Hakan Çelik",
      role: "Procurement Manager",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            Healthcare institutions we <span className="font-medium italic">empower</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover how leading hospitals are transforming their operations with Davon's CMMS & EAM solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
