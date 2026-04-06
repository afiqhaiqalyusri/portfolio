import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

// ── Text definition ────────────────────────────────────────────────────────────
const lines = [
  {
    number: "01",
    indent: false,
    parts: [
      { text: "<", accent: true, highlight: false, muted: false },
      { text: "Hi, I'm ", accent: false, highlight: false, muted: true },
      { text: "Jane", accent: false, highlight: true, muted: false },
      { text: " Doe", accent: false, highlight: false, muted: false },
      { text: " .>", accent: true, highlight: false, muted: false },
    ],
  },
  {
    number: "02",
    indent: false,
    parts: [
      { text: "<", accent: true, highlight: false, muted: false },
      { text: "I ", accent: false, highlight: false, muted: true },
      { text: "design", accent: false, highlight: true, muted: false },
      { text: ", and ", accent: false, highlight: false, muted: true },
      { text: "develop", accent: false, highlight: true, muted: false },
    ],
  },
  {
    number: "03",
    indent: true,
    parts: [
      { text: "experiences", accent: false, highlight: false, muted: false },
      { text: " .>", accent: true, highlight: false, muted: false },
    ],
  },
];

// Precompute cumulative char positions (outside component — stable reference)
type CharPos = { lineIdx: number; partIdx: number; start: number; length: number };
const charMap: CharPos[] = [];
let TOTAL_CHARS = 0;
lines.forEach((line, li) => {
  line.parts.forEach((part, pi) => {
    charMap.push({ lineIdx: li, partIdx: pi, start: TOTAL_CHARS, length: part.text.length });
    TOTAL_CHARS += part.text.length;
  });
});

// Typing speed: ms per character
const SPEED = 32;

// ── Component ──────────────────────────────────────────────────────────────────
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [typedCount, setTypedCount] = useState(0);
  const [typing, setTyping] = useState(false);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // ── Start typing from scratch ────────────────────────────────────────────────
  const startTyping = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTypedCount(0);
    setTyping(true);
  }, []);

  // ── Typing ticker ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!typing) return;
    intervalRef.current = setInterval(() => {
      setTypedCount((prev) => {
        if (prev >= TOTAL_CHARS) {
          clearInterval(intervalRef.current!);
          setTyping(false);
          return TOTAL_CHARS;
        }
        return prev + 1;
      });
    }, SPEED);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [typing]);

  // ── IntersectionObserver — retrigger on every re-entry ──────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay so the parallax reset is not jarring
            setTimeout(startTyping, 120);
          } else {
            // Reset while off-screen so it retypes on next entry
            if (intervalRef.current) clearInterval(intervalRef.current);
            setTypedCount(0);
            setTyping(false);
          }
        });
      },
      { threshold: 0.18 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTyping]);

  // ── Helper: how many chars of a part are visible ────────────────────────────
  const visibleText = (li: number, pi: number): string => {
    const pos = charMap.find((c) => c.lineIdx === li && c.partIdx === pi);
    if (!pos) return "";
    return lines[li].parts[pi].text.slice(
      0,
      Math.max(0, Math.min(pos.length, typedCount - pos.start))
    );
  };

  // Is the blinking cursor currently inside this part?
  const isCursorHere = (li: number, pi: number): boolean => {
    const pos = charMap.find((c) => c.lineIdx === li && c.partIdx === pi);
    if (!pos) return false;
    return typedCount > pos.start && typedCount <= pos.start + pos.length;
  };

  const isDone = typedCount >= TOTAL_CHARS;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      style={{ position: "relative" }}
    >
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#1e1b4b]/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2a1f0e]/18 blur-[120px] pointer-events-none" />

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1100px] mx-auto px-6 md:px-12 pt-28 pb-32 relative z-10 w-full"
      >
        {/* Abstract gradient square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.0, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
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

        {/* ── Typewriter headline ── */}
        <div className="mb-11 md:mb-14">
          {lines.map((line, li) => (
            <div
              key={li}
              className="flex items-baseline gap-4 md:gap-6"
              style={{ minHeight: "1em" }}
            >
              {/* Line number */}
              <span
                className="text-[#f5f4f0]/12 tabular-nums shrink-0 hidden sm:inline select-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.6rem, 0.9vw, 0.78rem)",
                  letterSpacing: "0.1em",
                  alignSelf: "center",
                  minWidth: "24px",
                }}
              >
                {line.number}
              </span>

              {/* Characters */}
              <div
                className="flex flex-wrap items-baseline"
                style={{
                  paddingLeft: line.indent ? "clamp(1.6rem, 3.5vw, 4rem)" : 0,
                  lineHeight: 1.0,
                }}
              >
                {line.parts.map((part, pi) => {
                  const text = visibleText(li, pi);
                  const showCursor = isCursorHere(li, pi);
                  return (
                    <span
                      key={pi}
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: part.highlight ? 800 : part.muted ? 300 : 700,
                        fontSize: "clamp(1.9rem, 4vw, 4rem)",
                        letterSpacing: "-0.025em",
                        color: part.accent
                          ? "rgba(196,181,160,0.42)"
                          : part.highlight
                          ? "#f5f4f0"
                          : part.muted
                          ? "rgba(245,244,240,0.40)"
                          : "#f5f4f0",
                        whiteSpace: "pre",
                      }}
                    >
                      {text}
                      {/* Blinking cursor */}
                      {showCursor && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.55,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                          }}
                          style={{ color: "rgba(196,181,160,0.65)" }}
                        >
                          |
                        </motion.span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Supporting text + CTA — fades in after typing finishes ── */}
        <AnimatePresence>
          {isDone && (
            <motion.div
              key="bottom"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-14"
            >
              <p
                className="text-[#f5f4f0]/35 max-w-[280px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Brand identities, design systems, and mobile experiences — built
                end to end.
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
          )}
        </AnimatePresence>

        {/* ── Stats bar — fades in after typing finishes ── */}
        <AnimatePresence>
          {isDone && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-0"
            >
              {[
                { value: "5+", label: "Years" },
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? "pl-6 md:pl-9 border-l border-white/[0.06]" : ""}
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
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Scroll cue ── */}
      <AnimatePresence>
        {isDone && (
          <motion.button
            key="scrollcue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 2.4 },
            }}
            onClick={() => scrollTo("about")}
            className="absolute bottom-9 right-8 md:right-11 hidden md:flex flex-col items-center gap-2.5 text-[#f5f4f0]/18 hover:text-[#f5f4f0]/42 transition-colors z-10"
          >
            <span
              className="text-[8.5px] tracking-[0.34em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
            <ArrowDown size={9} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
