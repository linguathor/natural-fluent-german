"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Menu, X } from "lucide-react";

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

interface SectionNavProps {
  banner?: React.ReactNode;
}

export default function SectionNav({ banner }: SectionNavProps) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navItems = language === "de" ? navItemsDe : navItemsEn;

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);

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
  }, [navItems, menuOpen]);

  const activeLabel = navItems.find((item) => item.href.slice(1) === active)?.label;

  return (
    <div className="fixed top-0 inset-x-0 z-40">
      {/* Optional countdown banner */}
      {banner}

      <nav className="border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        {/* ── Mobile bar ── */}
        <div className="flex items-center justify-between px-4 py-2.5 md:hidden">
          <span className="text-sm font-semibold text-stone-800 truncate">
            {activeLabel ?? "Natural Fluent German"}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-stone-300 px-2.5 py-1 text-xs font-medium text-stone-600 hover:bg-stone-100"
              aria-label="Toggle language"
            >
              {language === "de" ? "EN" : "DE"}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              className="rounded-md p-1.5 text-stone-600 hover:bg-stone-100"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 md:hidden bg-white",
            menuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="border-t border-stone-100 px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active === item.href.slice(1)
                    ? "bg-emerald-700 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Desktop bar ── */}
        <div className="hidden md:block mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-2 py-2.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  active === item.href.slice(1)
                    ? "bg-emerald-700 text-white"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                )}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 rounded-full border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100"
              aria-label="Toggle language"
            >
              {language === "de" ? "EN" : "DE"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
