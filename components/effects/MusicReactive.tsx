"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicReactive() {
  const [enabled, setEnabled] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      document.body.style.background = "";
      return;
    }

    const audio = new Audio("/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    const ctx = new AudioContext();
    const source = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();

    source.connect(analyser);
    analyser.connect(ctx.destination);

    const data = new Uint8Array(analyser.frequencyBinCount);

    audio.play();

    function animate() {
      analyser.getByteFrequencyData(data);
      const avg = data.reduce((a, b) => a + b) / data.length;

      document.body.style.background =
        `radial-gradient(circle, rgba(56,189,248,${avg / 300}), transparent), var(--bg-fallback, #020617)`;

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      audio.pause();
      ctx.close();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      document.body.style.background = "";
    };
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`px-4 py-1.5 rounded-full border transition-all text-sm flex items-center gap-2
        ${enabled ? "bg-pink-500/20 border-pink-500/50 text-pink-200" : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"}`}
    >
      <span className="text-lg">{enabled ? "⚡" : "🎵"}</span>
      <span className="font-medium uppercase tracking-wider text-[10px]">{enabled ? "Reactive" : "Visuals"}</span>
    </button>
  );
}
