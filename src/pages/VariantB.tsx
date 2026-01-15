import { HeroWithTestimonials } from "@/components/HeroWithTestimonials";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionVariantA } from "@/components/CareTeamSectionVariantA";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSectionVariantA } from "@/components/ApproachSectionVariantA";
import { ContactSection } from "@/components/ContactSection";
import { MakarSankrantiBanner } from "@/components/MakarSankrantiBanner";

const VariantB = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <MakarSankrantiBanner />
      <HeroWithTestimonials />
      <ConditionsSectionVariantA />
      <CareTeamSectionVariantA />
      <ApproachSectionVariantA />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantB;
