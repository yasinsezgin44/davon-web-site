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
    <section id="problem" className="py-24 bg-red-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        <div
          ref={headerRef as any}
          className={`transition-all duration-1000 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black animate-pulse-gentle">
            The Hidden Crisis in Hospital Operations
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12 animate-slide-in"></div>
          <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Every day, hospitals face critical operational challenges that threaten patient safety,
            drain budgets, and create compliance nightmares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={card1Ref}
            data-card-id="1"
            className={`bg-white p-8 rounded-xl shadow-lg hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card1Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Equipment Failures Risk Patient Safety
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Critical medical equipment like ventilators, infusion pumps, and defibrillators fail
              during emergency procedures. Unplanned downtime during code situations can be life-threatening.
            </p>
            <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-red-600 font-semibold text-sm">Learn More →</span>
            </div>
          </div>

          <div
            ref={card2Ref}
            data-card-id="2"
            className={`bg-white p-8 rounded-xl shadow-lg hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card2Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <DollarSign className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Millions in Lost Mobile Assets
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Wheelchairs, IV poles, and mobile equipment vanish from hospital floors daily.
              Replacing lost assets costs hospitals millions annually while creating safety hazards.
            </p>
            <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-red-600 font-semibold text-sm">Learn More →</span>
            </div>
          </div>

          <div
            ref={card3Ref}
            data-card-id="3"
            className={`bg-white p-8 rounded-xl shadow-lg hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card3Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <FileX className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Failed Compliance Audits
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              TJC and CMS auditors demand detailed maintenance records and asset tracking.
              Chaotic paper-based systems make compliance nearly impossible to prove.
            </p>
            <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-red-600 font-semibold text-sm">Learn More →</span>
            </div>
          </div>

          <div
            ref={card4Ref}
            data-card-id="4"
            className={`bg-white p-8 rounded-xl shadow-lg hover-lift hover-scale group cursor-pointer transition-all duration-1000 ${
              card4Visible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <Clock className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              Chaotic Maintenance Processes
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Facility teams waste hours searching for equipment, chasing paperwork, and managing
              reactive repairs instead of focusing on patient care.
            </p>
            <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-red-600 font-semibold text-sm">Learn More →</span>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-red-600 text-white rounded-xl hover-lift animate-pulse-gentle shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 animate-glow">
            Sound Familiar?
          </h3>
          <p className="text-lg leading-relaxed">
            These aren't just operational inefficiencies—they're patient safety risks,
            financial drains, and compliance liabilities that keep hospital leaders up at night.
          </p>
          <div className="mt-6 flex justify-center">
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
