"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";

export function PortfolioGrid() {
  return (
    <section
      id="portfolio"
      aria-label="Karya Terpilih Webtizen"
      className="relative w-full bg-webtizen-bg px-6 py-20 sm:py-28 text-webtizen-text"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-webtizen-card/50 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-webtizen-muted sm:text-sm"
          >
            Showcase Portofolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-webtizen-text sm:text-4xl md:text-5xl"
          >
            Karya Pilihan & Eksplorasi Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-webtizen-muted sm:text-lg"
          >
            Setiap proyek dirancang dengan fokus pada detail visual, kecepatan loading optimal,
            dan arsitektur yang dirancang untuk meningkatkan konversi pengguna.
          </motion.p>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {siteConfig.portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group cursor-pointer p-6">
                <div>
                  {/* Browser Mockup Window Preview */}
                  <div className="relative mb-6 overflow-hidden rounded-xl border border-webtizen-muted/30 bg-webtizen-bg/90 shadow-md">
                    {/* Browser Mockup Top Bar */}
                    <div className="flex items-center justify-between border-b border-webtizen-muted/20 bg-webtizen-card/80 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="rounded-md bg-webtizen-bg/70 px-3 py-0.5 text-[10px] text-webtizen-muted font-mono tracking-tight">
                        webtizen.id/showcase/{project.id}
                      </div>
                      <ExternalLink className="h-3 w-3 text-webtizen-muted/60" />
                    </div>

                    {/* Preview Graphic Area */}
                    <div className="relative flex h-48 sm:h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-webtizen-card via-webtizen-bg to-[#1e2523] p-6 transition-transform duration-500 group-hover:scale-[1.02]">
                      {/* Decorative Shapes / Graphic representation */}
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-webtizen-accent/20 blur-2xl group-hover:bg-webtizen-accent/35 transition-colors duration-500" />
                      <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-webtizen-muted/20 blur-2xl" />

                      {/* Content Wireframe Mockup */}
                      <div className="relative z-10 w-full max-w-xs rounded-lg border border-webtizen-muted/20 bg-webtizen-bg/80 p-4 shadow-xl backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-5 w-5 rounded-md bg-webtizen-accent/30 flex items-center justify-center text-webtizen-accent text-[10px] font-bold">
                            W
                          </div>
                          <div className="h-2 w-20 rounded bg-webtizen-muted/40" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 w-3/4 rounded bg-webtizen-text/60" />
                          <div className="h-2 w-full rounded bg-webtizen-muted/30" />
                          <div className="h-2 w-5/6 rounded bg-webtizen-muted/30" />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <div className="h-6 w-16 rounded bg-webtizen-accent/40" />
                          <div className="h-6 w-12 rounded bg-webtizen-card" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-webtizen-accent">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-webtizen-accent/20 px-2 py-0.5 text-[10px] font-medium text-webtizen-text">
                        <Sparkles className="h-2.5 w-2.5" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-webtizen-text group-hover:text-webtizen-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-webtizen-muted/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-webtizen-bg/90 border border-webtizen-muted/20 px-2.5 py-1 text-xs text-webtizen-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Cue */}
                <div className="mt-6 pt-4 border-t border-webtizen-muted/15 flex items-center justify-between text-xs font-medium text-webtizen-muted group-hover:text-webtizen-text transition-colors">
                  <span className="inline-flex items-center gap-1.5">
                    <FolderGit2 className="h-3.5 w-3.5 text-webtizen-accent" />
                    Arsitektur Kustom
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:text-webtizen-accent">
                    Lihat Studi Kasus
                    <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;
