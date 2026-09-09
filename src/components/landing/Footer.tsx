import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Lockup } from "@/components/brand/Mark";
import { SUPPORT_MAILTO } from "@/lib/links";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-void px-6 py-14">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-5 text-[14px] text-on-dark-low">
        <span className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            <Lockup size={26} />
          </Link>
          <span>· {t("tagline")}</span>
        </span>

        <nav className="flex flex-wrap gap-6">
          <a
            href={SUPPORT_MAILTO}
            className="rounded text-on-dark-mid hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            {t("support")}
          </a>
          <Link
            href="/privacy"
            className="rounded text-on-dark-mid hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            {t("privacy")}
          </Link>
          <Link
            href="/physical-unlock"
            className="rounded text-on-dark-mid hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            {t("disc")}
          </Link>
          <Link
            href="/delete-account"
            className="rounded text-on-dark-mid hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            {t("deleteAccount")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
