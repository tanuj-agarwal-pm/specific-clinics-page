import { MapPin } from "lucide-react";

const cities = [
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Mumbai",
  "Pune",
  "Kochi",
  "Thiruvananthapuram",
  "Ernakulam",
  "Vizag",
  "Amritsar",
  "Panipat",
  "Kasargod",
  "Singapore",
];

export const ClinicsChipsC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Our Presence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">
            25+ Clinics in India
          </h2>
        </div>

        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          {/* Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-3 md:gap-4 pb-2 min-w-max">
              {cities.map((city, index) => (
                <button
                  key={index}
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-card border border-border rounded-full text-sm md:text-base font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm whitespace-nowrap"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-6">
          <a href="tel:+1234567890" className="text-primary hover:text-accent font-semibold transition-colors underline">
            Call
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent font-semibold transition-colors underline"
          >
            WhatsApp
          </a>{" "}
          to book an appointment in any of these cities
        </p>
      </div>
    </section>
  );
};
