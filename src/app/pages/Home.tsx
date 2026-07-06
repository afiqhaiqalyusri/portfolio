import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";

import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";

export function Home() {
  const { scrollYProgress } = useScroll();

  const [isLightSection, setIsLightSection] = useState(false);

  // Detect current section background
  useEffect(() => {
   const sectionMap = [
  { id: "hero", light: false },
  { id: "about", light: true },
  { id: "projects", light: false },
  { id: "skills", light: true },
  { id: "experience", light: false },
  { id: "contact", light: false },
];

    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      let currentLight = false;

      for (const section of sectionMap) {
        const el = document.getElementById(section.id);

        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // Current active section
        if (
          rect.top <= triggerPoint &&
          rect.bottom >= triggerPoint
        ) {
          currentLight = section.light;
          break;
        }
      }

      setIsLightSection(currentLight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a]"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ───────────────── Scroll Progress ───────────────── */}
      <motion.div
        className="
          fixed top-0 left-0
          lg:left-[220px]
          right-0 h-[2px]
          z-[200]
          origin-left
        "
        style={{
          scaleX: scrollYProgress,
          background:
            "linear-gradient(90deg, rgba(196,181,160,0.5) 0%, rgba(196,181,160,0.95) 100%)",
        }}
      />

      {/* ───────────────── Custom Cursor ───────────────── */}
      <CustomCursor />

      {/* ───────────────── Navigation ───────────────── */}
      <Navigation />

      {/* ───────────────── Floating CTA Buttons ───────────────── */}
      <motion.div
        initial={{
          opacity: 0,
          y: -16,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed top-[68px] right-4
          lg:top-6 lg:right-8
          z-[65]
          flex flex-col gap-2
        "
      >
        {/* ── Primary CTA */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
            group flex items-center gap-2.5
            bg-[#f5f4f0]
            text-[#0a0a0a]
            px-4 py-2.5
            md:px-5 md:py-3
            hover:bg-[#c4b5a0]
            transition-all duration-300 ease-out
            shadow-lg shadow-black/20
          "
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
          }}
        >
          <span
            className="tracking-[-0.01em]"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.82rem)",
            }}
          >
            Work&nbsp;with&nbsp;me
          </span>

          <ArrowUpRight
            size={13}
            className="
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
              transition-transform duration-300
            "
          />
        </button>

        {/* ── Secondary CTA */}
        <button
          onClick={() => window.open("/cv.pdf", "_blank")}
          className={`
            group flex items-center gap-2.5
            px-4 py-2
            md:px-5 md:py-2.5
            border
            backdrop-blur-sm
            transition-all duration-300 ease-out
            ${
              isLightSection
                ? `
                  bg-white/55
                  text-[#0a0a0a]/70
                  border-black/10
                  hover:border-black/25
                  hover:text-[#0a0a0a]
                  hover:bg-white/75
                `
                : `
                  bg-black/20
                  text-[#f5f4f0]/60
                  border-white/[0.14]
                  hover:border-white/[0.35]
                  hover:text-[#f5f4f0]/90
                  hover:bg-white/[0.03]
                `
            }
          `}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
          }}
        >
          <span className="tracking-[0.1em] text-[10.5px] uppercase">
            Request&nbsp;CV
          </span>

          <Download
            size={11}
            className="
              group-hover:translate-y-0.5
              transition-transform duration-300
            "
          />
        </button>
      </motion.div>

      {/* ───────────────── Main Content ───────────────── */}
      <main className="lg:ml-[220px] relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}