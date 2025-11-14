import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";

export const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="default"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Book Your Consultation
            </Button>
            <Button
              onClick={() => setShowContactOptions(true)}
              size="default"
              variant="outline"
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </header>
      <ContactOptionsModal
        open={showContactOptions}
        onOpenChange={setShowContactOptions}
      />
    </>
  );
};
