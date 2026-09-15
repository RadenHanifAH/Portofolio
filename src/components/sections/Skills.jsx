import { motion } from "framer-motion";
import {
  Atom,
  Box,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Wind,
} from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";

const skills = [
  {
    name: "JavaScript",
    level: 92,
    Icon: Code2,
    tint: "#f7df1e",
    note: "ES6+, Async/Await, DOM Manipulation",
  },
  {
    name: "React.js",
    level: 95,
    Icon: Atom,
    tint: "#61dafb",
    note: "Hooks, State Management, Reusable UI",
  },
  {
    name: "Next.js",
    level: 88,
    Icon: Box,
    tint: "#94a3b8",
    note: "App Router, SSR, Fullstack React",
  },
  {
    name: "Tailwind CSS",
    level: 96,
    Icon: Wind,
    tint: "#a3e635",
    note: "Responsive Design, Utility-First & Tokens",
  },
  {
    name: "Node.js",
    level: 85,
    Icon: Server,
    tint: "#68a063",
    note: "Express.js, REST API, Middleware",
  },
  {
    name: "MySQL",
    level: 88,
    Icon: Database,
    tint: "#00758f",
    note: "Relational DB, SQL Queries & Normalisasi",
  },
  {
    name: "Prisma",
    level: 82,
    Icon: Layers,
    tint: "#5a67d8",
    note: "Schema, Migrations & Type-Safe ORM",
  },
  {
    name: "Laragon",
    level: 90,
    Icon: Cpu,
    tint: "#0ea5e9",
    note: "Local Dev Stack, Apache, MySQL & Nginx",
  },
  {
    name: "Git & CI/CD",
    level: 86,
    Icon: GitBranch,
    tint: "#f1502f",
    note: "GitHub, Version Control & Deployment",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* soft decorative shapes */}
      <div className="pointer-events-none absolute left-[5%] top-10 h-72 w-72 rounded-full bg-[#2563eb]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-72 w-72 rounded-full bg-lime/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="font-display text-sm font-bold tracking-[0.25em] text-[#2563eb]">
              — SKILL SET
            </span>
          </Reveal>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SplitText
              as="h2"
              text="Tools yang saya gunakan harian."
              by="word"
              from="bottom"
              stagger={0.05}
              duration={0.7}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              highlight={["harian."]}
              highlightClassName="text-lime"
            />
            <Reveal delay={0.2}>
              <p className="max-w-sm text-sm text-slate-600 sm:text-base">
                Tumpukan teknologi yang saya kuasai — dipilih untuk kecepatan,
                skalabilitas, dan pengalaman developer yang menyenangkan.
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
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_18px_40px_-15px_rgba(15,23,42,0.25)] last:col-span-2 sm:last:col-span-1"
            >
              {/* glow tint on hover */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: skill.tint }}
              />

              <div className="relative flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform duration-300 group-hover:rotate-6"
                  aria-hidden
                >
                  <skill.Icon size={20} style={{ color: skill.tint }} />
                </div>
                <span className="font-display text-xs font-bold text-slate-400">
                  {skill.level}%
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-bold text-slate-900">
                {skill.name}
              </h3>
              <p className="relative mt-1 text-xs leading-relaxed text-slate-500">
                {skill.note}
              </p>

              {/* progress bar */}
              <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-lime"
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
