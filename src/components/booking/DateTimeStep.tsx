import { useState, useEffect } from "react";
import { format, addDays, isSameDay, startOfDay } from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DayStatus, SlotStatus, TimeSlot } from "@/types/booking";

interface DateTimeStepProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  name: string;
  phone: string;
  countryCode: string;
  onDateChange: (date: Date) => void;
  onTimeChange: (time: string) => void;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  onCountryCodeChange: (code: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳", digits: 10 },
  { code: "+1", country: "US/Canada", flag: "🇺🇸", digits: 10 },
  { code: "+44", country: "UK", flag: "🇬🇧", digits: 10 },
  { code: "+971", country: "UAE", flag: "🇦🇪", digits: 9 },
  { code: "+65", country: "Singapore", flag: "🇸🇬", digits: 8 },
];

// Mock data generator - replace with API later
const generateMockAvailability = (): Map<string, { status: DayStatus; slots: TimeSlot[] }> => {
  const availability = new Map();
  const today = startOfDay(new Date());
  
  const baseSlots = [
    "09:00 AM", "09:45 AM", "10:30 AM", "11:15 AM", "12:00 PM", 
    "12:45 PM", "02:00 PM", "02:45 PM", "03:30 PM", "04:15 PM", 
    "05:00 PM", "05:45 PM", "06:30 PM"
  ];

  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i);
    const dateKey = format(date, 'yyyy-MM-dd');
    const dayOfWeek = date.getDay();
    
    // Sundays are unavailable
    if (dayOfWeek === 0) {
      availability.set(dateKey, { status: 'unavailable' as DayStatus, slots: [] });
      continue;
    }
    
    // Generate slot availability
    const slots: TimeSlot[] = baseSlots.map((time) => {
      const rand = Math.random();
      const status: SlotStatus = rand < 0.25 ? 'unavailable' : 'available';
      return { time, status };
    });
    
    const availableSlots = slots.filter(s => s.status !== 'unavailable').length;
    let dayStatus: DayStatus = 'available';
    
    if (availableSlots === 0) dayStatus = 'unavailable';
    else if (availableSlots <= 4) dayStatus = 'fast-filling';
    
    availability.set(dateKey, { status: dayStatus, slots });
  }
  
  return availability;
};

export const DateTimeStep = ({
  selectedDate,
  selectedTime,
  name,
  phone,
  countryCode,
  onDateChange,
  onTimeChange,
  onNameChange,
  onPhoneChange,
  onCountryCodeChange,
  onBack,
  onContinue,
}: DateTimeStepProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availability] = useState(() => generateMockAvailability());
  
  const today = startOfDay(new Date());
  
  // Auto-select next available slot on mount
  useEffect(() => {
    if (!selectedDate) {
      for (let i = 0; i < 30; i++) {
        const date = addDays(today, i);
        const dateKey = format(date, 'yyyy-MM-dd');
        const dayData = availability.get(dateKey);
        if (dayData && dayData.status !== 'unavailable') {
          onDateChange(date);
          const firstAvailable = dayData.slots.find(s => s.status !== 'unavailable');
          if (firstAvailable) {
            onTimeChange(firstAvailable.time);
          }
          break;
        }
      }
    }
  }, []);

  const selectedCountry = countryCodes.find(c => c.code === countryCode);
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (selectedCountry && value.length <= selectedCountry.digits) {
      onPhoneChange(value);
    }
  };

  const getDayData = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    return availability.get(dateKey);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    
    const days = [];
    
    // Empty cells for padding
    for (let i = 0; i < startPadding; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }
    
    // Actual days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dayData = getDayData(date);
      const isPast = date < today;
      const isSelected = selectedDate && isSameDay(date, selectedDate);
      const isUnavailable = isPast || !dayData || dayData.status === 'unavailable';
      
      days.push(
        <button
          key={day}
          onClick={() => {
            if (!isUnavailable) {
              onDateChange(date);
              onTimeChange(''); // Reset time when date changes
            }
          }}
          disabled={isUnavailable}
          className={cn(
            "h-10 w-full rounded-md text-sm font-medium relative transition-colors",
            isSelected && "bg-primary text-primary-foreground",
            !isSelected && !isUnavailable && "hover:bg-secondary",
            isUnavailable && "text-muted-foreground/40 cursor-not-allowed"
          )}
        >
          {day}
          {!isUnavailable && dayData && (
            <span
              className={cn(
                "absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full",
                dayData.status === 'fast-filling' && "bg-orange-500",
                dayData.status === 'available' && "bg-green-500"
              )}
            />
          )}
        </button>
      );
    }
    
    return days;
  };

  const selectedDayData = selectedDate ? getDayData(selectedDate) : null;
  const availableSlots = selectedDayData?.slots.filter(s => s.status !== 'unavailable') || [];
  
  const isValid = selectedDate && selectedTime && name.trim() && 
    phone.length === (selectedCountry?.digits || 10);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-heading text-foreground mb-2">Pick Date & Time</h3>
        <p className="text-sm text-muted-foreground">Select your preferred appointment slot</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-6">
        {/* Calendar */}
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-1 hover:bg-secondary rounded"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold">
              {format(currentMonth, 'MMMM yyyy')}
            </span>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-1 hover:bg-secondary rounded"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">
                {d}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>
          
          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-muted-foreground">Fast Filling</span>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                Available slots for {format(selectedDate, 'MMM d')}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => onTimeChange(slot.time)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium border transition-colors",
                    selectedTime === slot.time
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/50"
                  )}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* User Details */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Your Details</h4>
          
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">Full Name *</label>
            <Input
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">WhatsApp Number *</label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={(v) => {
                onCountryCodeChange(v);
                onPhoneChange('');
              }}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map(c => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder={`${selectedCountry?.digits} digits`}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-border flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onContinue} disabled={!isValid} className="flex-1">
          Continue
        </Button>
      </div>
    </div>
  );
};
