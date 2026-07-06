import { useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowLeft, BookOpen, Download, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CustomCursor } from "../components/CustomCursor";
import { Footer } from "../components/Footer";

export function EopPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a]"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, rgba(196,181,160,0.5) 0%, rgba(196,181,160,0.95) 100%)",
        }}
      />

      <CustomCursor />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 md:h-28 mix-blend-difference">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 text-[#f5f4f0] hover:text-[#c4b5a0] transition-colors duration-300"
        >
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#c4b5a0]/50 transition-colors duration-300">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </div>
          <span
            className="tracking-widest uppercase text-xs hidden md:block"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
          >
            Back to Home
          </span>
        </button>

        <div className="flex items-center gap-3">
          <span
            className="text-[#f5f4f0]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              letterSpacing: "0.05em",
            }}
          >
            AH.
          </span>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a] z-0" />
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#c4b5a0] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#f5f4f0] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.05] z-0" />

          <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center gap-4 mb-6 md:mb-8"
              >
                <div className="w-10 h-10 border border-[#f5f4f0]/20 flex items-center justify-center rounded-sm">
                  <BookOpen size={16} className="text-[#c4b5a0]" />
                </div>
                <span
                  className="text-[#c4b5a0] tracking-[0.4em] text-xs uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Academic Portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#f5f4f0",
                }}
              >
                English for
                <br />
                <span className="text-[#c4b5a0]">Educational</span>
                <br />
                Purpose.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:max-w-xs"
            >
              <p
                className="text-[#f5f4f0]/50 leading-relaxed mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                }}
              >
                A comprehensive collection of my coursework, reflections, and assignments demonstrating proficiency in academic English communication and critical thinking.
              </p>
              
              <div className="flex gap-4">
                <button
                  className="group flex items-center gap-3 border border-[#f5f4f0]/20 px-5 py-3 hover:bg-[#f5f4f0] hover:text-[#0a0a0a] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>Download EOP</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Placeholder Content Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0f0f0f] border-t border-white/[0.05]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
            >
              <div>
                <h2
                  className="text-[#f5f4f0] mb-6"
                  style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  Course Overview
                </h2>
                <div className="w-16 h-px bg-[#c4b5a0] mb-8" />
                <p className="text-[#f5f4f0]/60 leading-relaxed mb-6 font-['Inter'] font-light">
                  This portfolio highlights my engagement with the English for Educational Purpose curriculum. It encompasses various modules designed to enhance academic reading, writing, and presentation skills crucial for higher education.
                </p>
                <p className="text-[#f5f4f0]/60 leading-relaxed font-['Inter'] font-light">
                  Through critical analysis, structured essay writing, and collaborative projects, this coursework represents my dedication to mastering academic discourse and scholarly communication.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Academic Writing", desc: "Structured essays, research papers, and critical reviews demonstrating clear argumentation and proper citation." },
                  { title: "Reading Comprehension", desc: "Analysis of scholarly articles and complex texts to extract key information and evaluate authors' viewpoints." },
                  { title: "Oral Presentations", desc: "Well-organized academic presentations with visual aids, focusing on clarity, pacing, and audience engagement." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 md:p-8 border border-white/[0.05] bg-[#141414] hover:border-[#c4b5a0]/30 transition-colors duration-300"
                  >
                    <h3 className="text-[#f5f4f0] text-lg font-['Syne'] font-bold mb-3">{item.title}</h3>
                    <p className="text-[#f5f4f0]/50 text-sm font-['Inter'] font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Weekly Placeholders */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#f5f4f0] mb-6 font-['Syne'] font-bold" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                Weekly Progress
              </h2>
              <div className="w-16 h-px bg-[#c4b5a0] mb-12" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-6 border border-white/[0.05] bg-[#111111] hover:border-[#c4b5a0]/40 transition-colors duration-300 flex flex-col h-full"
                  >
                    <div className="mb-4">
                      <h3 className="text-[#f5f4f0] font-['Syne'] text-xl font-bold mb-1">
                        Week {i + 1}
                      </h3>
                      <p className="text-[#f5f4f0]/50 font-['Inter'] text-xs font-light">
                        Select a video presentation to watch:
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-2">
                      <a
                        href="https://youtube.com" // Placeholder for video 1
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-3 border border-white/[0.04] bg-[#0a0a0a] hover:bg-[#1a1a1a] hover:border-[#c4b5a0]/30 transition-all duration-300"
                      >
                        <span className="text-[#f5f4f0]/80 font-['Inter'] text-sm group-hover:text-[#c4b5a0] transition-colors duration-300">
                          Video Part 1
                        </span>
                        <ArrowUpRight size={14} className="text-[#f5f4f0]/30 group-hover:text-[#c4b5a0] transition-colors duration-300" />
                      </a>
                      
                      <a
                        href="https://youtube.com" // Placeholder for video 2
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-3 border border-white/[0.04] bg-[#0a0a0a] hover:bg-[#1a1a1a] hover:border-[#c4b5a0]/30 transition-all duration-300"
                      >
                        <span className="text-[#f5f4f0]/80 font-['Inter'] text-sm group-hover:text-[#c4b5a0] transition-colors duration-300">
                          Video Part 2
                        </span>
                        <ArrowUpRight size={14} className="text-[#f5f4f0]/30 group-hover:text-[#c4b5a0] transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
