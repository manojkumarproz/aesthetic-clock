"use client";

import { useClock } from "@/hooks/useClock";

export default function DigitalClock() {
  const time = useClock();

  if (!time) return null;

  return (
    <div className="text-[clamp(60px,10vw,120px)] font-bold tracking-wide text-sky-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
      {time.toLocaleTimeString()}
    </div>
  );
}
