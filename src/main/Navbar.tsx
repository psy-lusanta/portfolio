import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "../components/ShinyText";

interface NavbarProps {
  onNavClick?: (href: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({
  onNavClick,
  isDark,
  toggleTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    onNavClick?.(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-3 sm:px-6 sm:py-5">
        <div
          className="backdrop-blur-md bg-white/10 dark:bg-zinc-950/10 
                        border border-zinc-200/80 dark:border-white/10 
                        px-5 md:gap-2 sm:px-8 py-4 sm:py-5 
                        flex items-center justify-between 
                        rounded-3xl shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl sm:text-3xl tracking-tight">
              {isDark ? (
                <ShinyText
                  text="Lusanta"
                  speed={2}
                  delay={0}
                  color="#c9a8e3"
                  shineColor="#ca64fa"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={true}
                />
              ) : (
                <ShinyText
                  text="Lusanta"
                  speed={2}
                  delay={0}
                  color="#000000"
                  shineColor="#c4a5e9"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={true}
                />
              )}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-center lg:text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={!isDark}
                onChange={toggleTheme}
              />
              <div
                className="w-20 h-10 rounded-full ring-0 peer duration-500 outline-none 
                    bg-gray-200 dark:bg-[#383838] overflow-hidden 
                    shadow-lg shadow-gray-400 dark:shadow-gray-700 
                    before:flex before:items-center before:justify-center 
                    after:flex after:items-center after:justify-center 
                    before:content-['☀️'] before:absolute before:h-8 before:w-8 
                    before:top-1/2 before:bg-white before:rounded-full 
                    before:left-1 before:-translate-y-1/2 before:transition-all 
                    before:duration-700 peer-checked:before:opacity-0 
                    peer-checked:before:rotate-90 peer-checked:before:-translate-y-full 
                    after:content-['🌑'] after:absolute after:bg-[#1d1d1d] 
                    after:rounded-full after:top-1 after:right-1 
                    after:translate-y-full after:w-8 after:h-8 after:opacity-0 
                    after:transition-all after:duration-700 
                    peer-checked:after:opacity-100 peer-checked:after:rotate-180 
                    peer-checked:after:translate-y-0"
              ></div>
            </label>

            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="hidden text-center md:block cursor-pointer dark:bg-linear-to-r dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-none bg-zinc-900 text-white font-semibold rounded-xl hover:opacity-90 dark:hover:bg-zinc-700 transition-all px-5 py-2"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 sm:p-3 text-black dark:text-white 
                         hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-2xl transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-x-4 top-24 z-50 mx-auto max-w-sm"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="backdrop-blur-2xl text-center bg-white/20 dark:bg-zinc-950/10 
                            border border-zinc-200 dark:border-white/10 
                            rounded-3xl shadow-2xl p-8"
            >
              <div className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="py-3 px-5 rounded-2xl text-zinc-700 dark:text-zinc-300 
                               hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-violet-600 
                               dark:hover:text-violet-400 transition-all"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="mt-6 py-4 bg-linear-to-r from-purple-500 via-pink-400 to-cyan-400 dark:bg-none dark:bg-zinc-900 text-white font-semibold rounded-2xl text-center hover:opacity-90 dark:hover:bg-zinc-700 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
