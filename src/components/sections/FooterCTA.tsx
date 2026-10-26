"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { InstagramIcon, GithubIcon } from "@/components/ui/Icons";

export function FooterCTA() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Alur Kerja", href: "#workflow" },
    { label: "Instagram", href: "#instagram" },
  ];

  return (
    <footer
      id="contact"
      aria-label="Footer and Contact Section"
      className="relative w-full bg-webtizen-bg px-6 pt-16 pb-12 text-webtizen-text overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* High-Impact CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <GlassCard className="relative overflow-hidden p-8 sm:p-14 text-center border-webtizen-accent/40 bg-gradient-to-b from-webtizen-card/90 to-webtizen-card/60">
            {/* Ambient Lighting */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-webtizen-accent/25 blur-3xl"
              aria-hidden="true"
            />

            <span className="inline-block rounded-full border border-webtizen-accent/40 bg-webtizen-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-webtizen-muted">
              Mulai Kolaborasi
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-webtizen-text sm:text-5xl">
              Siap Mewujudkan Website Impian Brand Anda?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-webtizen-muted sm:text-lg">
              Konsultasikan ide proyek Anda secara gratis. Kami siap membantu merancang website
              modern, cepat, dan berkonversi tinggi yang disesuaikan dengan visi brand Anda.
            </p>

            {/* Direct Contact Action Triggers */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={siteConfig.links.whatsapp}
                isExternal
                icon={<MessageCircle className="h-5 w-5" />}
                iconPosition="left"
                className="w-full sm:w-auto font-semibold shadow-lg shadow-webtizen-accent/30"
              >
                Chat WhatsApp
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={siteConfig.links.email}
                isExternal
                icon={<Mail className="h-5 w-5" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Kirim Email
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={siteConfig.links.instagram}
                isExternal
                icon={<InstagramIcon className="h-5 w-5" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Instagram DM
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 gap-10 pt-10 border-t border-webtizen-muted/20 md:grid-cols-12 md:items-center">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Webtizen Logo"
                width={130}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-webtizen-muted/80 max-w-sm leading-relaxed">
              {siteConfig.tagline}. Agensi digital spesialis Next.js, Framer Motion, dan UI/UX modern berorientasi konversi.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-6 text-sm text-webtizen-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-webtizen-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Webtizen"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-webtizen-muted/20 bg-webtizen-card text-webtizen-muted transition-colors hover:border-webtizen-accent hover:text-webtizen-text"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-webtizen-muted/20 bg-webtizen-card text-webtizen-muted transition-colors hover:border-webtizen-accent hover:text-webtizen-text"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-webtizen-muted/20 bg-webtizen-card text-webtizen-muted transition-all hover:bg-webtizen-accent hover:text-webtizen-text"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-10 pt-6 border-t border-webtizen-muted/10 flex flex-col sm:flex-row items-center justify-between text-xs text-webtizen-muted/60 gap-4">
          <p>© {currentYear} Webtizen. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 15+, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterCTA;
