"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";
import { useState } from "react";

const categories = [
  "Semua",
  "Company Profile",
  "E-Commerce",
  "Landing Page",
  "Dashboard",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#071521] py-12 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* ================= BACK ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group">
            <motion.span whileHover={{ x: -5 }}>←</motion.span>
            Kembali ke Home
          </Link>
        </motion.div>

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Semua Portofolio
          </h1>

          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Berikut adalah semua proyek yang telah kami kerjakan dengan penuh
            dedikasi dan profesionalisme
          </p>
        </motion.div>

        {/* ================= FILTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}>
              {category}
            </button>
          ))}
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* 🔥 FIX: overlay tidak block klik */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= EMPTY ================= */}
        {filteredProjects.length === 0 && (
          <motion.div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Belum ada proyek dalam kategori {activeCategory}
            </p>

            <button
              onClick={() => setActiveCategory("Semua")}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
              Lihat semua proyek
            </button>
          </motion.div>
        )}

        {/* ================= COUNTER ================= */}
        {filteredProjects.length > 0 && (
          <motion.div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              Menampilkan{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {filteredProjects.length}
              </span>{" "}
              dari <span className="font-semibold">{portfolioData.length}</span>{" "}
              proyek
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
