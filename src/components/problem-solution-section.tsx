"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AlertTriangle = () => (
  <svg
    className="h-6 w-6 text-red-400"
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
);

const CheckCircle = () => (
  <svg
    className="h-5 w-5 text-green-400"
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
);

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
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            The Problem With &quot;Preventive&quot; Maintenance
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            You&apos;re Still Fixing Things That Aren&apos;t Broken
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Spreadsheets are chaos. But most CMMS platforms just schedule
            tasks—they don&apos;t stop failures. Here&apos;s how to see the
            future.
          </p>
        </div>

        {/* Main Problem/Solution Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Problem Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-red-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-400">
                  The Old Way: Reactive & Costly
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">
                  $3-8K
                </div>
                <p className="text-white/80 text-sm sm:text-base">
                  Cost *per hour* for critical imaging equipment downtime.
                  You&apos;re not just losing time, you&apos;re losing revenue.
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Wasting money on unnecessary &quot;preventive&quot; tasks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Blindsided by sudden, catastrophic equipment failures.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    No real-time data to know which asset is at risk.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Scrambling to prove compliance after a failure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">
                  Davon Health: Predictive & Profitable
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                  70-75%
                </div>
                <p className="text-white/80 text-sm sm:text-base">
                  Reduction in equipment breakdowns by using <em>predictive</em>{" "}
                  maintenance. We turn your data into a forecast.
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Use AI to predict failures before they happen.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Focus your budget only on the maintenance that matters.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Know the health of every critical asset from one dashboard.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Pass any audit as a simple by-product of being in control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Before/After: Chaos vs Clarity */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Chaos Image */}
          <div className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src="/mri-chaos.png"
                alt="Biomedical engineer stressed in front of MRI with red error alerts on the screen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-red-300/80 mb-1">
                    Before Davon
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Chaos & Unplanned Downtime
                  </p>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-500/80 text-xs font-medium text-white backdrop-blur">
                  Chaos
                </span>
              </div>
            </div>
          </div>

          {/* Clarity Image */}
          <div className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src="/calm-mri.png"
                alt="Biomedical engineer confidently standing beside MRI with a clean analytics dashboard"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80 mb-1">
                    With Davon
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Clarity, Control & Uptime
                  </p>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-500/80 text-xs font-medium text-white backdrop-blur">
                  Clarity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-[750ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              2-5x
            </div>
            <p className="text-white/70 text-xs sm:text-sm">
              Higher cost of reactive repair vs. planned maintenance
            </p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              88%
            </div>
            <p className="text-white/70 text-xs sm:text-sm">
              Of spreadsheets contain manual errors
            </p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              24/7
            </div>
            <p className="text-white/70 text-xs sm:text-sm">
              Audit-Ready. Always.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-balance">
            Stop Gambling With Compliance
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Get a free readiness assessment and see exactly where your current
            process puts your facility at risk.
          </p>
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            Get Your Free Assessment
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
