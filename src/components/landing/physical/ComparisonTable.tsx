import { Reveal } from "../Reveal";

const COMPETITORS = ["Brick", "Unpluq", "PauseBox"];

const ROWS: { label: string; impulse: string; others: string[] }[] = [
  { label: "Starting price", impulse: "Free", others: ["$59", "$29.99", "$24.95"] },
  { label: "Works with any $1 NFC tag", impulse: "✓", others: ["✕", "✕", "✕"] },
  { label: "No extra hardware required", impulse: "✓", others: ["✕", "✕", "✕"] },
  { label: "iPhone + Chrome & Safari", impulse: "✓", others: ["✕", "✕", "✕"] },
  { label: "Full free software tier", impulse: "✓", others: ["✕", "✕", "✕"] },
  {
    label: "Schedules, limits & focus groups",
    impulse: "✓",
    others: ["✕", "✕", "✕"],
  },
];

export function ComparisonTable() {
  return (
    <section className="border-y border-border-subtle bg-bg-subtle px-6 py-20 md:py-[92px]">
      <div className="mx-auto max-w-[1080px]">
        <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
          <span className="font-body text-[13px] font-bold uppercase tracking-[0.14em] text-blue">
            How we compare
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Open by design.
          </h2>
          <p className="m-0 mt-3.5 font-body text-lg leading-relaxed text-muted">
            Most physical blockers sell you a gadget and lock you in. We give you
            the friction either way — and it already works on your phone{" "}
            <em>and</em> your browser.
          </p>
        </Reveal>

        <Reveal className="overflow-x-auto rounded-[20px] border border-border-default bg-white shadow-card">
          <table className="w-full min-w-[560px] border-collapse font-body">
            <thead>
              <tr>
                <th className="border-b border-border-subtle px-[22px] py-[18px] text-left" />
                <th className="border-b border-border-subtle bg-surface-accent px-3.5 py-[18px]">
                  <span className="font-display text-[17px] font-extrabold text-navy">
                    impulse<span className="text-yellow">.</span>
                  </span>
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c}
                    className="border-b border-border-subtle px-3.5 py-[18px] font-display text-[15px] font-bold text-muted"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => {
                const last = ri === ROWS.length - 1;
                const cell = last ? "" : "border-b border-border-subtle";
                return (
                  <tr key={row.label}>
                    <td
                      className={`px-[22px] py-4 text-left text-[15px] font-semibold text-heading ${cell}`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`bg-[rgba(235,242,249,0.5)] px-3.5 py-4 text-center text-[15px] font-bold ${
                        row.impulse === "Free"
                          ? "text-blue"
                          : "text-[17px] text-success"
                      } ${cell}`}
                    >
                      {row.impulse}
                    </td>
                    {row.others.map((v, i) => (
                      <td
                        key={`${row.label}-${COMPETITORS[i]}`}
                        className={`px-3.5 py-4 text-center text-[15px] ${
                          v === "✕" ? "text-base text-gray-500" : "text-muted"
                        } ${cell}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>

        <p className="m-0 mt-4 text-center font-body text-xs text-muted">
          Based on publicly listed product details, 2026. Comparison reflects
          each product&apos;s standard offering.
        </p>
      </div>
    </section>
  );
}
