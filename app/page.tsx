import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { CountAppSection } from "@/components/count-app-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <CountAppSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
          <Footer />
        </div>
        {/* Aurora at the very back */}
        <div className="fixed inset-0 w-full h-full z-0">
          <Aurora colorStops={["#7f1d1d", "#dc2626", "#450a0a"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
      </main>
    </div>
  )
}
