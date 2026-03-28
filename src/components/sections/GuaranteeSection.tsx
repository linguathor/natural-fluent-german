"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ShieldCheck } from "lucide-react";

const c = landingPageContent.guarantee;

export default function GuaranteeSection() {
  return (
    <SectionShell bg="accent" id="garantie">
      <AnimateOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <ShieldCheck className="h-8 w-8 text-emerald-700" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl">
            {c.headline}
          </h2>
          <p className="text-lg leading-relaxed text-stone-600">{c.text}</p>
        </div>
      </AnimateOnScroll>
    </SectionShell>
  );
}
