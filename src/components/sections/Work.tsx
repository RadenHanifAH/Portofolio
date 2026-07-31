"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  /** CSS gradient for the faux thumbnail — avoids external image dependencies */
  gradient: string;
  /** Decorative icon for the thumbnail */
  glyph: string;
};

const projects: Project[] = [
  {
    title: "Aksara Finance Dashboard",
    category: "Web App",
    year: "2025",
    description:
      "Dashboard keuangan real-time dengan visualisasi data interaktif, dark mode, dan role-based access. LCP < 1.2s di mobile.",
    tags: ["Next.js", "Recharts", "Prisma"],
    gradient: "linear-gradient(135deg, #2563eb 0%, #0a0a0a 100%)",
    glyph: "₹",
  },
  {
    title: "Lokal Eats Landing",
    category: "Landing Page",
    year: "2025",
    description:
      "Halaman konversi tinggi untuk startup F&B. Animasi scroll-driven, micro-interaction, dan form booking terintegrasi.",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "linear-gradient(135deg, #a3e635 0%, #2563eb 100%)",
    glyph: "🍜",
  },
  {
    title: "Polaris Design System",
    category: "Design System",
    year: "2024",
    description:
      "Sistem komponen lintas-produk dengan 60+ komponen, theming penuh, dan dokumentasi interaktif. Dipakai 4 tim internal.",
    tags: ["Storybook", "TypeScript", "Radix"],
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1d4ed7 100%)",
    glyph: "✦",
  },
  {
    title: "Wanderlust Travel Planner",
    category: "Web App",
    year: "2024",
    description:
      "Aplikasi perencanaan itinerary dengan drag-drop map, kolaborasi real-time, dan export PDF. Top 3 Product of the Day.",
    tags: ["React", "Socket.io", "Mapbox"],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #bef264 100%)",
    glyph: "✈",
  },
  {
    title: "Senja Coffee Commerce",
    category: "E-commerce",
    year: "2024",
    description:
      "Toko online specialty coffee dengan cart persisten, checkout Stripe, dan subscription box. Konversi naik 27% pasca-launch.",
    tags: ["Next.js", "Stripe", "Sanity"],
    gradient: "linear-gradient(135deg, #1f2937 0%, #a3e635 100%)",
    glyph: "☕",
  },
  {
    title: "Pulse Analytics Portal",
    category: "SaaS",
    year: "2023",
    description:
      "Portal self-service analytics dengan query builder visual, scheduled reports, dan shareable dashboards via public link.",
    tags: ["React", "TanStack Query", "Vite"],
    gradient: "linear-gradient(135deg, #2563eb 0%, #a3e635 100%)",
    glyph: "📊",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-10 top-1/4 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#2563eb]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
              — PROYEK TERPILIH
            </span>
          </Reveal>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SplitText
              as="h2"
              text="Halaman yang saya bangun."
              by="word"
              from="bottom"
              stagger={0.06}
              duration={0.7}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              highlight={["bangun."]}
              highlightClassName="text-lime"
            />
            <Reveal delay={0.2}>
              <p className="max-w-sm text-sm text-slate-600 sm:text-base">
                Seleksi proyek dari freelance, full-time, dan eksperimen
                pribadi. Hover untuk preview cepat.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.li
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group relative"
            >
              <a
                href="#contact"
                className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(15,23,42,0.3)]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: p.gradient }}
                  />
                  {/* texture */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0, transparent 40%)",
                    }}
                  />
                  {/* glyph */}
                  <span className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-white/90 drop-shadow-lg">
                    {p.glyph}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm font-semibold text-white">
                      Lihat detail proyek
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-slate-900 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Year badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-900 backdrop-blur">
                    {p.year}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-[#2563eb]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 transition-colors group-hover:bg-lime/30 group-hover:text-slate-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom CTA */}
        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-7 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
          >
            Diskusikan proyek Anda
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
