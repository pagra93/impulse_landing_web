"use client";

import { useState } from "react";
import { Eyebrow } from "./primitives";

export function Calculator() {
  const [h, setH] = useState(4);
  const week = (h * 0.25 * 7).toFixed(1);
  const year = ((h * 0.25 * 365) / 24).toFixed(0);

  const tiles = [
    { k: "Hours / week", v: week, s: "saved with Impulse" },
    { k: "Days / year", v: year, s: "fully reclaimed" },
  ];

  return (
    <section id="calculator" className="bg-white px-6 py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="gradient-brand-diagonal relative overflow-hidden rounded-[28px] p-8 md:p-14">
          <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="relative">
            <Eyebrow dark>Time calculator</Eyebrow>
            <h2 className="m-0 mb-11 mt-4 max-w-[520px] font-display text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
              How much time are you losing to your screen?
            </h2>

            <div className="grid items-end gap-12 md:grid-cols-2 md:gap-14">
              <div>
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-display text-[clamp(72px,12vw,104px)] font-extrabold leading-[0.9] tabular-nums text-white">
                    {h}
                  </span>
                  <span className="font-body text-[22px] text-white/60">
                    hours / day
                  </span>
                </div>
                <input
                  className="mk-range w-full"
                  type="range"
                  min={1}
                  max={12}
                  step={0.5}
                  value={h}
                  onChange={(e) => setH(parseFloat(e.target.value))}
                  aria-label="Hours per day on screen"
                />
                <div className="mt-2.5 flex justify-between font-mono text-xs text-white/50">
                  <span>1h</span>
                  <span>6h</span>
                  <span>12h</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[18px]">
                {tiles.map((r) => (
                  <div
                    key={r.k}
                    className="rounded-[18px] border border-white/[0.14] bg-white/[0.08] p-6"
                  >
                    <div className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
                      {r.k}
                    </div>
                    <div className="font-display text-[clamp(40px,7vw,52px)] font-extrabold leading-[0.9] text-yellow">
                      {r.v}
                    </div>
                    <div className="mt-2 font-body text-[13px] text-white/60">
                      {r.s}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-9 border-t border-white/[0.12] pt-6 font-body text-[13px] text-white/50">
              Based on reclaiming 25% of unproductive screen time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
