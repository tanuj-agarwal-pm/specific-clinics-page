 import { useState } from "react";
 import { Phone, Map, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
 
interface Clinic {
  id: string;
  areaName: string;
  address: string;
  doctorName: string;
   doctorQualifications?: string;
   doctorSpecialization?: string;
  doctorImage?: string;
}
 
const clinics: Clinic[] = [{
   id: "indiranagar",
   areaName: "Indiranagar",
   address: "12th Main Road, Near Sony World Signal",
   doctorName: "Dr. Anjali Sharma",
   doctorQualifications: "BAMS, MD (Ayurveda)",
   doctorSpecialization: "Panchakarma & Detox Specialist"
 }, {
  id: "sarjapur",
  areaName: "Sarjapur",
  address: "Near Wipro Gate, Sarjapur Road",
   doctorName: "Dr. Meena Iyer",
   doctorQualifications: "BAMS, MS (Shalya)",
   doctorSpecialization: "Musculoskeletal Disorders"
}, {
  id: "shivajinagar",
  areaName: "Shivaji Nagar",
  address: "Commercial Street, Near Russell Market",
   doctorName: "Dr. Suresh Nair",
   doctorQualifications: "BAMS, PG Diploma",
   doctorSpecialization: "Digestive Health"
}, {
  id: "hsr-layout",
  areaName: "HSR Layout",
  address: "Sector 7, 27th Main Road",
   doctorName: "Dr. Kavitha Rao",
   doctorQualifications: "BAMS, MD (Kayachikitsa)",
   doctorSpecialization: "Lifestyle & Wellness"
}, {
  id: "jayanagar",
  areaName: "Jayanagar",
  address: "4th Block, Near Ashoka Pillar",
   doctorName: "Dr. Ravi Shankar",
   doctorQualifications: "BAMS, MS",
   doctorSpecialization: "Pain Management"
}, {
  id: "whitefield",
  areaName: "Whitefield",
  address: "ITPL Main Road, Near Phoenix Mall",
   doctorName: "Dr. Lakshmi Devi",
   doctorQualifications: "BAMS, PG Yoga",
   doctorSpecialization: "Women's Health"
}, {
  id: "koramangala",
  areaName: "Koramangala",
  address: "4th Block, 80 Feet Road",
   doctorName: "Dr. Arun Kumar",
   doctorQualifications: "BAMS, MD (Rasashastra)",
   doctorSpecialization: "Skin & Hair Care"
}];
 
 const openMaps = (address: string, areaName: string) => {
   const query = encodeURIComponent(`${address}, ${areaName}, Bengaluru, Karnataka`);
   window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
 };
 
 const handleCall = () => {
   window.location.href = 'tel:+911234567890';
 };
 
export const ClinicsGrid = () => {
   const [selectedClinicId, setSelectedClinicId] = useState<string>('indiranagar');
 
   const selectedClinic = clinics.find(c => c.id === selectedClinicId)!;
   const otherClinics = clinics.filter(c => c.id !== selectedClinicId);
 
  return <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
          Find us in Bengaluru      
        </h3>
        <p className="text-muted-foreground">
          Find authentic Ayurvedic care near you
        </p>
      </div>

       {/* Expanded Clinic Card */}
       <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-lg mb-6">
         <div className="flex flex-col md:flex-row md:items-start gap-6">
           {/* Clinic Info */}
           <div className="flex-1">
             <h4 className="font-heading text-xl md:text-2xl text-foreground font-bold mb-2">
               {selectedClinic.areaName}
             </h4>
             <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-start gap-2">
               <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
               {selectedClinic.address}
             </p>
 
             {/* Doctor Info */}
             <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
               <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <User className="h-7 w-7 text-primary" />
               </div>
               <div>
                 <p className="font-semibold text-foreground">{selectedClinic.doctorName}</p>
                 <p className="text-sm text-muted-foreground">{selectedClinic.doctorQualifications}</p>
                 <p className="text-sm text-primary font-medium">{selectedClinic.doctorSpecialization}</p>
               </div>
             </div>
           </div>
 
           {/* Action Buttons */}
           <div className="flex flex-row md:flex-col gap-3 md:w-auto w-full">
             <button 
               className="flex-1 md:flex-none h-11 px-4 rounded-lg bg-muted flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors"
               onClick={() => openMaps(selectedClinic.address, selectedClinic.areaName)}
               aria-label="Open in maps"
             >
               <Map className="h-5 w-5 text-primary" />
               <span className="text-sm font-medium">Maps</span>
             </button>
             <button 
               className="flex-1 md:flex-none h-11 px-4 rounded-lg bg-muted flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors"
               onClick={handleCall}
               aria-label="Call clinic"
             >
               <Phone className="h-5 w-5 text-primary" />
               <span className="text-sm font-medium">Call</span>
             </button>
             <Button 
               className="flex-1 md:flex-none h-11"
               onClick={() => console.log(`Book visit at ${selectedClinic.id}`)}
             >
               Book Visit
             </Button>
           </div>
         </div>
       </div>
 
       {/* Grid: 3 cols on desktop, 2 cols on mobile */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
         {otherClinics.map(clinic => (
           <button 
             key={clinic.id} 
             className="bg-card border border-border rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-left cursor-pointer group"
             onClick={() => setSelectedClinicId(clinic.id)}
           >
             {/* Area Name */}
             <h4 className="font-heading text-base md:text-lg text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
               {clinic.areaName}
             </h4>
 
             {/* Address */}
             <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
               {clinic.address}
             </p>
           </button>
         ))}
      </div>
    </div>;
};