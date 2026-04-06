import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-32 md:py-44 relative overflow-hidden">
      {/* Large faint watermark */}
      <div
        className="absolute left-[-2%] top-[-5%] select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(14rem, 24vw, 30rem)",
          lineHeight: 0.85,
          color: "rgba(245,244,240,0.015)",
          letterSpacing: "-0.05em",
        }}
      >
        05
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-24"
        >
          <span
            className="text-[#f5f4f0]/25 tracking-[0.35em] text-xs uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-[#f5f4f0]/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left: Statement */}
          <div>
            <div className="mb-12">
              {["Let's build", "something", "great together."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[#f5f4f0] leading-[0.95]"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#f5f4f0]/40 leading-relaxed mb-12 max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              I'm always open to interesting projects, collaborations, and new
              opportunities. If you have an idea, let's talk about it.
            </motion.p>

            {/* Direct email */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              href="mailto:jane@example.com"
              className="group inline-flex items-center gap-3 text-[#f5f4f0] border-b border-[#f5f4f0]/20 pb-1 hover:border-[#c4b5a0] transition-colors duration-300 mb-16"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
            >
              jane@example.com
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#c4b5a0]"
              />
            </motion.a>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-6"
            >
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#f5f4f0]/30 hover:text-[#f5f4f0] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="h-full flex flex-col justify-center py-16">
                <div
                  className="text-[#c4b5a0] mb-4"
                  style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 700 }}
                >
                  Message sent.
                </div>
                <p
                  className="text-[#f5f4f0]/40"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-[#f5f4f0]/30 hover:text-[#f5f4f0] text-xs tracking-widest uppercase transition-colors w-fit"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#f5f4f0]/30 text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[#f5f4f0]/10 focus:border-[#f5f4f0]/40 text-[#f5f4f0] placeholder-[#f5f4f0]/20 pb-3 outline-none transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#f5f4f0]/30 text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-[#f5f4f0]/10 focus:border-[#f5f4f0]/40 text-[#f5f4f0] placeholder-[#f5f4f0]/20 pb-3 outline-none transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#f5f4f0]/30 text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-[#f5f4f0]/10 focus:border-[#f5f4f0]/40 text-[#f5f4f0] placeholder-[#f5f4f0]/20 pb-3 outline-none transition-colors duration-300 resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-4 text-[#0a0a0a] bg-[#f5f4f0] px-8 py-4 hover:bg-[#c4b5a0] transition-colors duration-400 w-fit"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="tracking-[0.2em] text-xs uppercase">Send Message</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}