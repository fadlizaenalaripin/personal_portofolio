"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "I'm a Full Stack Web Developer and Data Analyst with hands-on experience delivering real-world projects for international clients through Fastwork and Fiverr. Completed a Data Analyst internship at PT Git Solution and built multiple production web applications.";

const WORDS = TEXT.split(" ");

function Word({ word, progress, start, end }: { word: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const color   = useTransform(progress, [start, end], ["#374151", "#f9fafb"]);
  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.28em] mb-1"
    >
      {word}
    </motion.span>
  );
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 45%"],
  });

  return (
    <section id="about" className="relative z-10 w-full bg-[#0a1020]/40 backdrop-blur-xl py-32 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase">About</span>
        </div>

        {/* Animated paragraph */}
        <p ref={textRef} className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          {WORDS.map((word, i) => {
            const total = WORDS.length;
            const start = i / total;
            const end   = (i + 1) / total;
            return (
              <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </p>

        {/* Quick facts row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Location",   value: "Cirebon, Indonesia" },
            { label: "Platforms",  value: "Fiverr & Fastwork" },
            { label: "Internship", value: "PT Git Solution" },
            { label: "Focus",      value: "Web + Data" },
          ].map(({ label, value }) => (
            <div key={label} className="border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
              <p className="text-xs text-white/30 tracking-widest uppercase mb-2">{label}</p>
              <p className="text-sm font-semibold text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
