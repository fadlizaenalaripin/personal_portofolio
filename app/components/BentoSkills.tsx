"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "kuro",
    tag: "Web Application",
    title: "KURO Coffee Shop",
    desc: "Full-stack e-commerce & POS system for a modern specialty coffee brand.",
    accent: "#c8a97e",
    span: "md:col-span-2",
    height: "h-72 md:h-80",
    image: "/projects/kuro_coffee_mockup_1779728476637.png",
    href: "https://coffeshop-dummyproject.netlify.app",
  },
  {
    id: "unity",
    tag: "Nonprofit",
    title: "UnityFeed",
    desc: "Platform connecting donors with local food banks across Indonesia.",
    accent: "#6366f1",
    span: "md:col-span-1",
    height: "h-72 md:h-80",
    image: "/projects/unity_feed_mockup_1779728583510.png",
    href: "https://dummyy-project.netlify.app",
  },
  {
    id: "freelance",
    tag: "Freelance",
    title: "Fiverr & Fastwork",
    desc: "Delivering production-ready web projects for international clients.",
    accent: "#22c55e",
    span: "md:col-span-1",
    height: "h-64 md:h-72",
    image: "/projects/freelance_dev_mockup_1779728686000.png",
  },
  {
    id: "data",
    tag: "Internship",
    title: "Data Analyst · PT Git Solution",
    desc: "Analyzed complex datasets and built dashboards to drive operational decisions.",
    accent: "#38bdf8",
    span: "md:col-span-2",
    height: "h-64 md:h-72",
    image: "/projects/data_analyst_mockup_1779729021608.png",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "CodeIgniter", "Express.js", "REST API", "HMVC"],
  },
  {
    category: "Data & Databases",
    items: ["Pandas", "NumPy", "Matplotlib", "MySQL", "PostgreSQL", "MongoDB", "MS SQL Server"],
  },
  {
    category: "AI & LLM",
    items: ["OpenAI API", "Anthropic API", "LLM Integration", "Prompt Engineering"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Linux (Ubuntu)", "Postman", "Figma", "VS Code", "Vercel", "Netlify"],
  },
  {
    category: "Security",
    items: ["JWT Auth", "bcrypt Hashing", "HTTPS/SSL", "RBAC", "Data Encryption", "Input Validation"],
  },
];

export default function BentoSkills() {
  return (
    <section id="projects" className="relative z-10 w-full bg-[#0a1020] py-24 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase">Work</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16 text-white">
          Selected Projects
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className={`${p.span} group relative overflow-hidden rounded-3xl border border-white/8 bg-[#0d1428] flex flex-col justify-between hover:border-white/20 transition-all duration-500 ${p.height}`}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-center opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 ease-[0.33,1,0.68,1]"
                />
              </div>

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a1020] via-[#0a1020]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glowing accent border top */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
              />

              {/* Clickable Overlay */}
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-30" aria-label={`View ${p.title}`} />
              )}

              {/* Content Wrapper */}
              <div className="relative z-20 p-8 flex flex-col justify-between h-full pointer-events-none">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md"
                    style={{ color: p.accent, background: `${p.accent}20`, border: `1px solid ${p.accent}30` }}
                  >
                    {p.tag}
                  </span>
                  
                  {/* Link indicator icon */}
                  {p.href && (
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </div>
                  )}
                </div>

                {/* Bottom content */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-28" id="skills">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase">Full Stack</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {techStack.map((group, groupIndex) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              >
                <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-5 border-b border-white/10 pb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech, i) => (
                    <span
                      key={tech}
                      className="text-xs px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
