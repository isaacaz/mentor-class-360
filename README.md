# Mentor Class 360 — Landing

Landing page para **Mentor Class 360**: clases de programación 100% online, de
fundamentos a nivel avanzado. _Aprende hoy, crea tu futuro._

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (configuración por CSS, sin `tailwind.config.js`)
- **shadcn/ui** (primitivas `Button`, `Card`)
- **Motion** (framer-motion) — microinteracciones y entrada
- **GSAP + ScrollTrigger** — reveals y línea de progreso al hacer scroll
- **Lenis** — smooth scrolling
- **Lucide React** — iconos
- **pnpm** — gestor de paquetes

## Diseño

- Modo oscuro por defecto. Paleta petróleo + púrpura + ámbar (derivada de la marca).
- Tipografía: **Space Grotesk** (display), **Inter** (texto), **JetBrains Mono** (código/etiquetas), vía `next/font`.
- Elemento *signature*: una ventana de IDE en el hero que **tipea** el snippet
  `printf("Hola, futuro")` — el vernáculo del propio producto.
- 3 efectos protagonistas (hero con tipeo + gradiente animado, reveals
  scroll-triggered, smooth scroll). Todo respeta `prefers-reduced-motion`.

## Estructura

```
app/            layout (fuentes, metadata), page (composición), globals.css (tokens)
components/
  sections/     hero, features, how-it-works, testimonials, pricing, footer
  ui/           button, card (shadcn)
  nav, reveal, smooth-scroll, section-label
lib/utils.ts    helper cn()
```

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

> En la primera instalación, pnpm pide aprobar el build de `sharp`. Ya está
> aprobado en `pnpm-workspace.yaml` (`allowBuilds: sharp: true`).

## Build de producción

```bash
pnpm build    # debe pasar sin errores ni warnings de tipos
pnpm start    # sirve el build en http://localhost:3000
```

## Personalizar el contenido

- **Números de WhatsApp / CTAs**: en `components/nav.tsx`, `components/sections/hero.tsx`,
  `components/sections/pricing.tsx` y `components/sections/footer.tsx` (constantes `WHATSAPP*`).
- **Precio**: `components/sections/pricing.tsx`.
- **Características / pasos / testimonios**: arrays al inicio de cada archivo en `components/sections/`.
- **Colores y tipografía**: tokens en `app/globals.css` (`:root`) y fuentes en `app/layout.tsx`.
- **Redes sociales**: enlaces `href="#"` en `components/sections/footer.tsx`.

## Deploy en Vercel

Ver la sección de pasos exactos más abajo. En resumen: subir el repo a GitHub →
importar en Vercel → deploy (Vercel detecta Next.js y pnpm automáticamente, sin
configuración extra).
