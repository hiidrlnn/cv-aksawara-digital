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
    title: "Aplikasi Kasir Rental PlayStation",
    client: "Rental PS Cikapundung",
    year: "2025",
    technologies: ["Laravel", "Tailwind CSS"],
    description:
      "Website rental PlayStation adalah aplikasi berbasis web yang digunakan untuk mengelola proses penyewaan unit PlayStation secara online. Sistem ini menyediakan fitur booking, pemilihan tipe PS (PS3, PS4, PS5), input data pelanggan, pembayaran, serta monitoring status rental secara real-time.",
    challenges:
      "Mengatur ketersediaan unit secara real-time agar tidak terjadi double booking, mengintegrasikan sistem pembayaran seperti , serta menjaga performa website agar tetap cepat saat diakses oleh banyak pengguna.",
    results:
      "Sistem berhasil mempermudah proses booking dan pengelolaan rental, mengurangi kesalahan pencatatan, serta meningkatkan efisiensi operasional dan kemudahan akses bagi pelanggan.",
    thumbnail: "/img/portfolio/aplikasi-kasir-rental-ps/gambar1.png",
    images: [
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar1.png",
        alt: "Tampilan utama website",
        caption: "Halaman utama dengan hero section yang menarik",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar2.png",
        alt: "Halaman Dashboard Petugas Rental",
        caption: "Halaman Dashboard Petugas Rental",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar3.png",
        alt: "Halaman Form Penyewaan",
        caption: "Halaman Form Penyewaan",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar4.png",
        alt: "Halaman Pilih Unit PlayStation",
        caption: "Halaman Pilih Unit PlayStation",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar5.png",
        alt: "Halaman Konfirmasi Penyewaan",
        caption: "Halaman Konfirmasi Penyewaan",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar6.png",
        alt: "Halaman Form Pembayaran",
        caption: "Halaman Form Pembayaran",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar7.png",
        alt: "Halaman Pembayaran Berhasil",
        caption: "Halaman Pembayaran Berhasil",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar8.png",
        alt: "Halaman Pengembalian",
        caption: "Halaman Pengembalian",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar9.png",
        alt: "Halaman Dashboard Pemilik Rental",
        caption: "Halaman Dashboard Pemilik Rental",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar10.png",
        alt: "Halaman Stock Unit PlayStation",
        caption: "Halaman Stock Unit PlayStation",
      },
      {
        src: "/img/portfolio/aplikasi-kasir-rental-ps/gambar11.png",
        alt: "Halaman Laporan Penyewaan",
        caption: "Halaman Laporan Penyewaan",
      },
    ],
    category: "Penyewaan Barang",
  },
  {
    id: "2",
    slug: "aplikasi-kasir-umkm",
    title: "Aplikasi Manajemen UMKM",
    client: "Toko Maju Jaya",
    year: "2024",
    technologies: ["Next.js", "Node.js", "MongoDB", "Midtrans"],
    description:
      "Platform e-commerce lengkap untuk UMKM dengan sistem pembayaran terintegrasi dan manajemen produk.",
    challenges:
      "Integrasi multiple payment gateway dan manajemen stok real-time yang akurat.",
    results:
      "Penjualan online meningkat 3x lipat dalam 6 bulan dengan rata-rata transaksi harian meningkat signifikan.",
    thumbnail: "/img/portfolio/aplikasi-manajemen-umkm/gambar1.jpeg",
    images: [
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar1.jpeg",
        alt: "Dashboard Login",
        caption: "Halaman Login yang digunakan oleh role Admin dan Kasir",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar2.jpeg",
        alt: "Dashboard Utama",
        caption: "Dashboard Utama yang memantau Transaksi dan Manajemen Stok",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar3.jpeg",
        alt: "Halaman Manajemen Stok",
        caption: "Halaman untuk pengaturan keluar masuk produk",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar4.jpeg",
        alt: "Form Pengisian Data Produk",
        caption: "Form pengisian data produk Display toko",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar5.jpeg",
        alt: "Laporan Keuangan Bulanan",
        caption: "Monitoring Keuangan Omset, Modal, dan Laba",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar6.jpeg",
        alt: "Laporan Produk Terjual",
        caption:
          "Monitoring Keuangan Omset, Modal, dan Laba serta daftar produk yang terjual",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar7.jpeg",
        alt: "Halaman Manajemen pengguna",
        caption: "Manajemen Pengguna untuk mengatur registrasi karyawan",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar8.jpeg",
        alt: "Halaman Manajamen pengguna",
        caption: "Daftar karyawan yang terdaftar dengan role Admin dan Kasir",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar9.jpeg",
        alt: "Transaksi Kasir",
        caption:
          "Halaman Transaksi yang dilakukan oleh admin beserta dengan tampilan produk yang sudah di input",
      },
      {
        src: "/img/portfolio/aplikasi-manajemen-umkm/gambar10.jpeg",
        alt: "Layout Struk",
        caption: "Layout Struk/Bukti Transaksi",
      },
    ],
    category: "E-Commerce",
  },
  {
    id: "3",
    slug: "landing-page-startup",
    title: "Landing Page Startup Tech",
    client: "TechStart Inc.",
    year: "2023",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "Landing page modern dengan animasi menarik untuk startup teknologi yang ingin meningkatkan konversi.",
    challenges:
      "Membuat animasi yang smooth tanpa mengorbankan performa loading page.",
    results:
      "Conversion rate meningkat 25% dalam 2 bulan dengan bounce rate menurun drastis.",
    thumbnail: "/img/portfolio/web2.jpg",
    images: [
      {
        src: "/img/portfolio/web2.jpg",
        alt: "Landing page",
        caption: "Hero section dengan animasi yang menarik",
      },
      {
        src: "/img/portfolio/web2-detail1.jpg",
        alt: "Fitur produk",
        caption: "Section fitur produk yang informatif",
      },
    ],
    category: "Landing Page",
  },
  {
    id: "4",
    slug: "dashboard-admin",
    title: "Dashboard Admin Analytics",
    client: "Data Center Inc.",
    year: "2023",
    technologies: ["Next.js", "Chart.js", "Recharts", "Tailwind CSS"],
    description:
      "Dashboard analytics lengkap dengan berbagai chart dan grafik interaktif untuk monitoring data real-time.",
    challenges:
      "Optimasi rendering chart dengan data besar dan kompleks agar tetap smooth.",
    results: "Loading time berkurang 60% dan user lebih mudah memahami data.",
    thumbnail: "/img/portfolio/web4.jpg",
    images: [
      {
        src: "/img/portfolio/web4.jpg",
        alt: "Dashboard utama",
        caption: "Tampilan dashboard dengan berbagai widget",
      },
      {
        src: "/img/portfolio/web4-detail1.jpg",
        alt: "Chart analytics",
        caption: "Grafik interaktif untuk analisis data",
      },
      {
        src: "/img/portfolio/web4-detail2.jpg",
        alt: "Report",
        caption: "Fitur export report dalam berbagai format",
      },
    ],
    category: "Dashboard",
  },
  {
    id: "5",
    slug: "dashboard-crm",
    title: "Dashboard Admin CRM",
    client: "Sales Corp Indonesia",
    year: "2023",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Axios"],
    description:
      "Sistem CRM lengkap dengan dashboard untuk monitoring sales, lead tracking, dan manajemen customer.",
    challenges:
      "Integrasi dengan berbagai sumber data dan API eksternal yang berbeda.",
    results:
      "Tim sales lebih mudah memonitor target dan closing rate meningkat 35%.",
    thumbnail: "/img/portfolio/web5.jpg",
    images: [
      {
        src: "/img/portfolio/web5.jpg",
        alt: "Dashboard CRM",
        caption: "Dashboard utama CRM",
      },
      {
        src: "/img/portfolio/web5-detail1.jpg",
        alt: "Lead tracking",
        caption: "Fitur tracking lead dan prospek",
      },
    ],
    category: "Dashboard",
  },
  {
    id: "6",
    slug: "portfolio-website",
    title: "Portfolio Website Creative",
    client: "Creative Agency",
    year: "2024",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    description:
      "Website portfolio modern dengan animasi yang smooth dan design yang kreatif untuk menampilkan karya.",
    challenges:
      "Menciptakan pengalaman visual yang unik tanpa mengorbankan performa dan aksesibilitas.",
    results:
      "Client mendapat banyak leads baru dan peningkatan brand awareness.",
    thumbnail: "/img/portfolio/web6.jpg",
    images: [
      {
        src: "/img/portfolio/web6.jpg",
        alt: "Portfolio website",
        caption: "Halaman utama dengan grid portfolio",
      },
      {
        src: "/img/portfolio/web6-detail1.jpg",
        alt: "Detail proyek",
        caption: "Halaman detail proyek dengan gallery",
      },
    ],
    category: "Company Profile",
  },
];
