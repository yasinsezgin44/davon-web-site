import HeroSection from "@/components/HeroSection";
import ReferenceLogos from "@/components/ReferenceLogos";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import StatsAndRoiSection from "@/components/StatsAndRoiSection";
import NewsletterSection from "@/components/NewsletterSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <ReferenceLogos />
      <AboutSection />
      <WhySection />
      <FeaturesSection />
      <BenefitsSection />
      <ExcellenceSection />
      <StatsAndRoiSection />
      <NewsletterSection />
      <FinalCtaSection />
    </div>
  );
}
