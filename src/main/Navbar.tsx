import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '../components/ShinyText';

interface NavbarProps {
  onNavClick?: (href: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ onNavClick, isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    onNavClick?.(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="backdrop-blur-2xl bg-zinc-900 px-8 py-5 flex items-center justify-between border rounded-full border-zinc-800/50 shadow-lg dark:bg-zinc-950/50 dark:border-zinc-700/50">

          <div className="flex items-center gap-3">
            <span className="font-bold text-3xl tracking-tight">
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
                disabled={false}
              /></span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:text-white font-medium transition-colors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.07 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={22} className="text-amber-400" />
              ) : (
                <Moon size={22} className="text-zinc-700" />
              )}
            </button>

            <a href="#contact" onClick={() => handleLinkClick('#contact')}
              className="hidden md:block px-7 py-3 border border-black dark:border-white text-zinc-300 dark:text-white font-medium text-[15px] rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95 transition-all">
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-2xl transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden backdrop-blur-xl dark:bg-zinc-950/95 dark:border-zinc-700/50 bg-zinc-900/95 border border-zinc-800/70 rounded-xl shadow-lg fixed top-30 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm p-6 z-50 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col text-center px-8 py-10 gap-7 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-zinc-300 dark:text-zinc-300 hover:text-black dark:hover:text-white py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
                className="mt-6 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-2xl text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}