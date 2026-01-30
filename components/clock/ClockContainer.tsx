"use client";

import ThemeToggle from "../theme/ThemeToggle";
import AmbientPlayer from "../audio/AmbientPlayer";
import Particles from "../effects/Particles";
import TopBar from "../ui/TopBar";
import ToggleButton from "../ui/ToggleButton";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { useState } from "react";

export default function ClockContainer() {
  const [mode, setMode] = useState<"analog" | "digital">("analog");

  return (
    <div className="w-full h-screen flex items-center justify-center">

      <Particles />

      <TopBar>
        <ToggleButton label="Analog" active={mode === "analog"} onClick={() => setMode("analog")} />
        <ToggleButton label="Digital" active={mode === "digital"} onClick={() => setMode("digital")} />

        <ThemeToggle />
        <AmbientPlayer />
      </TopBar>

      {mode === "analog" ? <AnalogClock /> : <DigitalClock />}
    </div>
  );
}
