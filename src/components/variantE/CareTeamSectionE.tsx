import { useState, useRef } from "react";
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
 }];
 
 export const CareTeamSectionE = () => {
   const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
   const scrollRef = useRef<HTMLDivElement>(null);
 
   return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={careTeamBg}
          alt="Team of expert Ayurvedic doctors"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
             Our Expert Care Team
           </h2>
           <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
             Expert vaidyas dedicated to your healing journey - right from your first consultation
           </p>
         </div>
 
         {/* Doctors Carousel */}
         <div 
           ref={scrollRef}
           className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
           {doctors.map((doctor, index) => (
             <Card 
               key={index}
               className="p-4 shadow-[var(--shadow-card)] cursor-pointer hover:shadow-lg transition-shadow snap-start flex-shrink-0 w-[75vw] md:w-[320px]"
               onClick={() => setSelectedDoctor(index)}
             >
               <div className="flex items-center gap-4 h-[72px]">
                 <img
                   src={doctor.image}
                   alt={doctor.name}
                   className="w-16 h-16 rounded-full object-cover border-2 border-primary flex-shrink-0"
                 />
                 <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
                   <h4 className="text-base md:text-lg font-heading text-foreground line-clamp-2 leading-tight">
                     {doctor.name}
                   </h4>
                   <div className="flex items-center gap-2 text-muted-foreground">
                     <Award className="w-4 h-4 flex-shrink-0" />
                     <span className="text-sm truncate">{doctor.experience}</span>
                   </div>
                 </div>
                 <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
               </div>
             </Card>
           ))}
         </div>
       </div>
 
       {/* Doctor Profile Dialog */}
       <Dialog open={selectedDoctor !== null} onOpenChange={() => setSelectedDoctor(null)}>
         <DialogContent className="max-w-2xl">
           {selectedDoctor !== null && (
             <>
               <DialogHeader>
                 <DialogTitle className="text-2xl">{doctors[selectedDoctor].name}</DialogTitle>
                 <DialogDescription className="text-base">
                   {doctors[selectedDoctor].qualification}
                 </DialogDescription>
               </DialogHeader>
               <div className="space-y-4 pt-4">
                 <div className="flex items-center gap-4">
                   <img
                     src={doctors[selectedDoctor].image}
                     alt={doctors[selectedDoctor].name}
                     className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                   />
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
             </>
           )}
         </DialogContent>
       </Dialog>
     </section>
   );
 };