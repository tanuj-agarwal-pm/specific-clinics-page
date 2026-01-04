import { format } from "date-fns";
import { CheckCircle2, XCircle, MapPin, Calendar, Clock, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentMethod, ONLINE_PRICE, CLINIC_PRICE } from "@/types/booking";
import { clinicAddress } from "@/data/doctors";

interface BookingConfirmationProps {
  isSuccess: boolean;
  doctorName: string;
  date: Date;
  time: string;
  paymentMethod: PaymentMethod;
  onClose: () => void;
  onRetryPayment?: () => void;
  onPayAtClinic?: () => void;
}

export const BookingConfirmation = ({
  isSuccess,
  doctorName,
  date,
  time,
  paymentMethod,
  onClose,
  onRetryPayment,
  onPayAtClinic,
}: BookingConfirmationProps) => {
  if (!isSuccess) {
    // Payment Failed State
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
          <XCircle className="w-10 h-10 text-destructive" />
        </div>
        
        <h3 className="text-xl font-heading text-foreground mb-2">Payment Failed</h3>
        <p className="text-muted-foreground mb-8 max-w-sm">
          We couldn't process your payment. Please try again or choose to pay at the clinic instead.
        </p>

        <div className="w-full space-y-3">
          <Button onClick={onRetryPayment} className="w-full" size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button onClick={onPayAtClinic} variant="outline" className="w-full" size="lg">
            Pay at Clinic Instead (₹{CLINIC_PRICE})
          </Button>
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="flex flex-col items-center text-center py-6">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-in">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      
      <h3 className="text-xl font-heading text-foreground mb-2">Booking Confirmed!</h3>
      <p className="text-muted-foreground mb-6">
        Your appointment has been successfully booked.
      </p>

      {/* Booking Details Card */}
      <div className="w-full bg-secondary/50 rounded-lg p-5 mb-6 text-left">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Doctor</p>
              <p className="font-semibold text-foreground">{doctorName}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-semibold text-foreground">{format(date, 'EEEE, MMMM d, yyyy')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-semibold text-foreground">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold text-foreground">{clinicAddress}</p>
            </div>
          </div>
        </div>

        {/* Payment Status Tag */}
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Payment</span>
          {paymentMethod === 'online' ? (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              PAID • ₹{ONLINE_PRICE}
            </span>
          ) : (
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
              PAY AT CLINIC • ₹{CLINIC_PRICE}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        A confirmation has been sent to your WhatsApp.
      </p>

      <Button onClick={onClose} className="w-full" size="lg">
        Done
      </Button>
    </div>
  );
};
