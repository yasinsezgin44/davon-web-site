import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is Davon built for inside the hospital?",
    placeholder: "Add your answer here.",
  },
  {
    question: "How is Davon different from a traditional CMMS or EAM platform?",
    placeholder: "Add your answer here.",
  },
  {
    question: "Which types of equipment and departments can Davon monitor?",
    placeholder: "Add your answer here.",
  },
  {
    question: "How does Davon connect with our existing CMMS, EHR, BMS, and IoT gateways?",
    placeholder: "Add your answer here.",
  },
  {
    question: "Where is our data stored and how do you handle security, privacy, and compliance?",
    placeholder: "Add your answer here.",
  },
  {
    question: "How long does it typically take to go live in one hospital?",
    placeholder: "Add your answer here.",
  },
  {
    question: "Can Davon support multi‑hospital groups and system‑wide visibility?",
    placeholder: "Add your answer here.",
  },
  {
    question: "What does onboarding and training look like for our clinical engineering team?",
    placeholder: "Add your answer here.",
  },
  {
    question: "What kind of support do you provide after go‑live?",
    placeholder: "Add your answer here.",
  },
  {
    question: "How do you price Davon—per asset, per site, or per user?",
    placeholder: "Add your answer here.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative z-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-slate-500 rounded-full mr-2" />
            Frequently asked questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-balance mb-3">
            Everything your team wants to know before saying “yes”
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Use this section to answer the most common questions from clinical engineering,
            finance, and IT so everyone feels confident adopting Davon.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index + 1}`}
              className="border-slate-200"
            >
              <AccordionTrigger className="text-left text-slate-900 text-sm sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.placeholder}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


