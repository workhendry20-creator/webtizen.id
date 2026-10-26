"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, PenTool, Code, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";

const stepIcons = [Compass, PenTool, Code, Rocket];

export function ProcessWorkflow() {
  return (
    <section
      id="workflow"
      aria-label="Alur Pengerjaan Website Webtizen"
      className="relative w-full bg-webtizen-bg px-6 py-20 sm:py-28 text-webtizen-text"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-webtizen-muted sm:text-sm"
          >
            Metodologi Kerja
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-webtizen-text sm:text-4xl md:text-5xl"
          >
            4 Langkah Mudah Mewujudkan Website Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-webtizen-muted sm:text-lg"
          >
            Proses kolaboratif yang transparan, terstruktur, dan terukur dari konsep awal hingga peluncuran tanpa kendala.
          </motion.p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.processWorkflow.map((item, index) => {
            const Icon = stepIcons[index] || Compass;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 group">
                  <div>
                    {/* Header Step & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-webtizen-card border border-webtizen-muted/30 text-webtizen-accent group-hover:scale-105 group-hover:border-webtizen-accent/60 group-hover:text-webtizen-text transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-webtizen-muted/40 group-hover:text-webtizen-accent transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-xl font-bold text-webtizen-text group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-webtizen-muted/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step Accent Line */}
                  <div className="mt-6 pt-4 border-t border-webtizen-muted/15">
                    <div className="h-1 w-10 rounded-full bg-webtizen-accent/40 group-hover:w-full group-hover:bg-webtizen-accent transition-all duration-300" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessWorkflow;
