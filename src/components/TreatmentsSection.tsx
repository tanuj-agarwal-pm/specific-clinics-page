import { Droplets, Flower2, Heart, Sparkles, Leaf, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import treatmentBg from "@/assets/hero-treatment.jpg";

const treatments = [
  {
    icon: Droplets,
    title: "Panchakarma Therapy",
    description: "Complete detoxification and rejuvenation through five traditional cleansing procedures for deep healing and balance.",
    cta: "VIEW THERAPY",
  },
  {
    icon: Flower2,
    title: "Abhyanga Massage",
    description: "Traditional full body massage with warm herbal oils to improve circulation and release deep-seated tension.",
    cta: "BOOK SESSION",
  },
  {
    icon: Heart,
    title: "Shirodhara Treatment",
    description: "Continuous stream of warm oil on the forehead to calm the mind, balance the nervous system, and promote deep relaxation.",
    cta: "LEARN MORE",
  },
  {
    icon: Sparkles,
    title: "Therapeutic Basti",
    description: "Specialized treatments including Kati, Greeva, and Janu Basti for targeted pain relief and joint healing.",
    cta: "VIEW TREATMENTS",
  },
  {
    icon: Leaf,
    title: "Herbal Therapies",
    description: "Udvartana, Elakizhi, and Njavara Kizhi using traditional herbal preparations for holistic wellness and vitality.",
    cta: "EXPLORE HERBS",
  },
  {
    icon: Wind,
    title: "Wellness Packages",
    description: "Comprehensive care packages combining multiple therapies for prenatal, postnatal, and lifestyle wellness needs.",
    cta: "VIEW PACKAGES",
  },
];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export const TreatmentsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <div className="mb-8 max-w-md">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Your care is shaped by our team of therapists and practitioners who work collaboratively, online and in-person, so nothing gets missed.
              </p>
            </div>

            {/* Treatment Grid - 2x3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border"
                  >
                    <div className="mb-4">
                      <Icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-heading text-foreground mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    <Button
                      onClick={scrollToForm}
                      variant="ghost"
                      className="text-accent hover:text-accent hover:bg-transparent p-0 h-auto font-semibold text-sm tracking-wide"
                    >
                      {treatment.cta}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Background Image */}
          <div className="relative h-[600px] lg:h-[800px] hidden lg:block">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url(${treatmentBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};