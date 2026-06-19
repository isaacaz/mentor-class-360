const techs = [
  "Python",
  "JavaScript",
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "SQL",
  "Scratch",
  "Git",
  "React",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-10 px-5" aria-hidden>
      {techs.map((t) => (
        <li
          key={t}
          className="flex items-center gap-10 font-mono text-lg font-medium text-[var(--muted)]"
        >
          {t}
          <span className="text-[var(--teal)]">/</span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section
      className="marquee relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-5"
      aria-label="Lenguajes y tecnologías que enseñamos"
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent" />
    </section>
  );
}
