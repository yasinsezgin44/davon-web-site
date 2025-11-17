import { HeroSection } from "@/app/components/sections/HeroSection";
import { StatsStrip } from "@/app/components/sections/StatsStrip";
import { LogosStrip } from "@/app/components/sections/LogosStrip";
import { FeaturesOverviewSection } from "@/app/components/sections/FeaturesOverviewSection";
import { UseCasesSection } from "@/app/components/sections/UseCasesSection";
import { IndustriesSection } from "@/app/components/sections/IndustriesSection";
import { SocialProofSection } from "@/app/components/sections/SocialProofSection";
import { ROISection } from "@/app/components/sections/ROISection";
import { ResourcesSection } from "@/app/components/sections/ResourcesSection";
import { FinalCTASection } from "@/app/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <LogosStrip />
      <FeaturesOverviewSection />
      <UseCasesSection />
      <IndustriesSection />
      <SocialProofSection />
      <ROISection />
      <ResourcesSection />
      <FinalCTASection />
    </>
  );
}

