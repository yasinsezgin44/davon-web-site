"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Animate text/content when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Control video play/pause when section is visible near bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current && !hasStarted) {
              videoRef.current.play().catch(() => {
                // ignore autoplay errors
              });
              setHasStarted(true);
            } else if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // ignore autoplay errors
              });
            }
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32"
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Video background */}
            <video
              ref={videoRef}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="w-full h-[500px] md:h-[600px] object-cover"
            >
              <source src="/cta-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Mute / Unmute button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-black/70 transition-all duration-200 group"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Embedded content over video */}
            <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-center lg:justify-end text-center lg:text-left px-6 lg:px-12 xl:px-16 w-full pb-10 lg:pb-16">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-4 text-balance leading-tight drop-shadow-lg max-w-3xl">
                Join Leading{" "}
                <span className="font-semibold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                  Healthcare Institutions
                </span>
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                Transform your hospital's operational excellence with Davon's
                cutting-edge CMMS and EAM solutions.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-2xl mx-auto lg:mx-0"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <a
              href="mailto:info@davon.com.tr"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@davon.com.tr
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="tel:+902327659030"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +90 (232) 765 90 30
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
