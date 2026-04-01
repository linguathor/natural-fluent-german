"use client";

import { landingPageContent } from "@/content/landing-page";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Users } from "lucide-react";

const c = landingPageContent.socialProof;

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  Youtube: <YouTubeIcon className="h-7 w-7 text-red-500" />,
  Podcast: <SpotifyIcon className="h-7 w-7 text-[#1DB954]" />,
  Users: <Users className="h-7 w-7 text-blue-400" />,
};

export default function SocialProofSection() {
  return (
    <section className="bg-stone-900 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-16 md:gap-24">
          {c.stats.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                  {iconMap[stat.icon]}
                </div>
                <div>
                  <p className="text-2xl font-bold leading-tight md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-400 md:text-base">{stat.label}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
