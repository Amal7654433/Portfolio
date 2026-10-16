import { useEffect, useRef } from "react";

const GLYPHS = "01{}[]<>/=;()+-*&|!?#$%const let fn => import export async await".split("");
const COLORS = ["#7c5cff", "#22d3ee", "#ff6b9d"];

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontSize = 16;
    let columns = 0;
    let drops = [];
    let frame;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };

    const draw = (time) => {
      frame = requestAnimationFrame(draw);
      if (time - last < 60) return;
      last = time;

      ctx.fillStyle = "rgba(5, 5, 7, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        if (drops[i] > 0) {
          const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          ctx.fillStyle = COLORS[i % COLORS.length];
          ctx.fillText(glyph, i * fontSize, drops[i] * fontSize);
        }
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, opacity: 0.22 }}
    />
  );
}
