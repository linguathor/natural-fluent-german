"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useContent, useLanguage } from "@/lib/language-context";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TopicsSection() {
  const c = useContent().topics;
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const total = c.topics.length;
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % total);
    }, 3500);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % total);
    resetAutoplay();
  }, [total, resetAutoplay]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + total) % total);
    resetAutoplay();
  }, [total, resetAutoplay]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      resetAutoplay();
    },
    [resetAutoplay]
  );

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [resetAutoplay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

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
      <div className="relative mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/7]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background images */}
          {c.topics.map((topic, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={topic.image}
                alt={topic.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Navigation arrows — inside overflow-hidden so they're always visible */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110"
            aria-label="Vorheriges Thema"
          >
            <ChevronLeft className="h-5 w-5 text-stone-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110"
            aria-label="Nächstes Thema"
          >
            <ChevronRight className="h-5 w-5 text-stone-700" />
          </button>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-14 py-12 text-center md:px-20 md:py-16">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-400 mb-4">
              Thema {current + 1} von {total}
            </p>
            <p className="text-2xl font-bold text-white md:text-3xl lg:text-4xl min-h-[2.5em] flex items-center justify-center">
              {c.topics[current].label}
            </p>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {c.topics.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-emerald-500"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Thema ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: arrows outside the card */}
        <button
          onClick={prev}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110"
          aria-label="Vorheriges Thema"
        >
          <ChevronLeft className="h-5 w-5 text-stone-700" />
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110"
          aria-label="Nächstes Thema"
        >
          <ChevronRight className="h-5 w-5 text-stone-700" />
        </button>
      </div>

      <p className="mt-6 text-center text-base text-stone-500 md:text-lg">
        {language === "de"
          ? "… und viele weitere Themen, die dich wirklich weiterbringen."
          : "… and many more topics that'll genuinely move the needle."}
      </p>

    </SectionShell>
  );
}
