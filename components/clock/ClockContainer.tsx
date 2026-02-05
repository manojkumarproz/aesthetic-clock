"use client";

import { useState } from "react";
import AmbientPlayer from "../audio/AmbientPlayer";
import Particles from "../effects/Particles";
import WeatherEffect from "../effects/WeatherEffect";
import MusicReactive from "../effects/MusicReactive";
import TopBar from "../ui/TopBar";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { useTheme } from "@/hooks/useTheme";
import Dropdown from "../ui/Dropdown";
import AdSlot from "../ads/AdSlot";
import SudokuGame from "../sudoku/SudokuGame";
import { ClockMode, ClockStyle, WeatherMode, Theme } from "@/types";

export default function ClockContainer() {
  const [mode, setMode] = useState<ClockMode>("analog");
  const [weatherMode, setWeatherMode] = useState<WeatherMode>("rain");
  const [clockStyle, setClockStyle] = useState<ClockStyle>("modern");
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden font-sans">

      {/* Side Ads - Desktop only */}
      <AdSlot
        type="vertical"
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex"
        label="PRIME SLOT"
      />

      <AdSlot
        type="vertical"
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex"
        label="SPONSORED"
      />

      {/* Bottom Ad - Tablet/Desktop */}
      <AdSlot
        type="horizontal"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 hidden md:flex z-[60]"
        label=""
      />

      {/* Atmosphere Layer */}
      <Particles />
      <WeatherEffect mode={weatherMode} />

      {/* Top Controls (Simplified Pill Header) */}
      <TopBar>
        {/* Navigation Style Links/Buttons */}
        <div className="flex items-center gap-1 md:gap-4 shrink-0">
          <button
            onClick={() => setMode("analog")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${mode === "analog" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
          >
            Analog
          </button>
          <button
            onClick={() => setMode("digital")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${mode === "digital" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
          >
            Digital
          </button>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-white/10 mx-2 hidden md:block" />

        {/* Dropdowns */}
        <div className="flex items-center gap-2">
          <Dropdown
            label="Theme"
            value={theme}
            onChange={(val) => setTheme(val as Theme)}
            options={[
              { label: "Lofi", value: "lofi" },
              { label: "Neon", value: "neon" },
              { label: "Nature", value: "nature" }
            ]}
          />

          <Dropdown
            label="Style"
            value={clockStyle}
            onChange={(val) => setClockStyle(val as ClockStyle)}
            options={[
              { label: "Modern", value: "modern" },
              { label: "Antique", value: "antique" },
              { label: "Futuristic", value: "futuristic" }
            ]}
          />
        </div>

        <div className="w-[1px] h-6 bg-white/10 mx-2 hidden md:block" />

        <div className="flex items-center gap-2">
          <Dropdown
            label="Weather"
            value={weatherMode}
            onChange={(val) => setWeatherMode(val as WeatherMode)}
            options={[
              { label: "Rain", value: "rain" },
              { label: "Snow", value: "snow" },
              { label: "Fireflies", value: "fireflies" }
            ]}
          />
        </div>

        <div className="flex gap-2 items-center">
          <AmbientPlayer />
          <MusicReactive />
        </div>
      </TopBar>

      {/* Main Clock Stage */}
      <main className="z-0 w-full max-w-7xl mx-auto
                 flex flex-col md:flex-row
                 items-center justify-center
                 gap-10 scale-90 md:scale-100
                 transition-transform duration-700">

  {/* Clock */}
  <div className="flex-1 flex justify-center">
    {mode === "analog"
      ? <AnalogClock style={clockStyle} />
      : <DigitalClock style={clockStyle}
    />}
  </div>

  {/* Sudoku */}
  <div className="flex-1 flex justify-center">
    <SudokuGame />
  </div>

</main>

    </div>
  );
}
