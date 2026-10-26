 # System Architecture - Webtizen Landing Page

## 1. High-Level Technology Stack
- **Core Framework**: Next.js (App Router, React 19 / 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation Engine**: Framer Motion
- **Icon Set**: Lucide React
- **Utility Helpers**: `clsx`, `tailwind-merge`

---

## 2. Directory & Component Structure
```text
webtizen-landing/
├── PRD.md
├── system_architecture.md
├── design.md
├── tasks.md
├── agent.md
├── public/
│   ├── images/          # Assets gambar portofolio & branding
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout, metadata SEO, & font setup
│   │   ├── page.tsx     # Main page assembling Intro & Purply Sections
│   │   └── globals.css  # Tailwind imports & custom glassmorphism styles
│   ├── components/
│   │   ├── intro/
│   │   │   └── TypingLoopHero.tsx   # Phase 1: Typing text & scroll cue
│   │   ├── sections/
│   │   │   ├── HeroPurply.tsx       # Phase 2: Main hero headline & CTA
│   │   │   ├── BentoServices.tsx    # Services bento grid layout
│   │   │   ├── PortfolioGrid.tsx    # Selected projects showcase
│   │   │   ├── ProcessWorkflow.tsx  # 4-step agency process
│   │   │   ├── InstagramSection.tsx # @webtizen.id showcase & link
│   │   │   └── FooterCTA.tsx        # CTA contact & social links
│   │   └── ui/
│   │       ├── GlassCard.tsx        # Reusable glowing border card
│   │       ├── Button.tsx           # Custom action button
│   │       └── ScrollIndicator.tsx  # Smooth scroll arrow/cue
│   ├── config/
│   │   └── site.ts                  # Centralized content & configuration
│   └── lib/
│       └── utils.ts                 # Classname merge helper (cn utility)