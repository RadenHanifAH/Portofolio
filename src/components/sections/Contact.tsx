"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/animations/MagneticButton";
import BlobBackground from "@/components/animations/BlobBackground";

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulated submit — no backend wired up in this portfolio demo.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* decorative blobs */}
      <BlobBackground variant="dark" count={6} />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: invitation */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="font-display text-sm font-bold tracking-[0.25em] text-lime">
                — KONTAK
              </span>
            </Reveal>

            <SplitText
              as="h2"
              text="Mari ngobrol."
              by="word"
              from="bottom"
              stagger={0.1}
              duration={0.8}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
              highlight={["ngobrol."]}
              highlightClassName="text-lime"
            />

            <Reveal delay={0.15}>
              <p className="max-w-md text-lg text-white/70">
                Punya ide, proyek, atau sekedar ingin berdiskusi tentang web?
                Saya biasanya membalas dalam{" "}
                <mark className="rounded bg-lime px-1.5 py-0.5 font-semibold text-slate-900">
                  24 jam
                </mark>
                .
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href="mailto:halo@radenhanif.dev"
                className="group inline-flex w-fit items-center gap-3 text-lg font-semibold text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-slate-900 transition-transform group-hover:scale-110">
                  <Mail size={18} />
                </span>
                halo@radenhanif.dev
                <ArrowUpRight
                  size={18}
                  className="text-white/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime"
                />
              </a>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-2">
                <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
                  Temukan saya di
                </p>
                <ul className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <MagneticButton
                        as="a"
                        href={s.href}
                        strength={0.5}
                        ariaLabel={s.label}
                        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition-colors hover:border-lime hover:bg-lime hover:text-slate-900"
                      >
                        <s.Icon size={18} />
                      </MagneticButton>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: contact form */}
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
            >
              <div className="mb-5 flex items-center gap-2 text-sm text-white/60">
                <span className="flex h-2 w-2 relative">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Slot freelance Q3 2026: <span className="font-semibold text-white">2 dari 4 tersisa</span>
              </div>

              <div className="space-y-4">
                <Field
                  label="Nama"
                  id="name"
                  type="text"
                  value={form.name}
                  placeholder="Nama lengkap"
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  placeholder="email@anda.com"
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-white/80"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Ceritakan tentang proyek Anda..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/30"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                  disabled={sent}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:shadow-[0_12px_30px_-6px_rgba(163,230,53,0.6)] disabled:opacity-80"
                >
                  {sent ? (
                    <>
                      <Check size={16} />
                      Pesan terkirim — terima kasih!
                    </>
                  ) : (
                    <>
                      Kirim pesan
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-white/40">
                  Dengan mengirim, Anda setuju saya menyimpan email Anda untuk
                  membalas.
                </p>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© 2026 Raden Hanif Abdul Hakim. Dibuat dengan Next.js + Tailwind + Framer Motion.</p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-lime" />
            <span>All systems go</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  required?: boolean;
};

function Field({
  label,
  id,
  type,
  value,
  placeholder,
  onChange,
  required,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-white/80"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/30"
      />
    </div>
  );
}
