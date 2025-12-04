"use client";

import { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  QrCode,
  CheckCircle,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description:
      "Instantly identify and count equipment by scanning QR codes attached to each asset.",
  },
  {
    icon: Package,
    title: "Location-Based Tracking",
    description:
      "Organize counts by blocks, floors, and departments for comprehensive inventory management.",
  },
  {
    icon: CheckCircle,
    title: "Real-Time Sync",
    description:
      "All counts sync instantly to Davon CMMS, eliminating manual data entry errors.",
  },
];

export function CountAppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    { src: "/count-app/count-app1.jpeg", label: "Login" },
    { src: "/count-app/count-app2.jpeg", label: "Locations" },
    { src: "/count-app/count-app3.jpeg", label: "Count Screen" },
    { src: "/count-app/count-app4.jpeg", label: "Equipment Detail" },
  ];

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

  // Auto-rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  const goToPrevious = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToNext = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const getPreviousIndex = () =>
    (activeScreen - 1 + screens.length) % screens.length;
  const getNextIndex = () => (activeScreen + 1) % screens.length;

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative z-10"
      data-white-section="true"
    >
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Davon Count App
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Mobile{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Equipment Counting
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Streamline your hospital inventory counts with our powerful mobile
              application.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Phone mockups with 3 phones */}
            <div className="w-full lg:w-1/2 flex justify-center order-1">
              <div
                className={`relative transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Phone frame with interactive screens - 3 phones layout */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute -left-12 sm:-left-16 top-12 z-10 opacity-50 scale-75 hidden md:block cursor-pointer hover:opacity-70 hover:scale-[0.78] transition-all duration-300"
                    onClick={goToPrevious}
                  >
                    <div className="bg-slate-800 rounded-[2.5rem] p-2 shadow-xl">
                      <div className="bg-black rounded-[2rem] p-1">
                        <div className="relative w-[180px] h-[380px] rounded-[1.5rem] overflow-hidden bg-white">
                          <Image
                            src={
                              screens[getPreviousIndex()].src ||
                              "/placeholder.svg"
                            }
                            alt="Previous screen"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Left arrow indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-black/50 rounded-full p-2">
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Main phone (center) */}
                  <div className="relative z-20">
                    <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="bg-black rounded-[2rem] p-1">
                        <div className="relative w-[240px] h-[500px] sm:w-[280px] sm:h-[580px] rounded-[1.5rem] overflow-hidden bg-white">
                          {screens.map((screen, index) => (
                            <div
                              key={index}
                              className={`absolute inset-0 transition-all duration-500 ${
                                activeScreen === index
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"
                              }`}
                            >
                              <Image
                                src={screen.src || "/placeholder.svg"}
                                alt={screen.label}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-12 sm:-right-16 top-12 z-10 opacity-50 scale-75 hidden md:block cursor-pointer hover:opacity-70 hover:scale-[0.78] transition-all duration-300"
                    onClick={goToNext}
                  >
                    <div className="bg-slate-800 rounded-[2.5rem] p-2 shadow-xl">
                      <div className="bg-black rounded-[2rem] p-1">
                        <div className="relative w-[180px] h-[380px] rounded-[1.5rem] overflow-hidden bg-white">
                          <Image
                            src={
                              screens[getNextIndex()].src || "/placeholder.svg"
                            }
                            alt="Next screen"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Right arrow indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-black/50 rounded-full p-2">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {screens.map((screen, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreen(index)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        activeScreen === index
                          ? "bg-red-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8 order-2">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  Count equipment faster, with zero errors
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    The Davon Count App transforms tedious inventory counts into
                    a streamlined mobile experience. Simply scan QR codes to
                    identify equipment and mark them as counted.
                  </p>

                  <p>
                    Track progress by location, see completion status in
                    real-time, and sync everything directly to your Davon CMMS.
                  </p>
                </div>
              </div>

              {/* Feature cards */}
              <div
                className={`space-y-4 transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300"
                  >
                    <div className="p-2 bg-red-100 rounded-lg">
                      <feature.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">10x</div>
                  <p className="text-xs text-slate-600">Faster Counts</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">99.9%</div>
                  <p className="text-xs text-slate-600">Accuracy</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <p className="text-xs text-slate-600">Manual Entry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
