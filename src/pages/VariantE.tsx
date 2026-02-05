import { useState } from "react";
import { HeroWithVideoE } from "@/components/variantE/HeroWithVideoE";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionE } from "@/components/variantE/CareTeamSectionE";
 import { UniqueTreatmentsSection } from "@/components/UniqueTreatmentsSection";
import { ContactSection } from "@/components/ContactSection";
import { ClinicsGrid } from "@/components/ClinicsGrid";
import { FAQSection } from "@/components/FAQSection";

const VariantE = () => {
  const [activeTab, setActiveTab] = useState<"conditions" | "therapies">("conditions");

  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroWithVideoE />
      <ConditionsSectionVariantA onTabChange={setActiveTab} />
      {activeTab === "conditions" ? (
        <>
          <CareTeamSectionE />
          <UniqueTreatmentsSection />
        </>
      ) : (
        <>
          <UniqueTreatmentsSection />
          <CareTeamSectionE />
        </>
      )}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <ClinicsGrid />
          <FAQSection />
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default VariantE;
