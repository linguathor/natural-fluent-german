"use client";

import { useEffect, useState } from "react";
import { CtaNoteProvider } from "@/lib/cta-note-context";

// April 15, 2026 00:01 CEST (UTC+2) = April 14, 2026 22:01 UTC
const OPEN_DATE = new Date("2026-04-14T22:01:00Z");

export default function TimeGatedCtaNote({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsOpen(new Date() >= OPEN_DATE);
    check();
    const interval = setInterval(check, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CtaNoteProvider note={isOpen ? null : "Anmeldung startet ab 15. April"}>
      {children}
    </CtaNoteProvider>
  );
}
