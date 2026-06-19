"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionLabel } from "@/components/section-label";

const testimonials = [
  {
    quote:
      "Pasé de no entender nada de código a presentar mi proyecto final con seguridad. Las explicaciones son clarísimas.",
    name: "Camila R.",
    role: "Estudiante de 6º de secundaria",
    initials: "CR",
  },
  {
    quote:
      "El horario flexible me salvó. Tomaba clases después del trabajo y avanzaba a mi ritmo, sin presión.",
    name: "Diego M.",
    role: "Universitario, 1er año de Sistemas",
    initials: "DM",
  },
  {
    quote:
      "Tomamos clases en grupo con dos compañeras y nos hizo el descuento. Aprender juntas fue mucho más divertido.",
    name: "Valeria S.",
    role: "Estudiante de programación",
    initials: "VS",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>// historias reales</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Quienes empezaron de cero, hoy crean lo suyo.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <SpotlightCard className="h-full">
                <div className="flex gap-0.5 text-[var(--amber)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-[var(--fg)]">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[var(--surface-2)] font-mono text-sm font-semibold text-[var(--teal-bright)]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[var(--muted)]">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
