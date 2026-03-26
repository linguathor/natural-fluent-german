"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CtaButton from "@/components/ui/CtaButton";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const c = landingPageContent.transformation;

export default function TransformationSection() {
  return (
    <SectionShell bg="neutral" id="ergebnis">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div>
          <AnimateOnScroll>
            <h2 className="mb-8 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
          </AnimateOnScroll>

          {/* Stat highlight */}
          <AnimateOnScroll delay={0.1}>
            <div className="mb-8 rounded-2xl bg-emerald-700 p-6 text-center text-white shadow-lg">
              <p className="text-5xl font-extrabold">{c.statHighlight}</p>
              <p className="mt-1 text-sm opacity-90">{c.statLabel}</p>
            </div>
          </AnimateOnScroll>

          {/* Before vs After */}
          <AnimateOnScroll delay={0.15}>
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-red-50 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-red-400">
                  Vorher
                </p>
                <ul className="space-y-2">
                  {c.before.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-red-700"
                    >
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-500">
                  Nachher
                </p>
                <ul className="space-y-2">
                  {c.after.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-emerald-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Outcome bullets */}
          <AnimateOnScroll delay={0.2}>
            <ul className="space-y-3">
              {c.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-stone-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="leading-relaxed">{outcome.text}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>

        {/* Right: Emotional close + Image */}
        <div>
          <AnimateOnScroll delay={0.15}>
            {landingPageContent.media.happyPeople ? (
              <img
                src={landingPageContent.media.happyPeople}
                alt="Menschen im Gespräch"
                className="mb-8 w-full rounded-2xl object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="TODO: Bild von fröhlich plappernden Leuten"
                className="mb-8"
              />
            )}
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.25}>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-600">
                Stell dir vor…
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                {c.emotionalClose}
              </p>
              <div className="mt-6">
                <CtaButton
                  cta={landingPageContent.hero.primaryCta}
                  variant="primary"
                  size="md"
                  trackingLocation="transformation"
                  trackingOffer="challenge"
                  icon={<ArrowRight className="h-4 w-4" />}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionShell>
  );
}
