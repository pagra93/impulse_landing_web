"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="bg-bg-primary py-24 md:py-[100px] px-6 md:px-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto flex flex-col items-center gap-8"
      >
        <h2 className="text-4xl md:text-[64px] font-black tracking-[-2px] text-center leading-[1.05]">
          CONTROL YOUR IMPULSE.
        </h2>
        <h2 className="text-4xl md:text-[64px] font-black tracking-[-2px] text-center leading-[1.05] text-accent italic">
          CONTROL YOUR TIME.
        </h2>

        <p className="text-text-secondary text-lg text-center max-w-lg">
          Will Impulse make you perfect? No. But it will make you intentional.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-text-on-accent text-base font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            DOWNLOAD FOR iOS — FREE
          </a>
          <a
            href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent text-accent text-sm font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent/10 transition-colors"
          >
            ADD TO CHROME
          </a>
        </div>

        <p className="text-text-tertiary text-[13px]">
          4.8 on the App Store · Free to download · No credit card
        </p>
      </motion.div>
    </section>
  );
}
