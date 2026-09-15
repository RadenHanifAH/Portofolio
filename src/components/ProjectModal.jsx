import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  RotateCw,
  Monitor,
  Tablet,
  Smartphone,
  Lock,
  Copy,
  Check,
  Globe,
  Loader2,
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [device, setDevice] = useState("desktop"); // desktop | tablet | mobile
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  // Reset loading state when project or reload key changes
  useEffect(() => {
    setIsLoading(true);
  }, [project, iframeKey]);

  if (!project) return null;

  const handleCopy = () => {
    if (!project.liveUrl) return;
    navigator.clipboard.writeText(project.liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  // Device width mapping for responsive previewing
  const getDeviceWidthClass = () => {
    switch (device) {
      case "mobile":
        return "w-[390px] max-w-full shadow-2xl rounded-2xl border-4 border-slate-800";
      case "tablet":
        return "w-[768px] max-w-full shadow-xl rounded-xl border-2 border-slate-700";
      case "desktop":
      default:
        return "w-full";
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative flex flex-col w-full max-w-6xl h-[92vh] max-h-[900px] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Window Bar (macOS Style Browser Chrome) */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
            {/* Left: Window Dots & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onClose}
                  aria-label="Tutup preview"
                  className="h-3 w-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center text-slate-900 group"
                >
                  <X size={8} className="opacity-0 group-hover:opacity-100" />
                </button>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>

              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-800">
                <span className="font-display text-sm font-semibold text-white tracking-wide">
                  {project.title}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-lime/20 text-lime border border-lime/30">
                  Live View
                </span>
              </div>
            </div>

            {/* Center: Device Switcher */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setDevice("desktop")}
                title="Tampilan Desktop (100%)"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
                  device === "desktop"
                    ? "bg-[#2563eb] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor size={14} />
                <span className="hidden md:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDevice("tablet")}
                title="Tampilan Tablet (768px)"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
                  device === "tablet"
                    ? "bg-[#2563eb] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Tablet size={14} />
                <span className="hidden md:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDevice("mobile")}
                title="Tampilan Mobile (390px)"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
                  device === "mobile"
                    ? "bg-[#2563eb] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone size={14} />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReload}
                title="Muat ulang halaman"
                aria-label="Muat ulang halaman"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RotateCw size={15} />
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka langsung di tab baru"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-lime text-slate-950 hover:bg-lime/90 transition-all shadow-[0_4px_12px_rgba(163,230,53,0.3)]"
              >
                <ExternalLink size={13} />
                <span>Buka Tab Baru</span>
              </a>

              <button
                onClick={onClose}
                aria-label="Tutup jendela"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Browser URL Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2 flex-1 max-w-xl bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300">
              <Lock size={12} className="text-emerald-400 shrink-0" />
              <span className="truncate text-white font-medium">
                {project.liveUrl}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors ml-3 shrink-0 cursor-pointer"
              title="Salin tautan"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-lime" />
                  <span className="text-lime">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span className="hidden sm:inline">Salin URL</span>
                </>
              )}
            </button>
          </div>

          {/* Frame Container */}
          <div className="relative flex-1 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2 sm:p-4">
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-950/80 backdrop-blur-sm text-white">
                <Loader2 size={32} className="animate-spin text-lime" />
                <p className="text-sm font-medium text-slate-300">
                  Memuat <span className="text-white font-bold">{project.title}</span>...
                </p>
              </div>
            )}

            {/* Iframe Viewport with Device Frame */}
            <div
              className={`h-full transition-all duration-300 overflow-hidden bg-white ${getDeviceWidthClass()}`}
            >
              <iframe
                key={iframeKey}
                src={project.liveUrl}
                title={project.title}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0 bg-white"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              />
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Globe size={13} className="text-lime" />
              <span className="text-slate-300">
                Mode Preview Interaktif — Bebas berinteraksi langsung dengan website
              </span>
            </div>
            <span className="hidden sm:inline text-slate-500">
              Tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[10px]">ESC</kbd> untuk menutup
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
