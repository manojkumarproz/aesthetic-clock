"use client";

import { useState } from "react";

import ThemeToggle from "../theme/ThemeToggle";
import AmbientPlayer from "../audio/AmbientPlayer";
import Particles from "../effects/Particles";
import WeatherEffect from "../effects/WeatherEffect";
import MusicReactive from "../effects/MusicReactive";
import TopBar from "../ui/TopBar";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "../theme/ThemeProvider";
import Dropdown from "../ui/Dropdown";

type ClockStyle = "modern" | "antique" | "futuristic";

export default function ClockContainer() {
  const [mode, setMode] = useState<"analog" | "digital">("analog");
  const [weatherMode, setWeatherMode] = useState<"rain" | "snow" | "fireflies">("rain");
  const [clockStyle, setClockStyle] = useState<ClockStyle>("modern");
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden font-sans">

      {/* Ad Placements Concept (Sidebars and Bottom) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex w-[160px] h-[600px] bg-white/5 border border-white/10 rounded-2xl flex-col items-center justify-center text-white/20 text-xs backdrop-blur-md">
        <span className="mb-4 rotate-90 whitespace-nowrap">VERTICAL AD PLACEMENT</span>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="vertical"
          data-full-width-responsive="true" />
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex w-[160px] h-[600px] bg-white/5 border border-white/10 rounded-2xl flex-col items-center justify-center text-white/20 text-xs backdrop-blur-md">
        <span className="mb-4 -rotate-90 whitespace-nowrap">VERTICAL AD PLACEMENT</span>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="vertical"
          data-full-width-responsive="true" />
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(90vw,728px)] h-[90px] bg-white/5 border border-white/10 rounded-xl hidden md:flex items-center justify-center text-white/20 text-xs backdrop-blur-md z-[60]">
        AD CONTENT AREA
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="horizontal"
          data-full-width-responsive="true" />
      </div>

      {/* Main Clock UI and Backgrounds below */}
      {/* Background Effects */}
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

        {/* Separator */}
        <div className="w-[1px] h-6 bg-white/10 mx-2 hidden md:block" />

        <div className="flex items-center gap-2">
          <Dropdown
            label="Weather"
            value={weatherMode}
            onChange={(val) => setWeatherMode(val as "rain" | "snow" | "fireflies")}
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

      {/* Clock Display */}
      <div className="z-0 scale-90 md:scale-100 transition-transform duration-700">
        {mode === "analog" ? <AnalogClock style={clockStyle} /> : <DigitalClock style={clockStyle} />}
      </div>
    </div>
  );
}
