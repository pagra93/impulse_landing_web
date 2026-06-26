import type { ReactNode } from "react";
import { Star, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* Store links — shared across CTAs */
export const IOS_URL =
  "https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036";
export const CHROME_URL =
  "https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik";

/* --------------------------------------------------------------------------
   CTA button — matches the product Button language (pill, hover lift)
   -------------------------------------------------------------------------- */
type CtaVariant = "primary" | "gradient" | "outline" | "yellow" | "ghost";
type CtaSize = "lg" | "md";

const variantClasses: Record<CtaVariant, string> = {
  primary: "bg-navy text-white border border-navy shadow-soft-md",
  gradient: "gradient-brand text-white border-0 shadow-soft-md",
  outline: "bg-white text-blue border border-blue",
  yellow: "bg-yellow text-navy border border-yellow",
  ghost: "bg-white/[0.1] text-white border border-white/25",
};

const sizeClasses: Record<CtaSize, string> = {
  lg: "h-[50px] px-[26px] text-base rounded-[25px]",
  md: "h-10 px-5 text-sm rounded-[20px]",
};

export function CtaButton({
  variant = "primary",
  size = "lg",
  href = "#",
  icon: Icon,
  children,
  className,
  external = true,
}: {
  variant?: CtaVariant;
  size?: CtaSize;
  href?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      {...(external && !isMail
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-[20px] font-body font-bold whitespace-nowrap",
        "transition-[transform,filter,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:brightness-[1.06]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon size={size === "lg" ? 20 : 17} strokeWidth={2} />}
      {children}
    </a>
  );
}

/* --------------------------------------------------------------------------
   Eyebrow — small uppercase label with a yellow dot
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
   Section wrapper — 104px vertical padding, 1160px centered content
   -------------------------------------------------------------------------- */
export function Section({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-20 md:py-[104px]", className)}>
      <div className={cn("mx-auto max-w-[1160px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
