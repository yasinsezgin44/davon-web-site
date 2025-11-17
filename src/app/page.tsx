import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { RoiSection } from "@/components/sections/RoiSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <HeroSection />
      <PlatformSection />
      <SolutionsSection />
      <CustomersSection />
      <RoiSection />
      <InsightsSection />
      <CtaSection />
    </main>
  );
}
