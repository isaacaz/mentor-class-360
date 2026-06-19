"use client";

import { useEffect, useMemo, useReducer } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scramble } from "@/components/scramble";
import { CountUp } from "@/components/count-up";

const WHATSAPP =
  "https://wa.me/59164348616?text=Hola%20Mentor%20Class%20360%2C%20quiero%20empezar%20mis%20clases";

// The exact snippet shown on the brand flyer — the product's own vernacular.
const CODE_LINES = [
  { t: "#include <stdio.h>", c: "text-[var(--muted)]" },
  { t: "", c: "" },
  { t: "int main() {", c: "text-[var(--violet-bright)]" },
  { t: '  printf("Hola, futuro");', c: "text-[var(--teal-bright)]" },
  { t: "  return 0;", c: "text-[var(--amber)]" },
  { t: "}", c: "text-[var(--violet-bright)]" },
];

const FULL_TEXT = CODE_LINES.map((l) => l.t).join("\n");

function useTypewriter(enabled: boolean) {
  const [count, tick] = useReducer((n: number) => n + 1, 0);

  useEffect(() => {
    if (!enabled) return;
    if (count >= FULL_TEXT.length) return;
    // Slightly variable cadence reads more like real typing.
    const ch = FULL_TEXT[count];
    const delay = ch === "\n" ? 220 : 38 + Math.random() * 40;
    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [count, enabled]);

  return enabled ? FULL_TEXT.slice(0, count) : FULL_TEXT;
}

export function Hero() {
  const reduced = useReducedMotion();
  const typed = useTypewriter(!reduced);
  const done = typed.length >= FULL_TEXT.length;

  // Map the linear typed string back onto colored lines for rendering.
  const rendered = useMemo(() => {
    const lines = typed.split("\n");
    return CODE_LINES.map((line, i) => ({
      ...line,
      shown: lines[i] ?? "",
      active: i === lines.length - 1,
    }));
  }, [typed]);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="aurora" aria-hidden />
      <div className="absolute inset-0 grid-faint" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: the thesis */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--teal-bright)]"
          >
            <Wifi className="size-3.5" />
            100% online · aprende desde donde estés
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Aprende a programar
            <br />
            de cero a{" "}
            <Scramble text="nivel avanzado" className="text-gradient" />.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            Clases personalizadas, en vivo y a tu ritmo. Te acompañamos paso a
            paso —desde tu primer “Hola mundo” hasta tu proyecto final de
            secundaria— con explicaciones claras y práctica real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="accent" size="lg" className="group">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Empezar ahora
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#precios">Ver precios</a>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm"
          >
            {[
              { count: 20, suffix: " Bs", label: "la hora" },
              { value: "1 a 1", label: "atención real" },
              { value: "Horario", label: "flexible" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-lg font-bold text-[var(--fg)]">
                  {typeof s.count === "number" ? (
                    <>
                      <CountUp to={s.count} />
                      {s.suffix}
                    </>
                  ) : (
                    s.value
                  )}
                </dt>
                <dd className="text-[var(--muted)]">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: the signature — an IDE window typing the brand's snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-[var(--muted)]">
                hola_mundo.c
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:text-[15px]">
              <code>
                {rendered.map((line, i) => (
                  <div key={i} className="grid grid-cols-[1.75rem_1fr] gap-3">
                    <span className="select-none text-right text-[var(--muted)]/50">
                      {i + 1}
                    </span>
                    <span className={line.c}>
                      {line.shown || " "}
                      {!done && line.active && <span className="caret">&nbsp;</span>}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-4 -right-3 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 font-mono text-xs text-[var(--teal-bright)] shadow-lg">
            {done ? "✓ compilado sin errores" : "compilando…"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
