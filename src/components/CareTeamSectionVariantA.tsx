import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Award, Users, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const doctors = [{
  name: "Dr. Sreelakshmiraj M",
  qualification: "BAMS",
  specialization: "Women's Health & Lifestyle Medicine",
  experience: "5 years",
  practicingSince: "2020",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  description: "Dr. Sreelakshmiraj, BAMS, has been practicing Ayurveda since 2020. She specializes in treating a wide range of conditions, including PCOD, women's health issues, joint pain, weight loss, stress, insomnia, gut health disorders, anorectal conditions, and respiratory issues."
}, {
  name: "Dr. Rajesh Kumar",
  qualification: "BAMS, PhD",
  specialization: "Chronic Disease Management",
  experience: "20 years",
  practicingSince: "2005",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  description: "Dr. Rajesh Kumar brings over two decades of expertise in Ayurvedic medicine, specializing in chronic disease management through traditional healing methods combined with modern diagnostic approaches."
}, {
  name: "Dr. Priya Nair",
  qualification: "BAMS, MS (Ayurveda)",
  specialization: "Rejuvenation & Lifestyle Medicine",
  experience: "12 years",
  practicingSince: "2013",
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  description: "Dr. Priya Nair focuses on rejuvenation therapies and lifestyle medicine, helping patients achieve optimal health through personalized Ayurvedic treatments and holistic wellness programs."
}];
const therapists = [{
  name: "Ananya Krishnan",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
  credential: "Trained in authentic Kerala Panchakarma techniques with 8+ years experience"
}, {
  name: "Rohit Nair",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  credential: "Certified in traditional Ayurvedic massage and specialized therapeutic treatments"
}, {
  name: "Kavya Reddy",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  credential: "Expert in Abhyanga and Shirodhara with continuous training in traditional methods"
}, {
  name: "Aditya Sharma",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  credential: "Specialized in therapeutic oil treatments following ancient Kerala protocols"
}];
const credentials = [{
  icon: Award,
  value: "75+ Years",
  label: "Excellence in Care"
}, {
  icon: Users,
  value: "100K+",
  label: "Patients Treated"
}, {
  icon: Stethoscope,
  value: "100+ Vaidyas",
  label: "Dedicated to your care"
}];
export const CareTeamSectionVariantA = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedCard(prev => {
        if (prev === null) return 0;
        return (prev + 1) % therapists.length;
      });
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const nextDoctor = () => {
    setCurrentDoctor(prev => (prev + 1) % doctors.length);
  };
  const prevDoctor = () => {
    setCurrentDoctor(prev => (prev - 1 + doctors.length) % doctors.length);
  };
  return <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Why Trust Us Header */}
        <div className="text-center mb-8">
          <h2 className="md:text-5xl font-heading text-foreground font-thin text-4xl">
            Real customer transformation stories!                       
          </h2>
        </div>

        {/* Video Testimonials */}
        <div className="mb-12 md:max-w-2xl md:mx-auto">
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 md:gap-6 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
            <div className="relative aspect-[9/16] w-[70vw] md:w-full flex-shrink-0 rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-muted snap-center">
              <video className="w-full h-full object-cover" controls preload="metadata" poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=700&fit=crop">
                <source src="/path-to-your-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative aspect-[9/16] w-[70vw] md:w-full flex-shrink-0 rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-muted snap-center">
              <video className="w-full h-full object-cover" controls preload="metadata" poster="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=700&fit=crop">
                <source src="/path-to-your-video-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Credentials Cards */}
        <div className="bg-primary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-3 gap-8">
            {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-3 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-xl md:text-2xl font-heading text-foreground mb-1">
                    {cred.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{cred.label}</p>
                </div>;
          })}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Our Expert Care Team
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Expert vaidyas dedicated to your healing journey - right from your first consultation                              
          </p>
        </div>

        {/* Doctors Carousel */}
        <div className="mb-24">
          
          <div className="relative max-w-2xl mx-auto">
            <Card className="p-8 shadow-[var(--shadow-card)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img src={doctors[currentDoctor].image} alt={doctors[currentDoctor].name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary" />
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-heading text-foreground mb-2">
                    {doctors[currentDoctor].name}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctors[currentDoctor].qualification}</span>
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    {doctors[currentDoctor].specialization}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                    <Award className="w-4 h-4" />
                    <span>{doctors[currentDoctor].experience} of experience</span>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button onClick={() => setSelectedDoctor(currentDoctor)} variant="outline" className="flex-1 md:flex-none">
                      View Profile
                    </Button>
                    <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({
                    behavior: 'smooth'
                  })} className="flex-1 md:flex-none">
                      Consult
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <button onClick={prevDoctor} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-lg" aria-label="Previous doctor">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={nextDoctor} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-lg" aria-label="Next doctor">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {doctors.map((_, index) => <button key={index} onClick={() => setCurrentDoctor(index)} className={`w-2 h-2 rounded-full transition-all ${currentDoctor === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`} aria-label={`Go to doctor ${index + 1}`} />)}
          </div>
        </div>

        {/* Therapists */}
        
      </div>

      {/* Doctor Profile Dialog */}
      <Dialog open={selectedDoctor !== null} onOpenChange={() => setSelectedDoctor(null)}>
        <DialogContent className="max-w-2xl">
          {selectedDoctor !== null && <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{doctors[selectedDoctor].name}</DialogTitle>
                <DialogDescription className="text-base">
                  {doctors[selectedDoctor].qualification}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <img src={doctors[selectedDoctor].image} alt={doctors[selectedDoctor].name} className="w-24 h-24 rounded-full object-cover border-4 border-primary" />
                  <div>
                    <p className="text-foreground font-medium text-lg mb-1">
                      {doctors[selectedDoctor].specialization}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{doctors[selectedDoctor].experience} of experience</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">
                      Practicing since {doctors[selectedDoctor].practicingSince}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-2">About</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {doctors[selectedDoctor].description}
                  </p>
                </div>
              </div>
            </>}
        </DialogContent>
      </Dialog>
    </section>;
};