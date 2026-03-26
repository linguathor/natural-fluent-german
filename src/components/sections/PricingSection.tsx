"use client";

import { landingPageContent } from "@/content/landing-page";
import SectionShell from "@/components/ui/SectionShell";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CtaButton from "@/components/ui/CtaButton";
import { Check, X, Sparkles } from "lucide-react";

const c = landingPageContent.pricing;

function SlotStatus({
  slot,
}: {
  slot: (typeof c.coachingSlots)[number];
}) {
  const statusMap = {
    ausgebucht: {
      bg: "bg-red-100",
      text: "text-red-700",
      label: "Ausgebucht",
      emoji: "🔴",
    },
    "wenige-frei": {
      bg: "bg-amber-100",
      text: "text-amber-700",
      label: `Nur noch ${slot.spotsLeft} Plätze frei!`,
      emoji: "🟡",
    },
    offen: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      label: "Plätze verfügbar",
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

export default function PricingSection() {
  return (
    <SectionShell bg="neutral" id="preise">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-stone-900 md:text-3xl lg:text-4xl">
            {c.headline}
          </h2>
          <p className="mb-3 text-lg text-stone-600">{c.subheadline}</p>
          <p className="mb-12 text-sm font-semibold text-emerald-700">
            {c.importantNote}
          </p>
        </div>
      </AnimateOnScroll>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {c.tiers.map((tier, i) => (
          <AnimateOnScroll key={i} delay={i * 0.12}>
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
                  {tier.price}
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
              {!tier.billingNote && <div className="mb-6" />}

              {/* Feature list */}
              <ul className="mb-8 space-y-3">
                {c.features.map((feature, j) => {
                  const included = i === 0
                    ? feature.includedInChallenge
                    : feature.includedInCoaching;
                  return (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm"
                    >
                      {included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-stone-300" />
                      )}
                      <span
                        className={
                          included ? "text-stone-700" : "text-stone-400"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <CtaButton
                cta={tier.cta}
                variant={tier.highlight ? "primary" : "secondary"}
                size="lg"
                trackingLocation="pricing"
                trackingOffer={tier.highlight ? "coaching" : "challenge"}
                className="w-full justify-center"
              />
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Coaching Slots */}
      {c.coachingSlots.length > 0 && (
        <AnimateOnScroll delay={0.3}>
          <div className="mx-auto mt-10 max-w-xl">
            <p className="mb-4 text-center text-sm font-semibold text-stone-700">
              Status Coaching-Plätze:
            </p>
            <div className="space-y-2">
              {c.coachingSlots.map((slot, i) => (
                <SlotStatus key={i} slot={slot} />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      )}
    </SectionShell>
  );
}
