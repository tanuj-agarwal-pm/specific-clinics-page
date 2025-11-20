import { Star, Award, Users } from "lucide-react";

const credentials = [
  { icon: Star, label: "4.9/5 on Google, Practo, Just Dial", value: "1500+ Reviews" },
  { icon: Award, label: "75+ Years", value: "Excellence in Care" },
  { icon: Users, label: "10,000+", value: "Patients Treated" },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-lg bg-primary shadow-[var(--shadow-card)] hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 text-white mb-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <p className="text-2xl md:text-3xl font-heading text-white mb-2">
                  {cred.value}
                </p>
                <p className="text-sm md:text-base text-white/90">{cred.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};