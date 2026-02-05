 import { Stethoscope, Flame, HandHeart, Activity, Check } from "lucide-react";
 import uniqueTreatmentsBg from "@/assets/unique-treatments-bg.jpg";
 
 const uniqueFeatures = [
   {
     text: "Doctor-guided classical and proprietary treatments with personalised and authentic Kerala Ayurveda products for maximum benefits",
     icon: Stethoscope,
     animation: "animate-pulse"
   },
   {
     text: "Oils heated to the optimal temperatures - the way body accepts best",
     icon: Flame,
     animation: "animate-heat-wave"
   },
   {
     text: "Chaturhasta Abhyanga - two therapists, four hands for deeper relaxation",
     icon: HandHeart,
     animation: "animate-hand-sync"
   },
   {
     text: "Guided therapeutic positions - for promoting balanced circulation and head to toe healing",
     icon: Activity,
     animation: "animate-flow"
   },
   {
     text: "Gentle finishing ritual - to leave you grounded and refreshed - and prevent any post treatment issues",
     icon: Check,
     animation: "animate-gentle-glow"
   }
 ];
 
 export const UniqueTreatmentsSection = () => {
   return (
     <section 
       aria-labelledby="unique-treatments-heading" 
      className="relative py-16 md:py-24 px-4 overflow-hidden"
     >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={uniqueTreatmentsBg}
          alt="Ayurvedic treatment in progress"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
      </div>
       
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 
            id="unique-treatments-heading"
            className="text-3xl md:text-5xl font-heading text-white mb-4"
          >
            What Makes Our Treatments Unique
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Our proprietary treatments curated as per classical texts utilise authentic products to ensure maximum benefits.
          </p>
        </div>

         <div className="relative overflow-hidden">
           <div className="flex gap-6 animate-scroll-fast" style={{ willChange: 'transform' }}>
             <div className="flex gap-6">
               {uniqueFeatures.map((feature, index) => {
                 const Icon = feature.icon;
                 return (
                   <div
                     key={`g1-${index}`}
                    className="flex-shrink-0 w-64 bg-white/10 border border-white/20 rounded-lg px-5 py-4 backdrop-blur-sm"
                   >
                     <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 mt-0.5 text-white ${feature.animation}`}>
                         <Icon className="h-5 w-5" strokeWidth={1.5} />
                       </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                         {feature.text}
                       </p>
                     </div>
                   </div>
                 );
               })}
             </div>
             <div className="flex gap-6" aria-hidden="true">
               {uniqueFeatures.map((feature, index) => {
                 const Icon = feature.icon;
                 return (
                   <div
                     key={`g2-${index}`}
                    className="flex-shrink-0 w-64 bg-white/10 border border-white/20 rounded-lg px-5 py-4 backdrop-blur-sm"
                   >
                     <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 mt-0.5 text-white ${feature.animation}`}>
                         <Icon className="h-5 w-5" strokeWidth={1.5} />
                       </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                         {feature.text}
                       </p>
                     </div>
                   </div>
                 );
               })}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };