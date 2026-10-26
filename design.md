# Design System & Guidelines - Webtizen Landing Page

## 1. Visual Identity & Atmosphere
Design System Webtizen mengadopsi struktur modern ala **Purply Template** dipadu dengan kecanggihan mikro-interaksi **Motion**, dibalut dalam skema warna bernuansa *earthy-teal* & *gunmetal* yang tenang, elegan, dan profesional[cite: 1].

- **Primary Theme**: Organic Cyber Teal / Dark Gunmetal Elegance[cite: 1]
- **Core Aesthetic**: *Glassmorphism*, *Teal Glowing Borders*, *Bento-Grid Layout*, *Clean Mint Typography*[cite: 1].

---

## 2. Color Palette & Tokens (Exact Hex Codes)

### Base & Background Colors
- **Gunmetal (`#2D3330`)**: Background utama seluruh website (`bg-root`)[cite: 1].
- **Dark Slate Grey (`#2E4541`)**: Background kartu/bento grid (`bg-card`), kontainer komponen, dan border netral[cite: 1].

### Accent & Highlights
- **Jungle Teal (`#548062`)**: Warna tombol utama (Primary CTA), elemen aktif, dan aksen glow[cite: 1].
- **Muted Teal (`#70A591`)**: Warna aksen sekunder, hover state, border halus, dan sub-headline[cite: 1].
- **Mint Cream (`#F0F7EE`)**: Warna teks utama, kartu kontras tinggi, dan elemen sorotan (*highlight*)[cite: 1].

### Color Mapping Token (Tailwind Extended)
- `webtizen-bg`: `#2D3330` (Gunmetal)[cite: 1]
- `webtizen-card`: `#2E4541` (Dark Slate Grey)[cite: 1]
- `webtizen-accent`: `#548062` (Jungle Teal)[cite: 1]
- `webtizen-muted`: `#70A591` (Muted Teal)[cite: 1]
- `webtizen-text`: `#F0F7EE` (Mint Cream)[cite: 1]

---

## 3. Typography & Hierarchy

- **Font Family**: Plus Jakarta Sans / Inter (Clean, Modern, Tech-oriented)
- **Scale**:
  - **Hero Typing Intro**: `4xl` (Mobile) / `6xl` to `7xl` (Desktop), Bold, Teks `Mint Cream` (`#F0F7EE`) dengan aksen `Muted Teal` (`#70A591`)[cite: 1].
  - **Section Headings**: `3xl` (Mobile) / `5xl` (Desktop), Extra Bold, Tracking Tight.
  - **Card Titles**: `xl` to `2xl`, Semi-Bold, Teks `Mint Cream` (`#F0F7EE`)[cite: 1].
  - **Body Text**: `base` (16px) / `sm` (14px), Regular/Medium, warna `Mint Cream` dengan opasitas 80% atau `Muted Teal` (`#70A591`)[cite: 1].

---

## 4. UI Components & Layout Guidelines

### A. Intro Typing Loop Screen (`TypingLoopHero`)
- Minimalis dengan background **Gunmetal** (`#2D3330`)[cite: 1].
- Teks dinamis berganti dengan warna **Mint Cream** (`#F0F7EE`)[cite: 1].
- Tombol CTA/Scroll Cue di bawah menggunakan warna **Jungle Teal** (`#548062`) dengan efek *glow hover* **Muted Teal** (`#70A591`)[cite: 1].

### B. Bento Grid Cards (`GlassCard`)
- Background kartu **Dark Slate Grey** (`#2E4541`) dengan *backdrop blur*[cite: 1].
- Border kartu menggunakan warna **Muted Teal** (`#70A591`) transparan[cite: 1].
- Efek *hover state*: Border menyala terang dengan aksen **Jungle Teal** (`#548062`) dan efek *outer shadow glow* (`shadow-[0_0_20px_rgba(84,128,98,0.3)]`)[cite: 1].

### C. Buttons & CTAs
- **Primary Button**: Background **Jungle Teal** (`#548062`), teks **Mint Cream** (`#F0F7EE`), dengan efek hover ke warna **Muted Teal** (`#70A591`)[cite: 1].
- **Secondary Button**: Background transparan dengan border **Muted Teal** (`#70A591`) dan teks **Mint Cream** (`#F0F7EE`)[cite: 1].

---

## 5. Motion & Animation Principles

- **Scroll Reveal**: Efek *fade-in up* saat masuk ke layar monitor/HP (`y: 20` ke `y: 0`, `duration: 0.6s`).
- **Interactive Feedback**: Respon *hover* halus (200ms) pada setiap elemen kartu dan tombol.
- **Smooth Continuous Flow**: Perpindahan layar dari *Intro Screen* menuju *Hero Section Purply* menggunakan *smooth scroll trigger*.