import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  "Panchakarma Therapy",
  "Abhyanga (Full Body Massage)",
  "Shirodhara (Oil Therapy)",
  "PPS (Podikizhi, Pizhichil, Shastikashali)",
  "Kati Basti (Lower Back Treatment)",
  "Greeva Basti (Neck Treatment)",
  "Janu Basti (Knee Treatment)",
  "Nasya (Nasal Therapy)",
  "Udvartana (Herbal Powder Massage)",
  "Elakizhi (Herbal Poultice)",
  "Njavara Kizhi (Rice Therapy)",
  "Thalapothichil (Head Pack)",
];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export const TreatmentsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Our Treatments
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Authentic Kerala Ayurveda procedures designed for your wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary transition-all hover:shadow-md"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{treatment}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent"
          >
            Book Your Treatment
          </Button>
        </div>
      </div>
    </section>
  );
};