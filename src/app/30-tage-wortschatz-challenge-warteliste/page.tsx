import type { Metadata } from "next";
import Script from "next/script";
import { landingPageContent } from "@/content/landing-page";

import SectionNav from "@/components/sections/SectionNav";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PainSection from "@/components/sections/PainSection";
import MethodSection from "@/components/sections/MethodSection";
import CourseStructureSection from "@/components/sections/CourseStructureSection";
import LessonStepsSection from "@/components/sections/LessonStepsSection";
import TopicsSection from "@/components/sections/TopicsSection";
import TransformationSection from "@/components/sections/TransformationSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FitSection from "@/components/sections/FitSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { CheckoutUrlProvider } from "@/lib/checkout-url-context";

const WARTELISTE_CHECKOUT = "https://www.copecart.com/products/b6910dd6/checkout";

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
    url: "https://naturalfluentgerman.com/30-tage-wortschatz-challenge-warteliste",
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
    canonical:
      "https://naturalfluentgerman.com/30-tage-wortschatz-challenge-warteliste",
  },
  robots: { index: false },
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
      price: "179",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}

export default function WortschatzChallengeWartelistePage() {
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

      {/* Deadline Funnel */}
      <Script
        id="deadline-funnel"
        type="text/javascript"
        data-cfasync="false"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `function SendUrlToDeadlineFunnel(e){var r,t,c,a,h,n,o,A,i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=0,l=0,s="",u=[];if(!e)return e;do r=e.charCodeAt(d++),t=e.charCodeAt(d++),c=e.charCodeAt(d++),A=r<<16|t<<8|c,a=A>>18&63,h=A>>12&63,n=A>>6&63,o=63&A,u[l++]=i.charAt(a)+i.charAt(h)+i.charAt(n)+i.charAt(o);while(d<e.length);s=u.join("");var C=e.length%3;var decoded = (C?s.slice(0,C-3):s)+"===".slice(C||3);decoded = decoded.replace("+", "-");decoded = decoded.replace("/", "_");return decoded;} var dfUrl = SendUrlToDeadlineFunnel(location.href); var dfParentUrlValue;try {dfParentUrlValue = window.parent.location.href;} catch(err) {if(err.name === "SecurityError") {dfParentUrlValue = document.referrer;}}var dfParentUrl = (parent !== window) ? ("/" + SendUrlToDeadlineFunnel(dfParentUrlValue)) : "";(function() {var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.setAttribute("data-scriptid", "dfunifiedcode");s.src ="https://a.deadlinefunnel.com/unified/reactunified.bundle.js?userIdHash=eyJpdiI6Inc1WHU5ekpQcUJyTDB1VXhLRHFLUkE9PSIsInZhbHVlIjoiYnprN0kvdGRnSERUTkY2bUl2WHlIdz09IiwibWFjIjoiMDIzNTg1ZWNiMjIzNDAzMzI4OGFmMWRmZGI5MzI3YmEyNTcxZmIyYTk4MGE5N2QzMzQ0N2Q2NzcyYTkyYTc4YSJ9&pageFromUrl="+dfUrl+"&parentPageFromUrl="+dfParentUrl;var s2 = document.getElementsByTagName("script")[0];s2.parentNode.insertBefore(s, s2);})();`,
        }}
      />

      <SectionNav />

      <main>
        <CheckoutUrlProvider url={WARTELISTE_CHECKOUT}>
        <HeroSection />
        <SocialProofSection />
        <PainSection />
        <MethodSection />
        <TransformationSection />
        <CourseStructureSection />
        <LessonStepsSection />
        <TopicsSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection
          challengePriceOverride="95 €"
        />
        <GuaranteeSection />
        <FitSection />
        <FaqSection />
        <FinalCtaSection />
        </CheckoutUrlProvider>
      </main>
    </>
  );
}
