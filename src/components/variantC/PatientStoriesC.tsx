import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const patientStories = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    name: "Rajesh Kumar",
    condition: "Chronic Back Pain",
    testimonial: "After years of suffering from chronic back pain, I found relief through Ayurvedic treatments. The holistic approach addressed not just my symptoms but the root cause of my condition.",
    duration: "3 months treatment",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    name: "Priya Sharma",
    condition: "PCOS Management",
    testimonial: "The personalized treatment plan helped me manage my PCOS naturally. I've seen remarkable improvements in my hormonal balance and overall well-being.",
    duration: "6 months treatment",
  },
];

export const PatientStoriesC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const showForm = currentIndex === patientStories.length;
  const totalSlides = patientStories.length + 1;

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    if (formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    toast.success("Thank you! We'll contact you shortly.");
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8 text-center">
          Patient Stories
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Video Slides */}
              {patientStories.map((story) => (
                <div
                  key={story.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    {/* Video */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                      <iframe
                        src={story.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${story.name}'s Story`}
                      />
                    </div>

                    {/* Supporting Text */}
                    <div className="space-y-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {story.condition}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading text-foreground">
                        {story.name}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        "{story.testimonial}"
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {story.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Short Lead Form Slide */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="max-w-md mx-auto bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h3 className="text-2xl font-heading text-foreground mb-2 text-center">
                    Start Your Healing Journey
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Get a free consultation with our experts
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({ ...formData, phone: value });
                        }}
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                      Request Callback
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
