import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  FolderOpen,
  Zap,
  Clock,
  Mail,
  User,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const navItems = [
  { label: "Welcome", id: "hero", icon: Home },
  { label: "About", id: "about", icon: User },
  { label: "Work", id: "projects", icon: FolderOpen },
  { label: "Skills", id: "skills", icon: Zap },
  { label: "Journey", id: "experience", icon: Clock },
  { label: "Contact", id: "contact", icon: Mail },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/afiqhaiqalyusri",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/afiqhaiqalyusri",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/afiqhaiqalyusri",
    label: "Twitter",
  },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-10% 0px -50% 0px",
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setIsMobileOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* ── Portrait ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-[220px] overflow-hidden shrink-0"
      >
        <img
          src={"/afiqhaiqal.png"}
          alt="Afiq Haiqal"
          className="w-full h-full object-cover object-center grayscale"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        {/* Side vignette */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#0a0a0a]/40 to-transparent" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-5"
        >
          <div
            className="text-[#f5f4f0]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Afiq Haiqal
          </div>

          <div
            className="text-[#c4b5a0]/70 text-[10px] tracking-[0.22em] uppercase mt-0.5"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Frontend · UI/UX
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="mx-0 h-px bg-white/[0.06]" />

      {/* ── Navigation ── */}
      <nav className="flex-1 py-6 px-3">
        <div className="space-y-0.5">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.07,
                }}
                onClick={() => scrollTo(item.id)}
                className={`relative flex items-center gap-3.5 w-full px-3.5 py-2.5 rounded-sm transition-all duration-300 text-left group ${
                  isActive
                    ? "bg-white/[0.07] text-[#f5f4f0]"
                    : "text-[#f5f4f0]/55 hover:text-[#f5f4f0]/65 hover:bg-white/[0.05]"
                }`}
              >
                {/* Active line */}
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-[#c4b5a0] rounded-r"
                  />
                )}

                <Icon
                  size={14}
                  className={`shrink-0 transition-colors duration-300 ${
                    isActive
                      ? "text-[#c4b5a0]"
                      : "text-current"
                  }`}
                />

                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* ── Footer ── */}
      <div className="p-6 pt-0">
        <div className="h-px bg-white/[0.06] mb-5" />

        <div className="flex gap-4 mb-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#f5f4f0]/45 hover:text-[#f5f4f0] transition-colors duration-300"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        <div
          className="text-[#f5f4f0]/40 text-[10px] tracking-[0.22em]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          EN&nbsp;/&nbsp;MY
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ══ Desktop sidebar ══ */}
      <motion.aside
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          hidden lg:flex fixed left-0 top-0 bottom-0
          w-[220px]
          bg-[#0a0a0a]
          border-r border-white/[0.06]
          flex-col
          z-[60]
        "
      >
        <SidebarContent />
      </motion.aside>

      {/* ══ Mobile top bar ══ */}
      <div
        className={`
          lg:hidden fixed top-0 left-0 right-0 z-[60]
          flex items-center justify-between px-5 h-14
          backdrop-blur-xl border-b transition-all duration-500
          ${
            isLightSection
              ? "bg-[#f5f4f0]/88 border-black/5"
              : "bg-[#0a0a0a]/88 border-white/[0.06]"
          }
        `}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c4b5a0]/40 shrink-0"
          >          
          <img
          src={"/afiqhaiqal.png"}
          alt="Afiq Haiqal"
          className="w-full h-full object-cover object-center grayscale"
        />
          </div>

          <span
            className={`transition-colors duration-500 ${
              isLightSection
                ? "text-[#0a0a0a]"
                : "text-[#f5f4f0]"
            }`}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
            }}
          >
            AH.
          </span>
        </div>

        {/* Menu */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`p-1.5 transition-colors duration-500 ${
            isLightSection
              ? "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              : "text-[#f5f4f0]/70 hover:text-[#f5f4f0]"
          }`}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ══ Mobile drawer ══ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileOpen(false)}
              className="
                lg:hidden fixed inset-0 z-[55]
                bg-black/60 backdrop-blur-sm top-14
              "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                lg:hidden fixed top-14 left-0 bottom-0
                w-[240px]
                bg-[#0a0a0a]
                border-r border-white/[0.06]
                z-[56]
                overflow-y-auto
              "
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}