import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { CountAppSection } from "@/components/count-app-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { faqs } from "@/lib/faq-data"

const LAST_UPDATED = "2025-12-08"

const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: "https://davon.health/",
    name: "Davon Health – AI-Powered Healthcare Equipment Monitoring & Predictive Maintenance",
    description:
      "Davon Health provides an AI-powered healthcare equipment monitoring and predictive maintenance platform that helps hospitals increase equipment uptime, improve patient safety, and optimize asset management.",
    dateModified: LAST_UPDATED,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${faq.shortAnswer} ${faq.detailedAnswer}`,
      },
    })),
  }
}

export default function HomePage() {
  const structuredData = generateFAQStructuredData()

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* FAQPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <CountAppSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <FAQSection />
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
