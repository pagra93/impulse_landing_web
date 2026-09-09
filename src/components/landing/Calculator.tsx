"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SectionLabel } from "./primitives";

export function Calculator() {
  const t = useTranslations("calculator");
  const locale = useLocale();
  const [hours, setHours] = useState(4);

  const weekly = (hours * 7 * 0.25).toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const days = Math.round((hours * 365 * 0.25) / 24);

  return (
    <section className="bg-void-sunken px-6 py-16 text-on-dark-mid md:py-[88px]">
      <div className="mx-auto grid max-w-shell items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] md:gap-20">
        <div>
          <SectionLabel tone="dark">{t("label")}</SectionLabel>
          <h2 className="max-w-[16ch] font-display text-h2 font-black text-on-dark">
            {t("title")}
          </h2>

          <div className="mb-1 mt-7 flex items-baseline gap-3">
            <span className="font-display text-[56px] font-black leading-none tracking-[-0.05em] text-on-dark tabular-nums">
              {hours}
            </span>
            <span className="text-[17px] text-on-dark-mid">
              {t("hoursPerDay")}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            aria-label={t("sliderLabel")}
            className="mk-range w-full"
          />
          <div className="mt-0.5 flex justify-between text-[12.5px] text-on-dark-low">
            <span>1 h</span>
            <span>6 h</span>
            <span>12 h</span>
          </div>

          <p className="mt-5 text-[13px] text-on-dark-low">{t("disclaimer")}</p>
        </div>

        <dl className="m-0 grid gap-6">
          {[
            { value: weekly, label: t("weekly") },
            { value: String(days), label: t("yearly") },
          ].map((row) => (
            <div key={row.label} className="border-t border-border-on-dark pt-5">
              <dd className="m-0 font-display text-[clamp(40px,4.2vw,58px)] font-black leading-none tracking-[-0.05em] text-yellow tabular-nums">
                {row.value}
              </dd>
              <dt className="mt-2.5 text-[15px] text-on-dark-mid">{row.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
