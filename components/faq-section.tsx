"use client"

import { useState, useEffect, useRef } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is Davon built for inside the hospital?",
    shortAnswer:
      "Davon is designed for clinical engineering teams, IT departments, and hospital administrators who need comprehensive equipment monitoring and maintenance solutions.",
    detailedAnswer:
      "Our platform helps bridge the gap between technical maintenance needs and clinical operations, providing actionable insights to ensure equipment reliability and patient safety.",
  },
  {
    question: "How is Davon different from a traditional CMMS or EAM platform?",
    shortAnswer:
      "Unlike traditional CMMS/EAM systems that focus on reactive maintenance, Davon uses AI-powered predictive analytics to anticipate equipment failures before they occur.",
    detailedAnswer:
      "We integrate seamlessly with existing hospital systems and provide real-time insights across multiple departments, enabling proactive maintenance strategies that reduce downtime and improve operational efficiency.",
  },
  {
    question: "Which types of equipment and departments can Davon monitor?",
    shortAnswer:
      "Davon can monitor medical equipment across all hospital departments including radiology, cardiology, surgery, ICU, and general wards.",
    detailedAnswer:
      "We support monitoring of MRI machines, CT scanners, ventilators, infusion pumps, surgical equipment, patient monitors, and virtually any connected medical device to ensure comprehensive equipment oversight.",
  },
  {
    question:
      "How does Davon connect with our existing CMMS, EHR, BMS, and IoT gateways?",
    shortAnswer:
      "Davon uses secure API integrations and HL7/FHIR standards to connect with existing hospital systems.",
    detailedAnswer:
      "Our platform supports multiple integration methods including REST APIs, webhooks, and direct database connections while maintaining HIPAA compliance and ensuring secure data exchange between systems.",
  },
  {
    question:
      "Where is our data stored and how do you handle security, privacy, and compliance?",
    shortAnswer:
      "All data is stored in SOC 2 Type II certified, HIPAA compliant cloud infrastructure with end-to-end encryption.",
    detailedAnswer:
      "We implement role-based access controls, regular security audits, comprehensive backup strategies, and adhere to all relevant healthcare data protection regulations to ensure complete data protection and privacy.",
  },
  {
    question: "How long does it typically take to go live in one hospital?",
    shortAnswer:
      "Typical implementation takes 4-8 weeks depending on hospital size and complexity.",
    detailedAnswer:
      "This includes system integration, equipment tagging, staff training, and validation testing. We provide dedicated implementation specialists throughout the entire process to ensure smooth deployment.",
  },
  {
    question:
      "Can Davon support multi‑hospital groups and system‑wide visibility?",
    shortAnswer:
      "Yes, Davon is designed for enterprise healthcare systems with centralized dashboards for system-wide visibility.",
    detailedAnswer:
      "We provide centralized dashboards for system-wide visibility while maintaining appropriate access controls for individual hospital locations and departments, ensuring both comprehensive oversight and data security.",
  },
  {
    question:
      "What does onboarding and training look like for our clinical engineering team?",
    shortAnswer:
      "We provide comprehensive training including online modules, hands-on workshops, and ongoing support.",
    detailedAnswer:
      "Training covers equipment monitoring, predictive maintenance workflows, reporting, and integration with existing hospital processes. Our training team works closely with your staff to ensure successful adoption and utilization.",
  },
  {
    question: "What kind of support do you provide after go‑live?",
    shortAnswer:
      "We offer 24/7 technical support, regular system updates, performance monitoring, and continuous optimization.",
    detailedAnswer:
      "Our team provides quarterly business reviews and helps you maximize the value from your Davon investment through ongoing support, feature enhancements, and performance optimization recommendations.",
  },
  {
    question: "How do you price Davon—per asset, per site, or per user?",
    shortAnswer:
      "Pricing is typically based on the number of monitored assets with volume discounts for larger deployments.",
    detailedAnswer:
      "We offer flexible licensing models including annual subscriptions and can accommodate custom enterprise pricing structures based on your specific needs and scale of operations.",
  },
]

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


