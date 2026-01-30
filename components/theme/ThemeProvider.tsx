"use client";

import { createContext, useState, ReactNode } from "react";

export type Theme = "lofi" | "neon" | "nature";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("lofi");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
