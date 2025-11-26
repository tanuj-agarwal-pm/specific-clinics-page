import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";

export const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [isInContactSection, setIsInContactSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (roughly 100vh)
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("contact-form");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInContactSection(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px"
      }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed md:top-0 bottom-0 md:bottom-auto left-0 right-0 z-50 bg-background/95 backdrop-blur-md md:border-b border-t md:border-t-0 border-border shadow-lg transition-transform duration-300 ${
          isVisible && !isInContactSection ? "md:translate-y-0 translate-y-0" : "md:-translate-y-full translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
            <Button
              onClick={() => setShowContactOptions(true)}
              size="default"
              className="bg-primary text-primary-foreground hover:bg-accent text-sm md:text-base"
            >
              Talk to Us
            </Button>
            <Button
              onClick={scrollToContact}
              size="default"
              variant="outline"
              className="text-sm md:text-base"
            >
              Request Consultation
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
