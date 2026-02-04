import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { Award, Users, Heart } from "lucide-react";

const conditions = [
  "skin and hair issues?",
  "gut issues?",
  "joint and muscle pain?",
  "diabetes or high cholesterol?",
  "PCOD/ PCOS?",
  "respiratory issues?",
];
import heroTreatment from "@/assets/hero-treatment.jpg";

const credibilityMarkers = [
  {
    icon: Award,
    value: "80+",
    label: "Years of Excellence in Care",
  },
  {
    icon: Users,
    value: "10 Lacs+",
    label: "Patients Treated",
  },
  {
    icon: Heart,
    value: "300+",
    label: "Vaidyas Dedicated to Your Care",
  },
];

const videoTestimonials = [
  {
    // Placeholder YouTube video - replace with actual testimonial video
    videoId: "dQw4w9WgXcQ",
    patientName: "Priya Sharma",
    condition: "PCOS Recovery Journey",
  },
  {
    // Second placeholder video - replace with actual testimonial video
    videoId: "dQw4w9WgXcQ",
    patientName: "Rajesh Kumar",
    condition: "Joint Pain Recovery",
  },
];

export const HeroWithVideoE = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConditionIndex((prev) => (prev + 1) % conditions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] w-full overflow-hidden py-12 md:py-16">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroTreatment}
          alt="Authentic Ayurvedic massage therapy in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 h-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="animate-fade-in">
            <div className="mb-6 h-[160px] md:h-[180px] lg:h-[200px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight">
                <span className="font-light opacity-90 text-2xl md:text-3xl lg:text-4xl">Are you struggling with</span>
                <br />
                <span
                  key={currentConditionIndex}
                  className="text-primary-foreground animate-text-fade-in inline-block font-extrabold"
                >
                  {conditions[currentConditionIndex]}
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/95 mb-8">
              Traditional healing wisdom meets personalized care for your
              complete wellness journey.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => setShowContactOptions(true)}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base md:text-lg px-8 py-6 hover-scale"
              >
                Talk to Us
              </Button>
              <Button
                onClick={scrollToForm}
                size="lg"
                variant="outline"
                className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-base md:text-lg px-8 py-6"
              >
                Request Consultation
              </Button>
            </div>

            {/* Credibility Markers */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {credibilityMarkers.map((marker, index) => {
                const Icon = marker.icon;
                return (
                  <div
                    key={index}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-primary-foreground/20"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground mx-auto mb-2" />
                    <p className="text-lg md:text-2xl font-heading text-primary-foreground font-bold">
                      {marker.value}
                    </p>
                    <p className="text-xs md:text-sm text-primary-foreground/80 leading-tight">
                      {marker.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <ContactOptionsModal
              open={showContactOptions}
              onOpenChange={setShowContactOptions}
            />
          </div>

          {/* Right Side - Video Testimonials with Horizontal Scroll */}
          <div className="w-[340px] md:w-[440px] overflow-hidden ml-auto">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 w-max">
              {videoTestimonials.map((video, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-start flex flex-col items-center"
                >
                  <div className="relative w-[300px] md:w-[360px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                      title={`${video.patientName} Testimonial Video`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-heading text-lg md:text-xl text-primary-foreground">
                      {video.patientName}
                    </p>
                    <p className="text-sm text-primary-foreground/80">
                      {video.condition}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
