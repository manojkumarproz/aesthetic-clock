"use client";

import { useClock } from "@/hooks/useClock";

export default function AnalogClock() {
  const time = useClock();

  if (!time) return null;

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ms = time.getMilliseconds();

  const second = s + ms / 1000;
  const minute = m + second / 60;
  const hour = (h % 12) + minute / 60;

  return (
    <div className="relative w-[340px] h-[340px] rounded-full border border-white/20 backdrop-blur-xl bg-white/5 shadow-[0_0_40px_rgba(56,189,248,0.25)]">

      <div style={{ transform: `rotate(${hour * 30}deg)` }}
        className="absolute left-1/2 bottom-1/2 h-[85px] w-[6px] bg-white rounded origin-bottom"
      />

      <div style={{ transform: `rotate(${minute * 6}deg)` }}
        className="absolute left-1/2 bottom-1/2 h-[120px] w-[4px] bg-white rounded origin-bottom"
      />

      <div style={{ transform: `rotate(${second * 6}deg)` }}
        className="absolute left-1/2 bottom-1/2 h-[140px] w-[2px] bg-sky-400 rounded origin-bottom"
      />

      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
