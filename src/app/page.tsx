import { TypingLoopHero } from "@/components/intro/TypingLoopHero";
import { HeroPurply } from "@/components/sections/HeroPurply";
import { BentoServices } from "@/components/sections/BentoServices";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProcessWorkflow } from "@/components/sections/ProcessWorkflow";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-webtizen-bg text-webtizen-text selection:bg-webtizen-accent selection:text-webtizen-text">
      {/* 1. Intro Typing Loop Screen */}
      <TypingLoopHero />

      {/* 2. Main Hero Section (Purply-Inspired Dual CTA) */}
      <HeroPurply />

      {/* 3. Bento Grid Services */}
      <BentoServices />

      {/* 4. Selected Portfolio Showcase */}
      <PortfolioGrid />

      {/* 5. 4-Step Process Workflow */}
      <ProcessWorkflow />

      {/* 6. Instagram Community Showcase */}
      <InstagramSection />

      {/* 7. High-Impact Footer & Contact CTA */}
      <FooterCTA />
    </div>
  );
}
