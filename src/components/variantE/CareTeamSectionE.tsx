import { useState, useRef, useEffect } from "react";
import { ChevronRight as ArrowRight, Award } from "lucide-react";
 import { Card } from "@/components/ui/card";
 import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import careTeamBg from "@/assets/care-team-bg.jpg";
 
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
}, {
  name: "Dr. Arun Krishnan",
  qualification: "BAMS, MD",
  specialization: "Panchakarma Therapy",
  experience: "15 years",
  practicingSince: "2010",
  image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  description: "Dr. Arun Krishnan is a Panchakarma specialist with extensive experience in detoxification and purification therapies for chronic conditions."
}, {
  name: "Dr. Meera Sundaram",
  qualification: "BAMS",
  specialization: "Pediatric Ayurveda",
  experience: "8 years",
  practicingSince: "2017",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  description: "Dr. Meera Sundaram specializes in pediatric Ayurveda, providing gentle and effective treatments for children's health conditions."
}, {
  name: "Dr. Venkatesh Rao",
  qualification: "BAMS, PhD",
  specialization: "Neurological Disorders",
  experience: "18 years",
  practicingSince: "2007",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  description: "Dr. Venkatesh Rao brings expertise in treating neurological disorders through traditional Ayurvedic methods and specialized therapies."
}, {
  name: "Dr. Lakshmi Menon",
  qualification: "BAMS, MS",
  specialization: "Skin & Hair Care",
  experience: "10 years",
  practicingSince: "2015",
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  description: "Dr. Lakshmi Menon specializes in Ayurvedic dermatology, treating skin conditions and hair problems with herbal remedies."
}, {
  name: "Dr. Suresh Pillai",
  qualification: "BAMS",
  specialization: "Digestive Health",
  experience: "14 years",
  practicingSince: "2011",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  description: "Dr. Suresh Pillai focuses on digestive health and gut-related disorders, using traditional Ayurvedic treatments for lasting relief."
}, {
  name: "Dr. Anjali Sharma",
  qualification: "BAMS, MD",
  specialization: "Respiratory Disorders",
  experience: "11 years",
  practicingSince: "2014",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  description: "Dr. Anjali Sharma treats respiratory conditions including asthma, allergies, and chronic bronchitis through Ayurvedic therapies."
}, {
  name: "Dr. Karthik Nambiar",
  qualification: "BAMS, PhD",
  specialization: "Joint & Bone Health",
  experience: "16 years",
  practicingSince: "2009",
  image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  description: "Dr. Karthik Nambiar specializes in musculoskeletal disorders, providing relief from joint pain, arthritis, and bone-related conditions."
 }];
 
 export const CareTeamSectionE = () => {
   const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
   const scrollRef = useRef<HTMLDivElement>(null);
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
     const container = scrollRef.current;
     if (!container) return;

     const handleScroll = () => {
       const scrollLeft = container.scrollLeft;
       const cardWidth = container.firstElementChild?.clientWidth || 0;
       const gap = 16; // gap-4 = 16px
       const index = Math.round(scrollLeft / (cardWidth + gap));
       setActiveIndex(Math.min(index, doctors.length - 1));
     };

     container.addEventListener('scroll', handleScroll);
     return () => container.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToDoctor = (index: number) => {
     const container = scrollRef.current;
     if (!container) return;
     const cardWidth = container.firstElementChild?.clientWidth || 0;
     const gap = 16;
     container.scrollTo({
       left: index * (cardWidth + gap),
       behavior: 'smooth'
     });
   };
 
   return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={careTeamBg}
          alt="Team of expert Ayurvedic doctors"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-heading text-white mb-4">
             Our Expert Care Team
           </h2>
           <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
             Expert vaidyas dedicated to your healing journey - right from your first consultation
           </p>
         </div>
 
         {/* Doctors Carousel */}
         <div 
           ref={scrollRef}
           className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -ml-4 md:-mx-4 md:px-4 pr-0 md:pr-4"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
           {/* Left spacer - mobile only */}
           <div className="flex-shrink-0 w-4 md:hidden" />
           {doctors.map((doctor, index) => (
              <Card 
                key={index}
                className="p-5 shadow-[var(--shadow-card)] cursor-pointer hover:shadow-lg transition-shadow snap-center flex-shrink-0 w-[80vw] md:w-[340px]"
                onClick={() => setSelectedDoctor(index)}
              >
                <div className="flex items-center gap-4 h-[112px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
                    <h4 className="text-base md:text-lg font-heading text-foreground line-clamp-2 leading-tight">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate">{doctor.specialization}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">{doctor.experience}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </Card>
           ))}
           {/* Right spacer - mobile only */}
           <div className="flex-shrink-0 w-4 md:hidden" />
         </div>

         {/* Scroll Indicators */}
         <div className="flex justify-center gap-2 mt-4">
           {doctors.map((_, index) => (
             <button
               key={index}
               onClick={() => scrollToDoctor(index)}
               className={`h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-white w-6' : 'bg-white/40 w-2'
               }`}
               aria-label={`Go to doctor ${index + 1}`}
             />
           ))}
         </div>
       </div>
 
        {/* Doctor Profile Dialog */}
        <Dialog open={selectedDoctor !== null} onOpenChange={() => setSelectedDoctor(null)}>
          <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] mx-auto max-h-[85vh] overflow-y-auto">
            {selectedDoctor !== null && (
              <div className="flex flex-col items-center text-center">
                <DialogHeader className="w-full">
                  <DialogTitle className="text-xl sm:text-2xl text-center">{doctors[selectedDoctor].name}</DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-center">
                    {doctors[selectedDoctor].qualification}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4 w-full">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={doctors[selectedDoctor].image}
                      alt={doctors[selectedDoctor].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                    />
                    <div className="text-center">
                      <p className="text-foreground font-medium text-base sm:text-lg mb-1">
                        {doctors[selectedDoctor].specialization}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm sm:text-base">
                        <Award className="w-4 h-4" />
                        <span>{doctors[selectedDoctor].experience} of experience</span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                        Practicing since {doctors[selectedDoctor].practicingSince}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-heading text-lg mb-2">About</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {doctors[selectedDoctor].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
   );
 };