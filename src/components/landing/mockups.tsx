import { Zap, Clock, Check, Settings } from "lucide-react";

/* --------------------------------------------------------------------------
   Product mockups — art-directed reproductions of the real Impulse surfaces,
   rebuilt from tokens for pixel control on the landing.
   -------------------------------------------------------------------------- */

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`flex h-6 w-10 items-center rounded-full p-0.5 ${
        on ? "justify-end bg-yellow" : "justify-start bg-[#c9ced3]"
      }`}
    >
      <span
        className={`block h-5 w-5 rounded-full ${on ? "bg-navy" : "bg-white"}`}
      />
    </div>
  );
}

function NavDot({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-[7px] rounded-[7px] px-[9px] py-[7px] ${
        active ? "bg-white/50" : "bg-transparent"
      }`}
    >
      <span className="h-[13px] w-[13px] rounded bg-white/55" />
      <span className="h-1.5 w-[52px] rounded-[3px] bg-white/45" />
    </div>
  );
}

type DiffRow = {
  title: string;
  diff: string;
  diffBg: string;
  diffColor: string;
  on: boolean;
};

function WidgetRule({ title, diff, diffBg, diffColor, on }: DiffRow) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-border-default bg-white p-3.5 shadow-card">
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-medium-bg text-medium">
        <Clock size={17} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-sm font-bold text-heading">
            {title}
          </span>
          <span
            className="rounded-full px-[7px] py-0.5 text-[9px] font-bold"
            style={{ background: diffBg, color: diffColor }}
          >
            {diff}
          </span>
        </div>
        <div className="mt-[7px] h-[5px] w-[120px] rounded-[3px] bg-surface-muted" />
      </div>
      <Toggle on={on} />
    </div>
  );
}

function PhoneCard({ title, diff, diffBg, diffColor, on }: DiffRow) {
  return (
    <div className="mx-4 mb-3 rounded-[14px] border border-border-default bg-white p-[13px] shadow-card">
      <div className="flex items-center gap-[7px]">
        <span className="font-display text-[15px] font-bold text-body">
          {title}
        </span>
        <span
          className="rounded-full px-[7px] py-0.5 text-[9px] font-bold"
          style={{ background: diffBg, color: diffColor }}
        >
          {diff}
        </span>
      </div>
      <div className="mt-[9px] flex items-center justify-between">
        <span className="h-[5px] w-[110px] rounded-[3px] bg-surface-muted" />
        <Toggle on={on} />
      </div>
    </div>
  );
}

/* ---- Chrome extension popup ---- */
export function WidgetMockup({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="flex h-[430px] w-[620px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-mockup"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      {/* sidebar */}
      <div className="gradient-sidebar flex w-[150px] flex-col justify-between p-3.5">
        <div>
          <div className="mb-4 font-display text-lg font-bold text-[#e5e7eb]">
            impulse<span className="text-yellow">.</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <NavDot active />
            <NavDot />
            <NavDot />
            <NavDot />
          </div>
        </div>
        <div className="gradient-splash aspect-square rounded-xl" />
      </div>
      {/* main */}
      <div className="flex flex-1 flex-col gap-3.5 p-[22px]">
        <div className="font-display text-lg font-bold text-heading">
          Control your impulses.
        </div>
        <div className="gradient-brand flex items-center gap-3 rounded-2xl p-3.5 text-white">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-white/[0.16]">
            <Zap size={17} />
          </div>
          <div className="flex-1">
            <div className="font-sans text-[13px] font-semibold">
              Quick Focus
            </div>
            <div className="text-[11px] opacity-80">Lock onto one tab.</div>
          </div>
          <span className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold text-navy">
            Start
          </span>
        </div>
        <WidgetRule
          title="Morning Work"
          diff="Medium"
          diffBg="#fff8f0"
          diffColor="#ff9800"
          on
        />
        <WidgetRule
          title="No Doom Scrolling"
          diff="Hard"
          diffBg="#fff0f0"
          diffColor="#f44336"
          on={false}
        />
      </div>
    </div>
  );
}

/* ---- iOS app home ---- */
export function PhoneMockup({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="h-[600px] w-[300px] shrink-0 rounded-[46px] bg-[#0c1722] p-[11px] shadow-mockup"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white">
        {/* notch */}
        <div className="absolute left-1/2 top-[9px] z-[5] h-7 w-[100px] -translate-x-1/2 rounded-[20px] bg-[#0c1722]" />
        {/* header */}
        <div className="flex items-center justify-between px-5 pb-3.5 pt-11">
          <span className="font-display text-[22px] font-bold text-navy">
            impulse<span className="text-yellow">.</span>
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f6] text-[#1f2937]">
            <Settings size={16} />
          </div>
        </div>
        <div className="px-5 pb-1.5 font-display text-[17px] font-bold text-[#1f2937]">
          Blocks
        </div>
        <PhoneCard
          title="Morning Work"
          diff="Medium"
          diffBg="#fff8f0"
          diffColor="#ff9800"
          on
        />
        <PhoneCard
          title="Deep Sleep"
          diff="Hard"
          diffBg="#fff0f0"
          diffColor="#f44336"
          on
        />
        <div className="mt-1 px-5 pb-1.5 font-display text-[17px] font-bold text-[#1f2937]">
          Limits
        </div>
        <PhoneCard
          title="Social Cap"
          diff="Easy"
          diffBg="#f0faf0"
          diffColor="#4caf50"
          on
        />
        {/* floating add */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <span className="gradient-brand inline-flex items-center gap-2 rounded-[25px] px-[22px] py-3 font-body text-sm font-semibold text-white shadow-soft-md">
            <Check size={16} /> Add Block
          </span>
        </div>
      </div>
    </div>
  );
}
