"use client";

import { useClock } from "@/hooks/useClock";
import ModernAnalog from "./styles/ModernAnalog";
import SteampunkAnalog from "./styles/SteampunkAnalog";
import FuturisticAnalog from "./styles/FuturisticAnalog";
import { ClockStyle } from "@/types";

export default function AnalogClock({ style = "modern" }: { style?: ClockStyle }) {
  const time = useClock();

  if (!time) return null;

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ms = time.getMilliseconds();

  const second = s + ms / 1000;
  const minute = m + second / 60;
  const hour = (h % 12) + minute / 60;

  const containerStyles = {
    antique: "border-[#b45309]/60 bg-[#451a03] shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_80px_rgba(0,0,0,0.8)]",
    futuristic: "border-cyan-500/50 bg-cyan-950/10 shadow-[0_0_50px_rgba(6,182,212,0.3)]",
    modern: "border-white/20 bg-[var(--clock-bg)] shadow-[0_0_40px_rgba(0,0,0,0.3)]"
  };

  return (
    <div className={`relative transition-all duration-700 ease-in-out
      w-[min(80vw,80vh,380px)] h-[min(80vw,80vh,380px)] rounded-full border
      ${containerStyles[style]}`}>

      {style === "antique" && <SteampunkAnalog hour={hour} minute={minute} second={second} />}
      {style === "futuristic" && <FuturisticAnalog hour={hour} minute={minute} second={second} />}
      {style === "modern" && <ModernAnalog hour={hour} minute={minute} second={second} />}

    </div>
  );
}
