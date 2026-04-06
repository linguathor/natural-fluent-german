"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { LandingPageContent } from "@/content/landing-page";
import { landingPageContent as de } from "@/content/landing-page";
import { landingPageContentEn as en } from "@/content/landing-page-en";

export type Language = "de" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  content: LandingPageContent;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "de",
  toggleLanguage: () => {},
  content: de,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const content = language === "de" ? de : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useContent(): LandingPageContent {
  return useContext(LanguageContext).content;
}
