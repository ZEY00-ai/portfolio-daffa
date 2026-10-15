// =====================================================
// EDIT FILE INI untuk mengganti seluruh konten website.
// =====================================================

export const profile = {
  name: "Nama Anda",
  firstName: "Nama",
  role: "Web Developer & Desainer",
  email: "email@contoh.com",
  phone: "+62 812 0000 0000",
  whatsapp: "https://wa.me/628120000000",
  resume: "#",
  year: new Date().getFullYear(),
  intro:
    "Hai, saya Nama. Saya membuat website dan produk digital yang rapi, cepat, dan mudah dipakai.",
  heroLines: ["WEBSITE &", "PRODUK", "DIGITAL"],
  stats: ["3+ TAHUN PENGALAMAN", "20+ PROYEK"],
  whatIDo:
    "Website dan dashboard yang memukau, dibuat untuk bisnis yang peduli pada setiap detail.",
  trusted: "dipercaya oleh bisnis dan komunitas di seluruh Indonesia.",
  footerTagline: ["PIXEL ITU KECIL", "DETAIL TIDAK"],
};

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export const skills = [
  "UI/UX",
  "Next.js",
  "React",
  "Design System",
  "Dashboard",
  "Landing Page",
  "SaaS",
  "Figma",
  "Wireframe",
  "Prototype",
  "Visual Design",
];

export type Project = {
  slug: string;
  title: string;
  tags: string;
  year: string;
  /** warna gradient placeholder; ganti dengan gambar di /public jika sudah ada */
  from: string;
  to: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "proyek-satu",
    title: "Website investor-ready untuk startup mobilitas",
    tags: "Startup, UI Design, Next.js",
    year: "2026",
    from: "#ff6a3d",
    to: "#ffd2a8",
    href: "#",
  },
  {
    slug: "proyek-dua",
    title: "Dashboard yang membantu seniman mengelola karier seperti bisnis",
    tags: "SaaS, UI Design, Design System",
    year: "2026",
    from: "#2d2a8a",
    to: "#8fa2ff",
    href: "#",
  },
  {
    slug: "proyek-tiga",
    title: "Website yang mengubah seorang guru menjadi sekolah bahasa ternama",
    tags: "Bisnis Kecil, UI Design, Next.js",
    year: "2025",
    from: "#0f6b4f",
    to: "#b8f0c8",
    href: "#",
  },
];

export const archive: Project[] = [
  ...projects,
  {
    slug: "arsip-4",
    title: "Landing page minyak esensial alami",
    tags: "E-commerce, Landing Page",
    year: "2025",
    from: "#5b7f3a",
    to: "#e4f0c4",
    href: "#",
  },
  {
    slug: "arsip-5",
    title: "Website agen perjalanan alam",
    tags: "Travel, UI Design",
    year: "2024",
    from: "#0b5d7a",
    to: "#9fe0f2",
    href: "#",
  },
  {
    slug: "arsip-6",
    title: "Dashboard analitik koleksi NFT",
    tags: "Dashboard, Web3",
    year: "2024",
    from: "#7a1fa2",
    to: "#f0b6ff",
    href: "#",
  },
];

export const testimonials = [
  {
    quote:
      "Selalu menghasilkan desain UI/UX yang luar biasa, sesuai identitas brand dan tujuan bisnis kami, dengan komunikasi yang lancar dan selalu tepat waktu.",
    name: "Nama Klien Satu",
    role: "CEO di Perusahaan A",
  },
  {
    quote:
      "Sudah bekerja sama lebih dari tiga tahun. Data yang rumit diubah menjadi antarmuka yang terasa sederhana dan jelas, dan tidak ragu memberi ide yang lebih baik.",
    name: "Nama Klien Dua",
    role: "CTO di Perusahaan B",
  },
  {
    quote:
      "Website yang dibuat untuk usaha kami terlihat luar biasa, mendatangkan pelanggan baru, dan pelanggan kami menyukainya.",
    name: "Nama Klien Tiga",
    role: "Pemilik Usaha",
  },
];

export const about = {
  start: "Saya seorang developer & desainer dengan pengalaman membuat proyek digital.",
  story:
    "Perjalanan saya dimulai dari rasa penasaran membangun website sendiri. Perpaduan antara teknologi, budaya, dan kerajinan membentuk cara saya melihat desain hari ini.",
  outsideTitle: "Di luar pekerjaan, saya suka bepergian dan mencari sudut pandang baru.",
  outside:
    "Kalau sedang tidak di depan layar, saya biasanya sedang menjelajah tempat baru atau berkumpul bersama teman.",
  focus:
    "Fokus saya sekarang jelas: website dan dashboard untuk bisnis yang ingin desain bekerja sama kerasnya dengan tampilannya.",
  best:
    "Saya mengerjakan dashboard SaaS, design system, dan tantangan antarmuka yang kompleks, dengan perpaduan pemikiran produk dan kualitas visual.",
};
