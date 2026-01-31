"use client";

import { useRef, useState } from "react";

export default function AmbientPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
        audioRef.current.volume = 0.4;
      }
      setPlaying(!playing);
    } catch {
      console.warn("User interaction required to play audio.");
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop src="/ambient.mp3" />

      <button
        onClick={toggle}
        className={`px-4 py-1.5 rounded-full border transition-all text-sm flex items-center gap-2
          ${playing ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-200" : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"}`}
      >
        <span className="text-lg">{playing ? "🔇" : "🎧"}</span>
        <span className="font-medium uppercase tracking-wider text-[10px]">{playing ? "Playing" : "Ambient"}</span>
      </button>
    </div>
  );
}
