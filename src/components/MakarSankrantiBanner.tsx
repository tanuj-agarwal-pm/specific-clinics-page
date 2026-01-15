import { useState, useEffect } from "react";
import { MessageCircle, Download, Sun, X } from "lucide-react";
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
    setIsExpanded(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-20 right-4 z-40 animate-in fade-in duration-500">
      {/* Collapsed state - small icon */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="relative group bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Makar Sankranti Special"
        >
          <div className="relative">
            <Sun className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 text-xs">🪁</span>
          </div>
          {/* Tooltip */}
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Makar Sankranti Special
          </span>
        </button>
      )}

      {/* Expanded state */}
      {isExpanded && (
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-xl p-4 w-72 animate-in zoom-in-95 duration-200">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-white/80" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <Sun className="w-5 h-5 text-amber-100" />
            <span className="text-lg">🪁</span>
            <span className="text-white/80 text-xs font-medium">Festival Special</span>
          </div>

          <h3 className="text-white font-medium text-sm mb-2">
            Celebrate Makar Sankranti the Ayurvedic Way
          </h3>
          
          <p className="text-white/85 text-xs mb-4 leading-relaxed">
            Sesame & jaggery balance Vata dosha and boost immunity during this seasonal shift.
          </p>

          <div className="flex gap-2">
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs h-8"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              WhatsApp
            </Button>
            <Button
              onClick={handleDownloadBrochure}
              size="sm"
              variant="outline"
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs h-8"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              Guide
            </Button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            className="w-full mt-3 text-white/60 hover:text-white/80 text-xs transition-colors"
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  );
};
