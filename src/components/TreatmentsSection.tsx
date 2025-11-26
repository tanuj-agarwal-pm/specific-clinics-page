import { Droplets, Flower2, Heart, Sparkles, Leaf, Wind, Stethoscope, Flame, HandHeart, Activity, Check } from "lucide-react";
import treatmentBg from "@/assets/hero-treatment.jpg";

const treatments = [
  {
    icon: Droplets,
    title: "Panchakarma",
    description: "Five detox therapies that eliminate deep toxins and reset the body for long-term healing.",
  },
  {
    icon: Flower2,
    title: "Abhyanga",
    description: "Full-body warm oil massage that nourishes tissues, calms nerves, and melts stress.",
  },
  {
    icon: Heart,
    title: "Shirodhara",
    description: "Warm oil flows steadily on the forehead to relax the mind and improve sleep.",
  },
  {
    icon: Sparkles,
    title: "Swedana",
    description: "Herbal steam therapy that opens pores, relieves stiffness, improves circulation, and removes toxins.",
  },
  {
    icon: Leaf,
    title: "Basti",
    description: "Medicated enema that cleanses the colon, balances Vata, and treats pain and digestive issues.",
  },
  {
    icon: Wind,
    title: "Bandhana (Upanaham)",
    description: "Warm herbal paste wrapped on painful area to reduce swelling, stiffness, and inflammation.",
  },
];

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
      className="relative pt-12 md:pt-16 pb-16 md:pb-24 bg-background overflow-hidden"
    >
      {/* Background Image - Absolute positioned on the right */}
      <div className="absolute top-0 md:top-16 bottom-0 right-0 w-full md:w-[52%] pointer-events-none">
        <img
          src={treatmentBg}
          alt="Ayurvedic therapy session showing traditional treatment methods"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-s-2xl md:rounded-none md:rounded-l-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/30 via-background/50 to-background/95 md:to-background/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="max-w-md md:max-w-lg">
          <h2 
            id="treatments-heading" 
            className="text-3xl md:text-5xl font-heading text-foreground mb-4 text-center md:text-left"
          >
            Most Popular Treatments
          </h2>
          <p className="text-base md:text-lg text-primary md:text-muted-foreground leading-relaxed mb-8 max-w-sm md:max-w-md text-center md:text-left mx-auto md:mx-0">
            Your care is shaped by our highly experienced team of doctors and therapists who work together to ensure you walk out feeling healed.
          </p>
        </div>

        {/* Desktop: All treatments, then unique section */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl md:max-w-2xl">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={treatment.title}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-lg font-heading text-foreground">
                    {treatment.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* What Makes Us Unique - Desktop */}
          <div className="mt-16 overflow-hidden">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-6 max-w-md">
              What Makes Our Treatments Unique
            </h3>
            <div className="relative -z-10">
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

        {/* Mobile: First 2 treatments, unique section, then remaining 4 */}
        <div className="md:hidden">
          {/* First 2 treatments */}
          <div className="grid grid-cols-1 gap-6 max-w-xl">
            {treatments.slice(0, 2).map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={treatment.title}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-lg font-heading text-foreground">
                    {treatment.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* What Makes Us Unique - Mobile */}
          <div className="mt-12 overflow-hidden">
            <h3 className="text-xl font-heading text-foreground mb-6 max-w-md">
              What Makes Our Treatments Unique
            </h3>
            <div className="relative -z-10">
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

          {/* Remaining 4 treatments */}
          <div className="mt-12 grid grid-cols-1 gap-6 max-w-xl">
            {treatments.slice(2).map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={treatment.title}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-lg font-heading text-foreground">
                    {treatment.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};