"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Fadli delivered exceptional quality ahead of schedule. The web app is blazingly fast and exactly what we envisioned. Highly recommended for any serious project.",
    author: "Sarah J.",
    role: "CEO, TechStartup",
    country: "🇸🇬",
  },
  {
    text: "Working with Fadli was effortless. He translated our complex data requirements into a beautiful, intuitive dashboard. He understood the brief immediately.",
    author: "Michael T.",
    role: "Operations Manager",
    country: "🇺🇸",
  },
  {
    text: "Top-tier developer. The attention to detail in both the frontend polish and backend architecture is honestly outstanding. Will definitely work together again.",
    author: "Elena R.",
    role: "Product Owner",
    country: "🇦🇺",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 w-full bg-[#0a1020] overflow-hidden py-24">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase">Testimonials</span>
        </div>

        {/* Quote mark */}
        <div className="text-[120px] leading-none text-white/5 font-serif select-none -mb-8 -ml-2">
          &ldquo;
        </div>

        {/* Sliding testimonial */}
        <div className="relative min-h-[200px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="absolute w-full"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed text-white/80 mb-10">
                {testimonials[index].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                  {testimonials[index].country}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[index].author}</p>
                  <p className="text-white/30 text-xs tracking-widest uppercase">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-3 mt-52 md:mt-44">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-500 ${i === index ? "w-8 h-[3px] bg-white" : "w-2 h-[3px] bg-white/20 hover:bg-white/50"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
