import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { Star, Heart, Brain, Baby, Bone } from "lucide-react";
import { Card } from "@/components/ui/card";
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

const testimonials = [
  {
    name: "Meera Sharma",
    condition: "PCOS Treatment",
    text: "After years of struggling, the personalized Ayurvedic treatment helped me regain balance. The doctors truly understand the root cause approach.",
    icon: Heart,
    rating: 5,
  },
  {
    name: "Arjun Patel",
    condition: "Stress Management",
    text: "The Panchakarma therapy was transformative. I feel rejuvenated and the chronic stress that plagued me for years has significantly reduced.",
    icon: Brain,
    rating: 5,
  },
  {
    name: "Divya Menon",
    condition: "Postnatal Care",
    text: "The postnatal care package was a blessing. Traditional treatments combined with modern care helped me recover beautifully after childbirth.",
    icon: Baby,
    rating: 5,
  },
  {
    name: "Vikram Singh",
    condition: "Joint Pain Relief",
    text: "Years of joint pain made my life difficult. The authentic Kerala Ayurveda treatments have given me my mobility back. Truly grateful!",
    icon: Bone,
    rating: 5,
  },
];

export const HeroWithTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden py-12 md:py-16">
      {/* Background Images with Low Opacity */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
        </div>
      ))}

      <div className="container mx-auto max-w-7xl px-4 h-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground mb-6 leading-tight">
              Experience Authentic Kerala Ayurveda - in Indiranagar
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 mb-8">
              Traditional healing wisdom meets personalized care for your complete wellness journey
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base md:text-lg px-8 py-6 hover-scale"
              >
                Book Your Consultation
              </Button>
              <Button
                onClick={() => setShowContactOptions(true)}
                size="lg"
                variant="outline"
                className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-base md:text-lg px-8 py-6"
              >
                Talk to Us
              </Button>
            </div>

            <ContactOptionsModal
              open={showContactOptions}
              onOpenChange={setShowContactOptions}
            />

            <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground text-sm md:text-base font-medium">
                  For Every Age & Concern
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground text-sm md:text-base font-medium">
                  Treatment for the Root Causes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground text-sm md:text-base font-medium">
                  Healing Mind, Body and Soul
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground text-sm md:text-base font-medium">
                  24 Clinics Across India
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="relative h-[400px] md:h-[500px]">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentTestimonial
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Card className="h-full p-8 md:p-10 shadow-2xl bg-background/95 backdrop-blur-sm border-2 border-primary-foreground/20 flex flex-col justify-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto">
                      <p className="font-heading text-lg md:text-xl text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.condition}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}

            {/* Testimonial Indicators */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-primary-foreground w-6"
                      : "bg-primary-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
