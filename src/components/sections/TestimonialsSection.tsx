"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Star } from "lucide-react";
import Image from "next/image";

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
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              {/* Avatar + Name */}
              <div className="mb-4 flex items-center gap-3">
                {t.avatar ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone-200 text-lg font-bold text-stone-500">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              </div>

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

              <blockquote className="flex-1 text-sm text-stone-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}
