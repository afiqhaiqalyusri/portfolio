import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

// ── Rotating words ─────────────────────────────────────────────────────────────
const rotatingWords = [
  "design and develop experiences",
  "develop scalable full stack solutions",
  "fight CSS with questionable confidence",
];

// ── Component ──────────────────────────────────────────────────────────────────
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = rotatingWords[wordIndex];

  // ── Typing Loop ──────────────────────────────────────────────────────────────
  useEffect(() => {
  const current = rotatingWords[wordIndex];

  let timeout: ReturnType<typeof setTimeout>;

  if (!isDeleting) {
    // ── Typing ─────────────────────
    if (displayWord.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayWord(current.slice(0, displayWord.length + 1));
      }, 140);
    } else {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    }
  } else {
    // ── Deleting ───────────────────
    if (displayWord.length > 0) {
      timeout = setTimeout(() => {
        setDisplayWord(current.slice(0, displayWord.length - 1));
      }, 75);
    } else {
      // Next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }
  }

  return () => clearTimeout(timeout);
}, [displayWord, isDeleting, wordIndex]);
  // ── Parallax ────────────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#1e1b4b]/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2a1f0e]/18 blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1100px] mx-auto px-6 md:px-12 pt-28 pb-32 relative z-10 w-full"
      >
        {/* Small Square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-7 md:mb-10"
        >
          <div
            style={{
              width: 44,
              height: 44,
              background:
                "linear-gradient(135deg, rgba(196,181,160,0.80) 0%, rgba(196,181,160,0.10) 100%)",
              borderRadius: 5,
            }}
          />
        </motion.div>

        {/* Hero Text */}
       <div
          className="mb-11 md:mb-14"
          style={{
            minHeight: "220px",
          }}
        >
          {/* Line 1 */}
          <div className="flex items-baseline gap-4 md:gap-6">
            <span
              className="text-[#f5f4f0]/12 hidden sm:inline"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
              }}
            >
              01
            </span>

            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 5rem)",
                letterSpacing: "-0.04em",
                color: "#f5f4f0",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "rgba(196,181,160,0.42)" }}>
                {"<"}
              </span>

              <span style={{ color: "rgba(245,244,240,0.45)" }}>
                {" "}Hi, I'm{" "}
              </span>

              <span>Afiq</span>

              <span> Haiqal</span>

              <span style={{ color: "rgba(196,181,160,0.42)" }}>
                {" .>"}
              </span>
            </h1>
          </div>

          {/* Line 2 */}
          <div
            className="flex items-start gap-4 md:gap-6 mt-2"
            style={{
              minHeight: "96px",
            }}
          >
            <span
              className="text-[#f5f4f0]/12 hidden sm:inline"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
              }}
            >
              02
            </span>

            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 5rem)",
                letterSpacing: "-0.04em",
                color: "#f5f4f0",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "rgba(196,181,160,0.42)" }}>
                {"<"}
              </span>

              <span style={{ color: "rgba(245,244,240,0.45)" }}>
                {" "}I{" "}
              </span>

              <span>{displayWord}</span>

              {/* Cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  color: "rgba(196,181,160,0.7)",
                }}
              >
                |
              </motion.span>

              <span style={{ color: "rgba(196,181,160,0.42)" }}>
                {" .>"}
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Content */}
        <AnimatePresence>
          <motion.div
            key="bottom"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-14"
          >
            <p
              className="text-[#f5f4f0]/35 max-w-[280px] leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              Frontend developer and UI/UX designer crafting modern 
              interfaces and seamless digital experiences.
            </p>

            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-4 text-[#f5f4f0] border border-[#f5f4f0]/14 px-6 py-3 hover:bg-[#f5f4f0] hover:text-[#0a0a0a] hover:border-[#f5f4f0] transition-all duration-500 shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="tracking-[0.22em] text-[10.5px] uppercase">
                View Work
              </span>

              <span className="group-hover:translate-x-1.5 transition-transform duration-400">
                →
              </span>
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-0">
          {[
            { value: "99+", label: "Figma Frames" },
            { value: "5+", label: "Projects" },
            { value: "404", label: "Sleep Found" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? "pl-6 md:pl-9 border-l border-white/[0.06]"
                  : ""
              }
            >
              <div
                className="text-[#f5f4f0] mb-0.5"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                }}
              >
                {stat.value}
              </div>

              <div
                className="text-[#f5f4f0]/20 text-[10px] tracking-[0.28em] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.button
        animate={{ y: [0, 6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
        }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-9 right-8 md:right-11 hidden md:flex flex-col items-center gap-2.5 text-[#f5f4f0]/18 hover:text-[#f5f4f0]/42 transition-colors z-10"
      >
        <span
          className="text-[8.5px] tracking-[0.34em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>

        <ArrowDown size={9} />
      </motion.button>
    </section>
  );
}