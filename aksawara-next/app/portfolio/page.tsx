"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { portfolioData } from '@/lib/portfolioData';
import { useState } from 'react';

// Category filter options
const categories = ["Semua", "Company Profile", "E-Commerce", "Landing Page", "Dashboard"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  // Filter projects based on category
  const filteredProjects = activeCategory === "Semua" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#071521] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Semua Portofolio
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Berikut adalah semua proyek yang telah kami kerjakan dengan penuh dedikasi dan profesionalisme
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid Portofolio dengan Animasi */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href={`/portfolio/${project.slug}`} 
                className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Belum ada proyek dalam kategori {activeCategory}
            </p>
            <button
              onClick={() => setActiveCategory("Semua")}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Lihat semua proyek
            </button>
          </motion.div>
        )}

        {/* Counter / Statistik */}
        {filteredProjects.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400">
              Menampilkan <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredProjects.length}</span> dari{" "}
              <span className="font-semibold">{portfolioData.length}</span> proyek
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}