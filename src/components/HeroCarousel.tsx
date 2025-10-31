import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroClinic from "@/assets/hero-clinic-interior.jpg";
import heroTreatment from "@/assets/hero-treatment.jpg";
import heroHerbs from "@/assets/hero-herbs.jpg";

const slides = [
  {
    image: heroClinic,
    alt: "Serene Kerala Ayurveda clinic interior with traditional ambiance",
  },
  {
    image: heroTreatment,
    alt: "Authentic Ayurvedic massage therapy in progress",
  },
  {
    image: heroHerbs,
    alt: "Traditional Ayurvedic herbs and natural healing ingredients",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground mb-6 drop-shadow-lg leading-tight">
            Experience Authentic Kerala Ayurveda
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/95 mb-8 drop-shadow-md">
            Traditional healing wisdom meets personalized care for your complete wellness journey
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base md:text-lg px-8 py-6 hover-scale"
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};