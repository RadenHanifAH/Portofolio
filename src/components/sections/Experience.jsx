import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

const timeline = [
  {
    role: "Web Developer Intern",
    company: "Syaamil Group",
    period: "2024 — 2025",
    location: "Bandung, ID",
    type: "internship",
    description:
      "Mengembangkan web aplikasi rekrutmen internal untuk mempermudah dan mempercepat proses hiring karyawan.",
    highlights: [
      "Membangun frontend dengan React.js & Tailwind CSS, serta backend dengan Node.js, Express.js, dan Prisma.",
      "Merancang sistem alur rekrutmen terpusat mandiri perusahaan.",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
    ],
  },
  {
    role: "Frontend Developer",
    company: "TanyaKampus",
    period: "2024 — 2025",
    location: "Bandung, ID",
    type: "academic",
    description:
      "Membangun platform web interaktif untuk eksplorasi jurusan dan tes minat bakat calon mahasiswa.",
    highlights: [
      "Mengembangkan antarmuka responsif dan interaktif dengan React.js & Tailwind CSS.",
      "Mengintegrasikan fitur kuis minat bakat dan kurasi informasi perguruan tinggi.",
    ],
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
];

const iconFor = {
  internship: Briefcase,
  work: Briefcase,
  academic: GraduationCap,
  project: Code2,
};

const labelFor = {
  internship: "Magang",
  work: "Full-time",
  academic: "Proyek Akademik",
  project: "Proyek",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
              — PENGALAMAN
            </span>
          </Reveal>

          <SplitText
            as="h2"
            text="Perjalanan saya sejauh ini."
            by="word"
            from="bottom"
            stagger={0.06}
            duration={0.7}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            highlight={["sejauh", "ini."]}
            highlightClassName="text-lime"
          />
        </div>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2563eb] via-slate-200 to-lime md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ul className="space-y-12 md:space-y-16">
            {timeline.map((job, i) => {
              const Icon = iconFor[job.type] || Briefcase;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${job.company}-${i}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05,
                  }}
                  className="relative flex flex-col gap-4 pl-12 md:grid md:grid-cols-2 md:gap-0 md:pl-0"
                >
                  {/* Dot on the timeline */}
                  <span
                    className="absolute left-[11px] top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-lime shadow-[0_0_0_4px_rgba(163,230,53,0.25)] md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                  </span>

                  {/* Card */}
                  <div
                    className={`md:px-8 ${
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_18px_40px_-15px_rgba(37,99,235,0.25)] sm:p-7"
                    >
                      <div
                        className={`flex flex-wrap items-center gap-3 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb]/8 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#2563eb]">
                          <Icon size={12} />
                          {labelFor[job.type]}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {job.period}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                        {job.role}
                      </h3>
                      <div
                        className={`mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="font-semibold text-slate-900">
                          {job.company}
                        </span>
                        <span aria-hidden>·</span>
                        <span>{job.location}</span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {job.description}
                      </p>

                      <ul
                        className={`mt-4 space-y-1.5 text-sm text-slate-700 ${
                          isLeft ? "md:flex md:flex-col md:items-end" : ""
                        }`}
                      >
                        {job.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-start gap-2 ${
                              isLeft ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-5 flex flex-wrap gap-1.5 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
