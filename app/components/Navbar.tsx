"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

const menuVariants = {
  closed: { clipPath: "circle(0% at calc(100% - 52px) 52px)", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: "circle(150% at calc(100% - 52px) 52px)", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { y: 80, opacity: 0 },
  open:   (i: number) => ({ y: 0, opacity: 1, transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.33, 1, 0.68, 1] } }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Fixed bar ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-7 mix-blend-difference pointer-events-none">
        <a href="#home" className="pointer-events-auto text-2xl font-bold tracking-tighter text-white select-none">
          FZ
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto flex flex-col justify-center items-end gap-[6px] w-10 h-10 z-[110] relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${open ? "w-7 -rotate-45 translate-y-[7.5px]" : "w-7"}`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? "opacity-0 w-0" : "w-5"}`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${open ? "w-7 rotate-45 -translate-y-[7.5px]" : "w-7"}`}
          />
        </button>
      </header>

      {/* ── Fullscreen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-[#0a1020] flex flex-col"
          >
            {/* Nav links */}
            <nav className="flex flex-col justify-center flex-1 px-12 md:px-24 gap-1">
              {navLinks.map(({ label, href }, i) => (
                <div key={label} className="overflow-hidden">
                  <motion.a
                    href={href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => setOpen(false)}
                    className="group inline-flex items-center gap-4 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white/90 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-white/20 text-2xl font-normal tabular-nums leading-none translate-y-1">
                      0{i + 1}
                    </span>
                    <span className="group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {label}
                    </span>
                  </motion.a>
                </div>
              ))}
            </nav>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5 } }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-12 md:px-24 py-10 border-t border-white/10"
            >
              <span className="text-white/30 text-sm tracking-widest uppercase">
                padlijaenal9@gmail.com
              </span>
              <div className="flex items-center gap-8">
                {[
                  { label: "GitHub", href: "https://github.com/fadlizaenalaripin" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/fadli-zaenal-aripin/" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
