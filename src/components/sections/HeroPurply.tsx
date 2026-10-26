"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function HeroPurply() {
  const highlights = [
    "Ultra-Fast Loading (<1s)",
    "Framer Motion 60fps",
    "High Conversion Design",
  ];

  return (
    <section
      id="main-content"
      aria-label="Main Hero Section"
      className="relative w-full overflow-hidden bg-webtizen-bg px-6 py-24 sm:py-32 text-webtizen-text"
    >
      {/* Background Glow Accents */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-webtizen-accent/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 h-72 w-72 rounded-full bg-webtizen-muted/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Modern Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-webtizen-muted/30 bg-webtizen-card/80 px-4 py-1.5 text-xs font-medium text-webtizen-muted backdrop-blur-md shadow-sm sm:text-sm"
        >
          <Sparkles className="h-4 w-4 text-webtizen-accent" />
          <span>Purply-Inspired Next-Gen Digital Studio</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-3xl font-extrabold tracking-tight text-webtizen-text sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-webtizen-text via-webtizen-muted to-webtizen-accent bg-clip-text text-transparent">
            High-Converting
          </span>{" "}
          & Aesthetically Crafted Websites for{" "}
          <span className="underline decoration-webtizen-accent/60 underline-offset-8">
            Modern Brands.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed text-webtizen-muted sm:text-lg md:text-xl"
        >
          Kombinasi visual memikat bertaraf global dan teknologi Next.js terkini.
          Kami mentransformasi pengunjung menjadi pelanggan loyal dengan website
          berperforma tinggi, responsif, dan siap melejitkan omset bisnis Anda.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.links.whatsapp}
            isExternal
            icon={<MessageCircle className="h-5 w-5" />}
            iconPosition="left"
            className="w-full sm:w-auto font-semibold shadow-lg shadow-webtizen-accent/20"
          >
            Mulai Konsultasi
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#portfolio"
            icon={<ArrowRight className="h-5 w-5" />}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Lihat Portofolio
          </Button>
        </motion.div>

        {/* Feature Highlights Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-webtizen-muted sm:text-sm"
        >
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-webtizen-accent" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroPurply;
