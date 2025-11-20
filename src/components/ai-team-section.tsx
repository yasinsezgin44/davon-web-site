"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, Clock } from "lucide-react";

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null); // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false);
  const screenshots = [
    "/count-app/count-app1.jpeg",
    "/count-app/count-app2.jpeg",
    "/count-app/count-app3.jpeg",
    "/count-app/count-app4.jpeg",
  ];
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible");
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, screenshots.length]);

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
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
              <MessageCircle className="w-4 h-4" />
              Equipment Inventory Demo
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              See Davon Protect{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Critical Uptime
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              See how Davon helps your team keep every piece of equipment accounted for,
              planned, and ready—so patients never feel the impact of a missing device.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  This is what your clinicians don&apos;t see
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    With Davon, you have a clear picture of every MRI, CT, ventilator,
                    and anesthesia machine—so you know exactly what you have and where it is.
                  </p>

                  <p>
                    Instead of hunting through spreadsheets or walking the halls,
                    your team can open the count app and see the real inventory in seconds.
                  </p>

                  <p className="text-lg lg:text-xl font-semibold text-slate-900">
                    Your peers are losing this uptime. You don&apos;t have to.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                  <p className="text-slate-800 font-medium text-sm lg:text-base">
                    &quot;We went from reacting to breakdowns to knowing a week in
                    advance which scanner needed attention. Unplanned imaging
                    downtime dropped to nearly zero in the first quarter.&quot;
                  </p>
                  <p className="text-xs lg:text-sm text-slate-600 mt-2">
                    — Biomedical Engineering Director, Tertiary Care Hospital
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup with Count App */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="font-medium text-slate-700">
                              Davon Count App
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">24/7</span>
                          </div>
                        </div>

                        {/* Count app carousel */}
                        <div className="relative w-full aspect-[9/19] bg-black overflow-hidden rounded-[1.5rem]">
                          <Image
                            src={screenshots[currentScreenshot]}
                            alt="Davon Count App used to count hospital equipment"
                            fill
                            sizes="(min-width: 1024px) 24rem, 100vw"
                            className="object-cover object-top transition-opacity duration-700"
                          />

                          {/* Carousel dots */}
                          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                            {screenshots.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentScreenshot(index)}
                                className={`h-2.5 w-2.5 rounded-full border border-white/60 transition-all ${
                                  currentScreenshot === index
                                    ? "bg-white"
                                    : "bg-white/20 hover:bg-white/40"
                                }`}
                                aria-label={`Show screenshot ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <p className="text-xs sm:text-sm text-slate-600 text-center">
                            Count and track every piece of hospital equipment in real time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
