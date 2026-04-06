import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    index: "01",
    title: "Luminary Store",
    category: "E-Commerce · Web App",
    year: "2024",
    description:
      "A full-featured luxury e-commerce platform with seamless payment integration, real-time inventory, and cinematic product showcasing.",
    image:
      "https://images.unsplash.com/photo-1677530410699-f692c94cf806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY29tbWVyY2UlMjBkYXJrJTIwcHJvZHVjdCUyMHNob3djYXNlfGVufDF8fHx8MTc3NTM1OTY1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    // wide card (left) in row 1
    col: "lg:col-span-7",
    rowH: "h-[260px] lg:h-[490px]",
  },
  {
    id: 2,
    index: "02",
    title: "Pulse Analytics",
    category: "Dashboard · SaaS",
    year: "2024",
    description:
      "Real-time analytics dashboard with advanced data visualisation, custom reports, and intelligent filtering.",
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrJTIwVUklMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzUzNTk2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["TypeScript", "D3.js", "Firebase"],
    // narrow card (right) in row 1
    col: "lg:col-span-5",
    rowH: "h-[260px] lg:h-[490px]",
  },
  {
    id: 3,
    index: "03",
    title: "Forma Mobile",
    category: "Mobile · React Native",
    year: "2023",
    description:
      "Cross-platform fitness app with social tracking, AI coaching, and community features that keep users moving.",
    image:
      "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBmaXRuZXNzJTIwZGFyayUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzUzNTk2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "GraphQL", "AWS"],
    // narrow card (left) in row 2
    col: "lg:col-span-5",
    rowH: "h-[260px] lg:h-[420px]",
  },
  {
    id: 4,
    index: "04",
    title: "Axis Design System",
    category: "Design System · OSS",
    year: "2023",
    description:
      "Comprehensive component library and design system with full documentation, theming engine, and Figma integration.",
    image:
      "https://images.unsplash.com/photo-1616266126575-1471ec059439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwY3JlYXRpdmUlMjBhZ2VuY3klMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc3NTM1OTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Storybook", "Tailwind"],
    // wide card (right) in row 2
    col: "lg:col-span-7",
    rowH: "h-[260px] lg:h-[420px]",
  },
  {
    id: 5,
    index: "05",
    title: "Volta Brand Platform",
    category: "Branding · Web",
    year: "2023",
    description:
      "Creative platform for building and managing brand identities with real-time collaboration and asset management.",
    image:
      "https://images.unsplash.com/photo-1761746395593-5662bc22ca6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwZGlnaXRhbCUyMGNyZWF0aXZlJTIwY29sbGFib3JhdGlvbiUyMHRvb2xzfGVufDF8fHx8MTc3NTMzNTI1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "PostgreSQL", "Docker"],
    col: "lg:col-span-6",
    rowH: "h-[260px] lg:h-[360px]",
  },
  {
    id: 6,
    index: "06",
    title: "Relay Project Hub",
    category: "Productivity · SaaS",
    year: "2022",
    description:
      "Collaborative project management tool with kanban boards, real-time updates, and team communication built in.",
    image:
      "https://images.unsplash.com/photo-1681164315990-b2a1e375eb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGNvbGxhYm9yYXRpb24lMjBzb2Z0d2FyZSUyMHRlYW18ZW58MXx8fHwxNzc1MzU5NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Socket.io", "Redis"],
    col: "lg:col-span-6",
    rowH: "h-[260px] lg:h-[360px]",
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer group ${project.col} ${project.rowH}`}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── Image ── */}
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.0)" : "scale(1.05)",
          filter: hovered ? "grayscale(0.2)" : "grayscale(0.85)",
          transition: "transform 700ms cubic-bezier(0.16,1,0.3,1), filter 700ms ease",
        }}
      />

      {/* ── Base gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/98 via-[#080808]/30 to-[#080808]/15" />

      {/* ── Hover tint ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 0.12 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: "linear-gradient(135deg,#c4b5a0 0%,transparent 60%)" }}
      />

      {/* ── Top bar ── */}
      <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between z-10">
        <span
          className="text-[#f5f4f0]/22 tabular-nums"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.78rem" }}
        >
          {project.index}
        </span>
        <span
          className="text-[#f5f4f0]/18 text-[10px] tracking-[0.28em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.year}
        </span>
      </div>

      {/* ── Bottom content ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Description + tags — reveal on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <p
                className="text-[#f5f4f0]/45 leading-relaxed mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.76rem" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#c4b5a0]/20 text-[#c4b5a0]/55 px-2 py-[3px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title row */}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p
              className="text-[#c4b5a0]/50 tracking-[0.25em] uppercase mb-1"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem" }}
            >
              {project.category}
            </p>
            <h3
              className="text-[#f5f4f0] leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
                letterSpacing: "-0.015em",
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Arrow button */}
          <motion.div
            animate={{
              backgroundColor: hovered ? "rgba(196,181,160,0.12)" : "rgba(255,255,255,0)",
              borderColor: hovered ? "rgba(196,181,160,0.5)" : "rgba(245,244,240,0.12)",
            }}
            transition={{ duration: 0.3 }}
            className="w-9 h-9 border flex items-center justify-center shrink-0"
          >
            <motion.div
              animate={{ x: hovered ? 1 : 0, y: hovered ? -1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight
                size={14}
                style={{ color: hovered ? "#f5f4f0" : "rgba(245,244,240,0.28)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Subtle border ── */}
      <div className="absolute inset-0 border border-white/[0.04] pointer-events-none" />
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.04 });

  return (
    <section id="projects" className="bg-[#0d0d0d] py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative" ref={ref}>

        {/* ── Section header ── */}
        <div className="mb-16 md:mb-20 px-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span
              className="text-[#f5f4f0]/22 tracking-[0.38em] text-xs uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              02 / Selected Work
            </span>
            <div className="w-12 h-px bg-[#f5f4f0]/10" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.05, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1,
                color: "#f5f4f0",
              }}
            >
              Featured Projects
            </motion.h2>
          </div>
        </div>

        {/* ── Mosaic grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* ── Footer label ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center justify-between px-2"
        >
          <span
            className="text-[#f5f4f0]/12 text-[10px] tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {projects.length} projects · hover to explore
          </span>
          <span
            className="text-[#f5f4f0]/12 text-[10px] tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            2022 — 2024
          </span>
        </motion.div>
      </div>
    </section>
  );
}