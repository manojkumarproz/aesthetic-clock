"use client";

import { useEffect } from "react";

export default function WeatherEffect({ mode = "rain" }) {
  useEffect(() => {
    const canvas = document.getElementById("weather") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 4 + 2
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(d => {
        d.y += d.speed;
        if (d.y > canvas.height) d.y = 0;

        ctx.fillStyle = "rgba(173,216,230,0.6)";
        ctx.fillRect(d.x, d.y, 2, 10);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas id="weather" className="fixed inset-0 -z-20" />;
}
