"use client";

import { useRef, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a cursor-following glow. Tracks the pointer via CSS custom props
 * (--mx/--my) so no React re-render happens on mouse move. The glow itself is
 * a hover-only ::before, so reduced-motion users simply don't get it.
 */
export function SpotlightCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "spotlight rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6",
        className,
      )}
      {...props}
    >
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}
