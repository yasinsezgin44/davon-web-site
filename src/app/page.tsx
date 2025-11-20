import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import Aurora from "@/components/Aurora";
import { FeaturesSection } from "@/components/features-section";
import { AITeamSection } from "@/components/ai-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Background MRI image with Davon girl */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/davon-girl/davon-girl-mri-fix.png"
            alt="Biomedical engineer standing by MRI scanner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Red aurora overlay, rendered above background image */}
        <div className="fixed inset-0 w-full h-full z-10 pointer-events-none">
          <Aurora
            colorStops={["#DC2626", "#B91C1C", "#7F1D1D"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
        {/* Page content above aurora and background image */}
        <div className="relative z-20">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
