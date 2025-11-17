import { HeroSection } from "./components/home/HeroSection";
import { StatsStrip } from "./components/home/StatsStrip";
import { LogosStrip } from "./components/home/LogosStrip";
import { FeaturesSection } from "./components/home/FeaturesSection";
import { UseCasesSection } from "./components/home/UseCasesSection";
import { ROISection } from "./components/home/ROISection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <LogosStrip />
      <FeaturesSection />
      <UseCasesSection />
      <ROISection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
