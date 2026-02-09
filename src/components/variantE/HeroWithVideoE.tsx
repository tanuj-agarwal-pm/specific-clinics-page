import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { Award, Users, Heart } from "lucide-react";
const conditions = ["skin and hair issues?", "gut issues?", "joint and muscle pain?", "diabetes or high cholesterol?", "PCOD/ PCOS?", "respiratory issues?"];
import heroTreatment from "@/assets/hero-treatment.jpg";
const credibilityMarkers = [{
  icon: Award,
  value: "80+",
  label: "Years of Excellence"
}, {
  icon: Users,
  value: "10L+",
  label: "Patients Treated"
}, {
  icon: Heart,
  value: "300+",
  label: "Expert Vaidyas"
}];
const videoTestimonials = [{
  type: "video" as const,
  videoSrc: "",
  patientName: "Priya Sharma",
  condition: "PCOS Recovery Journey"
}, {
  type: "text" as const,
  patientName: "Rajesh Kumar",
  condition: "Joint Pain Recovery",
  quote: "After years of joint pain, I found relief through Ayurvedic treatments. The personalized care and natural approach made all the difference in my recovery journey."
}, {
  type: "text" as const,
  patientName: "Meera Patel",
  condition: "Digestive Health",
  quote: "The holistic approach to treating my gut issues was life-changing. I feel healthier and more energetic than I have in years."
}];
const CredibilityMarkers = () => <div className="grid grid-cols-3 gap-3 md:gap-4">
    {credibilityMarkers.map((marker, index) => {
    const Icon = marker.icon;
    return <div key={index} className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center shadow-lg">
          <p className="text-3xl md:text-4xl font-heading text-foreground font-bold leading-none">
            {marker.value}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
            {marker.label}
          </p>
          <div className="mt-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        </div>;
  })}
  </div>;
const VideoTestimonials = () => <div className="w-screen md:w-[440px] overflow-hidden md:ml-auto -ml-4 md:mx-0">
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth md:pl-0 pr-0" style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  }}>
      {/* Left spacer - mobile only */}
      <div className="flex-shrink-0 w-4 md:hidden" />
      {videoTestimonials.map((item, index) => <div key={index} className="flex-shrink-0 snap-center flex flex-col items-center">
          <div className="relative w-[70vw] md:w-[360px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl bg-black/20">
            {item.type === "video" ? <>
                {item.videoSrc ? <video src={item.videoSrc} className="absolute inset-0 w-full h-full object-cover" controls playsInline /> : <div className="absolute inset-0 w-full h-full bg-black/40 flex items-center justify-center">
                    <span className="text-primary-foreground/60 text-sm">Video placeholder</span>
                  </div>}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="font-heading text-lg text-white font-semibold">
                    {item.patientName}
                  </p>
                  <p className="text-sm text-white/80">
                    {item.condition}
                  </p>
                </div>
              </> : <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center p-6">
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-heading text-lg text-foreground font-semibold">
                    {item.patientName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.condition}
                  </p>
                </div>
              </div>}
          </div>
        </div>)}
      {/* Right spacer - mobile only */}
      <div className="flex-shrink-0 w-4 md:hidden" />
    </div>
  </div>;
export const HeroWithVideoE = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConditionIndex(prev => (prev + 1) % conditions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[70vh] md:min-h-[75vh] w-full overflow-hidden py-12 md:py-16">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img src={heroTreatment} alt="Authentic Ayurvedic massage therapy in progress" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 h-full relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6 animate-fade-in">
          <div>
            <h1 className="text-3xl font-heading text-primary-foreground leading-tight mb-4">
              Looking to reset or struggling with a health concern?
            </h1>
            <p className="text-base text-primary-foreground/95 mb-6">
              Get personalised and natural Ayurvedic intervention for all your health and wellness needs
            </p>
          </div>

          <VideoTestimonials />

          <div>
            <Button onClick={scrollToForm} size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base w-full py-6 hover-scale">
              Request Doctor Consultation
            </Button>
            <Button onClick={scrollToForm} size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-base w-full py-6 mt-3">
              Book an Ayurvedic Massage
            </Button>
          </div>

          <CredibilityMarkers />

          <ContactOptionsModal open={showContactOptions} onOpenChange={setShowContactOptions} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-heading text-primary-foreground leading-tight">
                Looking to reset or struggling with a health concern?
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/95 mb-8">
              Traditional healing wisdom meets personalized care for your
              complete wellness journey.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToForm} size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-lg px-8 py-6 hover-scale">
                Request Doctor Appointment
              </Button>
              <Button onClick={() => setShowContactOptions(true)} size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-lg px-8 py-6">
                Book an Ayurvedic Massage
              </Button>
            </div>

            <CredibilityMarkers />

            <ContactOptionsModal open={showContactOptions} onOpenChange={setShowContactOptions} />
          </div>

          <VideoTestimonials />
        </div>
      </div>
    </section>;
};