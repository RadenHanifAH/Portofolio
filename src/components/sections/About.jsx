import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Users,
  MapPin,
} from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

const highlights = [
  {
    icon: GraduationCap,
    label: "Pendidikan",
    title: "S1 Sistem Informasi",
    subtitle: "Universitas Komputer Indonesia",
    badge: "UNIKOM",
    tint: "bg-blue-50 text-blue-600 border-blue-200/60",
  },
  {
    icon: Code2,
    label: "Keahlian Inti",
    title: "Full-Stack Ecosystem",
    subtitle: "React.js · Node.js · Express · Prisma",
    badge: "Modern Stack",
    tint: "bg-lime/20 text-emerald-800 border-lime/40",
  },
  {
    icon: Users,
    label: "Organisasi",
    title: "Sekretaris HIMA SI",
    subtitle: "Komunikasi, Manajemen & Teamwork",
    badge: "Leadership",
    tint: "bg-amber-50 text-amber-700 border-amber-200/60",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section label di paling kiri atas */}
        <Reveal>
          <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
            — TENTANG SAYA
          </span>
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sisi Kiri: Foto Profil (Tanpa List Border) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow lembut di belakang foto tanpa garis tepi */}
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2563eb]/20 via-lime/20 to-transparent blur-3xl" />

                {/* Wadah Foto: Tanpa Border / Tanpa Garis List Tepi */}
                <div className="group relative overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.2)]">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src="/img/profile.jpg"
                      alt="Raden Hanif Abdul Hakim - Fullstack Developer"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient bayangan halus di bawah foto */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />

                  {/* Label UNIKOM kecil di atas foto tanpa border */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-slate-950/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                    <span>Sistem Informasi UNIKOM</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sisi Kanan: Judul, Biodata, Highlights & Aksi (Desain Awal yang Rapi) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SplitText
              as="h2"
              text="FULLSTACK DEVELOPER"
              by="word"
              from="bottom"
              stagger={0.08}
              duration={0.75}
              className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              highlight={["DEVELOPER"]}
              highlightClassName="text-lime"
            />

            {/* Kotak Biodata Model Awal yang Dipoles Rapi */}
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border-l-4 border-lime bg-slate-50 p-6 sm:p-8 shadow-sm">
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-[7rem] leading-none text-slate-200/60"
                  aria-hidden
                >
                  &ldquo;
                </span>

                <div className="relative space-y-4 leading-relaxed text-slate-700 sm:text-lg text-justify">
                  <p>
                    Halo! 👋 Saya fresh graduate jurusan Sistem Informasi dari Universitas Komputer Indonesia (UNIKOM)
                    dengan antusiasme tinggi di bidang Full-Stack Web Development.
                  </p>

                  <p>
                    Saya fokus membangun aplikasi web terintegrasi menggunakan React.js, Node.js, Express.js, dan Prisma
                    mulai dari perancangan REST API yang andal hingga pembuatan
                    antarmuka pengguna yang responsif, cepat, dan rapi. Kemampuan
                    ini saya asah melalui pengalaman kerja industri dan program
                    studi independen.
                  </p>

                  <p>
                    Di luar coding, saya juga aktif sebagai Sekretaris Himpunan Mahasiswa Sistem Informasi, 
                    yang melatih ketelitian manajerial, kemampuan komunikasi
                    efektif, serta kerja sama tim secara solid.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Kartu Highlights */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Reveal key={h.title} delay={0.2 + i * 0.08} as="div">
                    <div className="group h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border ${h.tint}`}
                        >
                          <Icon size={16} />
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                          {h.badge}
                        </span>
                      </div>
                      <h4 className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        {h.label}
                      </h4>
                      <p className="mt-1 text-sm font-bold text-slate-900 leading-snug">
                        {h.title}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-slate-600">
                        {h.subtitle}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div >
    </section >
  );
}