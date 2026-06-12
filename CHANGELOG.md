# Changelog

All notable changes to this project are documented here.

## [2026-05-27 — ongoing]

### [2026-06-12] - Update Page 2 price from 47 € to 67 €

- **Change**: Updated waitlist page (Page 2) challenge price from 47 € to 67 €
- **Files**: `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` — schema price and `challengePriceOverride` prop

### [2026-05-27] - Fix Waitlist Page CTA Checkout URL

- **Change**: Updated `WARTELISTE_CHECKOUT` constant on Page 2 (waitlist) to new Copecart product URL with UTM tracking
- **File**: `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` line 23
- **Old URL**: `https://www.copecart.com/products/b6910dd6/checkout`
- **New URL**: `https://www.copecart.com/products/b4f44db1/checkout?dfe=8d32cd51e62a42c9&utm_source=convertkit&utm_medium=email&utm_campaign=Spare%2B50%2B%E2%82%AC!%2BDeine%2BChance%2Bendet%2Bheute!%2B%F0%9F%9A%A8%2B-%2B9812771`
- **Reason**: Previous CTA links on the 47 € waitlist page were pointing to the wrong Copecart product

---

## [2026-05-27] - Pricing Update & Deadline Funnel Investigation

### Project Overview
**Natural Fluent German** is a Next.js landing page for a 30-Tage Wortschatz-Challenge (30-Day Vocabulary Challenge) course for German language learners (B1-B2 level). The project includes pricing, testimonials, course structure, FAQ, and coaching upsell sections.

### Pages Structure

#### Page 1: Main Challenge Page
- **URL**: https://natural-fluent-german.vercel.app/30-tage-wortschatz-challenge
- **File**: `src/app/30-tage-wortschatz-challenge/page.tsx`
- **Description**: Primary landing page for the 30-day vocabulary challenge
- **Components**: HeroSection, SocialProofSection, PainSection, MethodSection, CourseStructureSection, LessonStepsSection, TopicsSection, TransformationSection, AboutSection, TestimonialsSection, PricingSection, GuaranteeSection, FitSection, FaqSection, FinalCtaSection
- **Special Wrapper**: Uses `TimeGatedCtaNote` component (shows "Anmeldung startet ab 15. April" message until April 15, 2026 00:01 CEST)
- **Checkout URL**: https://www.copecart.com/products/6f447bf1/checkout
- **SEO**: Full metadata with OpenGraph, Twitter cards, and structured data

#### Page 2: Waitlist Page
- **URL**: https://natural-fluent-german.vercel.app/30-tage-wortschatz-challenge-warteliste
- **File**: `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx`
- **Description**: Waitlist page with different pricing and Deadline Funnel integration
- **Components**: Same sections as Page 1
- **Special Wrapper**: Uses `CheckoutUrlProvider` with specific waitlist checkout URL
- **Deadline Funnel**: Script embedded for countdown functionality and redirect logic
- **Waitlist Checkout URL**: https://www.copecart.com/products/b6910dd6/checkout
- **SEO**: robots meta set to `{ index: false }` (not indexed)
- **Price Override Prop**: `challengePriceOverride` passed to PricingSection component

### Pricing Changes [2026-05-27]

#### Page 1 - Main Challenge
- **Old Price**: 229 €
- **New Price**: 97 €
- **Files Modified**:
  - `src/content/landing-page.ts` line 532: Base price definition
  - `src/app/30-tage-wortschatz-challenge/page.tsx` line 92: JSON-LD Course schema price (changed from "189" to "97")

#### Page 2 - Waitlist Page
- **Old Price**: 95 €
- **New Price**: 47 €
- **Files Modified**:
  - `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` line 147: `challengePriceOverride` prop updated
  - `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` line 97: JSON-LD Course schema price (changed from "179" to "47")

### Content Management
- **Content Source**: `src/content/landing-page.ts`
- **Content Export**: `landingPageContent` object containing all copy, pricing, testimonials, FAQ, etc.
- **Language Support**: German (de) primary, with some English (en) fallbacks in components
- **Language Context**: `src/lib/language-context.tsx` provides `useContent()` and `useLanguage()` hooks

### Pricing Section Component Details
- **File**: `src/components/sections/PricingSection.tsx`
- **Props**: 
  - `challengePriceOverride?: string` — Override challenge price (used on Page 2)
  - `challengePriceNoteOverride?: string` — Override price note
  - `savingsNoteOverride?: string` — Override savings note
