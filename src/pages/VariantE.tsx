import { HeroWithVideoE } from "@/components/variantE/HeroWithVideoE";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionE } from "@/components/variantE/CareTeamSectionE";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSectionVariantA } from "@/components/ApproachSectionVariantA";
import { ContactSection } from "@/components/ContactSection";

const VariantE = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithVideoE />
      <ConditionsSectionVariantA />
      <CareTeamSectionE />
      <ApproachSectionVariantA />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantE;
