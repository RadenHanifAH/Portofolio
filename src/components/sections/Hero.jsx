import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import MagneticButton from "@/components/animations/MagneticButton";
import BlobBackground from "@/components/animations/BlobBackground";
import Lanyard from "@/components/animations/Lanyard";
import meImg from "@/components/img/me.jpeg";

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
          <SplitText
            as="h1"
            text="FULLSTACK DEVELOPER"
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
            <span className="font-semibold text-white">Raden Hanif Abdul Hakim</span> —
            membangun aplikasi web fullstack yang modern, cepat, dan handal dengan
            React.js, Node.js, Express.js, dan Prisma.
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
            Bandung, Indonesia · Remote-friendly
          </motion.div>
        </div>

        {/* Right: Lanyard ID card */}
        <div className="relative flex h-[560px] items-start justify-center lg:h-[620px]">
          <Lanyard length={150}>
            <LanyardCard />
          </Lanyard>
        </div>
      </div>
    </section>
  );
}

function LanyardCard() {
  return (
    <div className="group relative h-[370px] w-[260px] overflow-hidden rounded-2xl bg-slate-900 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/15">
      {/* Punch hole + grommet where the lanyard string attaches */}
      <div className="absolute left-1/2 top-3 z-30 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-slate-950/80 backdrop-blur-sm ring-2 ring-white/70 shadow-sm">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      </div>

      {/* Subtle top badge for ID realism */}
      <div className="absolute inset-x-0 top-3 z-20 flex items-center justify-between px-3.5">
        <div className="flex items-center gap-1.5 rounded-full bg-slate-950/60 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          <span>Available</span>
        </div>
        <div className="rounded-full bg-slate-950/60 px-2.5 py-1 font-mono text-[10px] font-semibold text-white/80 backdrop-blur-md">
          #DEV-2026
        </div>
      </div>

      {/* Full Photo */}
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={meImg}
          onError={(e) => {
            e.currentTarget.src = "/img/me.jpeg";
          }}
          alt="Raden Hanif Abdul Hakim - Fullstack Developer"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />

        {/* Dark subtle vignette at top for badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />

        {/* Bottom gradient overlay for name & role */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-4 pb-5 pt-20">
          <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow-md">
            Raden Hanif Abdul Hakim
          </h3>
          <p className="mt-1 text-xs font-semibold tracking-wide text-lime uppercase drop-shadow-sm">
            Fullstack Developer
          </p>
        </div>
      </div>
    </div>
  );
}
