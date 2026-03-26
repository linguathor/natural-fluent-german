import type { Metadata } from "next";
import { landingPageContent } from "@/content/landing-page";

import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import MethodSection from "@/components/sections/MethodSection";
import CourseStructureSection from "@/components/sections/CourseStructureSection";
import TopicsSection from "@/components/sections/TopicsSection";
import TransformationSection from "@/components/sections/TransformationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoachingSection from "@/components/sections/CoachingSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FitSection from "@/components/sections/FitSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import StickyMobileCta from "@/components/sections/StickyMobileCta";

// ── SEO Metadata ────────────────────────────────
export const metadata: Metadata = {
  title:
    "30 Tage Wortschatz-Challenge – Jedes Gespräch auf Deutsch souverän führen | Natural Fluent German",
  description:
    "Schluss mit Denkpausen und Unsicherheit. Aktiviere in nur einem Monat den Wortschatz, den du für den echten Alltag und deine Karriere in Deutschland wirklich brauchst. Für B1–B2 Deutschlernende.",
  keywords: [
    "30 Tage Wortschatz Challenge",
    "Deutsch sprechen",
    "B1 B2 Deutsch",
    "aktiver Wortschatz",
    "Deutsch für Alltag und Beruf",
    "Deutsch lernen in Deutschland",
    "Umgangssprache",
    "flüssiger sprechen",
    "Deutschkurs",
    "Wortschatz aktivieren",
  ],
  openGraph: {
    title: "30 Tage Wortschatz-Challenge | Natural Fluent German",
    description:
      "Aktiviere in 30 Tagen den Wortschatz, den du für den echten Alltag und deine Karriere in Deutschland brauchst.",
    url: "https://naturalfluentgerman.com/30-tage-wortschatz-challenge",
    siteName: "Natural Fluent German",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Tage Wortschatz-Challenge | Natural Fluent German",
    description:
      "Aktiviere in 30 Tagen den Wortschatz für den echten Alltag und deine Karriere in Deutschland.",
  },
  alternates: {
    canonical: "https://naturalfluentgerman.com/30-tage-wortschatz-challenge",
  },
};

// ── FAQ Schema ──────────────────────────────────
function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingPageContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ── Course Schema ───────────────────────────────
function generateCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "30 Tage Wortschatz-Challenge",
    description:
      "Aktiviere in 30 Tagen den Wortschatz, den du für den echten Alltag und deine Karriere in Deutschland brauchst.",
    provider: {
      "@type": "Organization",
      name: "Natural Fluent German",
      url: "https://naturalfluentgerman.com",
    },
    inLanguage: "de",
    offers: {
      "@type": "Offer",
      price: "189",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}

export default function WortschatzChallengePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCourseSchema()),
        }}
      />

      <main>
        <HeroSection />
        <PainSection />
        <MethodSection />
        <CourseStructureSection />
        <TopicsSection />
        <TransformationSection />
        <TestimonialsSection />
        <CoachingSection />
        <PricingSection />
        <GuaranteeSection />
        <FitSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <StickyMobileCta />
    </>
  );
}
