"use client";

import { useState } from "react";
import { Eyebrow } from "./primitives";

export function Calculator() {
  const [hours, setHours] = useState(4);
  const weekly = (hours * 7 * 0.25).toFixed(1);
  const days = Math.round((hours * 365 * 0.25) / 24);

  return (
    <section className="gradient-brand-diagonal text-white">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left — controls */}
        <div className="flex flex-col gap-4">
          <Eyebrow dark>Time calculator</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
            How much time are you losing to your screen?
          </h2>
          <div className="mt-1.5 flex flex-col gap-2.5">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[38px] font-extrabold leading-none text-white">
                {hours}
              </span>
              <span className="font-body text-base text-[#c8d6e1]">
                hours / day
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              step={1}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="mk-range w-full"
              aria-label="Hours per day on screen"
            />
            <div className="flex justify-between font-body text-xs text-[#9fb4c4]">
              <span>1h</span>
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>
          <p className="m-0 mt-1 font-body text-[13px] text-[#9fb4c4]">
            Based on reclaiming 25% of unproductive screen time.
          </p>
        </div>

        {/* Right — results */}
        <div className="flex gap-[18px]">
          <div className="flex-1 rounded-[20px] border border-white/[0.14] bg-white/[0.08] p-7 text-center">
            <div className="font-display text-[clamp(40px,7vw,46px)] font-extrabold leading-none text-yellow">
              {weekly}
            </div>
            <div className="mt-2 font-body text-sm text-[#c8d6e1]">
              hours / week saved with Impulse
            </div>
          </div>
          <div className="flex-1 rounded-[20px] border border-white/[0.14] bg-white/[0.08] p-7 text-center">
            <div className="font-display text-[clamp(40px,7vw,46px)] font-extrabold leading-none text-white">
              {days}
            </div>
            <div className="mt-2 font-body text-sm text-[#c8d6e1]">
              days / year fully reclaimed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
