import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isMaintainer =
    project.category?.toUpperCase() === "MAINTENANCE" ||
    project.category?.toUpperCase() === "MAINTAINER" ||
    project.role?.toUpperCase() === "MAINTENANCE" ||
    project.role?.toUpperCase() === "MAINTAINER";

  const isLong = Boolean(project.description && project.description.length > 115);

  return (
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
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-950/75 p-6 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-display text-sm font-semibold tracking-wide text-white">
            {isMaintainer ? "Detail Pemeliharaan" : "Eksplorasi Proyek"}
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
            {project.githubUrl && (
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
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Sistem Internal</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            {isMaintainer ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.category}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                {project.category}
              </span>
            )}
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

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {isLong && !isExpanded ? (
              <>
                {project.description.slice(0, 110)}...{" "}
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="inline font-semibold text-[#2563eb] hover:underline cursor-pointer"
                >
                  lainnya
                </button>
              </>
            ) : (
              <>
                {project.description}
                {isLong && isExpanded && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="inline ml-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600 hover:underline cursor-pointer"
                  >
                    (Lebih sedikit)
                  </button>
                )}
              </>
            )}
          </p>

          {/* Highlights / Stats Pills */}
          {project.stats && project.stats.length > 0 && (
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
          )}

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
          {project.liveUrl && project.githubUrl ? (
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
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#2563eb] group/btn"
            >
              <Globe size={15} className="text-lime transition-transform group-hover/btn:scale-110" />
              <span>Kunjungi Website</span>
              <ExternalLink size={13} className="text-slate-400 transition-colors group-hover/btn:text-white" />
            </a>
          ) : project.githubUrl ? (
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
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-xs font-medium text-slate-600">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>Platform Internal — Akses Terbatas</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
