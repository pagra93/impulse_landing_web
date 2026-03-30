"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Mail,
} from "lucide-react";

const iconsLeft = [
  { Icon: Twitter, color: "#1DA1F2", size: 64, rotation: 8, x: "7%", y: "18%" },
  { Icon: Instagram, gradient: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)", size: 60, rotation: -6, x: "13%", y: "52%" },
  { Icon: Youtube, color: "#FF0000", size: 56, rotation: -12, x: "5%", y: "39%" },
  { Icon: Facebook, color: "#1877F2", size: 52, rotation: 5, x: "12%", y: "79%" },
  { Icon: Mail, color: "#EA4335", size: 48, rotation: 12, x: "17%", y: "36%" },
];

const iconsRight = [
  { text: "TT", color: "#000000", border: true, size: 62, rotation: 10, x: "89%", y: "19%" },
  { text: "r/", color: "#FF4500", size: 58, rotation: -8, x: "91%", y: "52%" },
  { text: "S", color: "#FFFC00", textColor: "#000", size: 54, rotation: 15, x: "85%", y: "76%" },
  { text: "in", color: "#0A66C2", size: 50, rotation: -5, x: "94%", y: "37%" },
  { text: "N", color: "#E50914", size: 52, rotation: -10, x: "81%", y: "7%" },
];

export function Hero() {
  return (
    <section className="bg-bg-primary overflow-hidden">
      {/* Hero content */}
      <div className="flex flex-col items-center gap-8 px-6 md:px-20 pt-16 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-accent text-text-on-accent text-[11px] font-bold tracking-[1px] px-3.5 py-1.5 rounded-full"
        >
          4.8 ★ APP STORE
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-[68px] font-black tracking-[-2px] text-center leading-[1.05]">
            LESS SCROLLING,
          </h1>
          <h1 className="text-4xl md:text-[68px] font-black tracking-[-2px] text-center leading-[1.05] text-accent italic">
            MORE LIVING.
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-lg leading-[1.6] text-center max-w-[700px]"
        >
          Impulse users save an average of 2+ hours per day by blocking
          distracting apps and websites. No willpower required.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-text-on-accent text-sm font-bold tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
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
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-text-tertiary text-sm">
            Join 500+ people taking back their time
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-bg-card-elevated text-text-primary text-[11px] font-semibold tracking-[1px] px-3.5 py-1.5 rounded-full">
              🏆 #1 Product Hunt
            </span>
            <span className="bg-bg-card-elevated text-text-primary text-[11px] font-semibold tracking-[1px] px-3.5 py-1.5 rounded-full">
              ⭐ Editor&apos;s Choice
            </span>
            <span className="bg-bg-card-elevated text-text-primary text-[11px] font-semibold tracking-[1px] px-3.5 py-1.5 rounded-full">
              📰 TechCrunch Featured
            </span>
          </div>
        </motion.div>
      </div>

      {/* Hero Showcase — Device mockups with floating social icons */}
      <div className="relative h-[300px] md:h-[620px] overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,219,76,0.09), transparent 70%)",
          }}
        />

        {/* MacBook mockup */}
        <div className="absolute left-1/2 -translate-x-[60%] md:-translate-x-[45%] top-[40px] md:top-[80px]">
          <div className="w-[320px] md:w-[880px] h-[200px] md:h-[520px] bg-bg-card rounded-xl border border-border-subtle overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2 md:py-2.5 bg-bg-card-elevated border-b border-border-subtle">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-bg-primary rounded-md px-3 py-1 text-text-tertiary text-[10px] md:text-xs text-center">
                  impulsecontrolapp.com
                </div>
              </div>
            </div>
            <div className="relative w-full h-full bg-bg-primary">
              <Image
                src="/onboarding/welcome.png"
                alt="Impulse app dashboard"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* iPhone mockup */}
        <div className="hidden md:block absolute right-[5%] lg:right-[10%] top-[60px]">
          <div className="w-[240px] h-[490px] bg-bg-card rounded-[36px] border-2 border-border-subtle overflow-hidden shadow-2xl p-2">
            <div className="w-full h-full bg-bg-primary rounded-[28px] overflow-hidden relative">
              <Image
                src="/onboarding/limits.png"
                alt="Impulse iOS app"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Floating social icons — Left side */}
        {iconsLeft.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center justify-center shadow-lg"
            style={{
              width: item.size,
              height: item.size,
              left: item.x,
              top: item.y,
              background: item.gradient || item.color,
              rotate: `${item.rotation}deg`,
              borderRadius: item.size * 0.28,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size * 0.5} color="#FFFFFF" />
          </motion.div>
        ))}

        {/* Floating social icons — Right side (text-based) */}
        {iconsRight.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center justify-center shadow-lg"
            style={{
              width: item.size,
              height: item.size,
              left: item.x,
              top: item.y,
              background: item.color,
              rotate: `${item.rotation}deg`,
              borderRadius: item.size * 0.37,
              border: item.border ? "1px solid rgba(255,255,255,0.2)" : undefined,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="font-black"
              style={{
                color: item.textColor || "#FFFFFF",
                fontSize: item.size * 0.42,
              }}
            >
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
