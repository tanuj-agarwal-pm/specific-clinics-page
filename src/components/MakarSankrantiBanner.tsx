import { useState, useEffect } from "react";
import { MessageCircle, Download, Sun, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MakarSankrantiBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about Ayurvedic practices for Makar Sankranti."
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
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
    <div className="fixed top-16 left-0 right-0 z-40 px-4 animate-in slide-in-from-top duration-300">
      <div
        className={cn(
          "mx-auto max-w-4xl bg-gradient-to-r from-amber-500/95 to-orange-500/95 backdrop-blur-sm shadow-lg cursor-pointer transition-all duration-300",
          isExpanded ? "rounded-xl" : "rounded-full"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Collapsed state - thin bar */}
        {!isExpanded && (
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-100" />
              <span className="text-white text-sm font-medium">
                ✨ Makar Sankranti Special — Ayurvedic wellness tips
              </span>
              <ChevronDown className="w-4 h-4 text-white/70" />
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>
          </div>
        )}

        {/* Expanded state */}
        {isExpanded && (
          <div className="p-4 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-100" />
                  Celebrate Makar Sankranti the Ayurvedic Way
                </h3>
                <p className="text-white/85 text-sm">
                  Sesame & jaggery balance Vata dosha and boost immunity during this seasonal shift.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs h-8 px-3"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleDownloadBrochure}
                  size="sm"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs h-8 px-3"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Guide
                </Button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/70"
                  aria-label="Collapse"
                >
                  <ChevronDown className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
