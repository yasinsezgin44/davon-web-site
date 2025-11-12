"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isIntroAnimating, setIsIntroAnimating] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Adjustable parallax intensity (higher = more movement)
  const PARALLAX_INTENSITY = 20;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center (range: -0.5 to 0.5)
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;

      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative text-left overflow-hidden min-h-screen flex items-center pt-0 pb-8 md:pb-12"
    >
      {/* Intro overlay animation (only covers Hero) */}
      {isIntroAnimating && (
        <div className="hero-intro-overlay">
          <Image
            src="/home-circle.png"
            alt="Intro circle"
            width={320}
            height={320}
            priority
            className="hero-intro-circle"
          />
        </div>
      )}

      {/* Right-side hero image layers (absolute, flush to viewport right) */}
      {/* Base image layer */}
      <div
        className="pointer-events-none absolute [top:-2px] bottom-0 right-0 w-[80%] md:w-[76%] lg:w-[74%]"
        style={{
          transform: `translate(${mousePosition.x * -PARALLAX_INTENSITY}px, ${
            mousePosition.y * -PARALLAX_INTENSITY
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Image
          src="/hero-background-base.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_12%,rgba(0,0,0,0.8)_28%,black_48%)]"
        />
      </div>

      {/* Glow image layer (on top of base) */}
      <div
        className="pointer-events-none absolute [top:-2px] bottom-0 right-0 w-[80%] md:w-[76%] lg:w-[74%] z-10"
        style={{
          transform: `translate(${mousePosition.x * -PARALLAX_INTENSITY}px, ${
            mousePosition.y * -PARALLAX_INTENSITY
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Image
          src="/hero-background-glow.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top animate-pulse-glow mix-blend-screen"
          style={{
            filter:
              "drop-shadow(0 0 24px rgba(255,0,0,0.45)) drop-shadow(0 0 48px rgba(255,0,0,0.25))",
            opacity: 0.9,
            willChange: "transform, opacity, filter",
          }}
        />
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full animate-float opacity-30 bg-[rgba(255,0,0,0.2)] [animation-delay:0s] [animation-duration:6s]"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 rounded-full animate-float opacity-25 bg-[rgba(255,0,0,0.15)] [animation-delay:2s] [animation-duration:8s]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Text Content (aligned with header container) */}
        <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[40%] mt-8 md:mt-12 max-w-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight font-bold text-[var(--text-100)] mb-3 transition-all duration-500 hover:scale-[1.02]">
            EMPOWERING HOSPITAL OPERATIONS WITH
            <br />
            <span className="text-[var(--accent-100)] transition-all duration-300">
              CUTTING-EDGE CMMS AND EAM SOLUTIONS
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[var(--text-200)] mb-6 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[var(--text-100)]">
              Davon Information Technologies
            </span>
            , we specialize in creating robust Computerized Maintenance
            Management Systems (CMMS) and Enterprise Asset Management (EAM)
            software tailored specifically for hospitals. Our innovative
            solutions streamline operations, improve efficiency, and ensure the
            highest standards of care.
          </p>

          <div className="flex gap-4">
            <a
              href="#about"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                e.currentTarget.style.setProperty("--x", `${x}px`);
              }}
              className="group/button relative inline-flex items-center rounded-xl p-[2px] text-[var(--accent-100)] [background:linear-gradient(135deg,#ff1a1a_0%,#ff6a6a_50%,#ff1a1a_100%)] [background-size:200%_200%] transition-all duration-500 hover:[background-position:100%_0%] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-100)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-100)] hover:scale-[1.02] active:scale-[0.995]"
              aria-label="Learn more about us"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 transition-opacity duration-300 group-hover/button:opacity-100 [background:radial-gradient(120px_60px_at_var(--x,50%)_-20%,rgba(255,0,0,0.18),transparent_70%)]"
              />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-[10px] px-6 py-3 bg-[var(--bg-100)]/90 text-[var(--accent-100)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px] transition-colors group-hover/button:bg-[var(--bg-100)]/95">
                <span className="font-semibold tracking-wide">About Us</span>
                <ArrowRight className="h-4 w-4 transform-gpu transition-transform ease-in-out duration-[160ms] group-hover/button:translate-x-1" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]"
                >
                  <span className="absolute left-[-30%] top-0 h-full w-[30%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-0 group-hover/button:opacity-100 [animation:buttonShine_900ms_ease-in-out]" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
