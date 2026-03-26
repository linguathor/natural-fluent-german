"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Star, User } from "lucide-react";

const c = landingPageContent.testimonials;

export default function TestimonialsSection() {
  return (
    <SectionShell bg="white" id="erfahrungen">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 md:grid-cols-3">
        {c.testimonials.map((t, i) => (
          <AnimateOnScroll key={i} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl border p-6 ${
                t.isPlaceholder
                  ? "border-dashed border-stone-300 bg-stone-50"
                  : "border-stone-200 bg-white shadow-sm"
              }`}
            >
              {t.isPlaceholder && (
                <span className="absolute -top-3 left-4 rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                  Platzhalter
                </span>
              )}

              {/* Rating */}
              {t.rating && (
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              )}

              <blockquote className="mb-4 text-stone-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200">
                    <User className="h-5 w-5 text-stone-400" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}
