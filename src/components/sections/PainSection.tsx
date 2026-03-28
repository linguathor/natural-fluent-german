"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { AlertCircle } from "lucide-react";

const c = landingPageContent.pain;

export default function PainSection() {
  return (
    <SectionShell bg="neutral" id="problem">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto max-w-2xl space-y-4">
        {c.points.map((point, i) => (
          <AnimateOnScroll key={i} delay={i * 0.08}>
            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <p className="text-stone-700 leading-relaxed">{point.text}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.35}>
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border-l-4 border-emerald-600 bg-emerald-50 p-6">
          <p className="text-base font-semibold leading-relaxed text-emerald-900">
            {c.insight}
          </p>
        </div>
      </AnimateOnScroll>
    </SectionShell>
  );
}
