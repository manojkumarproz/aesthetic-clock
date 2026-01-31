"use client";
import { useEffect, useState } from "react";

export function usePreferences<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setValue(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}
