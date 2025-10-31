import { Users, ActivitySquare, Heart, Bone, Stethoscope, Baby, BabyIcon, Brain, Activity } from "lucide-react";

const conditions = [
  {
    icon: Users,
    title: "PCOS",
    description: "Hormonal balance treatments addressing the root causes of PCOS through personalized Ayurvedic care.",
  },
  {
    icon: ActivitySquare,
    title: "Indigestion",
    description: "Natural remedies to restore digestive health and eliminate discomfort through traditional therapies.",
  },
  {
    icon: Heart,
    title: "Gut Health",
    description: "Comprehensive gut healing programs using authentic Ayurvedic principles and herbal formulations.",
  },
  {
    icon: Bone,
    title: "Joint Pain",
    description: "Therapeutic treatments to reduce inflammation and restore mobility naturally and effectively.",
  },
  {
    icon: Stethoscope,
    title: "Chronic Conditions",
    description: "Long-term management of chronic ailments through holistic Ayurvedic approaches and lifestyle changes.",
  },
  {
    icon: Baby,
    title: "Prenatal Care",
    description: "Nurturing support for expecting mothers with traditional therapies for a healthy pregnancy journey.",
  },
  {
    icon: BabyIcon,
    title: "Postnatal Care",
    description: "Restorative treatments for new mothers focusing on recovery, strength, and emotional wellbeing.",
  },
  {
    icon: Brain,
    title: "Stress Management",
    description: "Holistic stress relief through meditation, herbal remedies, and Ayurvedic relaxation therapies.",
  },
  {
    icon: Activity,
    title: "Lifestyle Correction",
    description: "Personalized guidance to transform daily habits and achieve lasting health and vitality.",
  },
];

export const ConditionsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            We offer comprehensive Ayurvedic care for a wide range of health conditions. Explore our specialized treatments designed for your unique wellness needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading text-accent mb-2">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {condition.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};