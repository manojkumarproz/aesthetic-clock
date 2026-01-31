"use client";

import { useState } from "react";

import ThemeToggle from "../theme/ThemeToggle";
import AmbientPlayer from "../audio/AmbientPlayer";
import Particles from "../effects/Particles";
import WeatherEffect from "../effects/WeatherEffect";
import MusicReactive from "../effects/MusicReactive";
import TopBar from "../ui/TopBar";
import ToggleButton from "../ui/ToggleButton";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import AdBanner from "../ads/AdBanner";

export default function ClockContainer() {
  const [mode, setMode] = useState<"analog" | "digital">("analog");
  const [weatherMode, setWeatherMode] = useState<"rain" | "snow" | "fireflies">("rain");

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Effects */}
      <Particles />
      <WeatherEffect mode={weatherMode} />

      {/* Top Controls */}
      <TopBar>
        <div className="flex gap-2">
          <ToggleButton label="Analog" active={mode === "analog"} onClick={() => setMode("analog")} />
          <ToggleButton label="Digital" active={mode === "digital"} onClick={() => setMode("digital")} />
        </div>

        <div className="flex gap-2">
          <ToggleButton label="Rain" active={weatherMode === "rain"} onClick={() => setWeatherMode("rain")} />
          <ToggleButton label="Snow" active={weatherMode === "snow"} onClick={() => setWeatherMode("snow")} />
          <ToggleButton label="Fireflies" active={weatherMode === "fireflies"} onClick={() => setWeatherMode("fireflies")} />
        </div>

        <ThemeToggle />

        <div className="flex gap-2">
          <AmbientPlayer />
          <MusicReactive />
        </div>
      </TopBar>

      {/* Clock Display */}
      {mode === "analog" ? <AnalogClock /> : <DigitalClock />}

      {/* Ads (Non-intrusive) */}
      {/* <AdBanner /> */}
    </div>
  );
}
