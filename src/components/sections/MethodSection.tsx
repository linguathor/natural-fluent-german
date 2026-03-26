"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import {
  Headphones,
  CalendarDays,
  Bot,
  Zap,
} from "lucide-react";

const c = landingPageContent.method;

const iconMap: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="h-7 w-7" />,
  CalendarDays: <CalendarDays className="h-7 w-7" />,
  Bot: <Bot className="h-7 w-7" />,
  Zap: <Zap className="h-7 w-7" />,
};

export default function MethodSection() {
  return (
    <SectionShell bg="white" id="methode">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Copy + Cards */}
        <div>
          <AnimateOnScroll>
            <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-stone-600">
              {c.subheadline}
            </p>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2">
            {c.features.map((feature, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <AnimateOnScroll delay={0.15}>
          <div className="sticky top-28">
            {landingPageContent.media.flemming ? (
              <img
                src={landingPageContent.media.flemming}
                alt="Flemming"
                className="w-full rounded-2xl object-cover"
              />
            ) : (
              <ImagePlaceholder label="TODO: Bild von Flemming" />
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
