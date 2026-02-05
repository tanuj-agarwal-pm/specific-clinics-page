import { HeroWithVideoE } from "@/components/variantE/HeroWithVideoE";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionE } from "@/components/variantE/CareTeamSectionE";
 import { UniqueTreatmentsSection } from "@/components/UniqueTreatmentsSection";
import { ContactSection } from "@/components/ContactSection";

const VariantE = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithVideoE />
      <CareTeamSectionE />
      <ConditionsSectionVariantA />
       <UniqueTreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantE;
