import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I have never tried Ayurveda. Is it safe?",
    answer: "Absolutely! Ayurveda is one of the world's oldest holistic healing systems, practiced for over 5,000 years. Our treatments use natural herbs and therapies that are gentle yet effective. Our experienced doctors assess your individual constitution and health condition before recommending any treatment, ensuring complete safety and personalized care."
  },
  {
    question: "I am currently on allopathic medications. Can I try Ayurveda?",
    answer: "Yes, you can. Many of our patients successfully integrate Ayurvedic treatments alongside their existing medications. During your consultation, our doctors will review your current prescriptions and create a complementary treatment plan. We work carefully to ensure there are no interactions, and in many cases, patients have been able to gradually reduce their dependency on certain medications under proper guidance."
  },
  {
    question: "What concerns can Ayurveda treat?",
    answer: "Ayurveda addresses a wide range of health concerns including digestive disorders, skin conditions, joint pain and arthritis, stress and anxiety, sleep disorders, respiratory issues, hormonal imbalances, chronic fatigue, and lifestyle diseases. It's also excellent for preventive care and overall wellness optimization."
  },
  {
    question: "How does Ayurveda handle conditions?",
    answer: "Ayurveda takes a root-cause approach rather than just treating symptoms. Treatment typically involves understanding your unique body constitution (Prakriti), identifying imbalances (Vikriti), and then using a combination of dietary modifications, herbal medicines, therapeutic treatments like Panchakarma, and lifestyle adjustments. This holistic approach promotes lasting healing and prevents recurrence."
  }
];

export const FAQSection = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-muted-foreground">
          Everything you need to know about Ayurvedic care
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
