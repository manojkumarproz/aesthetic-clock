"use client";
import { useRef, useState } from "react";

export default function AmbientPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.3;
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <audio ref={audioRef} loop src="/ambient.mp3" />
      <button onClick={toggle} className="px-4 py-1 rounded-full bg-white/10 backdrop-blur border hover:bg-white/20">
        {playing ? "🔇 Mute" : "🎧 Ambient"}
      </button>
    </div>
  );
}
