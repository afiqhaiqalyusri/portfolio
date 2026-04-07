import { useRef } from "react";
import { motion, useInView } from "motion/react";

// ── Skill groups ───────────────────────────────────────────────────────────────
// level: 1–5  (dots filled)
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react", level: 3 },
      { name: "TypeScript", icon: "typescript", level: 3 },
      { name: "Next.js", icon: "nextdotjs", level: 3 },
      { name: "Tailwind CSS", icon: "tailwindcss", level: 4 },
      { name: "CSS3", icon: "css3", level: 5 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: "figma", level: 5 },
      { name: "Canva", icon: "canva", level: 5 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs", level: 4 },
      { name: "PostgreSQL", icon: "postgresql", level: 4 },
      { name: "MySQL", icon: "mysql", level: 3 },
      { name: "", icon: "mongodb", level: 3 },
      { name: "Java", icon: "java", level: 5 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: "docker", level: 4 },
      { name: "Vercel", icon: "vercel", level: 3 },
      { name: "GitHub Actions", icon: "githubactions", level: 4 },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Git", icon: "git", level: 3 },
      { name: "Vite", icon: "vite", level: 3 },
    ],
  },
];

// ── Achievements ───────────────────────────────────────────────────────────────
const achievements = [
  {
    emoji: "🌟",
    title: "UMP Hackathon X Smart City ",
    org: "Competitor (Gamified LMS)",
    year: "2025",
  },

];

// ── Spoken languages ───────────────────────────────────────────────────────────
const languages = [
  { flag: "MY", code: "MY", name: "Melayu", level: "Native", pct: 100 },
  { flag: "🇬🇧", code: "EN", name: "English", level: "Professional", pct: 68 },
];

