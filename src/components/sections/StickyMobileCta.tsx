"use client";

import { landingPageContent } from "@/content/landing-page";
import CtaButton from "@/components/ui/CtaButton";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="flex items-center gap-3">
        <CtaButton
          cta={landingPageContent.hero.primaryCta}
          variant="primary"
          size="sm"
          trackingLocation="sticky"
          trackingOffer="challenge"
          className="flex-1 justify-center text-sm"
        />
        <CtaButton
          cta={landingPageContent.coaching.cta}
          variant="ghost"
          size="sm"
          trackingLocation="sticky"
          trackingOffer="coaching"
          className="shrink-0 text-xs"
        />
      </div>
    </div>
  );
}
