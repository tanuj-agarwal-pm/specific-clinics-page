import { MessageCircle, Download, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MakarSankrantiBanner = () => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about Ayurvedic practices for Makar Sankranti."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleDownloadBrochure = () => {
    // Replace with actual brochure URL
    window.open("/makar-sankranti-brochure.pdf", "_blank");
  };

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/90 via-orange-500/85 to-primary/90 p-6 md:p-10">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 md:top-6 md:right-8 opacity-20">
            <Sun className="w-24 h-24 md:w-40 md:h-40 text-amber-100 animate-gentle-glow" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-200/15 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            {/* Festival Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <span className="text-amber-100 text-sm font-medium">
                ✨ Festival Special
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-heading text-white mb-3 leading-tight">
              Celebrate Makar Sankranti
              <span className="block text-amber-100">The Ayurvedic Way</span>
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
              As the Sun transitions into Capricorn, Ayurveda teaches us this is the perfect time for{" "}
              <strong className="text-amber-100">detoxification and rejuvenation</strong>. 
              The warming foods like til (sesame) and jaggery aren't just tradition—they balance 
              Vata dosha and strengthen immunity during this seasonal shift.
            </p>

            <ul className="text-white/85 text-sm space-y-1.5 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-amber-200 mt-0.5">●</span>
                <span>Sesame seeds provide warmth & nourish tissues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-200 mt-0.5">●</span>
                <span>Jaggery aids digestion & boosts energy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-200 mt-0.5">●</span>
                <span>Sun salutations align body with cosmic rhythms</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-5 rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>

              <Button
                onClick={handleDownloadBrochure}
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white/40 font-medium px-6 py-5 rounded-lg flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download Guide</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
