import { useState, useEffect } from "react";
import { Star, Award, Users, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Meera Sharma",
    condition: "PCOS Treatment",
    text: "After years of struggling, the personalized Ayurvedic treatment helped me regain balance. The doctors truly understand the root cause approach.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    condition: "Stress Management",
    text: "The Panchakarma therapy was transformative. I feel rejuvenated and the chronic stress that plagued me for years has significantly reduced.",
    rating: 5,
  },
  {
    name: "Divya Menon",
    condition: "Postnatal Care",
    text: "The postnatal care package was a blessing. Traditional treatments combined with modern care helped me recover beautifully after childbirth.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    condition: "Joint Pain Relief",
    text: "Years of joint pain made my life difficult. The authentic Kerala Ayurveda treatments have given me my mobility back. Truly grateful!",
    rating: 5,
  },
];

const credentials = [
  { icon: Star, label: "4.9/5 on Google", value: "500+ Reviews" },
  { icon: Award, label: "15+ Years", value: "Excellence in Care" },
  { icon: Users, label: "10,000+", value: "Patients Treated" },
  { icon: Calendar, label: "Traditional", value: "Kerala Methods" },
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Real stories of healing and transformation
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 md:p-12 shadow-[var(--shadow-card)] relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-primary/10 font-heading">"</div>
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground text-center mb-6 italic">
                    {testimonial.text}
                  </p>
                  <div className="text-center">
                    <p className="font-heading text-xl text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-heading text-foreground mb-1">
                  {cred.value}
                </p>
                <p className="text-sm text-muted-foreground">{cred.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};