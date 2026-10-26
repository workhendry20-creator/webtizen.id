export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  badge: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export const siteConfig = {
  name: "Webtizen",
  tagline: "Jasa Pembuatan Website Modern, Estetik & Berkonversi Tinggi",
  description:
    "Webtizen menghadirkan jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern dengan teknologi Next.js terkini.",
  url: "https://webtizen.id",

  // Task 1.3: Intro typing words
  introWords: [
    "Estetik.",
    "Berkonversi Tinggi.",
    "Ultra-Responsif.",
  ],

  // Task 1.3: Contact & Social links
  links: {
    instagram: "https://instagram.com/webtizen.id",
    instagramHandle: "@webtizen.id",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Webtizen%2C%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website%20modern.",
    whatsappDisplay: "+62 812-3456-7890",
    email: "mailto:hello@webtizen.id",
    emailDisplay: "hello@webtizen.id",
    github: "https://github.com/workhendry20-creator/webtizen.id.git",
  },

  // Task 1.3: Daftar Layanan Utama (Bento Grid 4 Layanan)
  services: [
    {
      id: "landing-page",
      title: "High-Converting Landing Page",
      shortDesc: "Landing page presisi tinggi dengan copywriting persuasif dan CTA optimal.",
      description:
        "Dirancang khusus untuk memaksimalkan rasio konversi kampanye iklan dan produk digital Anda dengan kecepatan loading instan.",
      badge: "Paling Populer",
      icon: "Rocket",
      features: [
        "Desain Kustom & Terarah",
        "Optimasi Konversi & A/B Ready",
        "Loading Ultra Cepat (<1s)",
        "Mobile-First Responsive",
      ],
    },
    {
      id: "company-profile",
      title: "Company Profile & Brand Showcase",
      shortDesc: "Website korporat dan brand modern yang memperkuat otoritas bisnis.",
      description:
        "Tingkatkan kredibilitas perusahaan Anda dengan visual berkelas, animasi mikro halus, dan narasi brand yang memikat.",
      badge: "Brand Authority",
      icon: "Building2",
      features: [
        "Desain Eksklusif Sesuai Brand Guidelines",
        "Arsitektur Informasi Terstruktur",
        "SEO On-Page Lengkap",
        "Integrasi Form Kontak & WhatsApp",
      ],
    },
    {
      id: "web-application",
      title: "Custom Web Application & Dashboard",
      shortDesc: "Aplikasi web interaktif dengan skalabilitas dan performa Next.js.",
      description:
        "Pengembangan web application, client portal, atau dashboard manajemen data dengan arsitektur modern dan keamanan tinggi.",
      badge: "Full-Stack",
      icon: "Code2",
      features: [
        "Next.js App Router & TypeScript",
        "Integrasi API & Database Real-time",
        "Manajemen State Canggih",
        "Performa 60fps Tanpa Lag",
      ],
    },
    {
      id: "uiux-motion",
      title: "UI/UX Design & Motion Interaction",
      shortDesc: "Desain antarmuka memukau dengan sistem interaksi Framer Motion 60fps.",
      description:
        "Prototipe fungsional dan pengalaman pengguna yang halus untuk menciptakan kesan mendalam pada setiap pengunjung website Anda.",
      badge: "Creative Studio",
      icon: "Sparkles",
      features: [
        "Figma High-Fidelity Prototype",
        "Custom Motion UI & Glassmorphism",
        "Design System & Style Guide Lengkap",
        "WCAG Accessibility Compliance",
      ],
    },
  ] as ServiceItem[],

  // Task 1.3: Mockup Data Portofolio
  portfolio: [
    {
      id: "lumina-agency",
      title: "Lumina Creative Studio",
      category: "Digital Agency",
      description:
        "Platform portofolio interaktif untuk agensi kreatif dengan eksplorasi dark slate glassmorphism dan mikro-animasi dinamis.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/portfolio-1.webp",
      link: "#",
      featured: true,
    },
    {
      id: "zenith-saas",
      title: "Zenith Intelligence Platform",
      category: "SaaS & AI",
      description:
        "Landing page konversi tinggi untuk startup AI analytics dengan visualisasi data bento grid dan responsivitas instan.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/portfolio-2.webp",
      link: "#",
      featured: true,
    },
    {
      id: "aethel-coffee",
      title: "Aethel Artisan Roastery",
      category: "E-Commerce & F&B",
      description:
        "Website e-commerce minimalis bernuansa earthy untuk brand kopi premium dengan pengalaman belanja mulus.",
      tags: ["Headless Commerce", "Tailwind CSS", "Motion"],
      image: "/images/portfolio-3.webp",
      link: "#",
      featured: false,
    },
    {
      id: "vektor-architects",
      title: "Vektor Architecture Studio",
      category: "Corporate & Architecture",
      description:
        "Website pameran arsitektur kontemporer dengan tipografi editorial bersih dan galeri visual skala penuh.",
      tags: ["Next.js", "Glassmorphism", "SEO Optimized"],
      image: "/images/portfolio-4.webp",
      link: "#",
      featured: false,
    },
  ] as PortfolioItem[],

  // 4 Alur Pengerjaan (Process Workflow)
  processWorkflow: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "Kami membedah tujuan bisnis, target audiens, dan positioning unik brand Anda untuk menyusun strategi website yang tepat sasaran.",
    },
    {
      step: "02",
      title: "UI/UX & Motion Design",
      description:
        "Merancang wireframe dan visual prototype dengan estetika modern, layout bento grid, serta mikro-interaksi yang memikat.",
    },
    {
      step: "03",
      title: "Modern Development",
      description:
        "Membangun website menggunakan Next.js, TypeScript, dan Tailwind CSS dengan standar kode bersih, modular, dan teroptimasi SEO.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Pengujian lintas perangkat, audit performa Google Lighthouse, hingga rilis resmi ke domain Anda dengan zero downtime.",
    },
  ] as ProcessItem[],
};
