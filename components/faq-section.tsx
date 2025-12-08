\"use client\"

import { useState, useEffect, useRef } from \"react\"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from \"@/components/ui/collapsible\"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from \"@/components/ui/accordion\"
import { faqs } from \"@/lib/faq-data\"

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative z-10 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-slate-500 rounded-full mr-2" />
            Frequently asked questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-balance mb-3">
            Everything your team wants to know before saying “yes”
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Use this section to answer the most common questions from clinical
            engineering, finance, and IT so everyone feels confident adopting
            Davon.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
                  <p>{item.shortAnswer}</p>
                  <Collapsible>
                    <CollapsibleTrigger className="mt-3 inline-flex items-center text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4">
                      Show detailed answer
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.detailedAnswer}
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


