export type SlotStatus = 'available' | 'fast-filling' | 'unavailable';
export type DayStatus = 'available' | 'fast-filling' | 'unavailable';
export type PaymentMethod = 'online' | 'clinic';
export type PaymentStatus = 'pending' | 'success' | 'failed';

export interface TimeSlot {
  time: string;
  status: SlotStatus;
}

export interface DayAvailability {
  date: Date;
  status: DayStatus;
  slots: TimeSlot[];
}

export interface BookingDetails {
  doctor: {
    id: string;
    name: string;
    qualifications: string;
    specialization: string;
  } | null;
  date: Date | null;
  time: string | null;
  name: string;
  phone: string;
  countryCode: string;
  paymentMethod: PaymentMethod | null;
  paymentStatus: PaymentStatus;
}

export interface BookingState {
  currentStep: 1 | 2 | 3 | 4;
  booking: BookingDetails;
}

export const ONLINE_PRICE = 500;
export const CLINIC_PRICE = 550;
