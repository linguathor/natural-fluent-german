"use client";

import { landingPageContent } from "@/content/landing-page";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CirclePlay, Podcast, Users } from "lucide-react";
import Image from "next/image";

const c = landingPageContent.socialProof;

const iconMap: Record<string, React.ReactNode> = {
  Youtube: <CirclePlay className="h-6 w-6 text-red-500" />,
  Podcast: <Podcast className="h-6 w-6 text-emerald-500" />,
  Users: <Users className="h-6 w-6 text-blue-500" />,
};

export default function SocialProofSection() {
  return (
    <section className="bg-stone-900 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Flemming image */}
          <AnimateOnScroll>
            <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-emerald-500/30 md:mx-0 md:h-40 md:w-40">
              <Image
                src="/flemming-social-proof.webp"
                alt="Flemming – Gründer von Natural Fluent German"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 192px, 160px"
                priority
              />
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:justify-center sm:gap-10 md:gap-14">
            {c.stats.map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    {iconMap[stat.icon]}
                  </div>
                  <div>
                    <p className="text-xl font-bold leading-tight md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-sm text-stone-400">{stat.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
