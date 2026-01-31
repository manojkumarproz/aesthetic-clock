"use client";

import { useClock } from "@/hooks/useClock";

export default function DigitalClock() {
  const time = useClock();

  if (!time) return null;

  return (
    <div
      className="text-[clamp(60px,10vw,120px)] font-bold tracking-wide drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
      style={{ color: "var(--accent)" }}
    >
      {time.toLocaleTimeString()}
    </div>
  );
}
