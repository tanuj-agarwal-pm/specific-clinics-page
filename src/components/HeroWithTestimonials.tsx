import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { Heart, Baby, Bone, Activity, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroClinic from "@/assets/hero-clinic-interior.jpg";
import heroTreatment from "@/assets/hero-treatment.jpg";
import heroHerbs from "@/assets/hero-herbs.jpg";
const slides = [{
  image: heroClinic,
  alt: "Serene Kerala Ayurveda clinic interior with traditional ambiance"
}, {
  image: heroTreatment,
  alt: "Authentic Ayurvedic massage therapy in progress"
}, {
  image: heroHerbs,
  alt: "Traditional Ayurvedic herbs and natural healing ingredients"
}];
const testimonials = [{
  name: "Iyer",
  condition: "Blood Pressure and Back Pain",
  text: "Excellent treatment by one of the best in the business. I have been a regular at this clinic for more than 20 years. Many chronic problems including low BP and back problems have been rectified here. I will without a cinch of hesitation, recommend the wellness center.",
  icon: Heart,
  rating: 5
}, {
  name: "Kunjan Chauhan",
  condition: "Shoulder Injury",
  text: "It's getting so much harder to find authentic ayurvedic physicians and clinics. This is a great place to get treated. My son is showing good signs of recovery with his shoulder injury that he has been struggling with for 3-4 years. Staff are very helpful, humble and approachable.",
  icon: Bone,
  rating: 5
}, {
  name: "Indra Kumar",
  condition: "General Wellness",
  text: "I recently visited Kerala ayurveda wellness centre for an Ayurveda body massage, and it was truly a transformative experience. The massage itself was incredibly relaxing, with warm oil and soothing strokes that melted away my tension and stress.",
  icon: Sparkles,
  rating: 5
}, {
  name: "Subash Chinniah",
  condition: "Digestive & Gut Health",
  text: "I had digestive disorders for a long time. Did many tests and consulted many allopathy doctors for the treatment. It's been a few months since I'm under Kerala Ayurveda's guidance and medication. I'm totally relieved of the problem and I'm getting back to my good gut feeling.",
  icon: Activity,
  rating: 5
}, {
  name: "Chithravathi B",
  condition: "Postpartum Recovery",
  text: "Dr Sreelakshmi has helped me a lot with postpartum recovery therapy sessions. The utmost care given by the doctor and her team has helped me recover a lot. The doctor stayed in touch with me and made sure I ate a balanced meal. Budget friendly as well.",
  icon: Baby,
  rating: 5
}];
export const HeroWithTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactOptions, setShowContactOptions] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[60vh] md:min-h-[65vh] w-full overflow-hidden py-12 md:py-16">
      {/* Background Images with Low Opacity */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
        </div>)}

      <div className="container mx-auto max-w-7xl px-4 h-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground mb-6 leading-tight">
              Experience Authentic Kerala Ayurveda - in Indiranagar
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 mb-8">Traditional healing wisdom meets personalized care for your complete wellness journey.</p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setShowContactOptions(true)} size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base md:text-lg px-8 py-6 hover-scale">
                Talk to Us
              </Button>
              <Button onClick={scrollToForm} size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-base md:text-lg px-8 py-6">
                Request Consultation
              </Button>
            </div>

            <ContactOptionsModal open={showContactOptions} onOpenChange={setShowContactOptions} />
          </div>

          {/* Right Side - Testimonials */}
          <div className="relative h-[350px] md:h-[400px]">
            {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return <div key={index} className={`absolute inset-0 transition-all duration-700 ${index === currentTestimonial ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                  <Card className="h-full p-8 md:p-10 shadow-2xl bg-background/95 backdrop-blur-sm border-2 border-primary-foreground/20 flex flex-col justify-center" style={{
                borderRadius: "60% 40% 40% 60% / 50% 60% 40% 50%"
              }}>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto text-center">
                      <p className="font-heading text-lg md:text-xl text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.condition}
                      </p>
                    </div>
                  </Card>
                </div>;
          })}

            {/* Testimonial Indicators */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentTestimonial ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};