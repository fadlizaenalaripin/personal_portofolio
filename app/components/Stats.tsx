"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2,  suffix: "+", label: "Years\nExperience" },
  { value: 10, suffix: "+", label: "Projects\nDelivered" },
  { value: 5,  suffix: "+", label: "Happy\nClients" },
  { value: 7,  suffix: "+", label: "Tech\nStacks" },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(elapsed / duration, 1);
      // ease-out-quart
      const ease = 1 - Math.pow(1 - pct, 4);
      start = Math.round(ease * end);
      setCount(start);
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 w-full bg-[#0a1020]/40 backdrop-blur-xl py-20 border-y border-white/[0.06]">
      {/* Gradient to blend smoothly into the solid background of the Bento section below */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0a1020] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
            >
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-3">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs font-medium tracking-[0.25em] text-white/30 uppercase whitespace-pre-line leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
