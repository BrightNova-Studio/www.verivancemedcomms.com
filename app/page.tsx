import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhyVerivance from "@/components/why-verivance"
import Courses from "@/components/courses"
import Placements from "@/components/placements"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Verivance Academy | Clinical Research & Pharma Training Institute – Hyderabad",
  description:
    "India's leading pharma training institute in Hyderabad. Expert-designed courses in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, Clinical Data Management, Clinical SAS & AI in Pharma. 1000+ students trained, 100+ hiring partners.",
  alternates: {
    canonical: "https://verivancemedcomms.com",
  },
  openGraph: {
    url: "https://verivancemedcomms.com",
    title: "Verivance Academy | Clinical Research & Pharma Training – Hyderabad",
    description:
      "India's leading pharma training institute. 1000+ students trained. Courses in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, CDM, Clinical SAS & AI in Pharma.",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Verivance Academy",
  alternateName: "Verivance MedComms",
  url: "https://verivancemedcomms.com",
  logo: "https://verivancemedcomms.com/logo.png",
  description:
    "India's leading clinical research and pharmaceutical training institute in Hyderabad, offering expert-designed certification programs in Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, Clinical Data Management, Clinical SAS, and AI in Pharma.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9550130545",
    contactType: "customer service",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  sameAs: [
    "https://x.com/Verivance",
    "https://www.instagram.com/verivancemedcomms/",
  ],
  numberOfStudents: { "@type": "QuantitativeValue", value: 1000 },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verivance Academy",
  url: "https://verivancemedcomms.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://verivancemedcomms.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pharma & Clinical Research Courses – Verivance Academy",
  description: "Industry-recognized certification programs in clinical research and pharmaceutical sciences",
  numberOfItems: 10,
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type": "Course",
        name: "5-Domain Job-Ready Program",
        description: "Comprehensive 3-month program covering Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, and Clinical Data Management.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/5-domain-program",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
        timeRequired: "P3M",
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type": "Course",
        name: "Advanced Clinical Research Certification",
        description: "ICH-GCP guidelines, clinical trial protocols, end-to-end trial operations, and regulatory compliance.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/clinical-research",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type": "Course",
        name: "Medical Writing Certification",
        description: "Regulatory writing, clinical study reports, and medical scientific communication.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/medical-writing",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
      },
    },
    {
      "@type": "ListItem", position: 4,
      item: {
        "@type": "Course",
        name: "Pharmacovigilance & Drug Safety Certification",
        description: "Adverse event case processing, safety risk evaluation, signal detection, and global PV regulations.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/pharmacovigilance",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
      },
    },
    {
      "@type": "ListItem", position: 5,
      item: {
        "@type": "Course",
        name: "AI in Pharma Innovation Program",
        description: "AI applications in drug discovery, clinical trials, pharmacovigilance, regulatory affairs, and medical writing.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/ai-in-pharma",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
        timeRequired: "P1M",
      },
    },
    {
      "@type": "ListItem", position: 6,
      item: {
        "@type": "Course",
        name: "Global Regulatory Affairs Program",
        description: "US FDA, EU MDR, CDSCO frameworks, dossier preparation, regulatory submissions, and post-market compliance.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/regulatory-affairs",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
        timeRequired: "P3M",
      },
    },
    {
      "@type": "ListItem", position: 7,
      item: {
        "@type": "Course",
        name: "Clinical Data Management Certification",
        description: "CRF design, EDC systems, data validation, quality control, and data integrity standards.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/clinical-data-management",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
      },
    },
    {
      "@type": "ListItem", position: 8,
      item: {
        "@type": "Course",
        name: "Stem Cell & Regenerative Therapy Program",
        description: "Stem cell foundations, advanced techniques, hands-on lab training, and industry internship.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/stem-cell-therapy",
        courseMode: "blended",
        educationalCredentialAwarded: "Industry Certificate",
        timeRequired: "P2M",
      },
    },
    {
      "@type": "ListItem", position: 9,
      item: {
        "@type": "Course",
        name: "Clinical SAS Certification",
        description: "Base SAS, Advanced SAS programming, CDISC standards (SDTM, ADaM, TLF), and real-time industry projects.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/clinical-sas",
        courseMode: "online",
        educationalCredentialAwarded: "Industry Certificate",
      },
    },
    {
      "@type": "ListItem", position: 10,
      item: {
        "@type": "Course",
        name: "Professional Internship Programs",
        description: "Live industry projects and expert mentorship in Clinical Research, Pharmacovigilance, Medical Writing, and CDM.",
        provider: { "@type": "Organization", name: "Verivance Academy", sameAs: "https://verivancemedcomms.com" },
        url: "https://verivancemedcomms.com/courses/internship-programs",
        courseMode: "blended",
        educationalCredentialAwarded: "Internship Certificate",
      },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which pharma courses does Verivance Academy offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verivance Academy offers 10 industry-recognized programs: 5-Domain Job-Ready Program, Clinical Research, Medical Writing, Pharmacovigilance, AI in Pharma, Regulatory Affairs, Clinical Data Management, Stem Cell Therapy, Clinical SAS, and Professional Internship Programs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Verivance Academy located in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Verivance Academy is based in Hyderabad, India, and offers online and hybrid training programs for students and working professionals across India.",
      },
    },
    {
      "@type": "Question",
      name: "Does Verivance provide placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Verivance Academy provides end-to-end placement support including resume building, LinkedIn optimization, mock interviews, and ongoing job support with 100+ CRO and pharma hiring partners.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 5-Domain Job-Ready Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 5-Domain Job-Ready Program is Verivance Academy's flagship 3-month certification covering Clinical Research, Pharmacovigilance, Medical Writing, Regulatory Affairs, and Clinical Data Management — all in one program with an industry certificate.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <WhyVerivance />
        <Courses />
        <Placements />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
