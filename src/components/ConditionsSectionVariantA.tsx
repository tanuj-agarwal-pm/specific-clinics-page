import { Bone, ActivitySquare, Sparkles, Activity, HeartPulse, Users, Baby, Wind, Moon } from "lucide-react";

const conditions = [{
  icon: Bone,
  title: "Bone and Muscular Pain Management",
  description: "Therapeutic treatments to reduce inflammation and restore mobility naturally and effectively."
}, {
  icon: ActivitySquare,
  title: "Gut & Digestive Health",
  description: "Comprehensive digestive care addressing indigestion, gut healing, and overall digestive wellness through Ayurvedic principles."
}, {
  icon: Sparkles,
  title: "Skin & Hair Issues",
  description: "Natural remedies for healthy skin and hair through Ayurvedic treatments and herbal formulations."
}, {
  icon: Activity,
  title: "Obesity & Diabetic Management",
  description: "Holistic approach to weight management and blood sugar control through personalized Ayurvedic care."
}, {
  icon: HeartPulse,
  title: "Hypertension & Stress Management",
  description: "Natural solutions to manage blood pressure and reduce stress through Ayurvedic practices and therapies."
}, {
  icon: Users,
  title: "Women's Health - PCOD, PCOS, Menopause",
  description: "Specialized care for women's hormonal health addressing PCOD, PCOS, and menopausal symptoms naturally."
}, {
  icon: Baby,
  title: "Infertility Treatment",
  description: "Comprehensive fertility support through Ayurvedic treatments to enhance reproductive health naturally."
}, {
  icon: Wind,
  title: "Respiratory & Liver Health",
  description: "Natural remedies for respiratory conditions and liver detoxification to support optimal organ function."
}, {
  icon: Moon,
  title: "Sleep & General Wellness",
  description: "Natural solutions to improve sleep quality and achieve lasting health and vitality through Ayurvedic practices."
}];

export const ConditionsSectionVariantA = () => {
  return <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">Conditions We Support</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">Whether you are struggling with a health condition or looking to step up your general wellness, Kerala Ayurveda can help you reach your best self.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => {
          const Icon = condition.icon;
          return <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading text-accent mb-2">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {condition.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
