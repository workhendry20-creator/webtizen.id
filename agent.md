# Agent Context & Execution Rules - Webtizen Landing Page

## 1. Project Context & Brand Overview
- **Brand Name**: Webtizen
- **Domain/Purpose**: Jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern.
- **Instagram Target**: `https://instagram.com/webtizen.id`
- **GitHub Repository**: `https://github.com/workhendry20-creator/webtizen.id.git`
- **Design Philosophy**: Purply-inspired dark slate/teal aesthetic dipadu dengan mikro-interaksi Motion UI yang halus (60fps).

---

## 2. Technical Stack & Configuration
- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animation Engine**: Framer Motion
- **Icons**: Lucide React
- **Config Strategy**: Seluruh konten dinamis (3 kata intro, link sosial, daftar layanan, portofolio) terpusat di `src/config/site.ts`.

---

## 3. Strict Operating Rules for Agent

### A. Output & Communication Protocol
- Berikan penafsiran, laporan, dan jawaban **sesingkat dan seefektif mungkin**.
- Langsung eksekusi tugas tanpa *fluff* atau penjelasan teoretis berlebihan.

### B. Development & Quality Assurance Rules
- **Zero Bug Guarantee**: Setiap perubahan kode wajib diuji secara fungsional.
- **Build Verification**: Sebelum menandai tugas selesai, jalankan verifikasi `npm run build` dan pastikan **0 error TypeScript / ESLint**.
- **Responsive Guarantee**: Pastikan layout tampil sempurna di resolusi Mobile (<768px), Tablet (768px-1024px), dan Desktop (>1024px).

### C. Task Management & Git Workflow
- **Task Tracking**: Agent wajib memperbarui berkas `tasks.md` dengan menandai centang `[x]` pada sub-task yang telah selesai sebelum berpindah ke task berikutnya.
- **Git Repository Push**: Wajib melakukan `git commit` dan `git push` secara berkala ke remote repository:
  `https://github.com/workhendry20-creator/webtizen.id.git`

---

## 4. Design & Color Palette Tokens (Mandatory)
Agent wajib mematuhi skema warna spesifik berikut pada seluruh komponen UI:
- `Gunmetal` (`#2D3330`): Background utama website (`bg-root`)[cite: 1]
- `Dark Slate Grey` (`#2E4541`): Background kartu bento / glassmorphism (`bg-card`)[cite: 1]
- `Jungle Teal` (`#548062`): Primary CTA, tombol utama, aksen aktif[cite: 1]
- `Muted Teal` (`#70A591`): Border halus, hover state, sub-headline[cite: 1]
- `Mint Cream` (`#F0F7EE`): Teks utama, judul, dan highlight kontras[cite: 1]