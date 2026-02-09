import { useState } from "react";
import { Bone, Apple, Leaf, Gauge, HeartPulse, HeartHandshake, Baby, Wind, Moon, Droplets, ChevronDown, ChevronUp } from "lucide-react";
import { Heart, Flower2, Sparkles } from "lucide-react";

interface ConditionsSectionVariantAProps {
  onTabChange?: (tab: "conditions" | "therapies") => void;
}

const conditions = [{
  icon: Leaf,
  title: "Skin and Hair",
  description: "Holistic treatments that enhance the natural health of your skin and hair, restoring balance and resolving concerns."
}, {
  icon: Apple,
  title: "Gut Health",
  description: "Treatments that aid in restoring digestive balance, enhancing nutrient absorption, and maintaining a healthy gut microbiome."
}, {
  icon: Bone,
  title: "Joint and Muscle Pain",
  description: "Treatments that aid in relieving joint pain, stiffness, muscular spasms and more supporting natural tissue recovery."
}, {
  icon: Gauge,
  title: "Diabetes, Thyroid and BP",
  description: "Treatments that support balanced metabolism, improve blood sugar regulation and manage diabetes naturally."
}, {
  icon: HeartPulse,
  title: "Stress Management",
  description: "Treatments that calm the mind, relax the body, and support healthy blood pressure regulation."
}, {
  icon: HeartHandshake,
  title: "PCOS, PCOD, Menopause",
  description: "Treatments that support hormonal balance, energy, mood stability, and sleep while addressing concerns such as PMS, PCOD, endometriosis and more."
}, {
  icon: Baby,
  title: "Reproductive Health and Infertility",
  description: "Treatments that strengthen the reproductive system, regulate cycles and support conception by addressing the underlying factors."
}, {
  icon: Droplets,
  title: "Liver and Kidney Health",
  description: "Treatments that support healthy liver and kidney function, enhance natural detoxification, and address concerns such as bloating, water retention and sluggish metabolism."
}, {
  icon: Moon,
  title: "Sleep and General Lifestyle",
  description: "Treatments that calm the mind, regulate sleep cycles, and enhance daily vitality while addressing issues like insomnia, restlessness, fatigue, and stress-related imbalance."
}, {
  icon: Wind,
  title: "Respiratory and General Immunity",
  description: "Treatments that help strengthen lung function, address congestion, and boost immune resilience while addressing concerns like allergies, recurrent infections, and seasonal respiratory issues."
}];
const therapies = [{
  icon: Heart,
  title: "Shirodhara",
  description: "A classical Ayurvedic therapy where a continuous oscillating stream of warm herbal oil is gently poured over the forehead to calm the nervous system.",
  benefit: "Relieves stress & anxiety"
}, {
  icon: Flower2,
  title: "Abhyanga",
  description: "Traditional Ayurvedic oil therapy that uses rhythmic, grounded strokes to calm the nervous system and enhance mind–body connection.",
  benefit: "Improves circulation & relaxation"
}, {
  icon: Sparkles,
  title: "Udwartana",
  description: "An authentic dry herbal powder massage that stimulates circulation, exfoliates the skin, and supports healthy metabolism.",
  benefit: "Boosts metabolism & skin glow"
}, {
  icon: Wind,
  title: "Swedana",
  description: "Classical Ayurvedic therapy that gently induces therapeutic sweating to open the channels and release stiffness.",
  benefit: "Releases toxins & stiffness"
}, {
  icon: Droplets,
  title: "Kayaseka",
  description: "A traditional Ayurvedic oil-bath therapy that applies steady, flowing warmth to relax muscles and improve circulation.",
  benefit: "Eases muscle tension"
}, {
  icon: Leaf,
  title: "Panchakarma",
  description: "A comprehensive classical Ayurvedic healing program that combines preparatory, cleansing, and restorative treatments.",
  benefit: "Deep detox & rejuvenation"
}];
export const ConditionsSectionVariantA = ({ onTabChange }: ConditionsSectionVariantAProps) => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState<"conditions" | "therapies">("conditions");
  const currentItems = activeTab === "conditions" ? conditions : therapies;

  const handleTabChange = (tab: "conditions" | "therapies") => {
    setActiveTab(tab);
    setShowAll(false);
    onTabChange?.(tab);
  };

  return <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4 text-center">Ayurveda as a lifestyle choice</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Whether you are looking to deal with a health concern, or just looking at enhancing your current state, Kerala Ayurveda clinics can help you.  
          </p>
          
          {/* Tab Chips */}
          <div className="inline-flex justify-center gap-2 p-1.5 bg-muted/50 rounded-full border border-border">
            <button onClick={() => handleTabChange("conditions")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "conditions" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground border-2 border-primary/40 animate-border-glow"}`}>
              Conditions We Support
            </button>
            <button onClick={() => handleTabChange("therapies")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "therapies" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground border-2 border-primary/40 animate-border-glow"}`}>
              Therapies & Massages
            </button>
          </div>
        </div>

        <div key={activeTab} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 animate-fade-in">
          {currentItems.map((item, index) => {
          const isHiddenOnMobile = index >= 4 && !showAll;
          const Icon = item.icon;
          return <div key={index} className={`bg-card rounded-lg p-3 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center md:items-start md:text-left min-h-[120px] md:min-h-0 ${isHiddenOnMobile ? 'hidden md:flex' : 'flex'}`}>
                <div className="bg-accent/10 text-accent w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-heading font-bold text-accent md:mb-2">
                  {item.title}
                </h3>
                {'benefit' in item && (item as { benefit?: string }).benefit && (
                  <p className="text-xs text-primary font-light md:hidden">
                    {(item as { benefit?: string }).benefit}
                  </p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed hidden md:block">
                  {item.description}
                </p>
              </div>;
        })}
        </div>

        {/* See all / See less chip - mobile only, show when more than 4 items */}
        {currentItems.length > 4 && <div className="flex justify-center mt-6 md:hidden">
          <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors">
            {showAll ? <>
                See less
                <ChevronUp className="w-4 h-4" />
              </> : <>
                See all {activeTab === "conditions" ? "conditions" : "therapies"}
                <ChevronDown className="w-4 h-4" />
              </>}
          </button>
        </div>}
      </div>
    </section>;
};