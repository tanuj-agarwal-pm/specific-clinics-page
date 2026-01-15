import { useState, useEffect } from "react";
import { MessageCircle, Download, Sun, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MakarSankrantiBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about Ayurvedic practices for Makar Sankranti."
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000); // Shows after 6 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("/makar-sankranti-brochure.pdf", "_blank");
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out",
        "max-w-[calc(100vw-2rem)] md:max-w-md"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-primary shadow-2xl cursor-pointer",
          "transition-all duration-300 ease-out",
          isExpanded ? "p-4 md:p-5" : "p-3"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 z-20 p-1 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Decorative sun */}
        <div className="absolute -top-2 -right-2 opacity-20">
          <Sun className={cn(
            "text-amber-100 transition-all duration-300",
            isExpanded ? "w-20 h-20" : "w-12 h-12"
          )} />
        </div>

        {/* Collapsed state */}
        {!isExpanded && (
          <div className="relative z-10 flex items-center gap-3 pr-6">
            <div className="flex-shrink-0 bg-white/20 rounded-full p-2">
              <Sun className="w-5 h-5 text-amber-100" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium text-sm truncate">
                ✨ Makar Sankranti Special
              </p>
              <p className="text-white/80 text-xs">
                Tap to explore Ayurvedic wisdom
              </p>
            </div>
          </div>
        )}

        {/* Expanded state */}
        {isExpanded && (
          <div className="relative z-10">
            {/* Collapse button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="absolute top-0 right-6 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Collapse banner"
            >
              <ChevronUp className="w-4 h-4 text-white" />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
              <span className="text-amber-100 text-xs font-medium">
                ✨ Festival Special
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-heading text-white mb-2 leading-tight">
              Celebrate Makar Sankranti
              <span className="block text-amber-100 text-base">The Ayurvedic Way</span>
            </h3>

            {/* Description */}
            <p className="text-white/90 text-xs leading-relaxed mb-3">
              The Sun's transition into Capricorn is perfect for{" "}
              <strong className="text-amber-100">detoxification</strong>. 
              Sesame & jaggery balance Vata dosha and boost immunity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleWhatsAppClick}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-lg text-xs h-9"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>

              <Button
                onClick={handleDownloadBrochure}
                size="sm"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white/40 font-medium rounded-lg flex items-center justify-center gap-2 backdrop-blur-sm text-xs h-9"
              >
                <Download className="w-4 h-4" />
                <span>Download Guide</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
