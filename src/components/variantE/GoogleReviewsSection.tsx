 import { useState } from "react";
 import { Star } from "lucide-react";
 
 const reviews = [
   {
     name: "Priya Sharma",
     rating: 5,
     text: "I had been struggling with chronic back pain for years. After just 3 sessions of Panchakarma therapy, I felt significant relief. The doctors here truly understand Ayurveda and provide personalized care.",
   },
   {
     name: "Rahul Menon",
     rating: 5,
     text: "The Shirodhara treatment was incredibly relaxing. My stress levels have reduced dramatically and I'm sleeping much better now. Highly recommend Kerala Ayurveda for anyone looking for authentic treatments.",
   },
   {
     name: "Anita Krishnan",
     rating: 5,
     text: "I visited for my PCOD issues and the holistic approach here really helped. The vaidyas are knowledgeable and the therapists are well-trained. Seeing great improvements in my health.",
   },
   {
     name: "Suresh Nair",
     rating: 4,
     text: "Excellent experience with the Abhyanga massage. The clinic is clean, staff is professional, and the treatments are authentic. Will definitely be coming back for more sessions.",
   },
 ];
 
 export const GoogleReviewsSection = () => {
   const [expandedReview, setExpandedReview] = useState<number | null>(null);
 
   return (
     <section className="py-16 md:py-24 px-4 bg-background">
       <div className="container mx-auto max-w-7xl">
         {/* Header */}
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-3">
             Google Reviews
           </h2>
           <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
         </div>
 
         {/* Reviews Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
           {reviews.map((review, index) => {
             const isExpanded = expandedReview === index;
             const shouldTruncate = review.text.length > 120;
             const displayText = shouldTruncate && !isExpanded 
               ? review.text.slice(0, 120) + "..." 
               : review.text;
 
             return (
               <div
                 key={index}
                className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border flex flex-col min-w-[280px] w-[80vw] flex-shrink-0 snap-center md:min-w-0 md:w-auto md:flex-shrink"
               >
                 {/* Star Rating */}
                 <div className="flex gap-0.5 mb-3">
                   {Array.from({ length: 5 }).map((_, i) => (
                     <Star
                       key={i}
                       className={`w-5 h-5 ${
                         i < review.rating
                           ? "fill-yellow-400 text-yellow-400"
                           : "fill-muted text-muted"
                       }`}
                     />
                   ))}
                 </div>
 
                 {/* Review Text */}
                 <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">
                   {displayText}
                   {shouldTruncate && (
                     <button
                       onClick={() => setExpandedReview(isExpanded ? null : index)}
                       className="text-foreground font-semibold underline ml-1 hover:text-primary transition-colors"
                     >
                       {isExpanded ? "Read Less" : "Read More"}
                     </button>
                   )}
                 </p>
 
                 {/* Footer */}
                 <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                   <span className="font-semibold text-foreground text-sm">
                     {review.name.toUpperCase()}
                   </span>
                   <div className="flex items-center gap-2">
                     {/* Google Logo */}
                     <svg
                       className="w-6 h-6"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                         fill="#4285F4"
                       />
                       <path
                         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                         fill="#34A853"
                       />
                       <path
                         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                         fill="#FBBC05"
                       />
                       <path
                         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                         fill="#EA4335"
                       />
                     </svg>
                     <span className="text-xs text-muted-foreground font-medium">
                       POSTED ON
                       <br />
                       GOOGLE
                     </span>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
 };