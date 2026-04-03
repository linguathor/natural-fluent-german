"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

const c = landingPageContent.fit;

export default function FitSection() {
  return (
    <SectionShell bg="neutral" id="geeignet">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-16 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-3">
        {/* Yes column */}
        <AnimateOnScroll delay={0.05}>
          <div className="rounded-2xl bg-emerald-50 p-8 md:p-10">
            <h3 className="mb-5 text-lg font-bold text-emerald-800">
              Ja, wenn…
            </h3>
            <ul className="space-y-3">
              {c.yes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Flemming image */}
        <AnimateOnScroll delay={0.1}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-2xl">
            <Image
              src="/flemming-fit-section-new.webp"
              alt="Flemming"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 260px, 220px"
            />
          </div>
        </AnimateOnScroll>

        {/* No column */}
        <AnimateOnScroll delay={0.15}>
          <div className="rounded-2xl bg-stone-100 p-8 md:p-10">
            <h3 className="mb-5 text-lg font-bold text-stone-700">
              Nein, wenn…
            </h3>
            <ul className="space-y-3">
              {c.no.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-stone-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
