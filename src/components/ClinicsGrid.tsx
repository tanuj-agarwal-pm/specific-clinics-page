import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Clinic {
  id: string;
  areaName: string;
  address: string;
  doctorName: string;
  doctorImage?: string;
}

const clinics: Clinic[] = [
  {
    id: "sarjapur",
    areaName: "Sarjapur",
    address: "Near Wipro Gate, Sarjapur Road",
    doctorName: "Dr. Meena Iyer",
  },
  {
    id: "shivajinagar",
    areaName: "Shivaji Nagar",
    address: "Commercial Street, Near Russell Market",
    doctorName: "Dr. Suresh Nair",
  },
  {
    id: "hsr-layout",
    areaName: "HSR Layout",
    address: "Sector 7, 27th Main Road",
    doctorName: "Dr. Kavitha Rao",
  },
  {
    id: "jayanagar",
    areaName: "Jayanagar",
    address: "4th Block, Near Ashoka Pillar",
    doctorName: "Dr. Ravi Shankar",
  },
  {
    id: "whitefield",
    areaName: "Whitefield",
    address: "ITPL Main Road, Near Phoenix Mall",
    doctorName: "Dr. Lakshmi Devi",
  },
  {
    id: "koramangala",
    areaName: "Koramangala",
    address: "4th Block, 80 Feet Road",
    doctorName: "Dr. Arun Kumar",
  },
];

export const ClinicsGrid = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
          6 More Clinics Across Bangalore
        </h3>
        <p className="text-muted-foreground">
          Find authentic Ayurvedic care near you
        </p>
      </div>

      {/* Grid: 3 cols on desktop, 2 cols on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="bg-card border border-border rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all group"
          >
            {/* Location Icon + Area Name */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-heading text-base md:text-lg text-foreground font-semibold">
                {clinic.areaName}
              </h4>
            </div>

            {/* Address */}
            <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
              {clinic.address}
            </p>

            {/* Doctor Info */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-primary">
                {clinic.doctorName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <span className="text-xs md:text-sm text-foreground font-medium truncate">
                {clinic.doctorName}
              </span>
            </div>

            {/* CTA */}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between text-primary hover:text-accent hover:bg-primary/5 p-0 h-auto"
              onClick={() => {
                // Future: navigate to clinic page
                console.log(`Navigate to ${clinic.id} clinic page`);
              }}
            >
              <span className="text-xs md:text-sm">View Clinic</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
