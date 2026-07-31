"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

const stats = [
  { value: "20+", label: "Proyek selesai" },
  { value: "10+", label: "Klien aktif" },
  { value: "2+", label: "Tahun pengalaman" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section label */}
        <Reveal>
          <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
            — TENTANG SAYA
          </span>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Left: heading + quote box */}
          <div className="flex flex-col gap-8">
            <SplitText
              as="h2"
              text="FRONTEND DEVELOPER"
              by="word"
              from="bottom"
              stagger={0.1}
              duration={0.8}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
              highlight={["DEVELOPER"]}
              highlightClassName="text-lime"
            />

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border-l-4 border-lime bg-slate-50 p-6 sm:p-8">
                <span className="absolute right-4 top-2 font-display text-[7rem] leading-none text-slate-200 select-none">
                  &ldquo;
                </span>
                <p className="relative text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Saya percaya antarmuka yang baik itu{" "}
                  <mark className="rounded bg-lime px-1.5 py-0.5 font-semibold text-slate-900">
                    terasa hidup
                  </mark>
                  . Setiap transisi, hover, dan micro-interaction punya tujuan —
                  membantu pengguna memahami apa yang bisa dilakukan, tanpa
                  harus berpikir terlalu keras. Saya membangun produk digital
                  yang{" "}
                  <mark className="rounded bg-lime px-1.5 py-0.5 font-semibold text-slate-900">
                    cepat, accessible
                  </mark>
                  , dan menyenangkan dipakai setiap hari.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="font-display text-xs font-semibold tracking-widest text-slate-500">
                    RANGGA PRADIPTA
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.2 + i * 0.1} as="div">
                  <div className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.25)]">
                    <div className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      {s.label}
                    </div>
                    <div className="mt-3 h-1 w-8 rounded-full bg-lime transition-all duration-300 group-hover:w-full" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: dark Open-for-Freelance CTA card */}
          <Reveal delay={0.25} as="div">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#0a0a0a] p-7 text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)] sm:p-9">
              {/* grid texture */}
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
              {/* glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime/30 blur-3xl" />

              <div className="relative flex flex-1 flex-col">
                {/* Badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1.5 text-xs font-bold tracking-wider text-lime">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                  </span>
                  OPEN FOR FREELANCE
                </div>

                <h3 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Punya proyek? Mari{" "}
                  <span className="text-lime">bangun sesuatu</span> yang
                  berkesan.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  Saat ini saya menerima proyek frontend freelance — dari
                  landing page, dashboard, hingga design system. Slot terbatas
                  setiap bulan agar setiap klien dapat perhatian penuh.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-white/85">
                  {[
                    "Konsultasi awal gratis (30 menit)",
                    "Estimasi harga dalam 1×24 jam",
                    "Update mingguan + preview link",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Zap
                        size={16}
                        className="mt-0.5 shrink-0 text-lime"
                        fill="currentColor"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center justify-between gap-2 rounded-full bg-lime px-5 py-3.5 text-sm font-bold text-slate-900 transition-shadow hover:shadow-[0_10px_30px_-6px_rgba(163,230,53,0.6)]"
                >
                  Mulai obrolan
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
