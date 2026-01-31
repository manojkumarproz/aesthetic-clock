"use client";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = ["lofi", "neon", "nature"] as const;

  return (
    <div className="flex gap-2">
      {themes.map(t => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-4 py-1 rounded-full text-sm backdrop-blur border transition-all
          ${theme === t ? "bg-white/30 border-white/50" : "bg-white/10 border-white/20 hover:bg-white/20"}`}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
