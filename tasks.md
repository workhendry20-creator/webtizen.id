# Project Task Roadmap - Webtizen Landing Page

## Agent Work Rules & Instructions
- **Output & Penjelasan**: Singkat, padat, dan *to-the-point*. Hindari penjelasan bertele-tele.
- **Efisiensi Kerja**: Eksekusi secara efektif, terstruktur, dan sesuai arsitektur.
- **Git Repository**: Wajib melakukan `git push` secara berkala ke repository:
  `https://github.com/workhendry20-creator/webtizen.id.git`
- **Quality Assurance**: Selalu lakukan verifikasi fungsional dan *build check* (`npm run build`). Pastikan **0 error & 0 bug** sebelum mencentang (*check*) task.
- **Task Updating**: Agent **harus menandai centang `[x]`** pada task yang selesai sebelum berpindah ke task berikutnya.

---

## Task Checklist

### Phase 1: Environment & Color Tokens Setup
- [x] **Task 1.1**: Konfigurasi warna `webtizen` pada `tailwind.config.ts` (`#2D3330`, `#2E4541`, `#548062`, `#70A591`, `#F0F7EE`).
- [x] **Task 1.2**: Setup global CSS & variabel typography pada `src/app/globals.css`.
- [x] **Task 1.3**: Buat file `src/config/site.ts` memuat data intro text, services, contact links, serta mockup data/placeholder portofolio.
- [x] **Task 1.4**: Inisialisasi Git repo lokal dan push commit perdana ke `https://github.com/workhendry20-creator/webtizen.id.git`.

### Phase 2: Core Components Development
- [x] **Task 2.1**: Buat komponen `TypingLoopHero.tsx` (Typing Text Intro + Scroll Cue Button).
- [x] **Task 2.2**: Buat reusable UI component `GlassCard.tsx` dengan efek hover glow (`#548062` / `#70A591`).
- [x] **Task 2.3**: Buat reusable UI component `Button.tsx` sesuai panduan warna `design.md`.

### Phase 3: Purply Landing Page Sections Development
- [ ] **Task 3.1**: Buat `HeroPurply.tsx` (Headline, Sub-headline, Dual CTA).
- [ ] **Task 3.2**: Buat `BentoServices.tsx` (Layout Bento Grid untuk 4 layanan utama Webtizen).
- [ ] **Task 3.3**: Buat `PortfolioGrid.tsx` (Selected showcase dengan animasi hover).
- [ ] **Task 3.4**: Buat `ProcessWorkflow.tsx` (4 alur pengerjaan website).
- [ ] **Task 3.5**: Buat `InstagramSection.tsx` (Highlight `@webtizen.id` + direct link).
- [ ] **Task 3.6**: Buat `FooterCTA.tsx` (Contact trigger WhatsApp/Email/IG & copyright).

### Phase 4: Integration, Smooth Scroll & Page Assembly
- [ ] **Task 4.1**: Rakit seluruh komponen di `src/app/page.tsx` (Phase 1 Intro + Phase 2 Main Landing).
- [ ] **Task 4.2**: Implementasikan *smooth scroll behavior* dari Intro ke Hero Purply.
- [ ] **Task 4.3**: Set SEO Metadata (Title, Description, OpenGraph, Favicon) di `src/app/layout.tsx`.

### Phase 5: Testing, Quality Assurance & Deployment Push
- [ ] **Task 5.1**: Jalankan `npm run build` dan pastikan tidak ada TypeScript / ESLint error.
- [ ] **Task 5.2**: Uji responsivitas pada resolusi Mobile, Tablet, dan Desktop.
- [ ] **Task 5.3**: Push kode akhir ke `https://github.com/workhendry20-creator/webtizen.id.git`.