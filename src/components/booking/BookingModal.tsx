import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { doctors, Doctor } from "@/data/doctors";
import { BookingDetails, PaymentMethod, PaymentStatus } from "@/types/booking";
import { DoctorSelectionStep } from "./DoctorSelectionStep";
import { DateTimeStep } from "./DateTimeStep";
import { UserDetailsStep } from "./UserDetailsStep";
import { PaymentOptionsStep } from "./PaymentOptionsStep";
import { BookingConfirmation } from "./BookingConfirmation";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const initialBooking: BookingDetails = {
  doctor: null,
  date: null,
  time: null,
  name: "",
  phone: "",
  countryCode: "+91",
  paymentMethod: "online",
  paymentStatus: "pending",
};

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [booking, setBooking] = useState<BookingDetails>(initialBooking);
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-select if only one doctor
  useEffect(() => {
    if (open && doctors.length === 1) {
      const doc = doctors[0];
      setBooking(prev => ({
        ...prev,
        doctor: {
          id: doc.id,
          name: doc.name,
          qualifications: doc.qualifications,
          specialization: doc.specialization,
        }
      }));
    }
  }, [open]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setCurrentStep(1);
        setBooking(initialBooking);
        setIsProcessing(false);
      }, 300);
    }
  }, [open]);

  const handleSelectDoctor = (doctor: Doctor) => {
    setBooking(prev => ({
      ...prev,
      doctor: {
        id: doctor.id,
        name: doctor.name,
        qualifications: doctor.qualifications,
        specialization: doctor.specialization,
      }
    }));
  };

  const handleConfirmBooking = async () => {
    if (!booking.paymentMethod) return;

    if (booking.paymentMethod === 'online') {
      setIsProcessing(true);
      
      // Mock payment gateway redirect simulation
      // In real implementation, this would redirect to GoKwik
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3;
      
      setBooking(prev => ({
        ...prev,
        paymentStatus: isSuccess ? 'success' : 'failed'
      }));
      setIsProcessing(false);
      setCurrentStep(5);
    } else {
      // Pay at clinic - direct success
      setBooking(prev => ({
        ...prev,
        paymentStatus: 'success'
      }));
      setCurrentStep(5);
    }
  };

  const handleRetryPayment = () => {
    setBooking(prev => ({ ...prev, paymentStatus: 'pending' }));
    handleConfirmBooking();
  };

  const handlePayAtClinicInstead = () => {
    setBooking(prev => ({
      ...prev,
      paymentMethod: 'clinic',
      paymentStatus: 'success'
    }));
  };

  const steps = [
    { number: 1, label: "Doctor" },
    { number: 2, label: "Date & Time" },
    { number: 3, label: "Details" },
    { number: 4, label: "Payment" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pr-12 border-b border-border">
          <h2 className="text-lg font-heading text-foreground">Book Consultation</h2>
        </div>

        {/* Progress Steps - Hide on confirmation */}
        {currentStep < 5 && (
          <div className="px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                        currentStep >= step.number
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      )}
                    >
                      {step.number}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium hidden sm:block",
                        currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-8 sm:w-12 h-0.5 mx-2",
                        currentStep > step.number ? "bg-primary" : "bg-border"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-4 flex-1 overflow-hidden" style={{ minHeight: '400px', maxHeight: '60vh' }}>
          {currentStep === 1 && (
            <DoctorSelectionStep
              doctors={doctors}
              selectedDoctorId={booking.doctor?.id || null}
              onSelectDoctor={handleSelectDoctor}
              onContinue={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <DateTimeStep
              selectedDate={booking.date}
              selectedTime={booking.time}
              onDateChange={(date) => setBooking(prev => ({ ...prev, date }))}
              onTimeChange={(time) => setBooking(prev => ({ ...prev, time }))}
              onBack={() => setCurrentStep(1)}
              onContinue={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 3 && (
            <UserDetailsStep
              name={booking.name}
              phone={booking.phone}
              countryCode={booking.countryCode}
              onNameChange={(name) => setBooking(prev => ({ ...prev, name }))}
              onPhoneChange={(phone) => setBooking(prev => ({ ...prev, phone }))}
              onCountryCodeChange={(countryCode) => setBooking(prev => ({ ...prev, countryCode }))}
              onBack={() => setCurrentStep(2)}
              onContinue={() => setCurrentStep(4)}
            />
          )}

          {currentStep === 4 && (
            <PaymentOptionsStep
              selectedMethod={booking.paymentMethod}
              onSelectMethod={(method) => setBooking(prev => ({ ...prev, paymentMethod: method }))}
              onBack={() => setCurrentStep(3)}
              onConfirm={handleConfirmBooking}
              isProcessing={isProcessing}
            />
          )}

          {currentStep === 5 && booking.doctor && booking.date && booking.time && booking.paymentMethod && (
            <BookingConfirmation
              isSuccess={booking.paymentStatus === 'success'}
              doctorName={booking.doctor.name}
              date={booking.date}
              time={booking.time}
              paymentMethod={booking.paymentMethod}
              onClose={() => onOpenChange(false)}
              onRetryPayment={handleRetryPayment}
              onPayAtClinic={handlePayAtClinicInstead}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
