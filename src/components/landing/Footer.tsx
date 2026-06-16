import { IOS_URL, CHROME_URL } from "./primitives";

const columns = [
  {
    h: "Product",
    links: [
      { l: "How it works", href: "#how-it-works" },
      { l: "Features", href: "#features" },
      { l: "Reviews", href: "#reviews" },
    ],
  },
  {
    h: "Get it",
    links: [
      { l: "Download for iOS", href: IOS_URL },
      { l: "Add to Chrome", href: CHROME_URL },
    ],
  },
  {
    h: "Company",
    links: [
      { l: "Support", href: "mailto:hello@impulsecontrolapp.com" },
      { l: "Uninstall", href: "/uninstall" },
    ],
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-14">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-white/10 pb-8">
          <div className="max-w-[280px]">
            <span className="font-display text-2xl font-bold text-white">
              impulse<span className="text-yellow">.</span>
            </span>
            <p className="mt-2.5 font-body text-sm leading-relaxed text-white/55">
              Control the impulse, not the dopamine. Focus tools for iOS, Chrome
              and Safari.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 md:gap-16">
            {columns.map((col) => (
              <div key={col.h} className="flex flex-col gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/40">
                  {col.h}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.l}
                    href={link.href}
                    {...(isExternal(link.href)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-body text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6">
          <span className="font-body text-[13px] text-white/40">
            © 2026 Impulse. All rights reserved.
          </span>
          <span className="font-body text-[13px] text-white/40">
            impulsecontrolapp.com
          </span>
        </div>
      </div>
    </footer>
  );
}
