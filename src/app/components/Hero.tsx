"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isIntroAnimating, setIsIntroAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative text-center overflow-hidden min-h-[100svh] md:min-h-screen flex items-center py-16 md:py-24 bg-[linear-gradient(135deg,rgba(255,0,0,0.05)_0%,var(--bg-100)_50%,rgba(255,0,0,0.05)_100%)] animate-[gradient_20s_ease_infinite]">
      {/* Intro overlay animation (only covers Hero) */}
      {isIntroAnimating && (
        <div className="hero-intro-overlay">
          <Image
            src="/home-circle.webp"
            alt="Intro circle"
            width={320}
            height={320}
            priority
            className="hero-intro-circle"
          />
        </div>
      )}

      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full animate-float opacity-30 bg-[rgba(255,0,0,0.2)] [animation-delay:0s] [animation-duration:6s]"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 rounded-full animate-float opacity-25 bg-[rgba(255,0,0,0.15)] [animation-delay:2s] [animation-duration:8s]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-100)] mb-4 transition-all duration-500 hover:scale-[1.02]">
          EMPOWERING HOSPITAL OPERATIONS WITH
          <br />
          <span className="text-[var(--accent-100)] transition-all duration-300">
            CUTTING-EDGE CMMS AND EAM SOLUTIONS
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[var(--text-200)] max-w-2xl mx-auto mb-8 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[var(--text-100)]">
            Davon Information Technologies
          </span>
          , we specialize in creating robust Computerized Maintenance Management
          Systems (CMMS) and Enterprise Asset Management (EAM) software tailored
          specifically for hospitals.Our innovative solutions streamline
          operations, improve efficiency, and ensure the highest standards of
          care.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="border-2 border-[var(--accent-100)] text-[var(--accent-100)] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
