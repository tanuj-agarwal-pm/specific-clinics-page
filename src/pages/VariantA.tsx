import { HeroWithTestimonials } from "@/components/HeroWithTestimonials";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSection } from "@/components/ConditionsSection";
import { CareTeamSectionVariantA } from "@/components/CareTeamSectionVariantA";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSectionVariantA } from "@/components/ApproachSectionVariantA";
import { ContactSection } from "@/components/ContactSection";

const VariantA = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithTestimonials />
      <ConditionsSection />
      <CareTeamSectionVariantA />
      <ApproachSectionVariantA />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantA;
