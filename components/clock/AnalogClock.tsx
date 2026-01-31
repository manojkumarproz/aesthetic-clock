"use client";

import { useClock } from "@/hooks/useClock";

export type ClockStyle = "modern" | "antique" | "futuristic";

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

  const romanNumerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

  return (
    <div className={`relative transition-all duration-700 ease-in-out
      w-[min(80vw,80vh,380px)] h-[min(80vw,80vh,380px)] rounded-full border
      ${style === "antique" ?
        "border-[#b45309]/60 bg-[#451a03] shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_80px_rgba(0,0,0,0.8)]" :
        style === "futuristic" ?
          "border-cyan-500/50 bg-cyan-950/10 shadow-[0_0_50px_rgba(6,182,212,0.3)]" :
          "border-white/20 bg-[var(--clock-bg)] shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      }`}>

      {/* Ornate Background Pattern for Steampunk */}
      {style === "antique" && (
        <>
          {/* Main Metallic Ring */}
          <div className="absolute inset-0 rounded-full border-[10px] border-[#78350f] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] opacity-80" />
          <div className="absolute inset-[15px] rounded-full border-[2px] border-[#b45309]/30" />

          {/* Engraved Gears Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-full">
            <div className="absolute inset-0 scale-110 flex flex-wrap gap-4 justify-center items-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-16 h-16 border-2 border-amber-500/40 rounded-full rotate-45 flex items-center justify-center">
                  <div className="w-8 h-8 border border-amber-500/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Clock Face Markers */}
      {style === "antique" ? (
        <>
          {romanNumerals.map((num, i) => (
            <div key={num}
              className="absolute inset-[12%] text-amber-200/90 font-serif text-[clamp(14px,5vw,26px)] text-center font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <span className="inline-block" style={{ transform: `rotate(${-i * 30}deg)` }}>{num}</span>
            </div>
          ))}
          {/* Internal Gear Ticks */}
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i}
              className={`absolute left-1/2 top-[5%] -translate-x-1/2 origin-[center_min(35vw,35vh,166px)]
                ${i % 5 === 0 ? "w-1.5 h-4 bg-amber-400/80 shadow-[0_0_5px_rgba(251,191,36,0.3)]" : "w-0.5 h-2 bg-amber-600/40"}`}
              style={{
                transform: `rotate(${i * 6}deg)`,
                height: i % 5 === 0 ? "4%" : "1.5%",
                top: "3%"
              }}
            />
          ))}
        </>
      ) : style === "futuristic" ? (
        Array.from({ length: 12 }).map((_, i) => (
          <div key={i}
            className="absolute left-1/2 top-4 w-1 h-3 bg-cyan-400/40 origin-[center_min(36vw,36vh,154px)] -translate-x-1/2"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))
      ) : null}

      {/* Hour Hand */}
      <div style={{ transform: `rotate(${hour * 30}deg)` }}
        className={`absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear
          ${style === "antique" ? "h-[25%] w-[3%] bg-gradient-to-t from-amber-900 to-amber-200 border border-amber-950 shadow-md" :
            style === "futuristic" ? "h-[22%] w-[1.5%] bg-cyan-300 shadow-[0_0_10px_cyan]" :
              "h-[25%] w-[1.8%] bg-white"
          }`}
      />

      {/* Minute Hand */}
      <div style={{ transform: `rotate(${minute * 6}deg)` }}
        className={`absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear
          ${style === "antique" ? "h-[35%] w-[2.5%] bg-gradient-to-t from-amber-800 to-amber-100 border border-amber-950" :
            style === "futuristic" ? "h-[32%] w-[1.2%] bg-cyan-200 shadow-[0_0_10px_cyan]" :
              "h-[35%] w-[1.5%] bg-white/80"
          }`}
      />

      {/* Second Hand */}
      <div
        className={`absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear
          ${style === "antique" ? "h-[40%] w-[1.5%] bg-red-700 shadow-sm" :
            style === "futuristic" ? "h-[42%] w-[1%] bg-pink-500 shadow-[0_0_15px_pink]" :
              "h-[40%] w-[1.2%]"
          }`}
        style={{
          backgroundColor: style === "modern" ? "var(--accent)" : undefined,
          transform: `rotate(${second * 6}deg)`
        }}
      />

      {/* Center Pin */}
      <div className={`absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2
        ${style === "antique" ? "w-[6%] h-[6%] bg-amber-950 border-2 border-amber-600 shadow-lg" :
          style === "futuristic" ? "w-[3%] h-[3%] bg-white shadow-[0_0_15px_white]" :
            "w-[4%] h-[4%] bg-white"
        }`}
      />
    </div>
  );
}
