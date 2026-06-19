"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]();=+*0123456789";

/**
 * Decodes text terminal-style on mount: the final string is what renders on the
 * server (so it's the real LCP content), then a brief scramble pass plays on the
 * client. No-ops under reduced motion.
 */
export function Scramble({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let revealed = 0;
    frame.current = 0;

    const run = () => {
      frame.current += 1;
      // Reveal one more real character every few frames.
      if (frame.current % 2 === 0) revealed += 1;

      const out = text
        .split("")
        .map((ch, i) => {
          if (i < revealed || ch === " ") return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplay(out);

      if (revealed <= text.length) {
        raf = window.setTimeout(() => requestAnimationFrame(run), speed);
      } else {
        setDisplay(text);
      }
    };

    setDisplay(""); // start blank, decode in
    raf = window.setTimeout(() => requestAnimationFrame(run), 120);
    return () => window.clearTimeout(raf);
  }, [text, speed]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
