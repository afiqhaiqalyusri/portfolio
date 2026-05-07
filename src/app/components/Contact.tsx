import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/afiqhaiqalyusri",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/afiqhaiqalyusri",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
];

export function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="contact"
      className="
        bg-[#0a0a0a]
        py-32 md:py-44
        relative
        overflow-hidden
      "
    >
      {/* Background watermark */}
      <div
        className="
          absolute left-[5%] top-[-10%]
          select-none pointer-events-none
          hidden lg:block
        "
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(16rem, 26vw, 34rem)",
          lineHeight: 0.8,
          color: "rgba(245,244,240,0.018)",
          letterSpacing: "-0.06em",
        }}
      >
        05
      </div>

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-28"
        >
          <span
            className="
              text-[#f5f4f0]/25
              tracking-[0.35em]
              text-xs
              uppercase
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            05 / Contact
          </span>

          <div className="flex-1 h-px bg-[#f5f4f0]/[0.06]" />
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-24 items-start">
          {/* Left Side */}
          <div>
            {/* Main Heading */}
            <div className="mb-14">
              {["Let's build", "something", "great together."].map(
                (line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h2
                      initial={{ y: "100%" }}
                      animate={isInView ? { y: 0 } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.08 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        text-[#f5f4f0]
                        leading-[0.9]
                      "
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(3.2rem, 7vw, 7rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.06em",
                      }}
                    >
                      {line}
                    </motion.h2>
                  </div>
                )
              )}
            </div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="
                text-[#f5f4f0]/38
                leading-[1.9]
                max-w-[560px]
                text-[1rem]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              I’m always interested in meaningful digital products,
              frontend experiences, and creative collaborations.
              Whether you have a concept, startup, or redesign in
              mind — let’s create something impactful together.
            </motion.p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-20"
            >
              <a
                href="mailto:afiqhaiqal.yusri@gmail.com"
                className="
                  group inline-flex items-center gap-4
                  text-[#f5f4f0]
                  hover:text-[#c4b5a0]
                  transition-colors duration-300
                "
              >
                <span
                  className="
                    border-b border-[#f5f4f0]/20
                    group-hover:border-[#c4b5a0]
                    pb-2
                    transition-colors duration-300
                  "
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  afiqhaiqal.yusri@gmail.com
                </span>

                <ArrowUpRight
                  size={22}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform duration-300
                  "
                />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="flex flex-wrap gap-8 mt-20"
            >
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-2
                    text-[#f5f4f0]/25
                    hover:text-[#f5f4f0]
                    transition-colors duration-300
                  "
                >
                  <Icon size={14} />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.22em]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:pt-10"
          >
            {/* Small heading */}
            <div
              className="
                text-[#c4b5a0]
                text-xs
                tracking-[0.28em]
                uppercase
                mb-8
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Available For
            </div>

            {/* Secondary statement */}
            <h3
              className="
                text-[#f5f4f0]
                leading-[1]
                max-w-[480px]
              "
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Selected freelance projects,
              frontend design systems,
              and modern digital experiences.
            </h3>

            {/* Description */}
            <p
              className="
                text-[#f5f4f0]/35
                leading-[1.9]
                mt-12
                max-w-[420px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              Specialised in clean UI design,
              frontend development, responsive
              interfaces, and smooth user experiences
              focused on usability and visual clarity.
            </p>

            {/* Decorative line */}
            <div className="mt-16 h-px bg-[#f5f4f0]/10 max-w-[420px]" />

            {/* Tiny footer note */}
            <div
              className="
                text-[#f5f4f0]/18
                uppercase
                tracking-[0.22em]
                text-[10px]
                mt-8
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Based in Malaysia · Open Worldwide
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}