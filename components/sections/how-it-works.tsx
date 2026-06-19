"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Hammer, Bug, Presentation } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const steps = [
  {
    icon: Lightbulb,
    title: "Ideas y planificación",
    body: "Definimos juntos tu proyecto, alcance y qué tecnologías vas a usar.",
  },
  {
    icon: Hammer,
    title: "Desarrollo del proyecto",
    body: "Construyes tu solución guiado paso a paso, escribiendo todo el código tú.",
  },
  {
    icon: Bug,
    title: "Pruebas y mejoras",
    body: "Encontramos errores, los corregimos y pulimos los detalles hasta que funcione bien.",
  },
  {
    icon: Presentation,
    title: "Presentación final",
    body: "Preparas tu defensa con confianza: sabes qué hiciste y cómo explicarlo.",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "scaleY(1)";
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proyecto"
      className="relative px-5 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, transparent, color-mix(in oklab, var(--surface) 60%, transparent), transparent)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>// proyecto final de secundaria</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tienes un proyecto final? No estás solo, lo logramos juntos.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Te acompañamos en cada etapa, desde la primera idea hasta el día de
            la presentación.
          </p>
        </Reveal>

        <div className="relative mt-14 pl-2">
          {/* Vertical progress line drawn on scroll */}
          <div className="absolute left-[1.6rem] top-2 bottom-2 w-px bg-[var(--border)]">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--teal)] via-[var(--violet)] to-[var(--amber)]"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <Reveal stagger className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex gap-6">
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--teal-bright)]">
                  <s.icon className="size-5" />
                </div>
                <div className="pt-1.5">
                  <span className="font-mono text-xs text-[var(--muted)]">
                    paso {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-[var(--muted)]">{s.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
