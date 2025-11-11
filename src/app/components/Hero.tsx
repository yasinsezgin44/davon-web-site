"use client";

import { useScrollAnimation } from "./useScrollAnimation";
import ScrollReveal from "./ScrollReveal";
import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(254, 242, 242, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(254, 242, 242, 0.8) 100%)",
        animation: "gradientShift 20s ease infinite",
        padding: "clamp(6rem, 15vh, 12rem) 0 clamp(4rem, 10vh, 8rem)",
      }}
    >
      {/* Subtle Background Elements */}
      <div
        className="absolute top-20 left-10 w-8 h-8 bg-red-200/20 rounded-full animate-float opacity-30"
        style={{ animationDelay: "0s", animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-20 right-16 w-6 h-6 bg-red-300/15 rounded-full animate-float opacity-25"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      ></div>

      <div
        className="container mx-auto px-6 relative z-10"
        style={{ maxWidth: "64rem" }}
      >
        <h1 className="text-4xl font-bold text-black mb-4 transition-all duration-500 hover:scale-[1.02]">
          EMPOWERING HOSPITAL OPERATIONS WITH
          <br />
          <span className="text-red-600 transition-all duration-300 hover:text-red-700">
            CUTTING-EDGE CMMS AND EAM SOLUTIONS
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          At{" "}
          <span className="font-semibold text-gray-800">
            Davon Information Technologies
          </span>
          , we specialize in creating robust Computerized Maintenance Management
          Systems (CMMS) and Enterprise Asset Management (EAM) software tailored
          specifically for hospitals.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:border-red-700 transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
