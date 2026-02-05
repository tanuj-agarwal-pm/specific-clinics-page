import { useState } from "react";
import { HeroWithVideoE } from "@/components/variantE/HeroWithVideoE";
import { StickyHeader } from "@/components/StickyHeader";
import { ConditionsSectionVariantA } from "@/components/ConditionsSectionVariantA";
import { CareTeamSectionE } from "@/components/variantE/CareTeamSectionE";
 import { UniqueTreatmentsSection } from "@/components/UniqueTreatmentsSection";
import { ContactSection } from "@/components/ContactSection";
import { GoogleReviewsSection } from "@/components/variantE/GoogleReviewsSection";

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
          <GoogleReviewsSection />
          <UniqueTreatmentsSection />
        </>
      ) : (
        <>
          <UniqueTreatmentsSection />
          <GoogleReviewsSection />
          <CareTeamSectionE />
        </>
      )}
      <ContactSection />
    </main>
  );
};

export default VariantE;
