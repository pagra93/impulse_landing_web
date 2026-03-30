export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-20 py-8 max-w-[1440px] mx-auto">
        <span className="text-accent font-black text-base tracking-[2px]">
          IMPULSE
        </span>

        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className="text-text-tertiary text-[13px] hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-text-tertiary text-[13px] hover:text-text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#calculator"
            className="text-text-tertiary text-[13px] hover:text-text-primary transition-colors"
          >
            Calculator
          </a>
        </nav>

        <span className="text-text-tertiary text-xs">
          &copy; {new Date().getFullYear()} Impulse. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
