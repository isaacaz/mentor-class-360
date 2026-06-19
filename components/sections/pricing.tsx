"use client";

import { motion } from "motion/react";
import { Check, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";

const WHATSAPP =
  "https://wa.me/59164348616?text=Hola%20Mentor%20Class%20360%2C%20quiero%20reservar%20mi%20primera%20clase";
const WHATSAPP_GROUP =
  "https://wa.me/59164348616?text=Hola%2C%20somos%20un%20grupo%20y%20queremos%20info%20sobre%20el%20descuento";

const includes = [
  "Clases en vivo, 100% online",
  "Atención personalizada 1 a 1",
  "Material actualizado y ejercicios",
  "Acompañamiento y retroalimentación constante",
  "Apoyo en tareas, tesis y proyectos",
];

export function Pricing() {
  return (
    <section id="precios" className="relative px-5 py-24 md:py-32">
      <div className="absolute inset-0 grid-faint opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>// tu inversión en tu futuro</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Un precio justo. No es un gasto, es la mejor decisión.
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          {/* Main price card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color-mix(in_oklab,var(--teal)_45%,var(--border))] bg-[var(--surface)] p-8"
          >
            <div
              className="absolute -top-24 -right-16 size-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--teal)" }}
              aria-hidden
            />
            <div className="relative">
              <p className="font-mono text-sm text-[var(--teal-bright)]">
                Clase individual
              </p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-6xl font-bold tracking-tight">
                  20
                </span>
                <span className="mb-2 font-display text-2xl font-semibold text-[var(--muted)]">
                  Bs
                </span>
                <span className="mb-2.5 text-[var(--muted)]">/ hora</span>
              </div>

              <ul className="mt-8 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--teal-bright)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="accent"
                size="lg"
                className="group mt-8 w-full"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Reservar mi primera clase
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Group discount card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-2)] p-8"
          >
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--violet)_18%,transparent)] text-[var(--violet-bright)]">
                <Users className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Descuento por grupos
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                ¿Vienen con amigos o compañeros? Aprender juntos tiene más
                ventajas. Escríbenos y armamos un precio especial para tu grupo.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-8 w-full">
              <a
                href={WHATSAPP_GROUP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir precio de grupo
              </a>
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
