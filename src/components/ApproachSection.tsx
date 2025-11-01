import { useState, useEffect } from "react";
import consultationImg from "@/assets/approach-consultation.jpg";
import planImg from "@/assets/approach-plan.jpg";
import careImg from "@/assets/approach-care.jpg";

const steps = [
  {
    image: consultationImg,
    title: "Consultation",
    description:
      "Meet with our experienced doctor who diagnoses the root cause through traditional Ayurvedic assessment methods including pulse diagnosis and dosha evaluation.",
  },
  {
    image: planImg,
    title: "Personalized Plan",
    description:
      "Based on your unique constitution and imbalances, the doctor prescribes customized treatments and medicines tailored to your specific needs.",
  },
  {
    image: careImg,
    title: "Authentic Care",
    description:
      "Experience treatments using original Kerala Ayurveda products at our clinic. For extended care, visit Ayurvedagram, our authentic wellness resort.",
  },
];

export const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Traditional Kerala Ayurveda wisdom combined with personalized care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index} 
                className={`relative transition-all duration-500 ease-in-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number and image */}
                  <div className="relative mb-6">
                    <div 
                      className={`rounded-full overflow-hidden relative z-10 border-4 transition-all duration-500 ease-in-out ${
                        isActive 
                          ? "w-32 h-32 border-primary shadow-[0_0_30px_rgba(var(--primary),0.5)]" 
                          : "w-24 h-24 border-primary shadow-lg"
                      }`}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-heading text-foreground mb-4 transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-lg bg-card border border-primary/20">
          <p className="text-foreground text-lg md:text-xl font-medium mb-2">
            Heritage of Authentic Kerala Ayurveda
          </p>
          <p className="text-muted-foreground">
            Every treatment is rooted in centuries-old wisdom, backed by our commitment to authenticity and your wellbeing
          </p>
        </div>
      </div>
    </section>
  );
};