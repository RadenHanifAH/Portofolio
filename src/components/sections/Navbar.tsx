"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] font-display text-white transition-transform group-hover:-rotate-6">
            R
          </span>
          <span
            className={`font-display ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Portfolio
          </span>
          <span className="h-2 w-2 rounded-full bg-lime" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group relative text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="#contact"
            ariaLabel="Let's talk"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-slate-900 shadow-[0_6px_20px_-6px_rgba(163,230,53,0.7)] transition-shadow hover:shadow-[0_10px_28px_-6px_rgba(163,230,53,0.85)]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-900" />
            Let&apos;s talk
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-lime px-5 py-3 text-center font-bold text-slate-900"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