// ── Skill badge ────────────────────────────────────────────────────────────────
function SkillBadge({
  skill,
  delay = 0,
  inView,
}: {
  skill: { name: string; icon: string; level: number };
  delay?: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group/badge flex items-center gap-2 px-3 py-2.5 border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/30 hover:bg-[#0a0a0a]/[0.04] transition-all duration-300 cursor-default"
    >
      {/* Tech logo */}
      <img
        src={`https://cdn.simpleicons.org/${skill.icon}`}
        alt={skill.name}
        width={14}
        height={14}
        className="shrink-0 [filter:brightness(0)_opacity(0.55)] transition-all duration-300 group-hover/badge:[filter:brightness(0)_opacity(0.85)]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      {/* Name */}
      <span
        className="text-[#0a0a0a]/55 group-hover/badge:text-[#0a0a0a]/80 transition-colors duration-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
      {/* Proficiency dots */}
      <div className="flex gap-[3px] ml-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-[5px] h-[5px] rounded-full transition-colors duration-300 ${
              i < skill.level
                ? "bg-[#0a0a0a]/45 group-hover/badge:bg-[#0a0a0a]/70"
                : "bg-[#0a0a0a]/10"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Language bar ───────────────────────────────────────────────────────────────
function LangBar({
  lang,
  delay,
  inView,
}: {
  lang: (typeof languages)[0];
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-default"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-lg leading-none">{lang.flag}</span>
          <span
            className="text-[#0a0a0a]/80"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "-0.01em",
            }}
          >
            {lang.name}
          </span>
        </div>
        <span
          className="text-[#0a0a0a]/35"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {lang.level}
        </span>
      </div>
      {/* Bar track */}
      <div className="h-[3px] w-full bg-[#0a0a0a]/10 overflow-hidden">
        <motion.div
          className="h-full bg-[#0a0a0a]/40"
          initial={{ width: 0 }}
          animate={inView ? { width: `${lang.pct}%` } : {}}
          transition={{ duration: 1.1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.06 });

  return (
    <section
      id="skills"
      className="bg-[#f5f4f0] py-32 md:py-44 relative overflow-hidden"
    >
      {/* Faint watermark */}
      <div
        className="absolute left-[-2%] bottom-[-5%] select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(14rem, 24vw, 30rem)",
          lineHeight: 0.85,
          color: "rgba(10,10,10,0.022)",
          letterSpacing: "-0.05em",
        }}
      >
        03
      </div>

      <div
        className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
        ref={ref}
      >
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span
            className="text-[#0a0a0a]/28 tracking-[0.38em] text-xs uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            03 / Skills
          </span>
          <div className="flex-1 h-px bg-[#0a0a0a]/10" />
        </motion.div>

        {/* ── Heading ── */}
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-4 mb-16">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.04,
              }}
            >
              Skills
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="text-[#0a0a0a]/45 leading-relaxed self-end"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A full-stack toolkit spanning design, engineering and infrastructure
            — with proficiency levels earned in the field.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════
            SKILL TABLE  —  category label + badge row
            ════════════════════════════════════════════════ */}
        <div className="mb-24">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              {gi > 0 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: gi * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px bg-[#0a0a0a]/[0.07] origin-left"
                />
              )}
              <div className="py-5 grid sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 items-start">
                {/* Category */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + gi * 0.07 }}
                  className="text-[#0a0a0a]/28 tracking-[0.28em] text-[0.62rem] uppercase pt-2.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {group.category}
                </motion.span>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      inView={isInView}
                      delay={0.15 + gi * 0.07 + si * 0.04}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-[#0a0a0a]/[0.07] origin-left"
          />
        </div>

        {/* ════════════════════════════════════════════════
            BOTTOM GRID  —  Achievements | Languages
            ════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">

          {/* ── Achievements ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className="text-[#0a0a0a]/35 tracking-[0.32em] text-[0.65rem] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Achievements
              </span>
              <div className="flex-1 h-px bg-[#0a0a0a]/10" />
            </motion.div>

            <div className="space-y-0">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.6 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center gap-4 border-t border-[#0a0a0a]/[0.07] py-4 hover:bg-[#0a0a0a]/[0.025] px-2 -mx-2 transition-colors duration-300 cursor-default"
                >
                  {/* Emoji */}
                  <span className="text-base w-6 text-center shrink-0 leading-none">
                    {a.emoji}
                  </span>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[#0a0a0a]/75 group-hover:text-[#0a0a0a]/90 transition-colors duration-300 block truncate"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {a.title}
                    </span>
                    <span
                      className="text-[#0a0a0a]/35 block truncate"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {a.org}
                    </span>
                  </div>

                  {/* Year */}
                  <span
                    className="text-[#0a0a0a]/22 group-hover:text-[#0a0a0a]/40 transition-colors duration-300 shrink-0 tabular-nums"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {a.year}
                  </span>
                </motion.div>
              ))}
              <div className="border-t border-[#0a0a0a]/[0.07]" />
            </div>
          </div>

          {/* ── Spoken Languages ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className="text-[#0a0a0a]/35 tracking-[0.32em] text-[0.65rem] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Languages
              </span>
              <div className="flex-1 h-px bg-[#0a0a0a]/10" />
            </motion.div>

            <div className="space-y-6">
              {languages.map((lang, i) => (
                <LangBar
                  key={lang.code}
                  lang={lang}
                  inView={isInView}
                  delay={0.65 + i * 0.1}
                />
              ))}
            </div>

            {/* Soft-skills chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10"
            >
              <div
                className="text-[#0a0a0a]/28 tracking-[0.28em] text-[0.62rem] uppercase mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Soft skills
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Thinking",
                  "Team Leadership",
                  "Agile / Scrum",
                  "Work Under Pressure",
                  "Adaptability",
                  "UX Research",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 border border-[#0a0a0a]/12 hover:border-[#0a0a0a]/28 text-[#0a0a0a]/45 hover:text-[#0a0a0a]/70 transition-all duration-300 cursor-default"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
