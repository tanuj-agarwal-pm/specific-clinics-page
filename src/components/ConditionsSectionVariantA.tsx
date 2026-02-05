import { Bone, Apple, Leaf, Gauge, HeartPulse, HeartHandshake, Baby, Wind, Moon, Droplets } from "lucide-react";
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
export const ConditionsSectionVariantA = () => {
  return <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4 text-center">Conditions We Support</h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {conditions.map((condition, index) => {
          const Icon = condition.icon;
          return <div key={index} className="bg-card rounded-lg p-3 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center md:items-start md:text-left">
                <div className="bg-accent/10 text-accent w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-heading text-accent md:mb-2">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed hidden md:block">
                  {condition.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};