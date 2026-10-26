"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Heart, MessageSquare, Bookmark } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/Icons";

export function InstagramSection() {
  const instagramMockPosts = [
    {
      title: "Clean Glassmorphism UI",
      category: "Design System",
      likes: "1.2k",
      comments: "84",
    },
    {
      title: "Optimasi 100/100 Lighthouse",
      category: "Web Performance",
      likes: "950",
      comments: "62",
    },
    {
      title: "Next.js 15 Server Components",
      category: "Tech Stack",
      likes: "1.5k",
      comments: "110",
    },
  ];

  return (
    <section
      id="instagram"
      aria-label="Instagram Community Webtizen"
      className="relative w-full bg-webtizen-bg px-6 py-20 sm:py-28 text-webtizen-text"
    >
      <div className="mx-auto max-w-6xl">
        <GlassCard className="relative overflow-hidden p-8 sm:p-12 lg:p-16 border-webtizen-muted/30">
          {/* Subtle Ambient Background Gradients */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-webtizen-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-webtizen-card/60 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-medium text-pink-300">
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>Instagram Community</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-webtizen-text sm:text-4xl lg:text-5xl">
                Ikuti Eksplorasi Kreatif Kami di{" "}
                <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 bg-clip-text text-transparent">
                  {siteConfig.links.instagramHandle}
                </span>
              </h2>

              <p className="text-base text-webtizen-muted leading-relaxed sm:text-lg">
                Dapatkan inspirasi desain web harian, studi kasus UI/UX, tren teknologi frontend,
                serta di balik layar pengerjaan proyek-proyek digital modern Webtizen.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={siteConfig.links.instagram}
                  isExternal
                  icon={<InstagramIcon className="h-5 w-5" />}
                  iconPosition="left"
                  className="font-semibold shadow-lg shadow-webtizen-accent/20"
                >
                  Follow {siteConfig.links.instagramHandle}
                </Button>
                <div className="flex items-center gap-2 text-xs text-webtizen-muted">
                  <Sparkles className="h-4 w-4 text-webtizen-accent" />
                  <span>Update rutin desain & teknologi</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Mock Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {instagramMockPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-xl border border-webtizen-muted/20 bg-webtizen-bg/80 p-4 transition-all duration-300 hover:border-webtizen-accent hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    {/* Simulated Post Image Box */}
                    <div className="relative mb-3 flex h-28 w-full items-center justify-center rounded-lg bg-gradient-to-br from-webtizen-card to-[#1d2724] border border-webtizen-muted/15 p-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-webtizen-muted/80 text-center">
                        {post.category}
                      </span>
                      <div className="absolute top-2 right-2 text-webtizen-accent">
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-webtizen-text line-clamp-2">
                      {post.title}
                    </h4>
                  </div>

                  {/* Social Counts */}
                  <div className="mt-4 pt-3 border-t border-webtizen-muted/15 flex items-center justify-between text-[11px] text-webtizen-muted">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3 text-rose-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {post.comments}
                    </span>
                    <Bookmark className="h-3 w-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default InstagramSection;
