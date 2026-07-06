import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function EopSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  return (
    <section id="eop" className="bg-[#f5f4f0] relative py-24 md:py-32 overflow-hidden">
      {/* Decorative large background text */}
      <div
        className="absolute left-[-5%] top-[-5%] select-none pointer-events-none opacity-[0.03]"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(12rem, 20vw, 24rem)",
          lineHeight: 0.85,
          color: "#0a0a0a",
          letterSpacing: "-0.05em",
        }}
      >
        EOP
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <span
            className="text-[#0a0a0a]/50 tracking-[0.35em] text-xs uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            05 / Academic Work
          </span>
          <div className="w-10 h-px bg-[#0a0a0a]/10" />
        </motion.div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#0a0a0a",
                marginBottom: "1.5rem",
              }}
            >
              English for Educational Purpose
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-[#0a0a0a]/60 leading-relaxed mb-8 md:mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                fontWeight: 400,
              }}
            >
              Explore my academic portfolio detailing my journey, reflections, and coursework completed as part of the English for Educational Purpose program. This section showcases my language proficiency, critical thinking, and communication skills in an academic setting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => navigate("/eop")}
                className="group flex items-center gap-4 bg-[#0a0a0a] text-[#f5f4f0] px-6 py-4 md:px-8 md:py-5 hover:bg-[#1f1f1f] transition-all duration-500 ease-out shadow-xl shadow-black/10"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                }}
              >
                <span
                  className="tracking-wide uppercase"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}
                >
                  View EOP Portfolio
                </span>
                <div className="w-8 h-8 rounded-full bg-[#f5f4f0]/10 flex items-center justify-center group-hover:bg-[#f5f4f0]/20 transition-colors duration-500">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-gradient-to-br from-[#ebeae6] to-[#dfded9] border border-[#0a0a0a]/5 relative overflow-hidden flex items-center justify-center group cursor-pointer" onClick={() => navigate("/eop")}>
              {/* Inner subtle pattern/glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] opacity-50" />
              
              <motion.div 
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-[#0a0a0a] text-[#f5f4f0] flex items-center justify-center rounded-full shadow-2xl shadow-black/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <BookOpen size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
              
              {/* Floating tags */}
              <div className="absolute top-8 right-8 px-3 py-1.5 border border-[#0a0a0a]/10 bg-white/50 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a]/50 font-['Inter']">
                Academic
              </div>
              <div className="absolute bottom-8 left-8 px-3 py-1.5 border border-[#0a0a0a]/10 bg-white/50 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a]/50 font-['Inter']">
                Writing
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
