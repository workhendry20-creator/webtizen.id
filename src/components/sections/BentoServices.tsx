"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, Code2, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap = {
  Rocket,
  Building2,
  Code2,
  Sparkles,
};

export function BentoServices() {
  const getBentoColSpan = (index: number) => {
    switch (index) {
      case 0:
        return "lg:col-span-7";
      case 1:
        return "lg:col-span-5";
      case 2:
        return "lg:col-span-5";
      case 3:
        return "lg:col-span-7";
      default:
        return "lg:col-span-6";
    }
  };

  return (
    <section
      id="services"
      aria-label="Layanan Unggulan Webtizen"
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
            Layanan Spesialisasi
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-webtizen-text sm:text-4xl md:text-5xl"
          >
            Solusi Website Modern Berkelas Dunia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-webtizen-muted sm:text-lg"
          >
            Kami menggabungkan estetika desain kontemporer dengan rekayasa perangkat lunak mutakhir
            untuk menghasilkan website yang bekerja nyata bagi bisnis Anda.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {siteConfig.services.map((service, index) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Sparkles;
            const colSpan = getBentoColSpan(index);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={colSpan}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Card Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-webtizen-card border border-webtizen-muted/30 text-webtizen-accent shadow-inner group-hover:scale-105 group-hover:border-webtizen-accent/60 group-hover:text-webtizen-text transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-webtizen-muted/30 bg-webtizen-bg/80 px-3 py-1 text-xs font-medium text-webtizen-muted">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-webtizen-text tracking-tight group-hover:text-white transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-webtizen-muted/90 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 space-y-2.5 pt-4 border-t border-webtizen-muted/15">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-webtizen-text/90">
                          <CheckCircle2 className="h-4 w-4 text-webtizen-accent shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link Cue */}
                  <div className="mt-8 pt-4 flex items-center justify-between text-xs font-medium text-webtizen-muted group-hover:text-webtizen-accent transition-colors duration-200">
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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

export default BentoServices;
