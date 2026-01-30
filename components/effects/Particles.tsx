"use client";
import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    let particles: any[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        s: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.s;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas id="particles" className="fixed inset-0 -z-10" />;
}
