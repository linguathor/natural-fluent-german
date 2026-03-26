// Analytics event tracking utility
// Connect to GA4, Meta Pixel, or other platforms later.

type EventName =
  | "cta_click"
  | "faq_toggle"
  | "scroll_milestone"
  | "video_play";

interface EventPayload {
  location?: string;
  offer?: string;
  question?: string;
  depth?: number;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(name: EventName, payload?: EventPayload): void {
  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[track] ${name}`, payload);
  }

  // TODO: Forward to analytics providers
  // window.gtag?.("event", name, payload);
  // window.fbq?.("trackCustom", name, payload);
}
