"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import CtaButton from "@/components/ui/CtaButton";
import VideoFrame from "@/components/ui/VideoFrame";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const c = landingPageContent.hero;

export default function HeroSection() {
  return (
    <SectionShell bg="white" className="pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Copy */}
        <AnimateOnScroll>
          <div>
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800">
              {c.badge}
            </span>
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
              {c.headline}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-stone-600">
              {c.subheadline}
            </p>

            <CtaButton
              cta={c.primaryCta}
              variant="primary"
              size="lg"
              trackingLocation="hero"
              trackingOffer="challenge"
            />
          </div>
        </AnimateOnScroll>

        {/* Right: Video */}
        <AnimateOnScroll delay={0.15}>
          <VideoFrame
            src={landingPageContent.media.heroVideo}
            alt="TODO: Hero-Video von Flemming"
          />
        </AnimateOnScroll>
      </div>
    </SectionShell>
  );
}
