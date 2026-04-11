"use client";

import { useContent } from "@/lib/language-context";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

export default function AboutSection() {
  const c = useContent().aboutFlemming;
  return (
    <SectionShell bg="white" id="ueber-mich">
      <div className="grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
        <AnimateOnScroll>
          <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-2xl lg:w-full">
            <Image
              src="/flemming-about.jpg"
              alt="Flemming Goldbecher – Deutsch-Coach"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 800px, 1080px"
              quality={90}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.12}>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
              {c.headline}
            </h2>
            <p className="text-lg leading-relaxed text-stone-600">
              {c.text}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
