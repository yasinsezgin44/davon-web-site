export type FAQItem = {
  question: string
  shortAnswer: string
  detailedAnswer: string
}

export const faqs: FAQItem[] = [
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


