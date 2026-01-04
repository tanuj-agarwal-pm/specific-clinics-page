import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "lucide-react";

interface UserDetailsStepProps {
  name: string;
  phone: string;
  countryCode: string;
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

export const UserDetailsStep = ({
  name,
  phone,
  countryCode,
  onNameChange,
  onPhoneChange,
  onCountryCodeChange,
  onBack,
  onContinue,
}: UserDetailsStepProps) => {
  const selectedCountry = countryCodes.find(c => c.code === countryCode);
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (selectedCountry && value.length <= selectedCountry.digits) {
      onPhoneChange(value);
    }
  };

  const isValid = name.trim() && phone.length === (selectedCountry?.digits || 10);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl font-heading text-foreground mb-2">Your Details</h3>
        <p className="text-sm text-muted-foreground">We'll send booking confirmation to your WhatsApp</p>
      </div>

      <div className="flex-1 space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <User className="w-4 h-4 text-muted-foreground" />
            Full Name *
          </label>
          <Input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Enter your full name"
            className="h-12"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            WhatsApp Number *
          </label>
          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={(v) => {
              onCountryCodeChange(v);
              onPhoneChange('');
            }}>
              <SelectTrigger className="w-[110px] h-12">
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
              className="flex-1 h-12"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            You'll receive booking confirmation and reminders on this number
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-border flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onContinue} disabled={!isValid} className="flex-1">
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};
