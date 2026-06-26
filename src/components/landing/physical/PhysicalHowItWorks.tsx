import type { ReactNode } from "react";
import { Disc } from "../Disc";
import { Nfc } from "../Nfc";
import { Reveal } from "../Reveal";

/* ---- shared phone frame (≈252px) ---- */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[252px] rounded-[40px] bg-[#1c2b38] p-[7px] shadow-[0_26px_50px_-18px_rgba(22,42,57,0.45)]">
      <div className="overflow-hidden rounded-[33px] font-sans">{children}</div>
    </div>
  );
}

/* Light panel that holds a phone, used for steps 1, 2 and 4 */
function LightStage({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[440px] place-items-center rounded-3xl border border-border-subtle bg-[linear-gradient(160deg,#eef3f8,#e2eaf2)] py-10">
      {children}
    </div>
  );
}

/* ---- Step 1: New Block form with Physical selected ---- */
function NewBlockScreen() {
  return (
    <PhoneFrame>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 pb-2.5 pt-3.5">
          <span className="text-xs text-blue">Cancel</span>
          <span className="text-[13px] font-semibold text-navy">New Block</span>
          <span className="text-xs font-semibold text-blue">Create</span>
        </div>
        <div className="flex flex-col gap-2 px-4 pb-[18px] pt-1">
          <span className="text-[9px] font-semibold tracking-[0.1em] text-muted">
            NAME
          </span>
          <div className="flex items-center justify-between rounded-xl bg-surface-muted px-3 py-2.5">
            <span className="text-[13px] font-semibold text-navy">
              Deep Work
            </span>
            <span className="text-xs text-muted">✎</span>
          </div>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.1em] text-muted">
            BLOCKED APPS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["Instagram", "TikTok", "X"].map((a) => (
              <span
                key={a}
                className="rounded-full bg-surface-accent px-2.5 py-[5px] text-[11px] font-semibold text-navy"
              >
                {a}
              </span>
            ))}
          </div>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.1em] text-muted">
            UNLOCK DIFFICULTY
          </span>
          <div className="flex items-center justify-between rounded-xl border border-border-subtle px-3 py-[9px]">
            <span className="text-xs font-semibold text-muted">
              Hard · Partner code
            </span>
            <span className="h-3.5 w-3.5 rounded-full border-[1.5px] border-border-strong" />
          </div>
          <div className="flex items-center justify-between rounded-xl border-[1.5px] border-yellow bg-[#fbf9ef] px-3 py-[9px]">
            <span className="flex items-center gap-[7px]">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              </span>
              <span className="text-xs font-bold text-navy">
                Physical · Scan your tag
              </span>
            </span>
            <span className="h-3.5 w-3.5 rounded-full border-4 border-blue" />
          </div>
          <div className="gradient-brand mt-1.5 flex items-center justify-center gap-[7px] rounded-xl px-3 py-[11px] text-xs font-semibold text-white">
            Scan NFC tag
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---- Step 2: Focus ready ---- */
function FocusReadyScreen() {
  return (
    <PhoneFrame>
      <div className="bg-[linear-gradient(180deg,#1b3548,#0f2330)]">
        <div className="flex flex-col items-center gap-4 px-[18px] pb-[22px] pt-4">
          <div className="flex w-full items-center justify-between">
            <span className="font-display text-base font-bold text-white">
              impulse<span className="text-yellow">.</span>
            </span>
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-white/[0.08] text-[13px] text-[#9fb4c4]">
              ⚙
            </span>
          </div>
          <div className="relative mt-1.5 grid h-[132px] w-[132px] place-items-center">
            <div className="absolute h-[132px] w-[132px] rounded-full border-[1.5px] border-[rgba(120,170,205,0.22)]" />
            <div className="absolute h-[108px] w-[108px] rounded-full border border-[rgba(120,170,205,0.16)]" />
            <div className="grid h-[90px] w-[90px] place-items-center rounded-full bg-[radial-gradient(circle_at_36%_28%,#4a82ab,#244a66_55%,#14283800)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-8px_16px_rgba(6,14,22,0.6),0_0_24px_rgba(54,104,142,0.4)]">
              <span className="text-[22px] text-yellow [filter:drop-shadow(0_0_6px_rgba(255,219,76,0.5))]">
                ⛨
              </span>
            </div>
          </div>
          <span className="font-mono text-[13px] tracking-[0.04em] text-[#9fb4c4]">
            Focus ready
          </span>
          <div className="flex w-full items-center justify-between rounded-2xl bg-white/[0.06] px-[13px] py-[11px]">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-white">Deep Work</span>
              <span className="text-[10px] text-[#8aa0b1]">
                3 apps · Physical
              </span>
            </div>
            <span className="rounded-full bg-yellow px-2 py-[3px] text-[9px] font-bold text-navy">
              Physical
            </span>
          </div>
          <div className="flex items-center gap-[7px] text-[10px] text-[#8aa0b1]">
            <Nfc size={14} strokeWidth={2} className="text-[#8aa0b1]" />
            Hold your phone near your Disc
          </div>
          <div className="flex w-full items-center justify-center rounded-[13px] bg-yellow px-3 py-3 text-[13px] font-bold text-navy">
            Start Focus
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---- Step 4: End session sheet ---- */
function EndSessionScreen() {
  return (
    <PhoneFrame>
      <div className="bg-[linear-gradient(180deg,#1b3548,#122330)]">
        <div className="flex flex-col items-center gap-2 px-[18px] pb-4 pt-[22px] opacity-55">
          <span className="font-display text-sm font-bold text-white">
            impulse<span className="text-yellow">.</span>
          </span>
          <span className="mt-1 font-mono text-[22px] font-bold text-white">
            1h 23m
          </span>
          <span className="text-[11px] text-[#9fb4c4]">Focus active</span>
        </div>
        <div className="mt-1.5 flex flex-col items-center gap-3 rounded-t-[26px] bg-white px-[18px] pb-5 pt-4">
          <div className="h-1 w-9 rounded-full bg-border-default" />
          <span className="text-center font-display text-base font-bold text-navy">
            End session early?
          </span>
          <div className="relative my-0.5 grid h-[76px] w-[76px] place-items-center">
            <div className="absolute h-[76px] w-[76px] rounded-full bg-surface-accent" />
            <Nfc size={34} className="relative text-blue" />
          </div>
          <span className="text-center text-xs leading-snug text-muted">
            Tap your Disc or NFC tag to unblock your apps.
          </span>
          <span className="border-b border-dashed border-border-strong pb-px text-[11px] font-semibold text-muted">
            Emergency unlock
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---- Step 3: Disc on a dark panel ---- */
function DiscPanel() {
  return (
    <div className="relative grid h-[380px] place-items-center overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#16314a,#0f2330)]">
      <div className="absolute h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,219,76,0.13),transparent_62%)]" />
      <Disc size={295} />
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Pick what to block",
    body: (
      <>
        Create profiles like Work, Study or Bedtime — each with its own apps,
        schedules and timers. Set the unlock level to{" "}
        <strong className="text-heading">Physical</strong> and your Disc or tag
        becomes the only key.
      </>
    ),
    visual: <NewBlockScreen />,
    stage: "light" as const,
  },
  {
    num: "02",
    title: "Tap your Disc to start",
    body: (
      <>
        Tap your phone on the Disc — or any NFC tag — and your focus session
        begins right away. Not nearby? Start it straight from the app instead.
      </>
    ),
    visual: <FocusReadyScreen />,
    stage: "light" as const,
  },
  {
    num: "03",
    title: "Put distance between you and the Disc",
    body: (
      <>
        Leave it in another room, a drawer, by the front door. That bit of
        physical separation turns unblocking into a conscious choice — and
        quietly breaks the habit loop.
      </>
    ),
    visual: <DiscPanel />,
    stage: "raw" as const,
  },
  {
    num: "04",
    title: "Come back with purpose",
    body: (
      <>
        When you&apos;re truly done, tap again to unblock. Need an unexpected
        exception? Emergency unlocks live in the app — but they&apos;re
        intentionally inconvenient, so you only return when it really matters.
      </>
    ),
    visual: <EndSessionScreen />,
    stage: "light" as const,
  },
];

export function PhysicalHowItWorks() {
  return (
    <section id="physical-how" className="bg-white px-6 py-20 md:py-[92px]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-16 max-w-[620px] text-center">
          <span className="font-body text-[13px] font-bold uppercase tracking-[0.14em] text-blue">
            How it works
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            A physical barrier between you and the scroll.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-16">
          {STEPS.map((s, i) => {
            const reversed = i % 2 === 1;
            const visual =
              s.stage === "light" ? <LightStage>{s.visual}</LightStage> : s.visual;
            return (
              <Reveal
                key={s.num}
                className="grid items-center gap-12 md:grid-cols-2 md:gap-14"
              >
                <div className={reversed ? "md:order-2" : ""}>{visual}</div>
                <div
                  className={`flex flex-col gap-3.5 ${reversed ? "md:order-1" : ""}`}
                >
                  <span className="font-mono text-sm font-bold text-blue">
                    {s.num}
                  </span>
                  <h3 className="m-0 font-display text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy">
                    {s.title}
                  </h3>
                  <p className="m-0 max-w-[440px] font-body text-[17px] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
