import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              className="text-[#f5f4f0] tracking-[0.25em] text-xl uppercase mb-3"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              JD.
            </div>
            <p
              className="text-[#f5f4f0]/30 max-w-xs leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.85rem" }}
            >
              Full Stack Developer & UI/UX Designer crafting premium digital experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[#f5f4f0]/30 hover:text-[#f5f4f0] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#f5f4f0]/25 hover:text-[#f5f4f0] transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p
            className="text-[#f5f4f0]/20 text-xs tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
          <p
            className="text-[#f5f4f0]/20 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Designed & built with care.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[#f5f4f0]/20 hover:text-[#f5f4f0] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Back to top
            <ArrowUp
              size={12}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
