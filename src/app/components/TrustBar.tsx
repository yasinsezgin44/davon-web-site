"use client";

import { Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from './useScrollAnimation';

export default function TrustBar() {
  const { elementRef: badgesRef, isVisible: badgesVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: logosRef, isVisible: logosVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="bg-white border-b border-gray-100" style={{ padding: '3rem 0' }}>
      <div className="container mx-auto px-6">
        {/* Compliance Badges */}
        <div
          ref={badgesRef as any}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
            badgesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.618rem'
          }}
        >
          <div className="text-center hover-scale-subtle group">
            <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
              HIPAA Compliant
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Protected Health Information
            </p>
          </div>

          <div className="text-center hover-scale-subtle group" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
              SOC 2 Type II
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Security & Compliance
            </p>
          </div>

          <div className="text-center hover-scale-subtle group" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <Shield className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              ISO 27001
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Information Security
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div
          ref={logosRef as any}
          className={`text-center transition-all duration-1000 delay-300 ${
            logosVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}
        >
          <h4
            className="font-semibold mb-8 animate-pulse-gentle"
            style={{
              fontSize: '1.125rem',
              color: 'rgb(55, 65, 81)',
              marginBottom: '2rem'
            }}
          >
            Trusted by Leading Healthcare Institutions
          </h4>
          <div
            className="flex flex-wrap justify-center items-center gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}
          >
            <div
              className="font-semibold text-gray-400 hover:text-red-600 transition-all duration-300 cursor-pointer animate-float grayscale hover:grayscale-0"
              style={{
                fontSize: '0.875rem',
                padding: '1.5rem',
                border: '2px solid rgb(229, 231, 235)',
                borderRadius: '0.75rem',
                animationDelay: '0s'
              }}
            >
              CITY GENERAL HOSPITAL
            </div>
            <div
              className="font-semibold text-gray-400 hover:text-red-600 transition-all duration-300 cursor-pointer animate-float grayscale hover:grayscale-0"
              style={{
                fontSize: '0.875rem',
                padding: '1.5rem',
                border: '2px solid rgb(229, 231, 235)',
                borderRadius: '0.75rem',
                animationDelay: '0.2s'
              }}
            >
              REGIONAL MEDICAL CENTER
            </div>
            <div
              className="font-semibold text-gray-400 hover:text-red-600 transition-all duration-300 cursor-pointer animate-float grayscale hover:grayscale-0"
              style={{
                fontSize: '0.875rem',
                padding: '1.5rem',
                border: '2px solid rgb(229, 231, 235)',
                borderRadius: '0.75rem',
                animationDelay: '0.4s'
              }}
            >
              UNIVERSITY HOSPITAL
            </div>
            <div
              className="font-semibold text-gray-400 hover:text-red-600 transition-all duration-300 cursor-pointer animate-float grayscale hover:grayscale-0"
              style={{
                fontSize: '0.875rem',
                padding: '1.5rem',
                border: '2px solid rgb(229, 231, 235)',
                borderRadius: '0.75rem',
                animationDelay: '0.6s'
              }}
            >
              METROPOLITAN HEALTH SYSTEM
            </div>
            <div
              className="font-semibold text-gray-400 hover:text-red-600 transition-all duration-300 cursor-pointer animate-float grayscale hover:grayscale-0"
              style={{
                fontSize: '0.875rem',
                padding: '1.5rem',
                border: '2px solid rgb(229, 231, 235)',
                borderRadius: '0.75rem',
                animationDelay: '0.8s'
              }}
            >
              ST. MARY&apos;S MEDICAL CENTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
