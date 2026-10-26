"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TypingLoopHero() {
  const words = siteConfig.introWords;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleScrollToMain = () => {
    const mainSection = document.getElementById("main-content");
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Webtizen Intro"
      className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-webtizen-bg px-6 py-12 text-webtizen-text"
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-webtizen-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-webtizen-card/40 blur-[100px]"
        aria-hidden="true"
      />

      {/* Top Branding / Logo */}
      <header className="z-10 flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Webtizen Logo"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-webtizen-muted/30 bg-webtizen-card/60 px-4 py-1.5 text-xs text-webtizen-muted backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-webtizen-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-webtizen-accent" />
          </span>
          Modern Web Agency
        </div>
      </header>

      {/* Center Typing / Loop Content */}
      <main className="z-10 flex flex-1 flex-col items-center justify-center text-center max-w-4xl py-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-widest text-webtizen-muted uppercase sm:text-base"
        >
          Kami Membangun Website Yang
        </motion.p>

        <div className="relative flex h-24 items-center justify-center sm:h-32 md:h-40">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl font-extrabold tracking-tight text-webtizen-text sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="bg-gradient-to-r from-webtizen-text via-webtizen-muted to-webtizen-accent bg-clip-text text-transparent">
                {words[currentIndex]}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-xl text-base text-webtizen-muted/90 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>
      </main>

      {/* Bottom Scroll Cue Button */}
      <footer className="z-10 flex flex-col items-center gap-3">
        <span className="text-xs font-medium tracking-wider text-webtizen-muted/70 uppercase">
          Eksplorasi Layanan
        </span>
        <button
          type="button"
          onClick={handleScrollToMain}
          aria-label="Scroll to main content"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-webtizen-accent text-webtizen-text shadow-lg transition-all duration-300 hover:bg-webtizen-muted hover:shadow-[0_0_25px_rgba(112,165,145,0.45)] focus:outline-none focus:ring-2 focus:ring-webtizen-accent focus:ring-offset-2 focus:ring-offset-webtizen-bg active:scale-95"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.div>
        </button>
      </footer>
    </section>
  );
}
export default TypingLoopHero;
