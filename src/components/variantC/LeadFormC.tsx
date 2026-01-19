import { useState } from "react";
import { Calendar as CalendarIcon, Clock, PhoneIncoming } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳", digits: 10 },
  { code: "+1", country: "US/Canada", flag: "🇺🇸", digits: 10 },
  { code: "+44", country: "UK", flag: "🇬🇧", digits: 10 },
  { code: "+971", country: "UAE", flag: "🇦🇪", digits: 9 },
  { code: "+65", country: "Singapore", flag: "🇸🇬", digits: 8 },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM",
];

const clinics = [
  "HSR Layout, Sector 7",
  "Indiranagar, 12th Main Road",
  "Jayanagar, 4th Block",
  "Koramangala, 4th Block",
  "Sarjapur",
  "Shivaji Nagar",
  "Whitefield",
];

export const LeadFormC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    date: undefined as Date | undefined,
    time: "",
    clinic: "Indiranagar, 12th Main Road",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode);
    if (selectedCountry && formData.phone.length !== selectedCountry.digits) {
      toast.error(`Phone number must be ${selectedCountry.digits} digits for ${selectedCountry.country}`);
      return;
    }
    toast.success("Thank you! We'll contact you shortly to confirm your consultation.");
    setFormData({
      name: "",
      phone: "",
      countryCode: "+91",
      date: undefined,
      time: "",
      clinic: "Indiranagar, 12th Main Road",
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode);
    if (selectedCountry && value.length <= selectedCountry.digits) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Book Your Consultation
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Take the first step towards holistic healing
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <div className="flex gap-2">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => setFormData({ ...formData, countryCode: value, phone: "" })}
                >
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder={`${countryCodes.find((c) => c.code === formData.countryCode)?.digits} digits`}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => setFormData({ ...formData, date })}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Time
                </label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => setFormData({ ...formData, time: value })}
                >
                  <SelectTrigger
                    className={cn(
                      "w-full justify-start text-left font-normal [&>svg.lucide-chevron-down]:hidden",
                      !formData.time && "text-muted-foreground"
                    )}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Clinic
              </label>
              <Select
                value={formData.clinic}
                onValueChange={(value) => setFormData({ ...formData, clinic: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a clinic" />
                </SelectTrigger>
                <SelectContent>
                  {clinics.map((clinic) => (
                    <SelectItem key={clinic} value={clinic}>
                      {clinic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent">
              <PhoneIncoming className="w-5 h-5 mr-2" />
              Request Callback
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Have questions?{" "}
              <a href="tel:+1234567890" className="text-primary hover:text-accent font-semibold transition-colors underline">
                Call Us Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
