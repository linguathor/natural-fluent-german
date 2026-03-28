"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Methode", href: "#methode" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Themen", href: "#themen" },
  { label: "Erfahrungen", href: "#erfahrungen" },
  { label: "Coaching", href: "#coaching" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

export default function SectionNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

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
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-hide md:justify-center md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors md:text-sm",
                active === item.href.slice(1)
                  ? "bg-emerald-700 text-white"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
