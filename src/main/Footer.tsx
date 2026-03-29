import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/yourusername", color: "#ffffff" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", color: "#0a66c2" },
    { name: "Twitter/X", icon: FaTwitter, href: "https://twitter.com/yourusername", color: "#1da1f2" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/yourusername", color: "#e1306c" },
    { name: "Email", icon: FaEnvelope, href: "mailto:your.email@example.com", color: "#ea4335" },
  ];

  return (
    <footer className="py-12 md:py-16 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top part - quick links or brand */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-2xl font-bold text-white">
              Cyrus <span className="text-purple-500">James</span>
            </p>
            <p className="text-zinc-500 text-sm mt-2">
              Full-Stack Freelancer • React Specialist
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-zinc-400 hover:text-white transition-colors"
                style={{ color: link.color }}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom part - copyright + made with love */}
        <div className="text-center text-zinc-600 text-sm border-t border-zinc-800 pt-8">
          <p>© {new Date().getFullYear()} Cyrus James. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-purple-400">React</span>, <span className="text-purple-400">Tailwind CSS</span> & <span className="text-purple-400">Framer Motion</span> • Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}