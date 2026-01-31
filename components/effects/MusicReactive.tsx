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
      className={`px-4 py-1 rounded-full backdrop-blur border transition-all 
        ${enabled ? "bg-sky-400/30 border-sky-400" : "bg-white/10 border-white/20 hover:bg-white/20"}`}
    >
      🎵 {enabled ? "Music Active" : "Music Mode"}
    </button>
  );
}
