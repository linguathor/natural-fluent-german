"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CtaButton from "@/components/ui/CtaButton";

const c = landingPageContent.finalCta;

export default function FinalCtaSection() {
  return (
    <SectionShell bg="neutral" id="start">
      <AnimateOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-stone-600">
            {c.text}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton
              cta={c.primaryCta}
              variant="primary"
              size="lg"
              trackingLocation="final"
              trackingOffer="challenge"
            />
          </div>

          <p className="mt-6 text-sm text-stone-400">{c.reassurance}</p>
        </div>
      </AnimateOnScroll>
    </SectionShell>
  );
}
