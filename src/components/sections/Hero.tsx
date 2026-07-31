"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import MagneticButton from "@/components/animations/MagneticButton";
import BlobBackground from "@/components/animations/BlobBackground";
import Lanyard from "@/components/animations/Lanyard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#2563eb] pt-28 pb-16 text-white"
    >
      {/* Decorative floating blobs */}
      <BlobBackground variant="hero" count={7} />

      {/* Faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Open for freelance · Q3 2026
          </motion.div>

          <SplitText
            as="h1"
            text="FRONTEND DEVELOPER"
            by="word"
            from="bottom"
            stagger={0.12}
            duration={0.8}
            className="font-display text-[15vw] font-bold leading-[0.92] tracking-tight sm:text-[12vw] lg:text-[7.5rem]"
            highlight={["DEVELOPER"]}
            highlightClassName="text-lime"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-xl text-lg text-white/85 sm:text-xl"
          >
            Hai, saya{" "}
            <span className="font-semibold text-white">Rangga Pradipta</span> —
            membangun antarmuka web yang cepat, indah, dan berkarakter dengan
            React, Next.js, dan Tailwind CSS. Fokus pada detail mikro, motion
            design, dan accessibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#work"
              ariaLabel="Lihat proyek saya"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-slate-900 shadow-[0_10px_30px_-8px_rgba(163,230,53,0.8)]"
            >
              Lihat Proyek
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              ariaLabel="Hubungi saya"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Sparkles size={16} className="text-lime" />
              Hubungi Saya
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <MapPin size={14} className="text-lime" />
            Jakarta, Indonesia · Remote-friendly
          </motion.div>
        </div>

        {/* Right: Lanyard ID card */}
        <div className="relative flex h-[560px] items-start justify-center lg:h-[620px]">
          <Lanyard length={150}>
            <LanyardCard />
          </Lanyard>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-lime" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function LanyardCard() {
  return (
    <div className="relative h-[340px] w-[260px] overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
      {/* Top stripe */}
      <div className="flex items-center justify-between bg-[#2563eb] px-4 py-2.5 text-white">
        <span className="font-display text-xs font-bold tracking-widest">
          DEV ID
        </span>
        <span className="font-mono text-[10px] text-white/80">#FD-2026</span>
      </div>

      <div className="p-4">
        {/* Avatar */}
        <div className="mb-3 flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 ring-2 ring-lime">
            {/* Stylized avatar SVG instead of external image (no CORS issues) */}
            <svg viewBox="0 0 64 64" className="h-full w-full">
              <circle cx="32" cy="24" r="11" fill="#a3e635" />
              <path
                d="M12 60c0-11 9-18 20-18s20 7 20 18"
                fill="#1f2937"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight">
              Rangga Pradipta
            </span>
            <span className="text-xs text-slate-500">Frontend Engineer</span>
            <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-lime/30 px-2 py-0.5 text-[10px] font-semibold text-slate-800">
              ● Available
            </span>
          </div>
        </div>

        {/* Info rows */}
        <dl className="space-y-1.5 text-[11px]">
          <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
            <dt className="text-slate-500">Stack</dt>
            <dd className="font-mono font-semibold">React · Next · TS</dd>
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
            <dt className="text-slate-500">Exp</dt>
            <dd className="font-mono font-semibold">2+ years</dd>
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
            <dt className="text-slate-500">Based in</dt>
            <dd className="font-mono font-semibold">Jakarta, ID</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Coffee</dt>
            <dd className="font-mono font-semibold">V60 · no sugar</dd>
          </div>
        </dl>

        {/* Footer chip */}
        <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2 text-white">
          <span className="font-display text-[10px] tracking-widest">
            SCAN TO TALK
          </span>
          <div className="grid grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={`h-1 w-1 rounded-sm ${
                  (i + i * 3) % 2 === 0 ? "bg-lime" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