- **Logic**: First tier (index 0) checks for override before using default price from content
- **Availability Date**: April 15, 2026 00:01 CEST (controlled by TimeGatedCtaNote on Page 1)

### Issue: Deadline Funnel Redirect

#### Problem
The waitlist page (Page 2) redirects visitors to the main challenge page when accessed directly. This is **not** a code issue but an external service configuration.

#### Root Cause
- **Deadline Funnel** is a third-party service integrated via script tag in `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` (lines 120-129)
- The deadline was set to **April 22, 2026 CEST** (per git commit: "Extend countdown deadline to April 22 midnight CEST")
- Today is May 27, 2026 — the deadline has **expired**
- Deadline Funnel's external dashboard is configured to redirect to the main page once deadline passes

#### Solution Options
1. **Update Deadline**: Log into Deadline Funnel dashboard, extend the deadline to a future date, or disable the redirect
2. **Remove Script**: Delete lines 120-129 from `src/app/30-tage-wortschatz-challenge-warteliste/page.tsx` if Deadline Funnel countdown is no longer needed
3. **Change Redirect Target**: Update Deadline Funnel dashboard to redirect to a different URL instead of the main page

#### Deadline Funnel Script Details
- **Script ID**: "deadline-funnel"
- **Integration Type**: Unified bundle loaded from `https://a.deadlinefunnel.com/unified/reactunified.bundle.js`
- **User ID Hash**: `eyJpdiI6Inc1WHU5ekpQcUJyTDB1VXhLRHFLUkE9PSIsInZhbHVlIjoiYnprN0kvdGRnSERUTkY2bUl2WHlIdz09IiwibWFjIjoiMDIzNTg1ZWNiMjIzNDAzMzI4OGFmMWRmZGI5MzI3YmEyNTcxZmIyYTk4MGE5N2QzMzQ0N2Q2NzcyYTkyYTc4YSJ9`
- **Configuration**: Managed externally in Deadline Funnel platform, not in codebase

### Related Files & Components

#### Pricing-Related
- `src/components/sections/PricingSection.tsx` — Main pricing display component
- `src/content/landing-page.ts` — All content including pricing tiers and features
- `src/components/ui/CtaButton.tsx` — CTA button component used in pricing cards

#### Context/Providers
- `src/lib/language-context.tsx` — Language and content selection
- `src/lib/checkout-url-context.tsx` — Checkout URL provider for Page 2
- `src/lib/cta-note-context.tsx` — CTA note provider for time-gated messages

#### Time-Gating
- `src/components/ui/TimeGatedCtaNote.tsx` — Shows "Anmeldung startet ab 15. April" on Page 1 until April 15, 2026
- `src/components/ui/CountdownBanner.tsx` — Countdown banner component (exists but specific usage TBD)

### Git Information
- **Branch**: `update-pricing-97-47`
- **Commit**: `2a3becf` — "Update pricing: Page 1 to 97 €, Page 2 to 47 €"
- **PR**: https://github.com/linguathor/natural-fluent-german/pull/1
- **Main Branch**: `master`
- **Remotes**:
  - `origin`: https://github.com/linguathor/natural-fluent-german.git
  - `deploy`: https://github.com/linguathor/natural-fluent-german-2026.git

### Tech Stack
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Language Support**: i18n via language-context
- **Build**: React Compiler enabled in next.config.ts

### Next Steps for Future Developers
1. **Resolve Deadline Funnel redirect**: Update or remove the Deadline Funnel script
2. **Monitor pricing**: Changes made in `landing-page.ts` automatically reflect on Page 1; Page 2 requires separate override props
3. **Verify deployment**: Changes deploy to vercel.app domain (check Vercel deployment settings)
4. **Test checkout flow**: Both pages have different Copecart checkout URLs — ensure correct URL is used
5. **Time-gating**: Page 1 shows enrollment message until April 15, 2026 — consider updating `OPEN_DATE` in `TimeGatedCtaNote.tsx` if extending enrollment period

### Contact/Author Info
- **Instructor**: Flemming (flemming@naturalfluentgerman.com)
- **Course Focus**: B1-B2 German learners
- **Marketing**: YouTube (79K subscribers), Podcast (5M downloads), 1500+ course students
