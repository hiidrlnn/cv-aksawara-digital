"use client";

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
  {
    title: "UI/UX Landing Page",
    image: "/img/portfolio/web2.jpg",
    link: "#",
  },
  {
    title: "E-Commerce Website",
    image: "/img/portfolio/web3.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web4.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web5.jpg",
    link: "#",
  },
  {
    title: "Dashboard Admin",
    image: "/img/portfolio/web6.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  /* ================= DATA ================= */
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
      className="scroll-mt-24 py-20 px-4 
      bg-white dark:bg-[#071521] 
      text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center">
          Portfolio Kami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Beberapa proyek unggulan yang telah kami selesaikan dengan penuh
          dedikasi
        </motion.p>

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayProjects.map((item: Project, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50">
              <Link href={item.link} className="block">
                {/* IMAGE */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {item.image?.startsWith("/") ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                      sizes="100vw"
                    />
                  ) : (
                    // fallback
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 
                  flex items-end justify-center pb-6">
                  <div className="text-center px-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>

                    {item.category && (
                      <p className="text-gray-300 text-sm mb-2">
                        {item.category}
                      </p>
                    )}

                    <span className="text-blue-400 text-sm inline-flex items-center gap-1">
                      Lihat Detail
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105">
            Lihat Semua Portofolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
