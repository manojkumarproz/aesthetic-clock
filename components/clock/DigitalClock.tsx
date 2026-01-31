"use client";

import { useClock } from "@/hooks/useClock";
import { ClockStyle } from "./AnalogClock";

export default function DigitalClock({ style = "modern" }: { style?: ClockStyle }) {
  const time = useClock();

  if (!time) return null;

  return (
    <div className="relative group">
      {style === "futuristic" && (
        <div className="absolute inset-0 bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
      )}

      <div
        className={`text-[clamp(60px,10vw,120px)] font-bold tracking-wide drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-700
          ${style === "antique" ? "font-serif italic text-amber-900/80" :
            style === "futuristic" ? "font-mono text-cyan-400 [text-shadow:0_0_15px_cyan]" :
              ""
          }`}
        style={{ color: style === "modern" ? "var(--accent)" : undefined }}
      >
        {time.toLocaleTimeString()}
      </div>

      {style === "futuristic" && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/30 animate-pulse" />
      )}
    </div>
  );
}
