"use client";

import { useEffect, useState } from "react";
import { useContent, useLanguage } from "@/lib/language-context";
import type { CoachingSlot } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CtaButton from "@/components/ui/CtaButton";
import { Check, Sparkles } from "lucide-react";
import type { Language } from "@/lib/language-context";

function SlotStatus({
  slot,
  language,
}: {
  slot: CoachingSlot;
  language: Language;
}) {
  const statusMap = {
    ausgebucht: {
      bg: "bg-red-100",
      text: "text-red-700",
      label: language === "de" ? "Ausgebucht" : "Sold out",
      emoji: "🔴",
    },
    "wenige-frei": {
      bg: "bg-amber-100",
      text: "text-amber-700",
      label:
        language === "de"
          ? `Nur noch ${slot.spotsLeft} Plätze frei!`
          : `Only ${slot.spotsLeft} spots left!`,
      emoji: "🟡",
    },
    offen: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      label: language === "de" ? "Plätze verfügbar" : "Spots available",
      emoji: "🟢",
    },
  };

  const s = statusMap[slot.status];

  return (
    <div
      className={`flex items-center gap-2 rounded-lg ${s.bg} px-3 py-2 text-sm`}
    >
      <span>{s.emoji}</span>
      <span className="font-medium text-stone-800">
        {slot.name} ({slot.schedule}):
      </span>
      <span className={`font-semibold ${s.text}`}>{s.label}</span>
    </div>
  );
}

interface PricingSectionProps {
  challengePriceOverride?: string;
  challengePriceNoteOverride?: string;
  savingsNoteOverride?: string;
}

export default function PricingSection({
  challengePriceOverride,
  challengePriceNoteOverride,
  savingsNoteOverride,
}: PricingSectionProps = {}) {
  const c = useContent().pricing;
  const sp = useContent().socialProof;
  const { language } = useLanguage();

  // April 15, 2026 00:01 CEST = April 14, 2026 22:01 UTC
  const OPEN_DATE = new Date("2026-04-14T22:01:00Z");
  const [slotsVisible, setSlotsVisible] = useState(false);
  useEffect(() => {
    const check = () => setSlotsVisible(new Date() >= OPEN_DATE);
    check();
    const interval = setInterval(check, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionShell bg="neutral" id="preise">
      {/* Social proof headline before pricing */}
      {sp.headlineBeforePricing && (
        <AnimateOnScroll>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg font-semibold text-stone-700">
            {sp.headlineBeforePricing}
          </p>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="mb-3 text-lg text-stone-600">{c.subheadline}</p>
          <p className="mb-2 text-sm font-semibold text-emerald-700">
            {c.importantNote}
          </p>
          {(savingsNoteOverride ?? c.savingsNote) && (
            <p className="mb-12 text-lg font-bold text-red-600">
              {savingsNoteOverride ?? c.savingsNote}
            </p>
          )}
          {!(savingsNoteOverride ?? c.savingsNote) && <div className="mb-12" />}
        </div>
      </AnimateOnScroll>

      {/* Pricing Cards */}
      <div className="mx-auto flex max-w-4xl justify-center gap-8">
        {c.tiers.map((tier, i) => (
          <AnimateOnScroll key={i} delay={i * 0.12} className="w-full max-w-md">
            <div
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? "border-2 border-emerald-600 bg-white shadow-xl ring-1 ring-emerald-100"
                  : "border border-stone-200 bg-white shadow-sm"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-emerald-700 px-4 py-1 text-xs font-bold text-white">
                  {tier.badge}
                </span>
              )}

              <h3 className="mb-6 text-xl font-bold text-stone-900">
                {tier.title}
              </h3>

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-stone-900">
                  {i === 0 && challengePriceOverride ? challengePriceOverride : tier.price}
                </span>
                {tier.originalPrice && (
                  <span className="text-lg text-stone-400 line-through">
                    {tier.originalPrice}
                  </span>
                )}
              </div>
              {tier.billingNote && (
                <p className="mb-6 text-sm text-stone-500">
                  {tier.billingNote}
                </p>
              )}
              {(i === 0 && challengePriceNoteOverride ? challengePriceNoteOverride : tier.priceNote) && (
                <p className="mb-6 text-sm font-semibold text-red-600">
                  {i === 0 && challengePriceNoteOverride ? challengePriceNoteOverride : tier.priceNote}
                </p>
              )}
              {!tier.billingNote && !tier.priceNote && <div className="mb-6" />}

              {/* Feature list */}
              <ul className="mb-8 space-y-3">
                {i === 0 ? (
                  // Challenge: show all challenge features
                  c.features
                    .filter((feature) => feature.includedInChallenge)
                    .map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="text-stone-700">
                          {feature.text}
                        </span>
                      </li>
                    ))
                ) : (
                  // Coaching: summary + coaching-only features
                  <>
                    <li className="flex items-start gap-3 text-sm">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="font-semibold text-stone-900">
                        {language === "de"
                          ? "Alle Vorteile aus der Challenge"
                          : "All benefits from the Challenge"}
                      </span>
                    </li>
                    <li className="my-2 border-t border-stone-200" />
                    {c.features
                      .filter(
                        (feature) =>
                          feature.includedInCoaching &&
                          !feature.includedInChallenge
                      )
                      .map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span className="text-stone-700">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                  </>
                )}
              </ul>

              <CtaButton
                cta={tier.cta}
                variant={tier.highlight ? "primary" : "secondary"}
                size="lg"
                trackingLocation="pricing"
                trackingOffer={tier.highlight ? "coaching" : "challenge"}
                className="w-full justify-center"
              />

              {/* Coaching slots — directly under premium card */}
              {tier.highlight && c.coachingSlots.length > 0 && slotsVisible && (
                <div className="mt-6 border-t border-stone-200 pt-5">
                  <p className="mb-3 text-center text-sm font-semibold text-stone-700">
                    {language === "de" ? "Status Coaching-Plätze:" : "Coaching Spot Availability:"}
                  </p>
                  <div className="space-y-2">
                    {c.coachingSlots.map((slot, si) => (
                      <SlotStatus key={si} slot={slot} language={language} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

    </SectionShell>
  );
}
