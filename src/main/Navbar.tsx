import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    onNavClick?.(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-3 sm:px-6 sm:py-5">
        
        {/* Main Navbar */}
        <div className="backdrop-blur-md bg-white/10 dark:bg-zinc-950/10 
                        border border-zinc-200/80 dark:border-white/10 
                        px-5 md:gap-2 sm:px-8 py-4 sm:py-5 
                        flex items-center justify-between 
                        rounded-3xl shadow-xl transition-all duration-300">

          {/* Logo */}
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

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            <button
              onClick={toggleTheme}
              className="p-2.5 sm:p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={22} className="text-amber-400" />
              ) : (
                <Moon size={22} className="text-zinc-700" />
              )}
            </button>

            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="hidden text-center md:block cursor-pointer dark:bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out dark:hover:bg-violet-700 dark:hover:ring-violet-800 hover:shadow-xl dark:hover:shadow-violet-500 dark:focus:ring-violet-300 dark:focus:shadow-violet-400 px-5 py-2 bg-linear-to-r from-violet-300 to-pink-300 hover:shadow-violet-200"
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
            <div className="backdrop-blur-2xl text-center bg-white/20 dark:bg-zinc-950/10 
                            border border-zinc-200 dark:border-white/10 
                            rounded-3xl shadow-2xl p-8">
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
                  className="mt-6 py-4 bg-linear-to-r from-teal-300 via-cyan-300 to-pink-300 text-white font-semibold rounded-2xl text-center hover:bg-violet-700 transition-all"
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