"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealProps = {
  children: ReactNode;
  /** Stagger children instead of animating the wrapper as one block. */
  stagger?: boolean;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "ul" | "li";
};

/**
 * Scroll-triggered entrance. Animates the element (or its direct children when
 * `stagger` is set) from a small offset + fade. No-ops under reduced motion so
 * content is visible immediately.
 */
export function Reveal({
  children,
  stagger = false,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets = stagger
      ? (gsap.utils.toArray(el.children) as HTMLElement[])
      : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, y]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
