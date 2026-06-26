const links = [
  { l: "Support", href: "mailto:hello@impulsecontrolapp.com" },
  { l: "Uninstall", href: "/uninstall" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-11">
        <div className="flex flex-col gap-1">
          <span className="font-display text-[22px] font-bold text-navy">
            impulse<span className="text-yellow">.</span>
          </span>
          <span className="font-body text-[13px] text-muted">
            Control the impulse, not the dopamine.
          </span>
        </div>

        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.l}
              href={link.href}
              {...(link.href.startsWith("mailto:")
                ? {}
                : { target: "_self" })}
              className="font-body text-[13px] text-muted transition-colors hover:text-navy"
            >
              {link.l}
            </a>
          ))}
        </div>

        <span className="font-body text-[13px] text-muted">
          © 2026 Impulse. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
