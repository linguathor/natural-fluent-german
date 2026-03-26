"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CtaButton from "@/components/ui/CtaButton";
import {
  Users,
  MessageCircle,
  Mic,
  Brain,
  Calendar,
  Shield,
  Phone,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const c = landingPageContent.coaching;

const featureIcons = [
  <Calendar key="cal" className="h-5 w-5" />,
  <Users key="users" className="h-5 w-5" />,
  <Users key="group" className="h-5 w-5" />,
  <Mic key="mic" className="h-5 w-5" />,
  <Brain key="brain" className="h-5 w-5" />,
  <Shield key="shield" className="h-5 w-5" />,
  <MessageCircle key="msg" className="h-5 w-5" />,
];

export default function CoachingSection() {
  return (
    <SectionShell bg="dark" id="coaching">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
              Optionales Upgrade
            </span>
          </div>
          <h2 className="mb-2 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="mb-4 text-center text-xl font-semibold text-emerald-300">
            {c.subheadline}
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-center text-stone-300 leading-relaxed">
            {c.intro}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mb-10 text-center text-sm italic text-stone-400">
            Was dich im Gruppencoaching erwartet:
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {c.features.map((feature, i) => (
            <AnimateOnScroll key={i} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-4 rounded-xl bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  {featureIcons[i] || (
                    <CheckCircle2 className="h-5 w-5" />
                  )}
                </div>
                <p className="text-stone-200 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.5}>
          <div className="mt-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-stone-300">
              <Phone className="h-4 w-4" />
              <p className="text-sm">{c.ctaNote}</p>
            </div>
            <CtaButton
              cta={c.cta}
              variant="primary"
              size="lg"
              trackingLocation="coaching"
              trackingOffer="coaching"
              className="bg-emerald-500 hover:bg-emerald-400 text-white"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
