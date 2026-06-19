"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#caracteristicas", label: "Qué aprendes" },
  { href: "#proyecto", label: "Proyecto final" },
  { href: "#testimonios", label: "Historias" },
  { href: "#precios", label: "Precios" },
];

const WHATSAPP =
  "https://wa.me/59164348616?text=Hola%20Mentor%20Class%20360%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2 font-display">
          <span className="text-lg font-bold tracking-tight">Mentor Class</span>
          <span className="font-mono text-sm font-bold text-[var(--amber)]">
            360
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--fg)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild variant="primary" size="sm">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Escríbenos
          </a>
        </Button>
      </nav>
    </motion.header>
  );
}
