"use client";

import { useContent } from "@/lib/language-context";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

export default function LessonStepsSection() {
  const c = useContent().lessonSteps;
  return (
    <SectionShell bg="neutral" id="lektion">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto max-w-3xl space-y-4">
        {c.steps.map((step, i) => (
          <AnimateOnScroll key={i} delay={i * 0.08}>
            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.45}>
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/kurs-screenshot.webp"
            alt="Screenshot der Kursplattform"
            width={900}
            height={506}
            className="w-full"
          />
        </div>
      </AnimateOnScroll>
    </SectionShell>
  );
}
