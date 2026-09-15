import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Globe,
} from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

import syaamilImg from "@/components/img/syaamil.png";
import tanyaKampusImg from "@/components/img/tanya-kampus.png";
import sweetDessertImg from "@/components/img/sweet-dessert.png";

const projects = [
  {
    id: "syaamil-careers",
    title: "Syaamil Careers",
    subtitle: "Sistem Rekrutmen Internal Syaamil Group",
    category: "Fullstack Developer",
    year: "2025",
    description:
      "Aplikasi web manajemen rekrutmen internal untuk menyederhanakan dan mempercepat proses hiring karyawan. Membangun alur seleksi terpusat dengan frontend React.js & Tailwind CSS serta backend Node.js, Express, dan Prisma.",
    tags: ["React.js", "Node.js", "Express.js", "Prisma", "Tailwind CSS"],
    image: syaamilImg,
    liveUrl: "https://syaamil-careers.vercel.app/",
    githubUrl: "https://github.com/RadenHanifAH/WEB-HUMANCAPITAL",
    stats: [
      { label: "Frontend", val: "React.js" },
      { label: "Backend", val: "Express" },
      { label: "Database", val: "Prisma" },
    ],
  },
  {
    id: "tanyakampus",
    title: "TanyaKampus",
    subtitle: "Jelajahi Laut Pertamamu Sekarang!",
    category: "Frontend Developer",
    year: "2025",
    description:
      "Platform eksplorasi jurusan dan bimbingan minat bakat calon mahasiswa dengan tema bahari interaktif. Dilengkapi kuis minat bakat cerdas, kurasi informasi perguruan tinggi, dan konsultasi pendidikan langsung.",
    tags: ["React", "Vite", "Tailwind CSS", "Interactive UI"],
    image: tanyaKampusImg,
    liveUrl: "https://tanyakampus.vercel.app/",
    githubUrl: "https://github.com/TanyaKampus/tanyakampus-web-frontend",
    stats: [
      { label: "Fitur", val: "Tes Minat" },
      { label: "Layanan", val: "Konsultasi" },
      { label: "Konsep", val: "Bahari" },
    ],
  },
  {
    id: "sweet-dessert",
    title: "Sweet Dessert",
    subtitle: "Online Bakery & Dessert Ordering Platform",
    category: "Fullstack Developer",
    year: "2024",
    description:
      "Aplikasi web katalog dan pemesanan aneka dessert serta kue manis. Dibangun menggunakan backend Python Flask yang efisien dan basis data MongoDB untuk manajemen data yang fleksibel.",
    tags: ["Python", "Flask", "MongoDB", "HTML/CSS", "REST API"],
    image: sweetDessertImg,
    liveUrl: null,
    githubUrl: "https://github.com/hadimughny7/SweetDessertWeb",
    stats: [
      { label: "Backend", val: "Flask" },
      { label: "Database", val: "MongoDB" },
      { label: "Kategori", val: "E-Commerce" },
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Soft background ambient blobs */}
      <div className="pointer-events-none absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#2563eb]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
              — PROYEK TERPILIH
            </span>
          </Reveal>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SplitText
              as="h2"
              text="Halaman yang saya bangun."
              by="word"
              from="bottom"
              stagger={0.06}
              duration={0.7}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              highlight={["bangun."]}
              highlightClassName="text-[#2563eb]"
            />
            <Reveal delay={0.2}>
              <p className="max-w-md text-sm text-slate-600 sm:text-base leading-relaxed">
                Koleksi aplikasi web yang saya bangun dengan fokus pada arsitektur
                bersih, performa responsif, dan fungsi terintegrasi. Jelajahi website
                secara langsung atau lihat repositori kode di GitHub.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured Projects Grid (3 Columns) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.18)]"
            >
              {/* Card Header Thumbnail View */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 select-none">
                {/* Real screenshot from src/components/img */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-950/75 p-6 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-display text-sm font-semibold tracking-wide text-white">
                    Eksplorasi Proyek
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-xs font-bold text-slate-950 shadow-lg transition-transform hover:scale-105"
                      >
                        <Globe size={14} />
                        <span>Kunjungi Web</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 ${
                        project.liveUrl
                          ? "border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20"
                          : "bg-lime px-5 py-2.5 text-slate-950 shadow-lg"
                      }`}
                    >
                      <Github size={14} />
                      <span>{project.liveUrl ? "GitHub" : "Buka di GitHub"}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                      {project.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-[#2563eb]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-500 italic">
                    "{project.subtitle}"
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights / Stats Pills */}
                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100 text-center">
                    {project.stats.map((s) => (
                      <div key={s.label} className="flex flex-col">
                        <span className="font-display text-xs font-bold text-slate-900 truncate">
                          {s.val}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 transition-colors group-hover:bg-lime/30 group-hover:text-slate-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  {project.liveUrl ? (
                    <div className="flex items-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#2563eb] group/btn"
                      >
                        <Globe size={15} className="text-lime transition-transform group-hover/btn:scale-110" />
                        <span>Kunjungi Website</span>
                        <ExternalLink size={13} className="text-slate-400 group-hover/btn:text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-3 text-xs font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors"
                        title="Lihat Repositori GitHub"
                      >
                        <Github size={16} />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#2563eb] group/btn"
                    >
                      <Github size={15} className="text-lime transition-transform group-hover/btn:scale-110" />
                      <span>Kunjungi Repositori GitHub</span>
                      <ExternalLink size={13} className="text-slate-400 transition-colors group-hover/btn:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <Reveal delay={0.2} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#2563eb]"
          >
            Diskusikan Proyek Anda
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
