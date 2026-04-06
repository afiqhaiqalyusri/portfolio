import { useEffect } from "react";
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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 lg:left-[220px] right-0 h-[2px] z-[200] origin-left"
        style={{
          scaleX: scrollYProgress,
          background:
            "linear-gradient(90deg, rgba(196,181,160,0.5) 0%, rgba(196,181,160,0.95) 100%)",
        }}
      />

      {/* ── Custom cursor ── */}
      <CustomCursor />

      {/* ── Fixed Sidebar Navigation ── */}
      <Navigation />

      {/* ── Pinned CTAs: "Work with me" + "Request CV" ── */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-[68px] right-4 lg:top-6 lg:right-8 z-[65] flex flex-col gap-2"
      >
        {/* Primary CTA */}
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex items-center gap-2.5 bg-[#f5f4f0] text-[#0a0a0a] px-4 py-2.5 md:px-5 md:py-3 hover:bg-[#c4b5a0] transition-all duration-400 shadow-lg shadow-black/30"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
        >
          <span className="tracking-[-0.01em]" style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.82rem)" }}>
            Work&nbsp;with&nbsp;me
          </span>
          <ArrowUpRight
            size={13}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </button>

        {/* Secondary CTA — Request CV */}
        <button
          onClick={() => window.open("/cv.pdf", "_blank")}
          className="group flex items-center gap-2.5 bg-[rgba(0,0,0,0)] text-[#f5f4f0]/55 border border-[#f5f4f0]/14 px-4 py-2 md:px-5 md:py-2.5 hover:border-[#f5f4f0]/35 hover:text-[#f5f4f0]/85 transition-all duration-400"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          <span className="tracking-[0.1em] text-[10.5px] uppercase">
            Request&nbsp;CV
          </span>
          <Download
            size={11}
            className="group-hover:translate-y-0.5 transition-transform duration-300"
          />
        </button>
      </motion.div>

      {/* ── Main content — offset by sidebar on desktop ── */}
      <main className="lg:ml-[220px] relative w-full overflow-x-hidden">
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