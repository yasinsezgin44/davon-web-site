"use client";

import { useScrollAnimation } from "./useScrollAnimation";

export default function Hero() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } =
    useScrollAnimation({ threshold: 0.4 });
  const { elementRef: descriptionRef, isVisible: descriptionVisible } =
    useScrollAnimation({ threshold: 0.5 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } =
    useScrollAnimation({ threshold: 0.6 });

  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        background:
          "url('/hero-background.png'), linear-gradient(135deg, rgba(254, 242, 242, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(254, 242, 242, 0.8) 100%)",
        backgroundSize: "cover, 200% 200%",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        animation: "gradientShift 15s ease infinite",
        padding: "clamp(6rem, 15vh, 12rem) 0 clamp(4rem, 10vh, 8rem)",
      }}
    >
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="geometric-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <rect x="10" y="10" width="2" height="2" fill="currentColor" />
              <polygon points="30,15 32,20 28,20" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      {/* Floating Shapes */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full animate-float opacity-20"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-32 right-16 w-6 h-6 bg-red-500 rounded-full animate-float opacity-30"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-3 h-3 bg-red-300 rounded-full animate-float opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 right-10 w-5 h-5 bg-red-400 rounded-full animate-float opacity-20"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] animate-float-slow opacity-60"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-float-slow opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-float-slow opacity-40"
        style={{ animationDelay: "4s" }}
      ></div>

      <div
        className="container mx-auto px-6 relative z-10"
        style={{ maxWidth: "64rem" }}
      >
        {/* Main Title with Enhanced Animation */}
        <h1
          ref={titleRef as any}
          className={`font-black text-black uppercase tracking-tight transition-all duration-1000 mb-8 ${
            titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(220, 38, 38, 0.1)",
            fontFamily: "'Zalando Sans', sans-serif",
          }}
        >
          EMPOWERING HOSPITAL OPERATIONS WITH
          <br />
          <span className="text-red-600 animate-glow">
            CUTTING-EDGE CMMS AND EAM SOLUTIONS
          </span>
        </h1>

        {/* Subtitle with Enhanced Typography */}
        <h2
          ref={subtitleRef as any}
          className={`font-semibold text-gray-700 transition-all duration-1000 delay-200 mb-6 ${
            subtitleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.875rem)",
            lineHeight: 1.4,
            maxWidth: "48rem",
            margin: "0 auto",
            fontFamily: "'Zalando Sans', sans-serif",
          }}
        >
          At Davon Information Technologies, we specialize in creating robust
          Computerized Maintenance Management Systems (CMMS) and Enterprise
          Asset Management (EAM) software tailored specifically for hospitals.
          Our innovative solutions streamline operations, improve efficiency,
          and ensure the highest standards of care.
        </h2>

        {/* Enhanced CTA Buttons */}
        <div
          ref={buttonsRef as any}
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 mb-12 ${
            buttonsVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ gap: "1rem" }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover-lift animate-pulse-gentle border-2 border-red-600 hover:from-red-700 hover:to-red-800 hover:shadow-2xl group relative overflow-hidden"
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1.125rem",
              minHeight: "3.5rem",
              boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <span className="relative z-10">Request a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-red-600 text-red-600 rounded-lg font-semibold hover-scale hover:bg-red-50 hover:shadow-xl transition-all duration-300 group"
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1.125rem",
              minHeight: "3.5rem",
            }}
          >
            <span className="group-hover:animate-pulse">
              Take the Product Tour
            </span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <span className="text-sm font-medium text-gray-600">
            ✓ HIPAA Compliant
          </span>
          <span className="text-sm font-medium text-gray-600">
            ✓ SOC 2 Certified
          </span>
          <span className="text-sm font-medium text-gray-600">✓ ISO 27001</span>
        </div>

        {/* Enhanced Counter */}
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-500 italic">
              Join{" "}
              <span className="font-bold text-red-600 animate-pulse-gentle text-lg">
                200+
              </span>{" "}
              hospitals already protecting patient safety and optimizing
              operations
            </p>
            <div
              className="w-2 h-2 bg-red-600 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
