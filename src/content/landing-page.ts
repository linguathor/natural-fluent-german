// ─────────────────────────────────────────────────────────────
// Centralized content for the 30-Tage Wortschatz-Challenge LP
// Edit copy, prices, testimonials, FAQ etc. here — not in JSX.
// ─────────────────────────────────────────────────────────────

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  trustMarkers: string[];
  benefitChips: string[];
}

export interface CtaContent {
  label: string;
  href: string;
}

export interface PainPoint {
  text: string;
}

export interface PainContent {
  headline: string;
  points: PainPoint[];
  insight: string;
}

export interface MethodFeature {
  icon: string;
  title: string;
  description: string;
}

export interface MethodContent {
  headline: string;
  subheadline: string;
  features: MethodFeature[];
  summary: string;
}

export interface TimelineDay {
  day: string;
  title: string;
  description: string;
  milestone?: string;
}

export interface CourseStructureContent {
  headline: string;
  days: TimelineDay[];
  note: string;
}

export interface TopicsContent {
  headline: string;
  intro: string;
  topics: string[];
}

export interface OutcomeItem {
  text: string;
}

export interface TransformationContent {
  headline: string;
  statHighlight: string;
  statLabel: string;
  outcomes: OutcomeItem[];
  emotionalClose: string;
  before: string[];
  after: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  rating?: number;
  isPlaceholder: boolean;
}

export interface TestimonialsContent {
  headline: string;
  testimonials: Testimonial[];
}

export interface CoachingFeature {
  text: string;
}

export interface CoachingSlot {
  name: string;
  schedule: string;
  status: "ausgebucht" | "wenige-frei" | "offen";
  spotsLeft?: number;
}

export interface CoachingContent {
  headline: string;
  subheadline: string;
  intro: string;
  features: CoachingFeature[];
  cta: CtaContent;
  ctaNote: string;
}

export interface PricingFeature {
  text: string;
  includedInChallenge: boolean;
  includedInCoaching: boolean;
}

export interface PricingTier {
  title: string;
  price: string;
  originalPrice?: string;
  billingNote?: string;
  badge?: string;
  cta: CtaContent;
  highlight: boolean;
}

export interface PricingContent {
  headline: string;
  subheadline: string;
  importantNote: string;
  tiers: PricingTier[];
  features: PricingFeature[];
  coachingSlots: CoachingSlot[];
}

export interface GuaranteeContent {
  headline: string;
  text: string;
}

export interface FitContent {
  headline: string;
  yes: string[];
  no: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  headline: string;
  items: FaqItem[];
}

export interface FinalCtaContent {
  headline: string;
  text: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  reassurance: string;
}

export interface SocialProofStat {
  icon: string;
  value: string;
  label: string;
}

export interface SocialProofContent {
  stats: SocialProofStat[];
}

export interface MediaAssets {
  heroVideo: string;
  flemming: string;
  flemmingFit: string;
  podcast: string;
  courseMockup: string;
  happyPeople: string;
}

export interface LandingPageContent {
  hero: HeroContent;
  pain: PainContent;
  method: MethodContent;
  courseStructure: CourseStructureContent;
  topics: TopicsContent;
  transformation: TransformationContent;
  testimonials: TestimonialsContent;
  coaching: CoachingContent;
  pricing: PricingContent;
  guarantee: GuaranteeContent;
  fit: FitContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  socialProof: SocialProofContent;
  media: MediaAssets;
}

// ─────────────────────────────────────────────────
// CONTENT — edit below to update the landing page
// ─────────────────────────────────────────────────

