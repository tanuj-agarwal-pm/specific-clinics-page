import { Activity, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const conditions = [
  {
    icon: Activity,
    title: "Illness-led Conditions",
    description: "Curative treatments for specific health concerns",
    examples: ["PCOS", "Indigestion", "Gut Health", "Joint Pain", "Chronic Conditions"],
    color: "from-accent/10 to-accent/5",
  },
  {
    icon: Heart,
    title: "Lifestyle & Package Care",
    description: "Holistic care for life's important journeys",
    examples: ["Prenatal Care", "Postnatal Care", "Stress Management", "Lifestyle Correction"],
    color: "from-secondary/20 to-secondary/10",
  },
];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ConditionsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Whether you seek healing or rejuvenation, we offer personalized care for your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${condition.color} rounded-lg p-8 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 border border-border`}
              >
                <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading text-foreground mb-3">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {condition.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {condition.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {example}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};