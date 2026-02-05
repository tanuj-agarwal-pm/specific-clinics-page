import { Stethoscope, Flame, HandHeart, Activity, Check } from "lucide-react";

const uniqueFeatures = [
  {
    text: "Doctor-guided classical and proprietary treatments with personalised and authentic Kerala Ayurveda products for maximum benefits",
    icon: Stethoscope,
    animation: "animate-pulse"
  },
  {
    text: "Oils heated to the optimal temperatures - the way body accepts best",
    icon: Flame,
    animation: "animate-heat-wave"
  },
  {
    text: "Chaturhasta Abhyanga - two therapists, four hands for deeper relaxation",
    icon: HandHeart,
    animation: "animate-hand-sync"
  },
  {
    text: "Guided therapeutic positions - for promoting balanced circulation and head to toe healing",
    icon: Activity,
    animation: "animate-flow"
  },
  {
    text: "Gentle finishing ritual - to leave you grounded and refreshed - and prevent any post treatment issues",
    icon: Check,
    animation: "animate-gentle-glow"
  }
];

export const TreatmentsSection = () => {
  return (
    <section 
      aria-labelledby="treatments-heading" 
      className="relative py-12 md:py-16 bg-background overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="overflow-hidden">
          <h2 
            id="treatments-heading"
            className="text-xl md:text-2xl font-heading text-foreground mb-6 text-center md:text-left"
          >
            What Makes Our Treatments Unique
          </h2>
          <div className="relative">
            <div className="flex gap-6 animate-scroll-fast" style={{ willChange: 'transform' }}>
              <div className="flex gap-6">
                {uniqueFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={`g1-${index}`}
                      className="flex-shrink-0 w-64 bg-card/50 border border-border/50 rounded-lg px-5 py-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 text-primary ${feature.animation}`}>
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-6" aria-hidden="true">
                {uniqueFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={`g2-${index}`}
                      className="flex-shrink-0 w-64 bg-card/50 border border-border/50 rounded-lg px-5 py-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 text-primary ${feature.animation}`}>
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};