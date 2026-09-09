import type { ReactNode } from "react";
import Link from "next/link";
import { Star, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/links";

/* Store links now live in @/lib/links. These re-exports keep the existing
   imports across the landing compiling while sections are migrated; delete them
   once nothing references them. */
export const IOS_URL = LINKS.ios;
export const CHROME_URL = LINKS.chrome;

/* --------------------------------------------------------------------------
   CTA button — polymorphic.

   It used to always render an <a>, which forced `external={false}` hacks for
   in-page anchors and made a real <button> impossible. The element is now
   derived from the props:
     no href            -> <button type="button">
     http / mailto / tel-> <a>, external when it leaves the site
     #anchor            -> <a>, same page, no target
     anything else      -> next/link, so internal routes prefetch
   -------------------------------------------------------------------------- */
type CtaVariant =
  | "primary"
  | "gradient"
  | "outline"
  | "yellow"
  | "ghost"
  | "onDark";
type CtaSize = "lg" | "md" | "sm";

const variantClasses: Record<CtaVariant, string> = {
  primary: "bg-navy text-white border border-navy shadow-soft-md",
  gradient: "gradient-brand text-white border-0 shadow-soft-md",
  outline: "bg-white text-blue border border-blue",
  yellow: "bg-yellow text-[#1a1500] border border-yellow",
  ghost: "bg-white/[0.1] text-white border border-white/25",
  onDark:
    "bg-transparent text-on-dark border border-border-on-dark-strong hover:bg-surface-on-dark",
};

const sizeClasses: Record<CtaSize, string> = {
  lg: "h-[50px] px-[26px] text-base rounded-[25px]",
  md: "h-10 px-5 text-sm rounded-[20px]",
  sm: "h-9 px-4 text-[13px] rounded-[18px]",
};

/* Focus ring. Nothing in the landing had one — not the nav, not the CTAs, not
   the FAQ accordion — so keyboard users had no visible position. */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export function CtaButton({
  variant = "primary",
  size = "lg",
  href,
  onClick,
  icon: Icon,
  iconPosition = "start",
  children,
  className,
  ariaLabel,
}: {
  variant?: CtaVariant;
  size?: CtaSize;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "start" | "end";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-body font-bold whitespace-nowrap",
    "transition-[transform,filter] duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:brightness-[1.06]",
    focusRing,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const iconSize = size === "lg" ? 20 : size === "md" ? 17 : 15;
  const content = (
    <>
      {Icon && iconPosition === "start" && (
        <Icon size={iconSize} strokeWidth={2} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "end" && (
        <Icon size={iconSize} strokeWidth={2} aria-hidden="true" />
      )}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    );
  }

  const leavesSite = /^https?:/i.test(href);
  const isProtocol = /^(mailto:|tel:)/i.test(href);

  if (leavesSite || isProtocol) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        {...(leavesSite
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {content}
    </Link>
  );
}

/* --------------------------------------------------------------------------
   Eyebrow — small uppercase label above a heading
   -------------------------------------------------------------------------- */
export function Eyebrow({
  children,
  dark = false,
  center = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-body text-[13px] font-bold uppercase tracking-[0.14em]",
        center ? "text-center" : "",
        dark ? "text-yellow" : "text-blue",
        className
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Section label — uppercase micro-label sitting on a hairline rule.
   Replaces the dot-prefixed eyebrow in redesigned sections.
   -------------------------------------------------------------------------- */
export function SectionLabel({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "ink";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block border-b pb-3.5 mb-7 text-[11.5px] font-extrabold uppercase tracking-[0.2em]",
        tone === "dark" && "text-on-dark-low border-border-on-dark",
        tone === "light" && "text-muted border-hair-light",
        tone === "ink" && "text-ink-deep/55 border-ink-deep/15",
        className
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Star rating
   -------------------------------------------------------------------------- */
export function Stars({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex gap-0.5 text-yellow", className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Section wrapper.

   `tone` carries the chapter rhythm (dark opener, light chapters, dark close)
   and sets the inherited text colour, so children stop re-declaring it.
   `density` is where most of the page height comes back: the old landing used
   a uniform py-20 md:py-[88px] on all thirteen sections — ~2,300px of vertical
   padding with no hierarchy at all.
   -------------------------------------------------------------------------- */
type Tone = "paper" | "bone" | "subtle" | "void" | "sunken" | "sun";
type Density = "sm" | "md" | "lg";
type Width = "shell" | "content" | "prose" | "narrow";

const toneClasses: Record<Tone, string> = {
  paper: "bg-white text-body",
  bone: "bg-bone text-body",
  subtle: "bg-bg-subtle text-body",
  void: "bg-void text-on-dark-mid",
  sunken: "bg-void-sunken text-on-dark-mid",
  sun: "bg-yellow text-ink-deep",
};

const densityClasses: Record<Density, string> = {
  sm: "py-14 md:py-16",
  md: "py-16 md:py-[88px]",
  lg: "py-20 md:py-28",
};

const widthClasses: Record<Width, string> = {
  shell: "max-w-shell",
  content: "max-w-content",
  prose: "max-w-prose",
  narrow: "max-w-narrow",
};

export function Section({
  id,
  tone = "paper",
  density = "md",
  width = "content",
  children,
  className,
  innerClassName,
}: {
  id?: string;
  tone?: Tone;
  density?: Density;
  width?: Width;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6",
        toneClasses[tone],
        densityClasses[density],
        className
      )}
    >
      <div className={cn("mx-auto", widthClasses[width], innerClassName)}>
        {children}
      </div>
    </section>
  );
}
