const STATS = [
  { v: "1,000+", l: "Daily users", accent: false },
  { v: "10K+", l: "Hours reclaimed", accent: true },
  { v: "1M+", l: "Distractions blocked", accent: false },
  { v: "4.8★", l: "App Store rating", accent: false },
];

export function Stats() {
  return (
    <section className="border-y border-border-subtle bg-bg-subtle">
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-around gap-7 px-6 py-10">
        {STATS.map((s) => (
          <div key={s.l} className="flex flex-col items-center gap-1">
            <span
              className={`font-display text-[40px] font-extrabold ${
                s.accent ? "text-blue" : "text-navy"
              }`}
            >
              {s.v}
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
