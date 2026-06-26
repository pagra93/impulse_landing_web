import { Nfc } from "../Nfc";
import { Reveal } from "../Reveal";

const AMAZON_URL =
  "https://www.amazon.es/NFC-Programable-Inteligentes-Dispositivos-NFC%EF%BC%88Timeskey%EF%BC%89/dp/B0CSD8B6LF/";

const LEVELS = [
  {
    badge: "Easy",
    badgeClass: "bg-easy-bg text-easy",
    title: "Type a phrase",
    desc: "A gentle nudge — enough to make you pause.",
    highlight: false,
  },
  {
    badge: "Medium",
    badgeClass: "bg-medium-bg text-medium",
    title: "Wait out a countdown",
    desc: "The urge usually passes before the timer does.",
    highlight: false,
  },
  {
    badge: "Hard",
    badgeClass: "bg-hard-bg text-hard",
    title: "Partner code",
    desc: "An accountability buddy holds the key.",
    highlight: false,
  },
  {
    badge: "Physical · New",
    badgeClass: "bg-navy text-yellow",
    title: "Tap your Disc or NFC tag",
    desc: "The off-switch lives across the room. No workaround.",
    highlight: true,
  },
];

/* Small premium puck for the duality card */
function MiniDisc() {
  return (
    <div className="grid h-[74px] w-[74px] place-items-center rounded-full bg-[radial-gradient(circle_at_38%_30%,rgba(255,255,255,0.4),transparent_36%),radial-gradient(circle_at_50%_50%,#356488,#1a3548_70%,#0f2230)] shadow-[0_8px_16px_-4px_rgba(6,16,26,0.5),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-6px_12px_rgba(5,12,20,0.55)]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-[radial-gradient(circle_at_42%_34%,#2c5471,#142733)] shadow-[inset_0_3px_6px_rgba(4,10,18,0.6)]">
        <div className="h-[11px] w-[11px] rounded-full bg-yellow shadow-[0_0_8px_rgba(255,219,76,0.8)]" />
      </div>
    </div>
  );
}

export function StrictnessLadder() {
  return (
    <section className="bg-white px-6 py-20 md:py-[92px]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-[52px] max-w-[640px] text-center">
          <span className="font-body text-[13px] font-bold uppercase tracking-[0.14em] text-blue">
            Four levels of friction
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Physical is the new top rung.
          </h2>
          <p className="m-0 mt-3.5 font-body text-lg leading-relaxed text-muted">
            Dial in exactly how hard it is to unblock. Physical is the one you
            genuinely can&apos;t cheat in a weak moment.
          </p>
        </Reveal>

        <div className="grid items-start gap-7 md:grid-cols-[1.08fr_0.92fr]">
          {/* ladder */}
          <Reveal className="flex flex-col gap-3">
            {LEVELS.map((l) => (
              <div
                key={l.badge}
                className={`flex items-center gap-4 rounded-2xl px-5 py-[17px] ${
                  l.highlight
                    ? "border-[1.5px] border-yellow bg-[linear-gradient(180deg,#fff,#fbf9ef)] shadow-[0_6px_18px_rgba(255,219,76,0.18)]"
                    : "border border-border-default bg-white shadow-card"
                }`}
              >
                <span
                  className={`flex-none rounded-full px-3 py-[5px] font-body text-xs font-bold ${l.badgeClass}`}
                >
                  {l.badge}
                </span>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-navy">
                    {l.title}
                  </span>
                  <span className="text-sm text-muted">{l.desc}</span>
                </div>
              </div>
            ))}
          </Reveal>

          {/* openness duality */}
          <Reveal delay={0.1} className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[18px] rounded-[20px] border border-border-default bg-bg-subtle px-6 py-[22px]">
              <div className="grid h-[92px] w-[92px] flex-none place-items-center">
                <MiniDisc />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-lg font-bold text-navy">
                  Get the Impulse Disc
                </span>
                <span className="font-body text-sm leading-normal text-muted">
                  Designed, magnetic, battery-free. The premium way to leave the
                  key behind.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[18px] rounded-[20px] border border-border-default bg-bg-subtle px-6 py-[22px]">
              <div className="grid h-[92px] w-[92px] flex-none place-items-center">
                <div className="grid h-[74px] w-[74px] -rotate-[8deg] place-items-center rounded-2xl border-[1.5px] border-border-default bg-[linear-gradient(150deg,#fff,#eef2f5)] text-blue shadow-card">
                  <Nfc size={36} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-lg font-bold text-navy">
                  Or use any NFC sticker
                </span>
                <span className="font-body text-sm leading-normal text-muted">
                  Bring your own tag, or grab a pack for pocket change. Same
                  friction, your rules.
                </span>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 self-start font-body text-[13px] font-bold text-blue no-underline"
                >
                  Buy a tag on Amazon <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-1.5 py-1">
              <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(70,189,132,0.15)] text-[13px] font-bold text-success">
                ✓
              </span>
              <span className="font-body text-sm font-semibold text-body">
                Works with any $1 NFC tag — no hardware lock-in.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
