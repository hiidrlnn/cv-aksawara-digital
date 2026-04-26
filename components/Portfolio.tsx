"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/lib/portfolioData";

/* ================= TYPE ================= */
type Project = {
  title: string;
  image: string;
  link: string;
  slug?: string;
  category?: string;
  year?: string | number;
};

/* ================= DEFAULT DATA ================= */
const defaultProjects: Project[] = [
  {
    title: "Website Company Profile",
    image: "/img/portfolio/web1.jpg",
    link: "#",
  },
  { title: "UI/UX Landing Page", image: "/img/portfolio/web2.jpg", link: "#" },
  { title: "E-Commerce Website", image: "/img/portfolio/web3.jpg", link: "#" },
  { title: "Dashboard Admin", image: "/img/portfolio/web4.jpg", link: "#" },
  { title: "Dashboard Admin", image: "/img/portfolio/web5.jpg", link: "#" },
  { title: "Dashboard Admin", image: "/img/portfolio/web6.jpg", link: "#" },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayProjects: Project[] =
    portfolioData && portfolioData.length > 0
      ? portfolioData.slice(0, 6).map((project: any) => ({
          title: project.title,
          image: project.thumbnail,
          link: `/portfolio/${project.slug}`,
          slug: project.slug,
          category: project.category,
          year: project.year,
        }))
      : defaultProjects;

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 py-20 px-4 bg-white dark:bg-[#071521] text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* ================= TITLE ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center">
          Portfolio Kami
        </motion.h2>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />

        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Beberapa proyek unggulan yang telah kami selesaikan
        </p>

        {/* ================= GRID ================= */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayProjects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50">
              {/* IMAGE CLICK = PREVIEW */}
              <div
                className="relative w-full h-56 cursor-pointer"
                onClick={() => setSelectedProject(item)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY (FIX: tidak block klik) */}
              {/* OVERLAY FIX */}
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                {/* background (tidak ganggu klik) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                {/* content */}
                <div className="relative z-10 text-center px-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>

                  {item.category && (
                    <p className="text-gray-300 text-sm mb-2">
                      {item.category}
                    </p>
                  )}

                  <Link
                    href={item.link}
                    onClick={(e) => e.stopPropagation()}
                    className="text-blue-400 text-sm inline-flex items-center gap-1 hover:underline cursor-pointer">
                    Lihat Detail →
                  </Link>
                </div>
              </div>

              {/* BORDER HOVER */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition" />
            </motion.div>
          ))}
        </div>

        {/* ================= BUTTON ================= */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition hover:scale-105">
            Lihat Semua Portofolio
          </Link>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg"
            />

            {/* CLOSE BUTTON (FIX ANIMASI BALIK) */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white text-3xl">
              ✕
            </motion.button>

            <p className="text-white text-center mt-3">
              {selectedProject.title}
            </p>

            {/* BUTTON DETAIL */}
            <div className="text-center mt-4">
              <Link
                href={selectedProject.link}
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
                Lihat Detail
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
