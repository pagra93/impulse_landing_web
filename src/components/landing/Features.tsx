import {
  Check,
  Calendar,
  Users,
  BarChart3,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";
import { WidgetMockup, PhoneMockup } from "./mockups";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-easy-bg text-easy">
        <Check size={13} strokeWidth={3} />
      </span>
      <span className="font-body text-[15px] leading-normal text-body">
        {children}
      </span>
    </div>
  );
}

function ShowcaseText({
  eyebrow,
  title,
  accent,
  body,
  bullets = [],
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="m-0 font-display text-[clamp(28px,4vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
        {title} <span className="text-blue">{accent}</span>
      </h3>
      <p className="m-0 font-body text-[17px] leading-relaxed text-muted">
        {body}
      </p>
      {bullets.length > 0 && (
        <div className="mt-1 flex flex-col gap-3">
          {bullets.map((b) => (
            <Bullet key={b}>{b}</Bullet>
          ))}
        </div>
      )}
    </div>
  );
}

const GRID: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Calendar,
    title: "Scheduled focus",
    desc: "Set blocking periods by time and weekday. Set it once — focus runs on autopilot.",
  },
  {
    Icon: Users,
    title: "Focus Groups",
    desc: "Stay accountable with friends. Shared rules, streaks and a leaderboard keep you honest.",
  },
  {
    Icon: BarChart3,
    title: "Screen Time insights",
    desc: "See where your hours actually go, with weekly insights that celebrate your progress.",
  },
  {
    Icon: Smartphone,
    title: "Everywhere you scroll",
    desc: "iOS, Chrome and Safari. Your blocks follow you across every device.",
  },
];

const STRICTNESS = [
  { l: "Easy", d: "Type a phrase", bg: "bg-easy-bg", c: "text-easy" },
  { l: "Medium", d: "Wait a countdown", bg: "bg-medium-bg", c: "text-medium" },
  { l: "Hard", d: "Partner code", bg: "bg-hard-bg", c: "text-hard" },
];

export function Features() {
  return (
    <section id="features" className="bg-white px-6 py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-16 flex flex-col items-center gap-4 text-center md:mb-[72px]">
          <Eyebrow center>Features</Eyebrow>
          <h2 className="m-0 max-w-[680px] font-display text-[clamp(30px,4.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            Everything you need to
            <br />
            take back <span className="text-blue">control.</span>
          </h2>
        </Reveal>

        {/* Showcase 1 — text left / widget right */}
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <Reveal>
            <ShowcaseText
              eyebrow="Block & Quick Focus"
              title="Block anything in"
              accent="one tap."
              body="Blocking Periods shut down distracting sites on a schedule. Need to lock in right now? Quick Focus pins you to a single tab and blocks everything else."
              bullets={[
                "Block apps and sites instantly",
                "Quick Focus for on-demand deep work",
                "No complex setup — focus in seconds",
              ]}
            />
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(55,110,153,0.12),transparent_70%)]" />
              <div className="relative">
                <WidgetMockup scale={0.82} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Showcase 2 — phone left / text right */}
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <Reveal className="flex justify-center md:order-1">
            <PhoneMockup scale={0.78} />
          </Reveal>
          <Reveal delay={0.1} className="md:order-2">
            <ShowcaseText
              eyebrow="Strict mode"
              title="Strictness you"
              accent="can't cheat."
              body="Choose how hard it is to unblock — because the moment of weakness is the whole problem. Three levels turn a quick override into a real decision."
            />
            <div className="mt-5 flex flex-wrap gap-2.5">
              {STRICTNESS.map((d) => (
                <div
                  key={d.l}
                  className={`min-w-[130px] flex-1 rounded-[14px] px-4 py-3.5 ${d.bg}`}
                >
                  <div className={`font-display text-base font-bold ${d.c}`}>
                    {d.l}
                  </div>
                  <div className="mt-0.5 font-body text-[13px] text-muted">
                    {d.d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GRID.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.08}
              className="flex h-full flex-col gap-3 rounded-2xl bg-bg-subtle p-6"
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-border-default bg-white text-blue">
                <f.Icon size={22} />
              </div>
              <h4 className="m-0 font-display text-[17px] font-bold text-heading">
                {f.title}
              </h4>
              <p className="m-0 font-body text-sm leading-normal text-muted">
                {f.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
