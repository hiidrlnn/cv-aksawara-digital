"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/aksawara.digital",
    facebook: "https://facebook.com/aksawara.digital",
    linkedin: "https://linkedin.com/company/aksawara-digital",
    whatsapp: "https://wa.me/6281914752905",
    tiktok: "https://tiktok.com/@aksawara.digital",
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 px-4 relative overflow-hidden
      bg-white dark:bg-[#0B1C2C] text-black dark:text-white">
      {/* SOFT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center">
          Hubungi Kami
        </motion.h2>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

        {/* CONTENT */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* LEFT - Contact Info */}
          <div className="space-y-6">
            <motion.a
              href="tel:+6281914752905"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition cursor-pointer group">
              <FaPhone className="text-blue-500 group-hover:scale-110 transition" />
              <span>+62 819-1475-2905</span>
            </motion.a>

            <motion.a
              href="mailto:aksawaradigital@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition cursor-pointer group">
              <FaEnvelope className="text-blue-500 group-hover:scale-110 transition" />
              <span>aksawaradigital@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=Jl+Mekarwangi+No+123+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-blue-500 transition cursor-pointer group">
              <FaMapMarkerAlt className="text-blue-500 group-hover:scale-110 transition" />
              <span>
                Jl Mekarwangi No 123, Bandung, Jawa Barat, Indonesia, 40912.
              </span>
            </motion.a>
          </div>

          {/* RIGHT - Social Media */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="font-semibold text-lg mb-6">Ikuti Kami</h3>

            <div className="flex flex-wrap gap-5">
              {/* Instagram - Gradien Pink/Orange */}
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer
                hover:bg-gradient-to-tr hover:from-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent">
                <FaInstagram className="text-xl" />
              </motion.a>

              {/* Facebook - Biru Facebook (#1877F2) */}
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer
                hover:bg-[#1877F2] hover:text-white hover:border-transparent">
                <FaFacebook className="text-xl" />
              </motion.a>

              {/* LinkedIn - Biru LinkedIn (#0A66C2) */}
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer
                hover:bg-[#0A66C2] hover:text-white hover:border-transparent">
                <FaLinkedin className="text-xl" />
              </motion.a>

              {/* WhatsApp - Hijau WhatsApp (#25D366) */}
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer
                hover:bg-[#25D366] hover:text-white hover:border-transparent">
                <FaWhatsapp className="text-xl" />
              </motion.a>

              {/* TikTok - Hitam */}
              <motion.a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer
                hover:bg-[#000000] hover:text-white hover:border-transparent">
                <FaTiktok className="text-xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}