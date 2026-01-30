"use client";

import { useState } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import ToggleButton from "../ui/ToggleButton";
import TopBar from "../ui/TopBar";

export default function ClockContainer() {
  const [mode, setMode] = useState<"analog" | "digital">("analog");

  return (
    <div className="w-full h-screen flex items-center justify-center">

      <TopBar>
        <ToggleButton 
          label="Analog" 
          active={mode === "analog"} 
          onClick={() => setMode("analog")} 
        />
        <ToggleButton 
          label="Digital" 
          active={mode === "digital"} 
          onClick={() => setMode("digital")} 
        />
      </TopBar>

      {mode === "analog" ? <AnalogClock /> : <DigitalClock />}
    </div>
  );
}
