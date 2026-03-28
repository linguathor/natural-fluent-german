"use client";

import { useState, useEffect, useCallback } from "react";
import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

const c = landingPageContent.topics;

export default function TopicsSection() {
  const [current, setCurrent] = useState(0);
  const total = c.topics.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <SectionShell bg="neutral" id="themen">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-stone-600">
            {c.intro}
          </p>
        </div>
      </AnimateOnScroll>

      {/* Topic carousel */}
      <div className="relative mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl bg-stone-900 px-8 py-12 text-center md:px-16 md:py-16">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400 mb-4">
            Thema {current + 1} von {total}
          </p>
          <p className="text-xl font-bold text-white md:text-2xl lg:text-3xl min-h-[2.5em] flex items-center justify-center">
            {c.topics[current]}
          </p>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {c.topics.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-emerald-500"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Thema ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 md:-left-5"
          aria-label="Vorheriges Thema"
        >
          <ChevronLeft className="h-5 w-5 text-stone-700" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 md:-right-5"
          aria-label="Nächstes Thema"
        >
          <ChevronRight className="h-5 w-5 text-stone-700" />
        </button>
      </div>

      {/* All topics as chips below */}
      <AnimateOnScroll delay={0.2}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {c.topics.map((topic, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`inline-block rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                i === current
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : "border-stone-200 bg-stone-50 text-stone-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
              }`}
            >
              {topic}
            </button>
          ))}
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            + viele weitere relevante Themen
          </span>
        </div>
      </AnimateOnScroll>
    </SectionShell>
  );
}
