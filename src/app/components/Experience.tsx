import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Download, Briefcase, GraduationCap } from "lucide-react";

// ── Data ───────────────────────────────────────────────────────
const experiences = [
{
    year: "2023 - Present",
    role: "Junior Developer",
    company: "Freelance",
    type: "Full-time",
    description:
      "Supporting clients by creating clean, responsive frontend solutions tailored to their needs.",
  },

  {
    year: "2022 — Present",
    role: "Development Programmer",
    company: "Burning Centipede Tech Solution",
    type: "Full-time",
    description:
      "Developing efficient, user-focused web solutions through clean and structured code.",
  },
  
];

const educations = [
  {
    year: "2023 — Present",
    degree: "Bachelor of Computer Science (Maritime Informatics) with Honours",
    institution: "Universiti Malaysia Terengganu (UMT)",
    type: "Undergraduate",
    description:
      "Currently pursuing a degree in Computer Science with a focus on programming, web development, and UI/UX. Gaining hands-on experience through academic projects including an e-commerce system.",
  },
  {
    year: "2023",
    degree: "Matriculation Programme (Computer Science Stream)",
    institution: "Penang Matriculation College",
    type: "Pre-University",
    description:
      "Completed foundation studies in computer science, developing fundamental knowledge in programming, problem-solving, and analytical thinking.",
  },

  {
    year: "2016 - 2020",
    degree: "Sijil Pelajaran Malayasia (Science Stream)",
    institution: "SMK Raja Tun Uda",
    type: "High School",
    description:
     "Completed secondary education with a focus on science subjects, developing strong analytical thinking, discipline, and problem-solving skills."
  },
];


// ── Single timeline entry ──────────────────────────────────────
function TimelineEntry({
  item,
  index,
  isWork,
  isInView,
  isLast,
}: {
  item: (typeof experiences)[0] | (typeof educations)[0];
  index: number;
  isWork: boolean;
  isInView: boolean;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const workItem = item as (typeof experiences)[0];
  const eduItem = item as (typeof educations)[0];

  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.25 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-5 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Timeline spine ── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <motion.div
          animate={{
            backgroundColor: hovered ? "rgba(196,181,160,0.6)" : "rgba(196,181,160,0.18)",
            borderColor: hovered ? "rgba(196,181,160,0.9)" : "rgba(196,181,160,0.3)",
          }}
          transition={{ duration: 0.3 }}
          className="w-2.5 h-2.5 rounded-full border shrink-0 mt-[6px]"
        />
        {/* Line below dot */}
        {!isLast && (
          <div className="flex-1 w-px mt-2" style={{ background: "rgba(245,244,240,0.07)" }} />
        )}
      </div>

      {/* ── Content card ── */}
      <div
        className={`pb-10 flex-1 min-w-0 transition-all duration-300 ${isLast ? "pb-0" : ""}`}
      >
        {/* Year badge */}
        <div
          className="inline-flex items-center gap-1.5 mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: hovered ? "rgba(196,181,160,0.7)" : "rgba(245,244,240,0.22)",
            textTransform: "uppercase",
            transition: "color 300ms",
          }}
        >
          {item.year}
        </div>

        {/* Role / Degree */}
        <h3
          className="mb-1 leading-tight"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: hovered ? "#f5f4f0" : "rgba(245,244,240,0.82)",
            transition: "color 300ms",
            letterSpacing: "-0.01em",
          }}
        >
          {isWork ? workItem.role : eduItem.degree}
        </h3>

        {/* Company / Institution */}
        <div
          className="mb-3 flex items-center gap-1.5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(196,181,160,0.5)",
          }}
        >
          <span className="opacity-50">@</span>
          <span>{isWork ? workItem.company : eduItem.institution}</span>
        </div>

        {/* Description */}
        <p
          className="mb-3 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
            color: "rgba(245,244,240,0.28)",
            maxWidth: "380px",
          }}
        >
          {item.description}
        </p>

        {/* Type badge */}
        <span
          className="inline-block border px-2.5 py-[3px] transition-all duration-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: hovered ? "rgba(196,181,160,0.65)" : "rgba(245,244,240,0.18)",
            borderColor: hovered ? "rgba(196,181,160,0.3)" : "rgba(245,244,240,0.08)",
          }}
        >
          {item.type}
        </span>
      </div>
    </motion.div>
  );
}

// ── Column header ──────────────────────────────────────────────
function ColumnHeader({
  label,
  icon: Icon,
  count,
  isInView,
}: {
  label: string;
  icon: React.ElementType;
  count: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex items-center gap-3 mb-10"
    >
      <div
        className="w-8 h-8 border border-[#f5f4f0]/10 flex items-center justify-center shrink-0"
        style={{ background: "rgba(196,181,160,0.05)" }}
      >
        <Icon size={13} className="text-[#c4b5a0]/60" />
      </div>
      <div>
        <div
          className="text-[#f5f4f0]/60 tracking-[0.28em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}
        >
          {label}
        </div>
        <div
          className="text-[#f5f4f0]/18"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
        >
          {count} entries
        </div>
      </div>
      {/* Accent line */}
      <div className="flex-1 h-px bg-[#f5f4f0]/[0.06]" />
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.06 });

  return (
    <section id="experience" className="bg-[#111111] relative overflow-hidden py-28 md:py-44">
      {/* Watermark number */}
      <div
        className="absolute right-[-2%] bottom-[-6%] select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(14rem, 22vw, 28rem)",
          lineHeight: 0.85,
          color: "rgba(245,244,240,0.016)",
          letterSpacing: "-0.05em",
        }}
      >
        04
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>

        {/* ── Section header row ── */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          {/* Left: label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span
              className="text-[#f5f4f0]/25 tracking-[0.35em] text-xs uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              04 / Journey
            </span>
            <div className="w-10 h-px bg-[#f5f4f0]/[0.08]" />
          </motion.div>
        </div>

        {/* ── Big title ── */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.04,
              color: "#f5f4f0",
            }}
          >
            Journey
          </motion.h2>
        </div>

        {/* ── Two-column timeline ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-0">

          {/* ─── Work column ─── */}
          <div className="md:pr-10 lg:pr-16 md:border-r md:border-[#f5f4f0]/[0.055]">
            <ColumnHeader
              label="Work Experience"
              icon={Briefcase}
              count={experiences.length}
              isInView={isInView}
            />
            <div>
              {experiences.map((exp, i) => (
                <TimelineEntry
                  key={i}
                  item={exp}
                  index={i}
                  isWork={true}
                  isInView={isInView}
                  isLast={i === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* ─── Education column ─── */}
          <div className="md:pl-10 lg:pl-16">
            <ColumnHeader
              label="Education"
              icon={GraduationCap}
              count={educations.length}
              isInView={isInView}
            />
            <div>
              {educations.map((edu, i) => (
                <TimelineEntry
                  key={i}
                  item={edu}
                  index={i}
                  isWork={false}
                  isInView={isInView}
                  isLast={i === educations.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-[#f5f4f0]/[0.06] flex flex-wrap items-center justify-between gap-4"
        >
          <span
            className="text-[#f5f4f0]/12 text-[10px] tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {experiences.length + educations.length} total entries · 2015 — present
          </span>
          {/* Repeat CV button for visibility */}
          <button
            onClick={() => window.open("/cv.pdf", "_blank")}
            className="group flex items-center gap-2 text-[#f5f4f0]/20 hover:text-[#f5f4f0]/50 transition-colors duration-300"
          >
            <Download size={10} className="group-hover:translate-y-[1px] transition-transform duration-300" />
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Download CV
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
