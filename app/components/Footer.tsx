"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 w-full bg-[#0a1020] overflow-hidden">
      {/* Aurora glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28 pt-32 pb-12 relative z-10">
        {/* CTA */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.4em] text-white/30 uppercase mb-6"
          >
            Ready to work together?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none text-white mb-12"
          >
            Let&apos;s make<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/20">
              something great.
            </span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:padlijaenal9@gmail.com"
            className="group inline-flex items-center gap-3 bg-white text-[#0a1020] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Start a project
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/30">
          <div>
            <p className="font-bold text-white/60 text-sm mb-1 tracking-tight">Fadli Zaenal Aripin</p>
            <p className="tracking-widest uppercase">Full Stack Developer · Data Analyst</p>
          </div>
          <div className="flex items-center gap-8 tracking-widest uppercase">
            <a href="https://github.com/fadlizaenalaripin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/fadli-zaenal-aripin/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:padlijaenal9@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
