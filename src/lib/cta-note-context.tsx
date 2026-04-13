"use client";

import { createContext, useContext } from "react";

const CtaNoteContext = createContext<string | null>(null);

export function CtaNoteProvider({
  note,
  children,
}: {
  note: string | null;
  children: React.ReactNode;
}) {
  return (
    <CtaNoteContext.Provider value={note}>{children}</CtaNoteContext.Provider>
  );
}

export function useCtaNote(): string | null {
  return useContext(CtaNoteContext);
}
