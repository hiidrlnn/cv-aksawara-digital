"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";

/* ================= FIX SLUG ================= */
const getSlug = (params: any) => {
  if (!params?.slug) return "";
  return Array.isArray(params.slug) ? params.slug[0] : params.slug;
};

/* ================= ANIMATION ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5 },
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = getSlug(params);

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-800 dark:text-white">
        Project tidak ditemukan
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#071521] py-12 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* ================= BACK ================= */}
        <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-6 group">
            <motion.span whileHover={{ x: -5 }}>←</motion.span>
            Kembali
          </Link>
        </motion.div>

        {/* ================= HEADER ================= */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-6">
            <Image
              src={project.images[0]?.src || project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            </div>
          </div>

          {/* ================= INFO ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Client", value: project.client, icon: "👥" },
              { label: "Tahun", value: project.year, icon: "📅" },
              { label: "Kategori", value: project.category, icon: "🏷️" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex gap-2">
                  <span>{item.icon}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.label}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-white font-semibold">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl font-bold mb-2">Tentang</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6">
            <h2 className="text-xl font-bold mb-2">Tantangan</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.challenges}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6">
            <h2 className="text-xl font-bold mb-2">Hasil</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.results}
            </p>
          </motion.div>

          {/* ================= TECH ================= */}
          <motion.div variants={fadeInUp} className="mt-6">
            <h2 className="text-xl font-bold mb-2">Teknologi</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= GALLERY ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6">
            Galeri ({project.images.length})
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                variants={imageCardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(img)}>
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* 🔍 ICON */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/60 flex items-center justify-center transition">
                    <span className="text-3xl text-white">🔍</span>
                  </div>

                  {/* COUNTER */}
                  <div className="absolute top-2 right-2 text-xs bg-black/50 px-2 py-1 rounded text-white">
                    {i + 1}/{project.images.length}
                  </div>
                </div>

                {/* CAPTION */}
                {img.caption && (
                  <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {img.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full">
            <img
              src={selectedImage.src}
              className="w-full rounded-lg shadow-2xl"
            />

            {/* CLOSE BUTTON */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl">
              ✕
            </motion.button>

            {selectedImage.alt && (
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
