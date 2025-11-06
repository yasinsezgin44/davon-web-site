'use client';

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQComponent() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is your platform 100% HIPAA compliant?",
      answer: "Yes. We are fully HIPAA-compliant and SOC 2 Type II certified. Our platform is built on a secure-by-design infrastructure to protect your ePHI and ensure you meet all regulatory requirements. We undergo annual third-party audits and provide detailed compliance documentation to support your own audit processes."
    },
    {
      question: "How long does implementation take? Will you train our staff?",
      answer: "Our process is designed for busy, active hospital environments. A standard implementation can be completed in as little as 4-6 weeks. We provide comprehensive, on-site and remote training for your technical teams and end-users to ensure seamless adoption and immediate value. Our customer success team remains with you throughout the entire process."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer flexible pricing plans based on the size of your institution, number of assets, and specific modules you need. We provide a transparent, all-inclusive quote with no hidden fees. Contact us for a personalized demonstration and detailed pricing proposal tailored to your hospital's specific needs and requirements."
    },
    {
      question: "Can your platform integrate with our existing hospital systems?",
      answer: "Absolutely. Our platform connects seamlessly with major EHR systems (Epic, Cerner, Meditech), ERP solutions, and other hospital management systems. We offer pre-built integrations and APIs to ensure your data flows securely between systems without creating data silos."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, dedicated customer success managers, and comprehensive training resources. Our support team includes healthcare IT specialists who understand hospital workflows and compliance requirements. We also offer regular system updates and enhancement releases at no additional cost."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Your Questions Answered
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          We understand that choosing a new healthcare technology platform is a significant decision.
          Here are the answers to the questions that matter most to hospital leaders.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Our healthcare technology experts are here to answer any questions
            and provide a personalized demonstration for your hospital.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
