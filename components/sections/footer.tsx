import { MessageCircle, Sun, Moon, Instagram, Facebook } from "lucide-react";

const services = [
  "Asesoría en tareas y proyectos de colegio",
  "Apoyo en tesis y proyectos de grado",
  "Elaboración de diapositivas y presentaciones",
  "Documentos en Normas APA",
  "Proyectos finales de secundaria",
];

const phones = [
  {
    number: "637 720 48",
    href: "https://wa.me/59163772048",
    note: "atención solo en las mañanas",
    icon: Sun,
  },
  {
    number: "643 486 16",
    href: "https://wa.me/59164348616",
    note: "atención en todo horario",
    icon: Moon,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)] px-5 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        {/* Closing CTA band */}
        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)] p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Invierte en ti. Transforma tu futuro.
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                Escríbenos por WhatsApp y empieza hoy. Tu mejor versión comienza
                ahora.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              {phones.map((p) => (
                <a
                  key={p.number}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors hover:border-[var(--teal)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--teal)_16%,transparent)] text-[var(--teal-bright)]">
                    <MessageCircle className="size-5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 font-mono font-semibold">
                      {p.number}
                      <p.icon className="size-3.5 text-[var(--muted)]" />
                    </span>
                    <span className="block text-xs text-[var(--muted)]">
                      {p.note}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <div className="flex items-baseline gap-2 font-display">
              <span className="text-lg font-bold tracking-tight">
                Mentor Class
              </span>
              <span className="font-mono text-sm font-bold text-[var(--amber)]">
                360
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">
              Aprende hoy, crea tu futuro. Clases de programación 100% online,
              de fundamentos a nivel avanzado.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Servicios académicos
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram de Mentor Class 360"
                className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--teal)] hover:text-[var(--fg)]"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook de Mentor Class 360"
                className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--teal)] hover:text-[var(--fg)]"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://wa.me/59164348616"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Mentor Class 360"
                className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--teal)] hover:text-[var(--fg)]"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Mentor Class 360. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-xs">Aprende hoy, crea tu futuro.</p>
        </div>
      </div>
    </footer>
  );
}
