"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;
const TOTAL_SCROLL_SECTIONS = 4; // 4 × 100vh

function padNum(n: number) {
  return String(n).padStart(3, "0");
}

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Text opacities (mapped to 0 - 0.75 since the last 25% is overlapped by the About section)
  const text0Opacity  = useTransform(scrollYProgress, [0,    0.05, 0.15, 0.22], [1, 1, 1, 0]);
  const text0Y        = useTransform(scrollYProgress, [0,    0.22], [0, -60]);
  
  const text30Opacity = useTransform(scrollYProgress, [0.25, 0.30, 0.45, 0.50], [0, 1, 1, 0]);
  const text30Y       = useTransform(scrollYProgress, [0.25, 0.30, 0.45, 0.50], [40, 0, 0, -40]);
  
  const text60Opacity = useTransform(scrollYProgress, [0.52, 0.57, 0.70, 0.75], [0, 1, 1, 0]);
  const text60Y       = useTransform(scrollYProgress, [0.52, 0.57, 0.70, 0.75], [40, 0, 0, -40]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[Math.floor(index)];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;

    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (ir > cr) {
      sw = img.naturalHeight * cr;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / cr;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/ezgif-frame-${padNum(i)}.jpg`;
      img.onload = () => {
        count++;
        setLoaded(count);
        if (count === 1) drawFrame(0);
        if (count >= FRAME_COUNT) setReady(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [drawFrame]);

  useMotionValueEvent(frameIndex, "change", (v) => {
    if (loaded > 30) drawFrame(v);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let lastWidth = window.innerWidth;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameIndex.get());
    };
    
    const handleResize = () => {
      // On mobile, scrolling hides/shows the address bar, changing innerHeight.
      // We only want to resize the canvas if the device is rotated or width changes,
      // to avoid massive lag and layout shifts during vertical scroll.
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        resize();
      }
    };

    resize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, frameIndex]);

  const progress = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <>
      {/* ─── Preloader ─── */}
      {loaded < 30 && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a1020]">
          <div className="mb-8 text-xs font-medium tracking-[0.4em] text-white/40 uppercase">
            Loading Experience
          </div>
          <div className="relative w-56 h-[1px] bg-white/10">
            <div
              className="absolute inset-y-0 left-0 bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-[11px] text-white/25 tabular-nums">{progress}%</div>
        </div>
      )}

      {/* ─── 400 vh Scroll Container ─── */}
      <div ref={containerRef} className="relative w-full" style={{ height: `${TOTAL_SCROLL_SECTIONS * 100}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#121929]">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

          {/* ── Overlay 0% ── */}
          <motion.div
            style={{ opacity: text0Opacity, y: text0Y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          >
            <span className="mb-4 inline-block text-[11px] font-semibold tracking-[0.5em] text-white/40 uppercase">
              Portfolio
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white">
              Fadli Zaenal<br />Aripin
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/50 font-light tracking-widest uppercase">
              Full Stack Developer &amp; Data Analyst
            </p>
            <div className="mt-12 flex items-center gap-2 text-white/30 text-sm animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              <span className="tracking-widest text-xs uppercase">Scroll</span>
            </div>
          </motion.div>

          {/* ── Overlay 30% ── */}
          <motion.div
            style={{ opacity: text30Opacity, y: text30Y }}
            className="absolute inset-0 flex items-center justify-start px-8 md:px-20 lg:px-32 pointer-events-none opacity-0"
          >
            <h2 className="max-w-2xl text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
              Building real products<br />
              <span className="text-white/40">for real clients —</span><br />
              from Cirebon to<br className="hidden md:block" /> the world.
            </h2>
          </motion.div>

          {/* ── Overlay 60% ── */}
          <motion.div
            style={{ opacity: text60Opacity, y: text60Y }}
            className="absolute inset-0 flex items-center justify-end px-8 md:px-20 lg:px-32 pointer-events-none opacity-0"
          >
            <h2 className="max-w-2xl text-right text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
              From clean code<br />
              <span className="text-white/40">to clean data —</span><br />
              end-to-end digital<br className="hidden md:block" /> solutions.
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  );
}
