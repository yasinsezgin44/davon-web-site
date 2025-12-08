"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

function BeforeAfterSlider() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Chaos - left */}
        <div className="relative">
          <Image
            src="/images/mri-chaos.png"
            alt="Hospital maintenance challenges"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-left max-w-[70%] sm:max-w-[60%]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 mb-3">
              <svg
                className="h-4 w-4 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span className="text-red-300 text-xs sm:text-sm font-medium">
                Before Davon
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
              The Challenge
            </h3>
            <p className="text-white/80 text-xs sm:text-sm drop-shadow-md">
              Equipment downtime & maintenance chaos
            </p>
          </div>
        </div>

        {/* Calm - right */}
        <div className="relative">
          <Image
            src="/calm-mri.png"
            alt="Davon CMMS solution"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-right max-w-[70%] sm:max-w-[60%] ml-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 mb-3">
              <svg
                className="h-4 w-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-green-300 text-xs sm:text-sm font-medium">
                With Davon
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
              Complete Control
            </h3>
            <p className="text-white/80 text-xs sm:text-sm drop-shadow-md">
              Real-time monitoring & efficiency
            </p>
          </div>
        </div>
      </div>

      {/* Center divider for visual consistency */}
      <div
        className="absolute top-0 bottom-0 w-1 z-20 left-1/2 -translate-x-1/2"
        style={{
          background: "linear-gradient(to bottom, #dc2626, #ffffff)",
          boxShadow:
            "0 0 20px rgba(220, 38, 38, 0.5), 0 0 20px rgba(255, 255, 255, 0.5)",
        }}
      />
    </div>
  );
}

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 relative z-10 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Patient Safety & Operational Efficiency
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span className="text-red-500">20+ Years</span> of Healthcare
            Industry Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Davon is always by your side for equipment efficiency and patient
            safety in healthcare institutions.
          </p>
        </div>

        <div
          className={`mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <BeforeAfterSlider />
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              20+
            </div>
            <p className="text-white/70 text-xs sm:text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              1000+
            </div>
            <p className="text-white/70 text-xs sm:text-sm">Technical Users</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              15K+
            </div>
            <p className="text-white/70 text-xs sm:text-sm">Beds Managed</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              400K+
            </div>
            <p className="text-white/70 text-xs sm:text-sm">Assets Tracked</p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-balance">
            Ready to Transform Your Hospital Operations?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Get a free consultation and see how Davon can streamline your
            maintenance management.
          </p>
          <Button
            size="lg"
            className="bg-red-600 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            Schedule a Consultation
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
