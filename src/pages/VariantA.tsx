import { HeroWithTestimonials } from "@/components/HeroWithTestimonials";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSection } from "@/components/ConditionsSection";
import { CareTeamSection } from "@/components/CareTeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ContactSection } from "@/components/ContactSection";

const VariantA = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithTestimonials />
      <ConditionsSection />
      <CareTeamSection />
      <TestimonialsSection />
      <ApproachSection />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
};

export default VariantA;
