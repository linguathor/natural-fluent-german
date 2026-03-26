"use client";

import { useState } from "react";
import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { trackEvent } from "@/lib/analytics";
import { ChevronDown } from "lucide-react";

const c = landingPageContent.faq;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent("faq_toggle", { question: c.items[index].question });
    }
  };

  return (
    <SectionShell bg="white" id="faq">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto max-w-2xl divide-y divide-stone-200">
        {c.items.map((item, i) => (
          <AnimateOnScroll key={i} delay={i * 0.05}>
            <div>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-stone-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-stone-600 leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}
