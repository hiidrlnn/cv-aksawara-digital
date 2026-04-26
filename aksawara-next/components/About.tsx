"use client";

import { motion } from "framer-motion";
import { User, Target, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "./GlowCard";
import {
  MdEmail,
  MdCheckCircle,
  MdSentimentSatisfied,
  MdTimeline,
  MdPeople,
  MdWork,
  MdTrendingUp,
  MdRocket,
  MdStar,
  MdThumbUp,
  MdOutlineVisibility,
} from "react-icons/md";
import { FaProjectDiagram, FaClock, FaUserTie } from "react-icons/fa";
import { GiAchievement, GiRocket } from "react-icons/gi";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 bg-gray-100 dark:bg-[#071521]">
      <div className="container mx-auto max-w-6xl px-4">
        {/* ========== BAGIAN YANG SUDAH ADA (GLOWCARD) ========== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Tentang Kami
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <GlowCard>
            <User size={40} className="mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-black dark:text-white">Profil</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Solusi digital modern untuk membantu bisnis Anda berkembang di era
              digital.
            </p>
          </GlowCard>

          <GlowCard>
            <Target size={40} className="mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-black dark:text-white">
              Visi & Misi
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Menghadirkan teknologi terbaik dengan fokus pada kepuasan klien.
            </p>
          </GlowCard>

          <GlowCard>
            <Clock size={40} className="mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-black dark:text-white">
              Sejarah
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Berpengalaman sejak 2020 dengan puluhan proyek sukses.
            </p>
          </GlowCard>
        </div>

        {/* ========== BAGIAN 4: SPLIT SCREEN (HERO STATEMENT) ========== */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl mt-20">
          {/* Sisi Kiri: Gambar Full */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 md:h-auto overflow-hidden">
            <Image
              src="/img/logo-dark.png"
              alt="Aksawara Digital Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Sisi Kanan: Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 md:p-12 flex flex-col justify-center text-white">
            <span className="text-sm uppercase tracking-wider opacity-80 mb-2">
              • CV Aksawara Digital
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Bantu Bisnis Anda
              <span className="block text-yellow-300">Go Digital</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Kami hadir sebagai mitra digital yang siap membantu transformasi
              bisnis Anda agar lebih modern, efisien, dan kompetitif.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                Konsultasi Gratis →
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all">
                Lihat Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ========== BAGIAN 6: SIDE QUOTE (TESTIMONIAL) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-20">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl opacity-20">
            ❝
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 border border-blue-100 dark:border-blue-800">
            <div className="max-w-3xl mx-auto text-center">
              <svg
                className="w-10 h-10 text-blue-400 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                &ldquo;Dunia tidak memberi tempat bagi mereka yang ragu, jika
                kamu ingin kenal, bangun sesuatu yang tak bisa diabaikan. Mulai
                sekarang. Diam, tapi berdampak. Terima kasih!&rdquo;
              </p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  — Mochamad Rifqy Careliansyah
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Founder Aksawara Digital Group
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========== BAGIAN 3: CARD GRID (TIM KAMI) ========== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Tim Profesional Kami
            </h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Berpengalaman dan berdedikasi untuk memberikan hasil terbaik bagi
              klien
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mochamad Rifqy Carreliansyah",
                role: "Founder & CEO",
                expertise: "4+ tahun pengalaman",
                img: "/img/team/rifqy.jpeg",
              },
              {
                name: "Ari Rizal Firmansyah",
                role: "HRD & BOD",
                expertise: "Human Resource & Board of Directors",
                img: "/img/team/Ari.jpeg",
              },
              {
                name: "Mohamad Sudirlan",
                role: "Lead Developer",
                expertise: "Fullstack Expert",
                img: "/img/team/dirlan.jpeg",
              },
              {
                name: "Restu Adam Wiguna",
                role: "Project Manager",
                expertise: "Agile Certified",
                img: "/img/team/restu.jpeg",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========== BONUS: STATISTIK + VISI MISI (DENGAN REACT ICON) ========== */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* Statistik - MENGGUNAKAN REACT ICON */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Capaian Kami
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Proyek Selesai - menggunakan FaProjectDiagram */}
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow cursor-pointer group transition-all">
                  <FaProjectDiagram className="text-4xl text-blue-500 mx-auto mb-2 group-hover:text-blue-600 transition" />
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">
                    30+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition">
                    Proyek Selesai
                  </div>
                  <div className="text-xs text-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                    Lihat Portfolio →
                  </div>
                </motion.div>
              </Link>

              {/* Klien Puas - menggunakan MdSentimentSatisfied */}
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow cursor-pointer group transition-all">
                  <MdSentimentSatisfied className="text-4xl text-green-500 mx-auto mb-2 group-hover:text-green-600 transition" />
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">
                    20+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition">
                    Klien Puas
                  </div>
                  <div className="text-xs text-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                    Lihat Portfolio →
                  </div>
                </motion.div>
              </Link>

              {/* Tepat Waktu - menggunakan FaClock */}
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow cursor-pointer group transition-all">
                  <FaClock className="text-4xl text-orange-500 mx-auto mb-2 group-hover:text-orange-600 transition" />
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">
                    100%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition">
                    Tepat Waktu
                  </div>
                  <div className="text-xs text-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                    Lihat Portfolio →
                  </div>
                </motion.div>
              </Link>

              {/* Tim Expert - menggunakan MdPeople */}
              <Link href="#about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow cursor-pointer group transition-all">
                  <MdPeople className="text-4xl text-purple-500 mx-auto mb-2 group-hover:text-purple-600 transition" />
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">
                    4+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition">
                    Tim Expert
                  </div>
                  <div className="text-xs text-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                    Lihat Tim →
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Visi Misi - DENGAN REACT ICON (VISI & MISI YANG DIPERBARUI) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6">
            {/* Visi Card dengan React Icon */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MdOutlineVisibility className="text-4xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Visi
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm pl-1 leading-relaxed">
                Kami tidak sekadar membangun solusi digital. Kami menciptakan
                sesuatu yang bertahan, diingat, dan tidak dapat diabaikan. Di
                tengah dunia yang penuh kebisingan, kami memilih untuk bergerak
                dalam presisi, tenang, terarah, dan berdampak. Aksawara Digital
                hadir untuk mendefinisikan ulang standar, bukan mengikutinya.
              </p>
            </div>

            {/* Misi Card dengan React Icon */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-6 border border-purple-100 dark:border-purple-800 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <GiRocket className="text-4xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Misi
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-lg" />
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white">
                      Build with Precision
                    </span>
                    <br />
                    <span>
                      Membangun setiap solusi dengan perhitungan matang, detail
                      yang terjaga, dan kualitas yang tidak bisa ditawar.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-lg" />
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white">
                      Deliver with Impact
                    </span>
                    <br />
                    <span>
                      Tidak sekadar menyelesaikan pekerjaan, tetapi memastikan
                      setiap produk memberi dampak nyata bagi bisnis klien.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-lg" />
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white">
                      Move in Silence, Execute with Power
                    </span>
                    <br />
                    <span>
                      Kami tidak banyak bicara. Kami bekerja. Dan hasil kami
                      yang akan membuktikan segalanya.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-lg" />
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white">
                      Dominate Through Innovation
                    </span>
                    <br />
                    <span>
                      Terus berinovasi untuk tetap selangkah di depan, bukan
                      mengikuti tapi menciptakannya.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-lg" />
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white">
                      Scale Without Limits
                    </span>
                    <br />
                    <span>
                      Membangun sistem yang siap berkembang tanpa batas, seiring
                      pertumbuhan bisnis klien di tingkat global.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}