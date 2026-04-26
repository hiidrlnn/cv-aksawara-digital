'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolioData';
import ImageModal from '@/components/ImageModal';

// Animation variants seperti di dashboard utama
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3, type: "spring", stiffness: 300 }
  }
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const glowVariants = {
  rest: { 
    boxShadow: "0 0 0px rgba(59,130,246,0)",
    borderColor: "rgba(59,130,246,0)"
  },
  hover: { 
    boxShadow: "0 0 20px rgba(59,130,246,0.5)",
    borderColor: "rgba(59,130,246,0.8)",
    transition: { duration: 0.3 }
  }
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const project = portfolioData.find(p => p.slug === params.slug);
  
  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-white dark:bg-[#071521]"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Proyek tidak ditemukan
          </motion.h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            ← Kembali ke Portofolio
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-[#071521] py-12"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Tombol Kembali dengan Animasi */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors group"
          >
            <motion.span
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              ←
            </motion.span>
            Kembali ke Portofolio
          </Link>
        </motion.div>

        {/* Header Proyek dengan Glow Effect seperti GlowCard */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="group mb-8"
        >
          <motion.div
            variants={glowVariants}
            initial="rest"
            whileHover="hover"
            className="relative rounded-xl overflow-hidden"
          >
            {/* Glow background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500" />
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Image Container dengan Overlay Gradient */}
              <div className="relative h-80 md:h-96 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.images[0]?.src || project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Title overlay di gambar */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h1>
                </motion.div>
              </div>
              
              {/* Info Cards dengan efek hover */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6 md:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Client", value: project.client, icon: "👥" },
                    { label: "Tahun", value: project.year, icon: "📅" },
                    { label: "Kategori", value: project.category, icon: "🏷️" }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{item.label}</span>
                      </div>
                      <p className="text-gray-800 dark:text-white font-semibold">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Deskripsi Lengkap dengan Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <motion.span 
                className="w-1 h-6 bg-blue-500 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              Tentang Proyek
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <motion.span 
                className="w-1 h-6 bg-blue-500 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              Tantangan
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.challenges}</p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <motion.span 
                className="w-1 h-6 bg-blue-500 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              Hasil & Dampak
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.results}</p>
          </motion.div>
          
          {/* Teknologi dengan Animasi Badge */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <motion.span 
                className="w-1 h-6 bg-blue-500 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              Teknologi
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    backgroundColor: "#3b82f6",
                    color: "white"
                  }}
                  className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Galeri Gambar dengan Animasi Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <motion.span 
              className="w-1 h-6 bg-blue-500 rounded-full"
              whileHover={{ scaleX: 2 }}
            />
            Galeri Proyek
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500 dark:text-gray-400 ml-2"
            >
              ({project.images.length} gambar)
            </motion.span>
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.images.map((image, idx) => (
              <motion.div
                key={idx}
                variants={imageCardVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage({src: image.src, alt: image.alt})}
              >
                <motion.div 
                  variants={glowVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative h-56 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Animated Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-black/50 rounded-full p-3"
                    >
                      <span className="text-white text-3xl">🔍</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Image counter badge */}
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full px-2 py-1 text-xs text-white">
                    {idx + 1}/{project.images.length}
                  </div>
                </motion.div>
                
                {image.caption && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm"
                  >
                    {image.caption}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal Zoom dengan Animasi */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation buttons (optional) */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl border border-white/20"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </motion.button>
            
            {selectedImage.alt && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-center mt-4"
              >
                {selectedImage.alt}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}