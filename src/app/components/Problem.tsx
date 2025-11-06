"use client";

import { AlertTriangle, DollarSign, FileX, Clock } from "lucide-react";
import { useScrollAnimation } from './useScrollAnimation';
import { useEffect, useRef, useState } from 'react';

export default function Problem() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  // Create individual refs for each card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  // State for tracking visibility of each card
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);
  const [card4Visible, setCard4Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-card-id');
            switch (id) {
              case '1':
                setCard1Visible(true);
                break;
              case '2':
                setCard2Visible(true);
                break;
              case '3':
                setCard3Visible(true);
                break;
              case '4':
                setCard4Visible(true);
                break;
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);
    if (card4Ref.current) observer.observe(card4Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, white, rgb(254, 242, 242))',
        padding: 'clamp(4rem, 10vw, 8rem) 0'
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-300 rounded-full opacity-15 animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10" style={{ maxWidth: '80rem' }}>
        <div
          ref={headerRef as any}
          className={`transition-all duration-1000 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          <h2
            className="font-black text-black mb-4 animate-pulse-gentle"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.236rem)',
              marginBottom: '1rem'
            }}
          >
            The Hidden Crisis in Hospital Operations
          </h2>
          <div
            className="w-24 h-1 bg-red-600 mx-auto mb-8 animate-slide-in"
            style={{ marginBottom: '2rem' }}
          ></div>
          <p
            className="text-gray-600 leading-relaxed mb-16"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.618rem)',
              maxWidth: '48rem',
              margin: '0 auto',
              marginBottom: '4rem'
            }}
          >
            These critical challenges are costing hospitals millions and putting patient safety at risk
          </p>
        </div>

        <div
          className="grid gap-8 mb-16"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          <div
            ref={card1Ref}
            data-card-id="1"
            className={`bg-white rounded-xl hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card1Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              transitionDelay: '0ms',
              borderLeft: '4px solid rgb(220, 38, 38)'
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Equipment Failures Risk Patient Safety
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
              Critical medical equipment breakdowns during procedures
            </p>
            <div className="text-red-600 font-bold text-lg mb-2">
              40%
            </div>
            <div className="text-sm text-gray-500">
              Preventable Downtime
            </div>
          </div>

          <div
            ref={card2Ref}
            data-card-id="2"
            className={`bg-white rounded-xl hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card2Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              transitionDelay: '150ms',
              borderLeft: '4px solid rgb(220, 38, 38)'
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <DollarSign className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Millions in Lost Mobile Assets
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
              Medical equipment vanishes from hospital floors daily
            </p>
            <div className="text-red-600 font-bold text-lg mb-2">
              $2.8M
            </div>
            <div className="text-sm text-gray-500">
              Average Annual Loss
            </div>
          </div>

          <div
            ref={card3Ref}
            data-card-id="3"
            className={`bg-white rounded-xl hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card3Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              transitionDelay: '300ms',
              borderLeft: '4px solid rgb(220, 38, 38)'
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <FileX className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Failed Compliance Audits
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
              Costly fines and reputation damage from audit failures
            </p>
            <div className="text-red-600 font-bold text-lg mb-2">
              $500K+
            </div>
            <div className="text-sm text-gray-500">
              Audit Penalties
            </div>
          </div>

          <div
            ref={card4Ref}
            data-card-id="4"
            className={`bg-white rounded-xl hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card4Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              transitionDelay: '450ms',
              borderLeft: '4px solid rgb(220, 38, 38)'
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <Clock className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Chaotic Maintenance Processes
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
              Paper-based tracking and missed maintenance schedules
            </p>
            <div className="text-red-600 font-bold text-lg mb-2">
              25hrs
            </div>
            <div className="text-sm text-gray-500">
              Weekly Admin Time
            </div>
          </div>
        </div>

        <div
          className="bg-red-600 text-white rounded-xl hover-lift animate-pulse-gentle shadow-2xl"
          style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          <h3 className="text-2xl font-bold mb-4 animate-glow">
            Sound Familiar?
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            These aren't just operational inefficiencies—they're patient safety risks,
            financial drains, and compliance liabilities that keep hospital leaders up at night.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 text-red-200">
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
              <span className="text-sm">Scroll to see the solution</span>
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
