"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { AlertCircle } from "lucide-react";

const c = landingPageContent.pain;

export default function PainSection() {
  return (
    <SectionShell bg="neutral" id="problem">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Image */}
        <AnimateOnScroll>
          {landingPageContent.media.flemming ? (
            <img
              src={landingPageContent.media.flemming}
              alt="Flemming"
              className="w-full rounded-2xl object-cover"
            />
          ) : (
            <ImagePlaceholder label="TODO: Bild von Flemming" />
          )}
        </AnimateOnScroll>

        {/* Right: Pain points */}
        <div>
          <AnimateOnScroll>
            <h2 className="mb-8 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
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
            <div className="mt-8 rounded-xl border-l-4 border-emerald-600 bg-emerald-50 p-6">
              <p className="text-base font-semibold leading-relaxed text-emerald-900">
                {c.insight}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionShell>
  );
}
