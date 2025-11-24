import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { FeaturesSection } from "@/components/features-section";
import { AITeamSection } from "@/components/ai-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";

// FAQ data for structured data
const faqData = [
  {
    question: "Who is Davon built for inside the hospital?",
    answer:
      "Davon is designed for clinical engineering teams, IT departments, and hospital administrators who need comprehensive equipment monitoring and maintenance solutions. Our platform helps bridge the gap between technical maintenance needs and clinical operations.",
  },
  {
    question: "How is Davon different from a traditional CMMS or EAM platform?",
    answer:
      "Unlike traditional CMMS/EAM systems that focus on reactive maintenance, Davon uses AI-powered predictive analytics to anticipate equipment failures before they occur. We integrate seamlessly with existing hospital systems and provide real-time insights across multiple departments.",
  },
  {
    question: "Which types of equipment and departments can Davon monitor?",
    answer:
      "Davon can monitor medical equipment across all hospital departments including radiology, cardiology, surgery, ICU, and general wards. We support monitoring of MRI machines, CT scanners, ventilators, infusion pumps, surgical equipment, and more.",
  },
  {
    question:
      "How does Davon connect with our existing CMMS, EHR, BMS, and IoT gateways?",
    answer:
      "Davon uses secure API integrations and HL7/FHIR standards to connect with existing hospital systems. Our platform supports multiple integration methods including REST APIs, webhooks, and direct database connections while maintaining HIPAA compliance.",
  },
  {
    question:
      "Where is our data stored and how do you handle security, privacy, and compliance?",
    answer:
      "All data is stored in SOC 2 Type II certified, HIPAA compliant cloud infrastructure with end-to-end encryption. We implement role-based access controls, regular security audits, and comprehensive backup strategies to ensure data protection.",
  },
  {
    question: "How long does it typically take to go live in one hospital?",
    answer:
      "Typical implementation takes 4-8 weeks depending on hospital size and complexity. This includes system integration, equipment tagging, staff training, and validation testing. We provide dedicated implementation specialists throughout the process.",
  },
  {
    question:
      "Can Davon support multi‑hospital groups and system‑wide visibility?",
    answer:
      "Yes, Davon is designed for enterprise healthcare systems. We provide centralized dashboards for system-wide visibility while maintaining appropriate access controls for individual hospital locations and departments.",
  },
  {
    question:
      "What does onboarding and training look like for our clinical engineering team?",
    answer:
      "We provide comprehensive training including online modules, hands-on workshops, and ongoing support. Training covers equipment monitoring, predictive maintenance workflows, reporting, and integration with existing hospital processes.",
  },
  {
    question: "What kind of support do you provide after go‑live?",
    answer:
      "We offer 24/7 technical support, regular system updates, performance monitoring, and continuous optimization. Our team provides quarterly business reviews and helps you maximize the value from your Davon investment.",
  },
  {
    question: "How do you price Davon—per asset, per site, or per user?",
    answer:
      "Pricing is typically based on the number of monitored assets with volume discounts for larger deployments. We offer flexible licensing models including annual subscriptions and can accommodate custom enterprise pricing structures.",
  },
];

// Generate comprehensive structured data
const generateStructuredData = () => {
  return [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Davon.Health",
      url: "https://davon.health",
      logo: "https://davon.health/logo-white.webp",
      description:
        "AI-powered healthcare equipment monitoring and predictive maintenance platform for hospitals and healthcare facilities.",
      foundingDate: "2024",
      industry: "Healthcare Technology",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: [
        "https://linkedin.com/company/davon-health",
        "https://twitter.com/davonhealth",
      ],
    },
    // WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Davon.Health",
      url: "https://davon.health",
      description:
        "AI-powered predictive maintenance platform for healthcare equipment monitoring and management.",
      publisher: {
        "@type": "Organization",
        name: "Davon.Health",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://davon.health/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    // FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: "Davon - AI-Powered Healthcare Equipment Monitoring FAQ",
      description:
        "Frequently asked questions about Davon's AI-powered predictive maintenance platform for healthcare equipment monitoring and management.",
      url: "https://davon.health",
      datePublished: "2025-11-24",
      dateModified: "2025-11-24",
      publisher: {
        "@type": "Organization",
        name: "Davon.Health",
        url: "https://davon.health",
      },
      mainEntity: faqData.map((faq, index) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
};

export default function HomePage() {
  const structuredData = generateStructuredData();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Organization, WebSite, and FAQPage Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
      <main className="min-h-screen relative overflow-hidden">
        {/* Page content above aurora and background image */}
        <div className="relative z-20">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
