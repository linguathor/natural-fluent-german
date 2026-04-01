"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CheckCircle2, TrendingUp } from "lucide-react";

const c = landingPageContent.courseStructure;

export default function CourseStructureSection() {
  return (
    <SectionShell bg="neutral" id="ablauf">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      {/* Timeline */}
      <div className="relative mx-auto mt-14 max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-emerald-200 md:block" />

        <div className="space-y-6">
          {c.days.map((day, i) => {
            const isLast = i === c.days.length - 1;
            return (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="relative flex gap-5 md:pl-16">
                  {/* Circle on line */}
                  <div
                    className={`hidden md:flex absolute left-4 top-5 h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full ${
                      isLast
                        ? "bg-emerald-600"
                        : "border-2 border-emerald-400 bg-white"
                    }`}
                  >
                    {isLast && (
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    )}
                  </div>

                  <div className="flex-1 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="mb-1 inline-block text-sm font-bold text-emerald-700">
                          {day.day}
                        </span>
                        <h3 className="mb-1 text-base font-semibold text-stone-900">
                          {day.title}
                        </h3>
                        <p className="text-sm text-stone-600">{day.description}</p>
                      </div>
                      {day.milestone && (
                        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                          <TrendingUp className="h-3.5 w-3.5" />
                          <span>{day.milestone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      <AnimateOnScroll delay={0.4}>
        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-stone-500">
          {c.note}
        </p>
      </AnimateOnScroll>
    </SectionShell>
  );
}
