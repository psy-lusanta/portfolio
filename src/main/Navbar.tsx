import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '../components/ShinyText';

export default function Navbar({ onNavClick }: { onNavClick: (href: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto">
        <div className="backdrop-blur-2xl bg-zinc-980/60 px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl tracking-tight">
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

          <div className="hidden md:flex items-center gap-10 relative">
            <AnimatePresence>
              <motion.div
                className="flex items-center gap-10"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    onClick={() => {
                      onNavClick?.(link.href);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    key={link.name}
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.4
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all active:scale-95"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-center md:hidden backdrop-blur-2xl bg-zinc-950/95 border-t rounded-b-lg border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col px-8 py-8 gap-6 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-2xl text-center"
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