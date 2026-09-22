import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";
import ProjectCard from "@/components/ProjectCard";

import syaamilImg from "@/components/img/syaamil.png";
import tanyaKampusImg from "@/components/img/tanya-kampus.png";
import sweetDessertImg from "@/components/img/sweet-dessert.png";
import xiuJankImg from "@/components/img/xiu-jank.png";
import qubbaImg from "@/components/img/qubba.png";
import lmsImg from "@/components/img/lms.png";

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
  {
    id: "xi-u-jank",
    title: "XI U-Jank Chocolate",
    subtitle: "Company Profile Produk Cokelat",
    category: "Frontend Developer",
    year: "2025",
    description:
      "Website company profile untuk produk cokelat \"U-Jank\", menampilkan profil usaha, katalog produk, dan informasi kontak. Dibangun dengan struktur navigasi sederhana (Beranda, Profil, Produk, Kontak) yang responsif.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: xiuJankImg,
    liveUrl: "https://xi-u-jank-chocolate.vercel.app/",
    githubUrl: "https://github.com/RadenHanifAH/XI-U-JANK",
    stats: [
      { label: "Frontend", val: "React" },
      { label: "Styling", val: "Tailwind" },
      { label: "Tipe", val: "Company" },
    ],
  },
  {
    id: "qubba-foundation",
    title: "Qubba Foundation",
    subtitle: "Website Resmi Yayasan Qubba Foundation",
    category: "MAINTENANCE",
    year: "2025",
    description:
      "Melakukan pemeliharaan rutin website yayasan, termasuk update konten dan banner promosi (campaign donasi), monitoring performa, perbaikan bug tampilan, dan update plugin/keamanan.",
    tags: ["WordPress", "PHP", "CSS"],
    image: qubbaImg,
    liveUrl: "https://qubbafoundation.org/",
    githubUrl: null,
    stats: [
      { label: "Platform", val: "WordPress" },
      { label: "Fokus", val: "CMS & Update" },
      { label: "Sektor", val: "Yayasan" },
    ],
  },
  {
    id: "lms-syaamil",
    title: "LMS Syaamil",
    subtitle: "Learning Management System untuk Syaamil Group",
    category: "MAINTENANCE",
    year: "2025/2026",
    description:
      "Bertanggung jawab menjaga stabilitas dan kelancaran operasional platform LMS internal, termasuk pengelolaan konten, pengecekan fungsi kalender & forum, serta troubleshooting.",
    tags: ["Moodle", "PHP", "LMS"],
    image: lmsImg,
    liveUrl: null,
    githubUrl: null,
    stats: [
      { label: "Platform", val: "Moodle" },
      { label: "Fokus", val: "Maintenance" },
      { label: "Sektor", val: "Internal LMS" },
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
                Koleksi aplikasi web yang saya bangun dan rawat dengan fokus pada arsitektur
                bersih, performa responsif, dan fungsi terintegrasi. Jelajahi website
                secara langsung atau lihat repositori kode di GitHub.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured Projects Grid (3 Columns on lg, 2 on md: exactly 2 full rows x 3 columns) */}
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <Reveal delay={0.2} className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
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

