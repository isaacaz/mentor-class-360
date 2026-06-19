"use client";

import { motion } from "motion/react";
import { Code2, Brain, Laptop, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/section-label";

const features = [
  {
    icon: Code2,
    title: "Programación real",
    body: "Desde lo más básico hasta temas avanzados, escribiendo código de verdad en cada clase.",
    accent: "var(--teal)",
  },
  {
    icon: Brain,
    title: "Lógica y resolución",
    body: "Aprende a pensar como programador: descomponer problemas y construir soluciones paso a paso.",
    accent: "var(--violet)",
  },
  {
    icon: Laptop,
    title: "Práctica y proyectos",
    body: "Ejercicios y proyectos aplicados para que lo que aprendes se quede contigo y lo puedas usar.",
    accent: "var(--amber)",
  },
  {
    icon: GraduationCap,
    title: "Preparación para exámenes",
    body: "Repaso enfocado y acompañamiento para que llegues seguro a tus pruebas y defensas.",
    accent: "var(--teal-bright)",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>// qué aprendes</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Una base sólida que se nota,
            <br className="hidden sm:block" /> aprendizaje que te impulsa.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            No memorizas: entiendes. Cada tema se explica con claridad y se
            refuerza con práctica hasta que lo dominas.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Card className="group h-full transition-colors hover:border-[color-mix(in_oklab,var(--teal)_50%,var(--border))]">
                <div
                  className="flex size-12 items-center justify-center rounded-xl"
                  style={{
                    background: `color-mix(in oklab, ${f.accent} 16%, transparent)`,
                    color: f.accent,
                  }}
                >
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {f.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
