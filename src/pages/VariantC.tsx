import { StickyHeader } from "@/components/StickyHeader";
import { HeroSectionC } from "@/components/variantC/HeroSectionC";
import { PatientStoriesC } from "@/components/variantC/PatientStoriesC";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { ClinicsChipsC } from "@/components/variantC/ClinicsChipsC";
import { LeadFormC } from "@/components/variantC/LeadFormC";

const VariantC = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSectionC />
      <PatientStoriesC />
      <ConditionsSectionVariantA />
      <ClinicsChipsC />
      <LeadFormC />
    </main>
  );
};

export default VariantC;
