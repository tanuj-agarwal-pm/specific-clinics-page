import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/data/doctors";
import { cn } from "@/lib/utils";

interface DoctorSelectionStepProps {
  doctors: Doctor[];
  selectedDoctorId: string | null;
  onSelectDoctor: (doctor: Doctor) => void;
  onContinue: () => void;
}

export const DoctorSelectionStep = ({
  doctors,
  selectedDoctorId,
  onSelectDoctor,
  onContinue,
}: DoctorSelectionStepProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl font-heading text-foreground mb-2">Select Your Doctor</h3>
        <p className="text-sm text-muted-foreground">Choose the specialist you'd like to consult with</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {doctors.map((doctor) => {
          const isSelected = selectedDoctorId === doctor.id;
          return (
            <button
              key={doctor.id}
              onClick={() => onSelectDoctor(doctor)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-card"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-semibold text-primary">
                    {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{doctor.name}</h4>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
                  <p className="text-sm font-medium text-primary mt-1">{doctor.specialization}</p>
                  <p className="text-xs text-muted-foreground mt-1">{doctor.experience}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-4 mt-4 border-t border-border">
        <Button
          onClick={onContinue}
          disabled={!selectedDoctorId}
          className="w-full"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
