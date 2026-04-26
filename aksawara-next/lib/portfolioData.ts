export interface PortfolioImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  technologies: string[];
  description: string;
  challenges: string;
  results: string;
  thumbnail: string;
  images: PortfolioImage[];
  category: string;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "1",
    slug: "company-profile-abc",
    title: "Website Company Profile ABC",
    client: "PT ABC Indonesia",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "Website company profile modern dengan performa tinggi dan animasi smooth yang responsif di semua device.",
    challenges: "Menyesuaikan desain dengan identitas brand yang sudah established serta memastikan website cepat diakses dengan optimal.",
    results: "Berhasil meningkatkan user engagement sebesar 40% dalam 3 bulan pertama dan mendapatkan feedback positif dari klien.",
    thumbnail: "/img/portfolio/web1.jpg",
    images: [
      { src: "/img/portfolio/web1.jpg", alt: "Tampilan utama website", caption: "Halaman utama dengan hero section yang menarik" },
      { src: "/img/portfolio/web1-detail1.jpg", alt: "Halaman layanan", caption: "Halaman layanan yang interaktif" },
      { src: "/img/portfolio/web1-detail2.jpg", alt: "Halaman kontak", caption: "Form kontak dengan validasi real-time" },
    ],
    category: "Company Profile"
  },
  {
  id: "2",
  slug: "aplikasi-kasir-umkm",
  title: "Aplikasi Manajemen UMKM",
  client: "Toko Maju Jaya",
  year: "2024",
  technologies: ["Next.js", "Node.js", "MongoDB", "Midtrans"],
  description: "Platform e-commerce lengkap untuk UMKM dengan sistem pembayaran terintegrasi dan manajemen produk.",
  challenges: "Integrasi multiple payment gateway dan manajemen stok real-time yang akurat.",
  results: "Penjualan online meningkat 3x lipat dalam 6 bulan dengan rata-rata transaksi harian meningkat signifikan.",
  thumbnail: "/img/portfolio/gambar1.jpeg",
  images: [
    { src: "/img/portfolio/gambar1.jpeg", alt: "Dashboard Login", caption: "Halaman Login yang digunakan oleh role Admin dan Kasir" },
    { src: "/img/portfolio/gambar2.jpeg", alt: "Dashboard Utama", caption: "Dashboard Utama yang memantau Transaksi dan Manajemen Stok" },
    { src: "/img/portfolio/gambar3.jpeg", alt: "Halaman Manajemen Stok", caption: "Halaman untuk pengaturan keluar masuk produk" },
    { src: "/img/portfolio/gambar4.jpeg", alt: "Form Pengisian Data PRoduk", caption: "Form pengisian data produk Display toko" },
    { src: "/img/portfolio/gambar5.jpeg", alt: "Laporan Keuangan Bulanan", caption: "Monitoring Keuangan Omset, Modal, dan Laba" },
    { src: "/img/portfolio/gambar6.jpeg", alt: "Laporan Produk Terjual", caption: "Monitoring Keuangan Omset, Modal, dan Laba serta daftar produk yang terjual" },
    { src: "/img/portfolio/gambar7.jpeg", alt: "Halaman Manajemen pengguna", caption: "Manajemen Pengguna untuk mengatur registrasi karyawan" },
    { src: "/img/portfolio/gambar8.jpeg", alt: "Halaman Manajamen pengguna", caption: "Daftar karyawan yang terdaftar dengan role Admin dan Kasir" },
    { src: "/img/portfolio/gambar9.jpeg", alt: "Transaksi Kasir", caption: "Halaman Transaksi yang dilakukan oleh admin beserta dengan tampilan produk yang sudah di input" },
    { src: "/img/portfolio/gambar10.jpeg", alt: "Layout Struk", caption: "Layout Struk/Bukti Transaksi" },
  ],
  category: "E-Commerce"
},
  {
    id: "3",
    slug: "landing-page-startup",
    title: "Landing Page Startup Tech",
    client: "TechStart Inc.",
    year: "2023",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description: "Landing page modern dengan animasi menarik untuk startup teknologi yang ingin meningkatkan konversi.",
    challenges: "Membuat animasi yang smooth tanpa mengorbankan performa loading page.",
    results: "Conversion rate meningkat 25% dalam 2 bulan dengan bounce rate menurun drastis.",
    thumbnail: "/img/portfolio/web2.jpg",
    images: [
      { src: "/img/portfolio/web2.jpg", alt: "Landing page", caption: "Hero section dengan animasi yang menarik" },
      { src: "/img/portfolio/web2-detail1.jpg", alt: "Fitur produk", caption: "Section fitur produk yang informatif" },
    ],
    category: "Landing Page"
  },
  {
    id: "4",
    slug: "dashboard-admin",
    title: "Dashboard Admin Analytics",
    client: "Data Center Inc.",
    year: "2023",
    technologies: ["Next.js", "Chart.js", "Recharts", "Tailwind CSS"],
    description: "Dashboard analytics lengkap dengan berbagai chart dan grafik interaktif untuk monitoring data real-time.",
    challenges: "Optimasi rendering chart dengan data besar dan kompleks agar tetap smooth.",
    results: "Loading time berkurang 60% dan user lebih mudah memahami data.",
    thumbnail: "/img/portfolio/web4.jpg",
    images: [
      { src: "/img/portfolio/web4.jpg", alt: "Dashboard utama", caption: "Tampilan dashboard dengan berbagai widget" },
      { src: "/img/portfolio/web4-detail1.jpg", alt: "Chart analytics", caption: "Grafik interaktif untuk analisis data" },
      { src: "/img/portfolio/web4-detail2.jpg", alt: "Report", caption: "Fitur export report dalam berbagai format" },
    ],
    category: "Dashboard"
  },
  {
    id: "5",
    slug: "dashboard-crm",
    title: "Dashboard Admin CRM",
    client: "Sales Corp Indonesia",
    year: "2023",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Axios"],
    description: "Sistem CRM lengkap dengan dashboard untuk monitoring sales, lead tracking, dan manajemen customer.",
    challenges: "Integrasi dengan berbagai sumber data dan API eksternal yang berbeda.",
    results: "Tim sales lebih mudah memonitor target dan closing rate meningkat 35%.",
    thumbnail: "/img/portfolio/web5.jpg",
    images: [
      { src: "/img/portfolio/web5.jpg", alt: "Dashboard CRM", caption: "Dashboard utama CRM" },
      { src: "/img/portfolio/web5-detail1.jpg", alt: "Lead tracking", caption: "Fitur tracking lead dan prospek" },
    ],
    category: "Dashboard"
  },
  {
    id: "6",
    slug: "portfolio-website",
    title: "Portfolio Website Creative",
    client: "Creative Agency",
    year: "2024",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    description: "Website portfolio modern dengan animasi yang smooth dan design yang kreatif untuk menampilkan karya.",
    challenges: "Menciptakan pengalaman visual yang unik tanpa mengorbankan performa dan aksesibilitas.",
    results: "Client mendapat banyak leads baru dan peningkatan brand awareness.",
    thumbnail: "/img/portfolio/web6.jpg",
    images: [
      { src: "/img/portfolio/web6.jpg", alt: "Portfolio website", caption: "Halaman utama dengan grid portfolio" },
      { src: "/img/portfolio/web6-detail1.jpg", alt: "Detail proyek", caption: "Halaman detail proyek dengan gallery" },
    ],
    category: "Company Profile"
  }
];