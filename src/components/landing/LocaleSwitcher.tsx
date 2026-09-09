"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Language switch.
 *
 * `usePathname` from the i18n navigation helpers returns the path *without* the
 * locale prefix, so switching keeps the visitor on the same page instead of
 * bouncing them to the home page.
 *
 * Automatic locale detection is off, so this is the only way a visitor changes
 * language — which also makes it a discovery signal for crawlers.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const active = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div className={cn("flex items-center gap-1 text-[12.5px] font-extrabold", className)}>
      {routing.locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-on-dark-low/60">/</span>}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            lang={locale}
            aria-label={t("switchTo", {
              language: t(locale === "es" ? "spanish" : "english"),
            })}
            aria-current={locale === active ? "true" : undefined}
            className={cn(
              "rounded px-1 py-0.5 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow",
              locale === active
                ? "text-on-dark"
                : "text-on-dark-low hover:text-on-dark-mid"
            )}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
