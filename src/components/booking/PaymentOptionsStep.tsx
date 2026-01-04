import { CreditCard, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PaymentMethod, ONLINE_PRICE, CLINIC_PRICE } from "@/types/booking";

interface PaymentOptionsStepProps {
  selectedMethod: PaymentMethod | null;
  onSelectMethod: (method: PaymentMethod) => void;
  onBack: () => void;
  onConfirm: () => void;
  isProcessing?: boolean;
}

export const PaymentOptionsStep = ({
  selectedMethod,
  onSelectMethod,
  onBack,
  onConfirm,
  isProcessing = false,
}: PaymentOptionsStepProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl font-heading text-foreground mb-2">Choose Payment Option</h3>
        <p className="text-sm text-muted-foreground">Select how you'd like to pay for your consultation</p>
      </div>

      <div className="flex-1 space-y-4">
        {/* Pay Online Option */}
        <button
          onClick={() => onSelectMethod('online')}
          className={cn(
            "w-full p-5 rounded-lg border-2 transition-all duration-200 text-left relative",
            selectedMethod === 'online'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 bg-card"
          )}
        >
          {/* Recommended Badge */}
          <span className="absolute -top-3 left-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
            Recommended
          </span>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground">Pay Online</h4>
                {selectedMethod === 'online' && (
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-foreground mt-1">₹{ONLINE_PRICE}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Secure payment via GoKwik. Instant confirmation.
              </p>
            </div>
          </div>
        </button>

        {/* Pay at Clinic Option */}
        <button
          onClick={() => onSelectMethod('clinic')}
          className={cn(
            "w-full p-5 rounded-lg border-2 transition-all duration-200 text-left",
            selectedMethod === 'clinic'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 bg-card"
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground">Pay at Clinic</h4>
                {selectedMethod === 'clinic' && (
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-foreground mt-1">₹{CLINIC_PRICE}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Pay when you arrive. Cash or card accepted.
              </p>
            </div>
          </div>
        </button>

        {/* Savings note */}
        {selectedMethod === 'online' && (
          <p className="text-center text-sm text-green-600 font-medium">
            You save ₹{CLINIC_PRICE - ONLINE_PRICE} by paying online!
          </p>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-border flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1" disabled={isProcessing}>
          Back
        </Button>
        <Button 
          onClick={onConfirm} 
          disabled={!selectedMethod || isProcessing} 
          className="flex-1"
        >
          {isProcessing ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};
