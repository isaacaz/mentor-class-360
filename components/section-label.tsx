import { cn } from "@/lib/utils";

/** Eyebrow rendered as a code comment — the brand's vernacular. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-sm font-medium text-[var(--teal-bright)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
