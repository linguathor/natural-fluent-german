"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { CtaContent } from "@/content/landing-page";
import { useCheckoutUrl } from "@/lib/checkout-url-context";
import { useCtaNote } from "@/lib/cta-note-context";

const COPECART_ORIGIN = "https://www.copecart.com";

interface CtaButtonProps {
  cta: CtaContent;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  trackingLocation?: string;
  trackingOffer?: string;
  className?: string;
  icon?: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-700/20",
  secondary:
    "bg-white text-emerald-800 border-2 border-emerald-700 hover:bg-emerald-50",
  ghost: "text-emerald-700 underline underline-offset-4 hover:text-emerald-900",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function CtaButton({
  cta,
  variant = "primary",
  size = "md",
  trackingLocation,
  trackingOffer,
  className,
  icon,
}: CtaButtonProps) {
  const checkoutOverride = useCheckoutUrl();
  const ctaNote = useCtaNote();
  const href =
    checkoutOverride && cta.href.startsWith(COPECART_ORIGIN)
      ? checkoutOverride
      : cta.href;

  const handleClick = () => {
    trackEvent("cta_click", {
      location: trackingLocation,
      offer: trackingOffer,
    });
  };

  return (
    <span className="inline-flex flex-col items-center gap-1">
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {icon}
        {cta.label}
      </a>
      {ctaNote && (
        <span className="text-xs text-stone-500 italic">{ctaNote}</span>
      )}
    </span>
  );
}
