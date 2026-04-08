"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

const navItemsDe = [
  { label: "Methode", href: "#methode" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Themen", href: "#themen" },
  { label: "Erfahrungen", href: "#erfahrungen" },
  { label: "Coaching", href: "#coaching" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

const navItemsEn = [
  { label: "Method", href: "#methode" },
  { label: "Schedule", href: "#ablauf" },
  { label: "Topics", href: "#themen" },
  { label: "Reviews", href: "#erfahrungen" },
  { label: "Coaching", href: "#coaching" },
  { label: "Pricing", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

export default function SectionNav() {
  const [active, setActive] = useState("");
  const { language, toggleLanguage } = useLanguage();
  const navItems = language === "de" ? navItemsDe : navItemsEn;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => ({
          id: item.href.slice(1),
          el: document.getElementById(item.href.slice(1)),
        }))
        .filter((s) => s.el);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el!.getBoundingClientRect();
        if (rect.top <= 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-2 md:px-4">
        <div className="flex items-center justify-center gap-0.5 py-2 md:gap-2 md:py-2.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-2 py-1 text-[11px] font-medium transition-colors md:px-3.5 md:py-1.5 md:text-sm",
                active === item.href.slice(1)
                  ? "bg-emerald-700 text-white"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              )}
            >
              {item.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-1 rounded-full border border-stone-300 px-2 py-1 text-[11px] font-medium text-stone-600 transition-colors hover:bg-stone-100 md:ml-2 md:px-3 md:py-1.5 md:text-sm"
            aria-label="Toggle language"
          >
            {language === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </nav>
  );
}
