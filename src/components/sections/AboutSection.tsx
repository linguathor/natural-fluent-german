"use client";

import { useContent } from "@/lib/language-context";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function AboutSection() {
  const c = useContent().aboutFlemming;
  return (
    <SectionShell bg="white" id="ueber-mich">
      <div className="grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
        <AnimateOnScroll>
          <ImagePlaceholder
            label={c.photoPlaceholder}
            className="mx-auto aspect-[3/4] w-64 lg:w-full rounded-2xl"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.12}>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
            <p className="text-lg leading-relaxed text-stone-600">
              {c.text}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
