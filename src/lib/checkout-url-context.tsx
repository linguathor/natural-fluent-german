"use client";

import { createContext, useContext } from "react";

const CheckoutUrlContext = createContext<string | null>(null);

export function CheckoutUrlProvider({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <CheckoutUrlContext.Provider value={url}>
      {children}
    </CheckoutUrlContext.Provider>
  );
}

export function useCheckoutUrl(): string | null {
  return useContext(CheckoutUrlContext);
}
