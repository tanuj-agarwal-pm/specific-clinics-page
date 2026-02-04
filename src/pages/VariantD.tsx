import { HeroWithVideoD } from "@/components/variantD/HeroWithVideoD";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionVariantA } from "@/components/CareTeamSectionVariantA";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSectionVariantA } from "@/components/ApproachSectionVariantA";
import { ContactSection } from "@/components/ContactSection";

const VariantD = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithVideoD />
      <ConditionsSectionVariantA />
      <CareTeamSectionVariantA />
      <ApproachSectionVariantA />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantD;
