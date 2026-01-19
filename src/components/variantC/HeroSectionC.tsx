import { Award, Star, Users } from "lucide-react";

const credentials = [
  { icon: Award, value: "80+ Years", label: "of Excellence" },
  { icon: Star, value: "4.6 Rated", label: "on Google" },
  { icon: Users, value: "10L+", label: "Patients Treated" },
];

export const HeroSectionC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-4 leading-tight">
          Treatment for the Root Causes
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Experience Authentic Ayurveda
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div
                key={index}
                className="text-center p-4 md:p-6 rounded-xl bg-card border border-border shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-xl md:text-2xl font-heading text-foreground">
                  {cred.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">{cred.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
