"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const c = landingPageContent.topics;

export default function TopicsSection() {
  return (
    <SectionShell bg="white" id="themen">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Course mockup */}
        <AnimateOnScroll>
          {landingPageContent.media.courseMockup ? (
            <img
              src={landingPageContent.media.courseMockup}
              alt="Kurs-Mockup"
              className="w-full rounded-2xl object-cover"
            />
          ) : (
            <ImagePlaceholder label="TODO: Kurs-Mockup Bild" />
          )}
        </AnimateOnScroll>

        {/* Right: Topics */}
        <div>
          <AnimateOnScroll>
            <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-stone-600">
              {c.intro}
            </p>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3">
            {c.topics.map((topic, i) => (
              <AnimateOnScroll key={i} delay={i * 0.04}>
                <span className="inline-block rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800">
                  {topic}
                </span>
              </AnimateOnScroll>
            ))}
            <AnimateOnScroll delay={0.4}>
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                + viele weitere relevante Themen
              </span>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
