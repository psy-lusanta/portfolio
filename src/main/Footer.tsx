import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: "GitHub",   icon: FaGithub,   href: "https://github.com/psy-lusanta",           color: "#a855f7" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/yourusername",      color: "#38bdf8" },
  { name: "Gmail",    icon: FaEnvelope, href: "mailto:cyrusjames.dev@gmail.com",           color: "#ec4899" },
];

const navLinks = [
  { name: "Home",       href: "#home"       },
  { name: "About",      href: "#about"      },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects"   },
  { name: "Skills",     href: "#skills"     },
  { name: "Contact",    href: "#contact"    },
];

export default function Footer() {
  return (
    <footer className="relative backdrop-blur-md bg-white/10 dark:bg-zinc-950/10 pt-12 pb-6 md:pt-16 border-t border-black/8 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              Cyrus <span className="text-purple-500">James</span>
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-50">
              Full-Stack Developer & Creative Engineer based in the Philippines.
            </p>

            <div className="flex gap-3 mt-1">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                             bg-zinc-100 dark:bg-zinc-800/80
                             border border-black/6 dark:border-zinc-700
                             text-zinc-500 dark:text-zinc-400
                             transition-colors duration-200"
                  style={{ color: link.color }}
                  aria-label={link.name}
                >
                  <link.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs text-center font-semibold tracking-widest uppercase
                          text-zinc-400 dark:text-zinc-500 mb-1">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-center text-zinc-600 dark:text-zinc-400
                             hover:text-purple-500 dark:hover:text-purple-400
                             transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase
                          text-zinc-400 dark:text-zinc-500 mb-1">
              Status
            </p>

            <div className="flex items-center gap-2.5">
              <div className="relative shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Available for new projects
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold
                         text-purple-500 dark:text-purple-400
                         hover:text-purple-600 dark:hover:text-purple-300
                         transition-colors duration-200 group w-fit"
            >
              Let's work together
              <svg
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="stroke-current stroke-2
                           transition-transform duration-200
                           group-hover:translate-x-1"
              >
                <path d="M1 5h8M5 1l4 4-4 4" />
              </svg>
            </a>
          </div>

        </div>

        <div className="h-px w-full bg-black/6 dark:bg-zinc-800 mb-6" />

        <div className="flex sm:flex-row items-center justify-center text-xs
                        text-center text-zinc-400 dark:text-zinc-600">
          <p>© {new Date().getFullYear()} Cyrus James Lusanta. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}