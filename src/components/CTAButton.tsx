import { Button } from "@/components/ui/button";

export const CTAButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-12">
      <Button 
        onClick={scrollToContact}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-accent text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
      >
        Book Your Consultation
      </Button>
    </div>
  );
};
