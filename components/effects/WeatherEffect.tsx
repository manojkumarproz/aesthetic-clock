"use client";
import { useEffect } from "react";

export default function WeatherEffect({ mode = "rain" }) {
  useEffect(() => {
    const canvas = document.getElementById("weather") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: mode === "rain" ? 100 : 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * (mode === "rain" ? 10 : 2) + 1,
      size: Math.random() * (mode === "fireflies" ? 3 : 2) + 1,
      drift: Math.random() * 2 - 1,
      opacity: Math.random() * 0.5 + 0.3
    }));

    let animationField: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        if (mode === "rain") {
          p.y += p.speed;
          p.x += p.drift * 0.5;
          ctx.strokeStyle = `rgba(173, 216, 230, ${p.opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.drift, p.y + 10);
          ctx.stroke();
        } else if (mode === "snow") {
          p.y += p.speed * 0.5;
          p.x += Math.sin(p.y / 20) * 0.5;
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (mode === "fireflies") {
          p.y += (Math.random() - 0.5) * 2;
          p.x += (Math.random() - 0.5) * 2;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "yellow";
          ctx.fillStyle = `rgba(255, 255, 0, ${Math.abs(Math.sin(Date.now() / 1000 + p.x))})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (p.y > canvas.height) p.y = -10;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
      });

      animationField = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationField);
    };
  }, [mode]);

  return <canvas id="weather" className="fixed inset-0 -z-20 pointer-events-none" />;
}
