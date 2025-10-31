import { Droplets, Flower2, Heart, Sparkles, Leaf, Wind } from "lucide-react";
import treatmentBg from "@/assets/hero-treatment.jpg";

const treatments = [
  {
    icon: Droplets,
    title: "Panchakarma Therapy",
    description: "Complete detoxification and rejuvenation through five traditional cleansing procedures for deep healing.",
  },
  {
    icon: Flower2,
    title: "Abhyanga",
    description: "Traditional full body massage with warm herbal oils to improve circulation and release tension.",
  },
  {
    icon: Heart,
    title: "Shirodhara",
    description: "Continuous stream of warm oil on the forehead to calm the mind and balance the nervous system.",
  },
  {
    icon: Sparkles,
    title: "Therapeutic Basti",
    description: "Specialized treatments including Kati, Greeva, and Janu Basti for targeted pain relief and healing.",
  },
  {
    icon: Leaf,
    title: "Herbal Therapies",
    description: "Udvartana, Elakizhi, and Njavara Kizhi using traditional herbal preparations for wellness.",
  },
  {
    icon: Wind,
    title: "Nasya & Head Treatments",
    description: "Nasal therapy and Thalapothichil to clear respiratory passages and nourish the mind.",
  },
];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export const TreatmentsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Our Treatments
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Your care is shaped by our team of therapists and practitioners who work collaboratively, online and in-person, so nothing gets missed.
              </p>
            </div>

            {/* Treatment Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
                  >
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading text-foreground mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <button
                      onClick={scrollToForm}
                      className="text-accent hover:text-accent/80 text-sm font-medium uppercase tracking-wide transition-colors"
                    >
                      Learn More →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Background Image */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[700px]">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${treatmentBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};