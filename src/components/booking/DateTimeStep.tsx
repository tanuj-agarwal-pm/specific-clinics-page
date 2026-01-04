import { useState, useEffect, useMemo } from "react";
import { format, addDays, isSameDay, startOfDay } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, Calendar, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DayStatus, SlotStatus, TimeSlot } from "@/types/booking";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  const today = startOfDay(new Date());

  // Find next available slot
  const nextAvailableSlot = useMemo(() => {
    for (let i = 0; i < 30; i++) {
      const date = addDays(today, i);
      const dateKey = format(date, 'yyyy-MM-dd');
      const dayData = availability.get(dateKey);
      if (dayData && dayData.status !== 'unavailable') {
        const firstSlot = dayData.slots.find(s => s.status !== 'unavailable');
        if (firstSlot) {
          return { date, time: firstSlot.time };
        }
      }
    }
    return null;
  }, [availability, today]);
  
  // Auto-select next available slot on mount
  useEffect(() => {
    if (!selectedDate && nextAvailableSlot) {
      onDateChange(nextAvailableSlot.date);
      onTimeChange(nextAvailableSlot.time);
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

  const handleQuickSelect = () => {
    if (nextAvailableSlot) {
      onDateChange(nextAvailableSlot.date);
      onTimeChange(nextAvailableSlot.time);
    }
  };

  const isNextSlotSelected = nextAvailableSlot && 
    selectedDate && isSameDay(selectedDate, nextAvailableSlot.date) && 
    selectedTime === nextAvailableSlot.time;

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    
    const days = [];
    
    // Empty cells for padding
    for (let i = 0; i < startPadding; i++) {
      days.push(<div key={`empty-${i}`} className="h-9" />);
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
              setCalendarOpen(false);
            }
          }}
          disabled={isUnavailable}
          className={cn(
            "h-9 w-full rounded-md text-sm font-medium relative transition-colors",
            isSelected && "bg-primary text-primary-foreground",
            !isSelected && !isUnavailable && "hover:bg-secondary",
            isUnavailable && "text-muted-foreground/40 cursor-not-allowed"
          )}
        >
          {day}
          {!isUnavailable && dayData && (
            <span
              className={cn(
                "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
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

      <div className="flex-1 overflow-y-auto pr-1 space-y-5">
        {/* Quick Select - Next Available Slot */}
        {nextAvailableSlot && (
          <div className={cn(
            "rounded-lg border-2 p-4 transition-all",
            isNextSlotSelected 
              ? "border-primary bg-primary/5" 
              : "border-primary/30 bg-gradient-to-r from-primary/5 to-transparent"
          )}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                    Next Available Slot
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {format(nextAvailableSlot.date, 'EEE, MMM d')} at {nextAvailableSlot.time}
                  </p>
                </div>
              </div>
              <Button 
                size="sm" 
                onClick={handleQuickSelect}
                variant={isNextSlotSelected ? "secondary" : "default"}
                className="shrink-0"
              >
                {isNextSlotSelected ? "Selected ✓" : "Choose"}
              </Button>
            </div>
          </div>
        )}

        {/* Date Selection */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Select Date</span>
          </div>
          
          {/* Selected Date Display */}
          <Collapsible open={calendarOpen} onOpenChange={setCalendarOpen}>
            <CollapsibleTrigger asChild>
              <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                <span className="font-medium">
                  {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}
                </span>
                <ChevronDown className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform",
                  calendarOpen && "rotate-180"
                )} />
              </button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-2">
              <div className="bg-card rounded-lg border border-border p-3">
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-1 hover:bg-secondary rounded"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-sm">
                    {format(currentMonth, 'MMMM yyyy')}
                  </span>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-1 hover:bg-secondary rounded"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-0.5 mb-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className="text-center text-xs font-medium text-muted-foreground py-1">
                      {d}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-0.5">
                  {renderCalendar()}
                </div>
                
                {/* Legend */}
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-muted-foreground">Fast Filling</span>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="bg-secondary/30 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Available Times for {format(selectedDate, 'MMM d')}
              </span>
            </div>
            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => onTimeChange(slot.time)}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition-all",
                      selectedTime === slot.time
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card border-border hover:border-primary/50 hover:bg-secondary/50"
                    )}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                No slots available for this date
              </p>
            )}
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
