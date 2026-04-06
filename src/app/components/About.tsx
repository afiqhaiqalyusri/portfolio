import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const narrativeLines = [
  "I believe great design",
  "is invisible — it solves",
  "problems before they arise.",
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "5yr", label: "Experience" },
  { value: "30+", label: "Clients" },
];

const techs = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Figma",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Motion",
  "React Native",
  "Storybook",
  "Prisma",
  "Vercel",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="bg-[#f5f4f0]">
      <div className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
          {/* Section marker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-24"
          >
            <span
              className="text-[#0a0a0a]/28 tracking-[0.38em] text-xs uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              01 / About
            </span>
            <div className="flex-1 h-px bg-[#0a0a0a]/10" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            {/* Left: Narrative */}
            <div>
              {/* Large statement — line-by-line mask reveal */}
              <div className="mb-14">
                {narrativeLines.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.p
                      initial={{ y: "112%" }}
                      animate={isInView ? { y: 0 } : { y: "112%" }}
                      transition={{
                        duration: 1.05,
                        delay: 0.15 + i * 0.13,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-[#0a0a0a] leading-[1.04]"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.75rem, 3.4vw, 3.1rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </div>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.62 }}
                className="space-y-5 mb-14"
              >
                <p
                  className="text-[#0a0a0a]/52 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  I'm Jane Doe — a developer and designer who's spent the last 5
                  years building digital products that earn trust through clarity
                  and craft.
                </p>
                <p
                  className="text-[#0a0a0a]/52 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  My work lives at the intersection of engineering and design. I
                  care deeply about the details that most people never notice but
                  always feel — the micro-interactions, the typographic rhythm,
                  the seamless transitions.
                </p>
                <p
                  className="text-[#0a0a0a]/52 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  When I'm not pushing pixels or writing code, I'm contributing
                  to open source, mentoring junior developers, and exploring the
                  outer edges of what's possible on the web.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.82 }}
                className="grid grid-cols-3 gap-6 pt-12 border-t border-[#0a0a0a]/10"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-[#0a0a0a] mb-1"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "2rem",
                        fontWeight: 800,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[#0a0a0a]/32 text-[10px] tracking-[0.28em] uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 32 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 1.15,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#e8e5df]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764533668787-5c0a9f565ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwZGVza3xlbnwxfHx8fDE3NzUzMzUyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jane's workspace"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-100"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border border-[#c4b5a0]/50" />
              <div className="absolute -top-5 -left-5 w-12 h-12 border border-[#0a0a0a]/08" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Continuous tech marquee band ── */}
      <div className="overflow-hidden border-t border-[#0a0a0a]/08 bg-[#0a0a0a] py-5">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {/* Duplicated for seamless loop */}
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <span
              key={i}
              className="text-[#f5f4f0]/22 tracking-[0.35em] text-xs uppercase shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tech}
              <span className="inline-block ml-16 text-[#c4b5a0]/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}