export const landingPageContent: LandingPageContent = {
  // ── Hero ──────────────────────────────────────
  hero: {
    badge: "Für B1–B2 Deutschlernende",
    headline:
      "30 Tage Wortschatz-Challenge: Jedes Gespräch auf Deutsch souverän führen.",
    subheadline:
      "Schluss mit Denkpausen und Unsicherheit. Aktiviere in nur einem Monat den Wortschatz, den du für den echten Alltag und deine Karriere in Deutschland wirklich brauchst.",
    primaryCta: {
      label: "Ja, ich will flüssiger sprechen!",
      href: "#preise",
    },
    secondaryCta: {
      label: "Mit Coaching?",
      href: "#coaching",
    },
    trustMarkers: [
      "Lebenslanger Zugriff",
      "15 Audios + 15 Videos",
      "KI-Übungen",
      "Für B1–B2",
    ],
    benefitChips: [
      "Aktiver Wortschatz",
      "Echte Gespräche",
      "Alltagsrelevant",
      "30 Tage Fokus",
    ],
  },

  // ── Pain ──────────────────────────────────────
  pain: {
    headline: "Du kennst das ganz genau, oder?",
    points: [
      {
        text: "Du verstehst eigentlich viel, aber beim Sprechen fehlen dir plötzlich die einfachsten Wörter.",
      },
      {
        text: "Du machst lange Denkpausen und fühlst dich unsicher.",
      },
      {
        text: "Du bleibst unpräzise und hast das Gefühl, dein Gegenüber zu langweilen.",
      },
      {
        text: "Du nutzt nicht dein volles Potenzial im Job, weil die Sprachbarriere dich bremst.",
      },
    ],
    insight:
      "Die Wahrheit ist: Oft fehlen dir gar nicht tausende Wörter. Dir fehlen die richtigen paar hundert Wörter, die du aktiv einsetzen kannst.",
  },

  // ── Method ────────────────────────────────────
  method: {
    headline: "In 30 Tagen zur sicheren Kommunikation.",
    subheadline:
      "Ich zeige dir die Methode, mit der ich seit Jahren hunderten Schülern im Coaching geholfen habe. Kein trockenes Auswendiglernen, sondern maximale Relevanz.",
    features: [
      {
        icon: "Headphones",
        title: "Authentischer Input",
        description:
          'Dialoge zwischen Flemming und Amelie (wie im Podcast "Deutsches Geplapper") mit umgangssprachlichem Deutsch.',
      },
      {
        icon: "Video",
        title: "Unterhaltsames Material",
        description:
          "Zahlreiche Video-Reportagen über spannende und alltagsrelevante Themen.",
      },
      {
        icon: "CalendarDays",
        title: "Täglicher Rhythmus",
        description:
          "Intensives Lernen durch die Herausforderung der Challenge, die dich zum Dranbleiben und Weitermachen motiviert.",
      },
      {
        icon: "Bot",
        title: "Modernste Technologie",
        description:
          "Sofortige Anwendungen des gelernten Wortschatzes durch angeleitetes KI-Training.",
      },
      {
        icon: "RefreshCw",
        title: "Wortschatzerweiterung",
        description:
          "Effektive Techniken zur Wiederholung des Wortschatzes für langfristiges Erinnern.",
      },
    ],
    summary:
      "Die Kombination aus diesen Techniken wird dir helfen, nicht nur deinen passiven Wortschatz zu steigern, sondern hunderte von neuen Wörtern direkt in deinen aktiven Sprachgebrauch einzubringen. Das sorgt für den wahren Unterschied und für flüssiges Sprechen ohne Denkpausen!",
  },

  // ── Course Structure ──────────────────────────
  courseStructure: {
    headline: "Dein Fahrplan für die kommenden 30 Tage",
    days: [
      {
        day: "Tag 0",
        title: "Einführung",
        description: "Vision und wichtige Techniken lernen",
      },
      {
        day: "Tag 1",
        title: "Erste Audio-Lektion",
        description: "Meistere deine erste Audio-Lektion + Sprechtraining mit KI",
      },
      {
        day: "Tag 2",
        title: "Wiederholung + Video",
        description: "Wiederholung + Video-Lektion + Sprechtraining mit KI",
      },
      {
        day: "Tag 3",
        title: "Wiederholung + Audio",
        description: "Wiederholung + Audio-Lektion + Sprechtraining mit KI",
      },
      {
        day: "Tag 5",
        title: "Motivationsschub",
        description: "Motivationsschub + Audio-Lektion + Sprechtraining mit KI",
        milestone: "50+ neue Wörter im aktiven Wortschatz",
      },
      {
        day: "Tag 10",
        title: "Wiederholung + Video",
        description: "Wiederholung + Video-Lektion + Sprechtraining mit KI",
        milestone: "100+ neue Wörter im aktiven Wortschatz",
      },
      {
        day: "Tag 20",
        title: "Wiederholung + Audio",
        description: "Wiederholung + Audio-Lektion + Sprechtraining mit KI",
        milestone: "200+ neue Wörter im aktiven Wortschatz",
      },
      {
        day: "Tag 30",
        title: "Ziel erreicht!",
        description:
          "Letzte Lektion und dann… Glückwunsch, du bist am Ziel!",
        milestone: "300+ neue Wörter im aktiven Wortschatz",
      },
    ],
    note: "Du folgst einem klaren täglichen Rhythmus aus Lektionen, Wiederholungen und aktivem Sprechtraining – flexibel in deinem Tempo.",
  },

  // ── Topics ────────────────────────────────────
  topics: {
    headline: "Unter anderem um diese Themen geht es",
    intro:
      "Der Kurs nutzt relevante, diskutierbare Themen, die deinen Wortschatz genau dort aufbauen, wo du ihn im echten Leben brauchst — für Gespräche, die wirklich zählen.",
    topics: [
      "Leben in Zeiten von Künstlicher Intelligenz",
      "Die 4-Tage-Woche",
      "Angst vor dem Klimawandel",
      "Pflege von Angehörigen",
      "Eifersucht in Beziehungen",
      "Steuern für Reiche?",
      "Wohnen in der Zukunft",
      "Integration in Deutschland",
      "Gesundheitsbewusstes Leben",
      "Wählen gehen oder nicht?",
    ],
  },

  // ── Transformation ────────────────────────────
  transformation: {
    headline: "Dein Ergebnis nach 30 Tagen",
    statHighlight: "300+",
    statLabel: "neue Wörter, die du aktiv nutzen kannst",
    outcomes: [
      {
        text: "Deutlich größerer, aktiver Wortschatz — mindestens 300 Wörter mehr, die du nutzen kannst",
      },
      { text: "Sichere Gespräche auf Deutsch ohne Denkpausen" },
      { text: "Präzise Nutzung der Sprache, weniger Umschreibungen" },
      { text: "Spontanes Reagieren und automatisches Sprechen" },
      {
        text: "Müheloses Verständnis der Alltagssprache in Text- und Audioform",
      },
      { text: "Umfangreiche Kenntnisse der deutschen Umgangssprache" },
    ],
    emotionalClose:
      'In nur einem Monat führst du Gespräche ohne Angst. Du wirst konkret, du wirst verstanden und du fühlst dich endlich integriert. Du bist nicht mehr "der Ausländer, der wenig sagt", sondern ein geschätzter Gesprächspartner. Ist dieser kurze Fokus nicht die Mühe wert?',
    before: [
      "Lange Denkpausen beim Sprechen",
      "Unsicherheit in Gesprächen",
      "Ständiges Umschreiben",
      "Sprachbarriere im Job",
    ],
    after: [
      "Spontane, flüssige Antworten",
      "Selbstsicheres Auftreten",
      "Präzise Ausdrucksweise",
      "Karrierechancen nutzen",
    ],
  },

  // ── Testimonials ──────────────────────────────
  testimonials: {
    headline: "Diese Leute lieben meine Kurse…",
    testimonials: [
      {
        name: "Monika",
        role: "aus Belarus",
        quote: "Ich lerne Deutsch seit sechs Jahren und habe viele Kurse ausprobiert. Doch in Flemmings Kursen ist alles anders – sie bleiben spannend, weil ständig neue Lektionen erscheinen. Besonders hilfreich finde ich die KI-Übungen: Jetzt weiß ich genau, wie ich die richtigen Prompts wähle. Das direkte Feedback ist unschlagbar – ehrlich, schnell und motivierend.",
        avatar: "/testimonial-monika.webp",
        rating: 5,
        isPlaceholder: false,
      },
      {
        name: "Eduardo",
        role: "aus Argentinien",
        quote: "Ich kann die Zusammenarbeit mit Flemming nur empfehlen. Ich habe mein Sprachniveau verbessert und was ich sehr hilfreich finde: Ich habe jetzt mehr Überzeugung, die Sprache selbst zu entwickeln. Es ist sehr flexibel und es gibt viele Möglichkeiten, nicht nur zu lernen, sondern auch Spaß an der deutschen Sprache zu haben.",
        avatar: "/testimonial-eduardo.webp",
        rating: 5,
        isPlaceholder: false,
      },
      {
        name: "Daniela",
        role: "aus Italien",
        quote: "Mein Ziel war es, fließender Deutsch zu sprechen und mit der Unterstützung und dem Feedback von Flemming kann ich sagen, dass es mir gelungen ist. Ich habe vor allem gelernt, meinen Standpunkt zu verschiedenen Themen darzulegen und zu begründen und habe meinen Wortschatz weiter ausgebaut.",
        avatar: "/testimonial-daniela.webp",
        rating: 5,
        isPlaceholder: false,
      },
    ],
  },

  // ── Coaching Upsell ───────────────────────────
  coaching: {
    headline: "Du willst noch weiter gehen?",
    subheadline: "Buche gleich noch ein 5-wöchiges Gruppencoaching dazu!",
    intro:
      "Ans Ziel kommst du auch, wenn du die 30-Tage-Challenge ohne Coaching buchst. Aber das Gruppencoaching gibt dir die maximale Betreuung und eine exklusive Community — falls du jemand bist, der extra Motivation braucht!",
    features: [
      {
        text: "Parallel zu deiner 30-Tage-Challenge treffen wir uns 2× pro Woche für jeweils 60 Minuten, um über die Themen der Lektionen zu sprechen. So kannst du den neuen Wortschatz üben.",
      },
      {
        text: "Insgesamt haben wir 10 Sitzungen miteinander, das Coaching dauert 5 Wochen, also ein bisschen länger als die Grundversion der 30-Tage-Challenge.",
      },
      {
        text: "Wir arbeiten in einer kleinen Gruppe von maximal 5 Teilnehmern, damit jeder genug Sprechzeit und Feedback bekommt und die Lernerfahrung möglichst intensiv und unterhaltsam wird.",
      },
      {
        text: "Ich gebe dir Feedback auf deine Aussprache, deine Grammatik, deine Wortschatz-Nutzung und helfe dir, passende B2–C1-Formulierungen zu etablieren.",
      },
      {
        text: "Während des Coachings teile ich meine effektivsten Übungen und Lerntechniken mit dir, vor allem, was das Lernen mit Künstlicher Intelligenz betrifft, damit du auch nach dem Coaching weitermachen kannst.",
      },
      {
        text: "Maximale Verbindlichkeit: Die Gruppe und die festen Termine sorgen daf\u00FCr, dass du die 30 Tage nicht nur \u201Eigendwie\u201C machst, sondern mit 100\u00A0% Fokus abschlie\u00DFt.",
      },
      {
        text: "Für die Dauer des Coachings sind wir 24/7 per Chat miteinander verbunden und du kannst mir deine Sprachnachrichten schicken, wenn du Feedback brauchst oder Fragen hast.",
      },
    ],
    cta: {
      label: "Jetzt kostenloses Beratungsgespräch vereinbaren",
      href: "#TODO-calendly-link",
    },
    ctaNote:
      "Lass uns kurz miteinander telefonieren, bevor du dich anmeldest.",
  },

  // ── Pricing ───────────────────────────────────
  pricing: {
    headline: "Preise & Anmeldung",
    subheadline:
      "Du hast die Wahl: Reicht dir die 30 Tage Challenge oder willst du zusätzlich ein Gruppencoaching buchen für die volle Betreuung?",
    importantNote: "Beide Varianten führen dich an dein Ziel!",
    tiers: [
      {
        title: "30 Tage Challenge",
        price: "189 €",
        originalPrice: "249 €",
        cta: {
          label: "Jetzt anmelden",
          href: "#TODO-checkout-challenge",
        },
        highlight: false,
      },
      {
        title: "30 Tage Challenge + Gruppencoaching",
        price: "2.490 €",
        billingNote: "In Raten zahlbar",
        badge: "Premium",
        cta: {
          label: "Kostenloses Beratungsgespräch",
          href: "#TODO-calendly-link",
        },
        highlight: true,
      },
    ],
    features: [
      {
        text: "30-Tage-Programm mit 30 Lektionen",
        includedInChallenge: true,
        includedInCoaching: true,
      },
      {
        text: "15 Audios & 15 Videos",
        includedInChallenge: true,
        includedInCoaching: true,
      },
      {
        text: "KI-Training & PDF-Worksheets",
        includedInChallenge: true,
        includedInCoaching: true,
      },
      {
        text: "24/7 Email-Support",
        includedInChallenge: true,
        includedInCoaching: true,
      },
      {
        text: "Lebenslanger Zugriff auf alle Inhalte",
        includedInChallenge: true,
        includedInCoaching: true,
      },
      {
        text: "10 intensive Live-Sitzungen (2× pro Woche)",
        includedInChallenge: false,
        includedInCoaching: true,
      },
      {
        text: "Kleingruppe (max. 5 Personen)",
        includedInChallenge: false,
        includedInCoaching: true,
      },
      {
        text: "Feedback zu Aussprache, Grammatik und Sprachfluss",
        includedInChallenge: false,
        includedInCoaching: true,
      },
      {
        text: "Privater Telegram-Chat (tägliche Sprachnachrichten)",
        includedInChallenge: false,
        includedInCoaching: true,
      },
      {
        text: "Bonus: Zugang zu meinen anderen Deutschkursen",
        includedInChallenge: false,
        includedInCoaching: true,
      },
    ],
    coachingSlots: [
      {
        name: "Gruppe 1",
        schedule: "Di/Do 9 Uhr",
        status: "ausgebucht",
      },
      {
        name: "Gruppe 2",
        schedule: "Mo/Mi 19 Uhr",
        status: "ausgebucht",
      },
      {
        name: "Gruppe 3",
        schedule: "Di/Do 19 Uhr",
        status: "wenige-frei",
        spotsLeft: 3,
      },
    ],
  },

  // ── Guarantee ─────────────────────────────────
  guarantee: {
    headline: "100 % Zufriedenheit oder Geld zurück.",
    text: "Ich bin so überzeugt von meiner Methode: Wenn du mindestens 3 Lektionen vollständig absolviert hast und nicht zufrieden bist, bekommst du innerhalb der ersten Tage dein Geld komplett zurück. Ohne Wenn und Aber.",
  },

  // ── Fit ───────────────────────────────────────
  fit: {
    headline: "Ist der Kurs für dich geeignet?",
    yes: [
      "Du bist zwischen B1- und B2-Niveau",
      "Dir fehlen ständig die Wörter beim Sprechen",
      "Du bist bereit, 30 Tage lang zu lernen, um danach jedes Gespräch führen zu können",
      "Du suchst echtes Deutsch und Umgangssprache",
    ],
    no: [
      "Du bist noch Anfänger oder schon auf C1",
      "Du hast keine Stunde pro Tag Zeit",
      "Du bevorzugst langweiliges Lernmaterial",
    ],
  },

  // ── FAQ ───────────────────────────────────────
  faq: {
    headline: "Häufige Fragen",
    items: [
      {
        question: "Wie viel Zeit brauche ich?",
        answer:
          "Plane ca. 1–2 Stunden täglich ein für maximale Ergebnisse.",
      },
      {
        question: "Brauche ich Vorkenntnisse?",
        answer:
          "Ja, der Kurs ist ideal für das Niveau B1 bis B2. Wenn du unsicher bist, welches Niveau du hast und ob der Kurs für dich geeignet ist, schreib mir einfach: flemming@naturalfluentgerman.com",
      },
      {
        question: "Was werde ich nach dem Kurs können?",
        answer:
          "Du wirst einen deutlich größeren Wortschatz haben als vorher. Rechne mit etwa 300+ neuen Wörtern, die du aktiv benutzen kannst. In Gesprächen auf Deutsch wird das für dich ein echter Gamechanger. Denn du lernst hier die wirklich wichtigen Wörter und Begriffe des Alltags und weitere Techniken zur Wortschatzerweiterung, die du auch nach dem Kurs nutzen kannst.",
      },
      {
        question: "Was ist, wenn ich einen Tag verpasse?",
        answer:
          "Kein Problem, du hast maximale Flexibilität beim Lernen. Mach einfach am nächsten Tag weiter.",
      },
      {
        question: "Gibt es eine Garantie?",
        answer:
          "Ja, wenn du mindestens 3 Lektionen vollständig absolviert hast und der Meinung bist, dass der Kurs nichts für dich ist, bekommst du dein Geld zurück.",
      },
      {
        question:
          "Warum sollte ausgerechnet dieser Kurs funktionieren, wenn andere es nicht getan haben?",
        answer:
          "Weil dieser Kurs auf 30 Tage Intensität und maximale Relevanz setzt. Du lernst keine abstrakten Vokabellisten, sondern Wörter und Ausdrücke, die du im echten Alltag in Deutschland sofort einsetzen kannst — mit täglichem Sprechtraining und KI-Unterstützung.",
      },
      {
        question: "Habe ich lebenslangen Zugriff?",
        answer:
          "Ja, du hast lebenslangen Zugriff auf alle Kursinhalte.",
      },
    ],
  },

  // ── Final CTA ─────────────────────────────────
  finalCta: {
    headline: "Bereit, endlich flüssig Deutsch zu sprechen?",
    text: "Starte jetzt deine 30-Tage-Challenge und aktiviere den Wortschatz, der dir bisher gefehlt hat. Du hast nichts zu verlieren — nur hunderte neue Wörter zu gewinnen.",
    primaryCta: {
      label: "Ja, ich will flüssiger sprechen!",
      href: "#preise",
    },
    secondaryCta: {
      label: "",
      href: "",
    },
    reassurance:
      "100 % Geld-zurück-Garantie · Lebenslanger Zugriff · Sofort starten",
  },

  // ── Media Assets ──────────────────────────────
  media: {
    heroVideo: "https://www.youtube.com/embed/I9HxDsBYAK0",
    flemming: "/flemming-social-proof.webp",
    flemmingFit: "/flemming-fit-section.webp",
    podcast: "/flemming-amelie-podcast.webp",
    courseMockup: "",
    happyPeople: "/fr%C3%B6hlich-plappernde-leute.jpg",
  },

  // ── Social Proof ──────────────────────────────
  socialProof: {
    stats: [
      {
        icon: "Youtube",
        value: "79.000",
        label: "YouTube Subscribers",
      },
      {
        icon: "Podcast",
        value: "5 Mio.",
        label: "Podcast Downloads",
      },
      {
        icon: "Users",
        value: "1.500+",
        label: "zufriedene Sch\u00fcler in Kursen",
      },
    ],
  },
} as const;
