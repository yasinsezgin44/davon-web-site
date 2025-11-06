"use client";

import { Heart, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { useScrollAnimation } from './useScrollAnimation';

export default function Benefits() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: resultsRef, isVisible: resultsVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-8 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200 rounded-full opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        <div
          ref={headerRef as any}
          className={`transition-all duration-1000 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black animate-pulse-gentle">
            Measurable Benefits for Your Hospital
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12 animate-slide-in"></div>
          <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Our platform delivers tangible outcomes across two critical areas that matter most to hospital leadership.
          </p>
        </div>

        {/* Two Pillars */}
        <div
          ref={pillarsRef as any}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${
            pillarsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Pillar 1: Patient Safety & Compliance */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600 hover-lift hover-scale group animate-pulse-gentle">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
              <Heart className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black group-hover:text-red-600 transition-colors duration-300">
              Patient Safety & Compliance
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Protect patients and ensure regulatory compliance with advanced asset management technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-red-600 transition-colors duration-300">Locate Critical Equipment in Seconds</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Find ventilators, infusion pumps, and defibrillators instantly during emergencies, preventing life-threatening delays.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-red-600 transition-colors duration-300">Guarantee Equipment Compliance</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Ensure life-saving equipment like MRIs and sterilizers are always compliant and ready for patient use.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-red-600 transition-colors duration-300">Create Defensible Audit Trails</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Generate instant, comprehensive reports for TJC/CMS auditors with complete maintenance history.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Financial & Operational Efficiency */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600 hover-lift hover-scale group animate-pulse-gentle" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 group-hover:animate-pulse transition-all duration-300">
              <DollarSign className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black group-hover:text-green-600 transition-colors duration-300">
              Financial & Operational Efficiency
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Maximize ROI and operational performance with data-driven asset management insights.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-green-600 transition-colors duration-300">Stop Losing Millions in Mobile Assets</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Eliminate the $2.8M average annual loss from missing wheelchairs, IV poles, and medical equipment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-green-600 transition-colors duration-300">Cut Unplanned Equipment Downtime</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Reduce emergency repairs and maintenance costs with predictive maintenance scheduling.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-3 rounded-lg group/item">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover/item:animate-pulse" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2 group-hover/item:text-green-600 transition-colors duration-300">Make Data-Driven Capital Decisions</h4>
                  <p className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">Identify your most costly and unreliable assets to optimize capital budgeting and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div
          ref={resultsRef as any}
          className={`bg-red-600 text-white p-8 rounded-xl hover-lift animate-pulse-gentle shadow-2xl transition-all duration-1000 ${
            resultsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 animate-glow">
            Proven Results Across Hospitals Nationwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center hover-scale p-4 rounded-lg hover:bg-red-700 transition-all duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:animate-pulse">$2.8M</div>
              <div className="text-red-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Average Annual Savings
              </div>
            </div>
            <div className="text-center hover-scale p-4 rounded-lg hover:bg-red-700 transition-all duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:animate-pulse">98.7%</div>
              <div className="text-red-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Equipment Uptime
              </div>
            </div>
            <div className="text-center hover-scale p-4 rounded-lg hover:bg-red-700 transition-all duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:animate-pulse">40%</div>
              <div className="text-red-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Reduction in Lost Assets
              </div>
            </div>
            <div className="text-center hover-scale p-4 rounded-lg hover:bg-red-700 transition-all duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:animate-pulse">25hrs</div>
              <div className="text-red-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Weekly Time Saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
