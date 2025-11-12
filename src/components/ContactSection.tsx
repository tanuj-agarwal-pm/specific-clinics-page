import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
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
  "06:00 PM", "06:30 PM", "07:00 PM"
];
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    date: undefined as Date | undefined,
    time: "",
    clinic: "Indiranagar, 12th Main Road"
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    // Phone validation
    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
    if (selectedCountry && formData.phone.length !== selectedCountry.digits) {
      toast.error(`Phone number must be ${selectedCountry.digits} digits for ${selectedCountry.country}`);
      return;
    }

    // Success message
    toast.success("Thank you! We'll contact you shortly to confirm your consultation.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      countryCode: "+91",
      date: undefined,
      time: "",
      clinic: "Indiranagar, 12th Main Road"
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
    if (selectedCountry && value.length <= selectedCountry.digits) {
      setFormData({
        ...formData,
        phone: value
      });
    }
  };
  return <section id="contact-form" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">Experience Kerala - right in Indiranagar</h2>
          <p className="text-muted-foreground text-base md:text-lg">Holistic healing made convenient</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div>
            <div className="h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-[var(--shadow-card)] border border-border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTIuMyJOIDc2wrAxNicwMi4zIkU!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kerala Ayurveda Clinic Location" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] border border-border">
            

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <Select value={formData.countryCode} onValueChange={(value) => setFormData({ ...formData, countryCode: value, phone: "" })}>
                    <SelectTrigger className="w-[140px]">
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
                    placeholder={`${countryCodes.find(c => c.code === formData.countryCode)?.digits} digits`}
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
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time
                  </label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className={cn("w-full [&>svg]:hidden", !formData.time && "text-muted-foreground")}>
                      <Clock className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select a time" />
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
                <label htmlFor="clinic" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Clinic
                </label>
                <Select value={formData.clinic} onValueChange={value => setFormData({
                ...formData,
                clinic: value
              })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a clinic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HSR Layout, Sector 7">HSR Layout, Sector 7</SelectItem>
                    <SelectItem value="Indiranagar, 12th Main Road">Indiranagar, 12th Main Road</SelectItem>
                    <SelectItem value="Jayanagar, 4th Block">Jayanagar, 4th Block</SelectItem>
                    <SelectItem value="Koramangala, 4th Block">Koramangala, 4th Block</SelectItem>
                    <SelectItem value="Sarjapur">Sarjapur</SelectItem>
                    <SelectItem value="Shivaji Nagar">Shivaji Nagar</SelectItem>
                    <SelectItem value="Whitefield">Whitefield</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Request Consultation
              </Button>
            </form>
          </div>
        </div>

        {/* Other Cities - Full Width */}
        <div className="mt-12 p-8 bg-primary/5 rounded-lg border-2 border-primary/20">
          <p className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
            Not in Bengaluru? We are also present in:
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed font-medium text-center mb-4">
            Amritsar • Chennai • Delhi • Ernakulam • Hyderabad • Kasargod • Kochi • Mumbai • Panipat • Pune • Singapore • Thiruvananthapuram • Vizag
          </p>
          <p className="text-base text-foreground/80 text-center">
            <a href="tel:+1234567890" className="text-primary hover:text-accent font-semibold transition-colors underline">Call</a> or <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold transition-colors underline">WhatsApp</a> to book an appointment in any of these cities
          </p>
        </div>
      </div>
    </section>;
};