"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";
import {
  Headphones,
  CalendarDays,
  Bot,
  Video,
  RefreshCw,
} from "lucide-react";

const c = landingPageContent.method;

const iconMap: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="h-7 w-7" />,
  Video: <Video className="h-7 w-7" />,
  CalendarDays: <CalendarDays className="h-7 w-7" />,
  Bot: <Bot className="h-7 w-7" />,
  RefreshCw: <RefreshCw className="h-7 w-7" />,
};

export default function MethodSection() {
  return (
    <SectionShell bg="white" id="methode">
      {/* Top: Heading left + Image right */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 mb-14">
        <AnimateOnScroll>
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">
            {c.subheadline}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/flemming-amelie-podcast.webp"
              alt="Flemming und Amelie beim Podcast-Aufnahme"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateOnScroll>
      </div>

      {/* Feature cards - evenly distributed */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {c.features.map((feature, i) => (
          <AnimateOnScroll key={i} delay={i * 0.08}>
            <div className="group h-full rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                {iconMap[feature.icon]}
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-stone-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                {feature.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Summary */}
      <AnimateOnScroll delay={0.4}>
        <p className="mt-10 text-base italic leading-relaxed text-stone-600 border-l-4 border-emerald-500 pl-4 max-w-3xl">
          {c.summary}
        </p>
      </AnimateOnScroll>
    </SectionShell>
  );
}
