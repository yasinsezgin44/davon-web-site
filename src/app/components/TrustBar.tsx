"use client";

import { Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from './useScrollAnimation';

export default function TrustBar() {
  const { elementRef: badgesRef, isVisible: badgesVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: logosRef, isVisible: logosVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        {/* Compliance Badges - Non-negotiable trust signals */}
        <div
          ref={badgesRef as any}
          className={`flex flex-col md:flex-row items-center justify-center gap-8 mb-8 transition-all duration-1000 ${
            badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-center hover-scale group">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-3 group-hover:animate-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">HIPAA Compliant</h3>
            <p className="text-sm text-gray-600">Protected Health Information</p>
          </div>

          <div className="text-center hover-scale group" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-3 group-hover:animate-pulse transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">SOC 2 Type II</h3>
            <p className="text-sm text-gray-600">Security & Compliance</p>
          </div>

          <div className="text-center hover-scale group" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 group-hover:animate-pulse transition-all duration-300">
              <Shield className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-gray-800 transition-colors duration-300">ISO 27001</h3>
            <p className="text-sm text-gray-600">Information Security</p>
          </div>
        </div>

        {/* Client Logos */}
        <div
          ref={logosRef as any}
          className={`text-center transition-all duration-1000 delay-300 ${
            logosVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}
        >
          <h4 className="text-lg font-semibold text-gray-700 mb-6 animate-pulse-gentle">
            Trusted by Leading Healthcare Institutions
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Placeholder client logos - in production these would be actual hospital logos */}
            <div className="text-gray-400 font-semibold text-sm px-4 py-2 border border-gray-200 rounded hover-lift hover:text-red-600 hover:border-red-300 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0s' }}>
              CITY GENERAL HOSPITAL
            </div>
            <div className="text-gray-400 font-semibold text-sm px-4 py-2 border border-gray-200 rounded hover-lift hover:text-red-600 hover:border-red-300 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.2s' }}>
              REGIONAL MEDICAL CENTER
            </div>
            <div className="text-gray-400 font-semibold text-sm px-4 py-2 border border-gray-200 rounded hover-lift hover:text-red-600 hover:border-red-300 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.4s' }}>
              UNIVERSITY HOSPITAL
            </div>
            <div className="text-gray-400 font-semibold text-sm px-4 py-2 border border-gray-200 rounded hover-lift hover:text-red-600 hover:border-red-300 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.6s' }}>
              METROPOLITAN HEALTH SYSTEM
            </div>
            <div className="text-gray-400 font-semibold text-sm px-4 py-2 border border-gray-200 rounded hover-lift hover:text-red-600 hover:border-red-300 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.8s' }}>
              ST. MARY&apos;S MEDICAL CENTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
