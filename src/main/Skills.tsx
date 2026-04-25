import { motion } from 'framer-motion';
import { SiPostgresql, SiJavascript, SiTailwindcss, SiKalilinux, SiPostman, SiOdoo } from 'react-icons/si';
import { FaReact, FaServer, FaNodeJs, FaUbuntu, FaGitAlt, FaHtml5, FaCss3, FaWindows, FaGithub } from 'react-icons/fa';
import { TbBrandAdobePremier } from 'react-icons/tb';
import { DiMsqlServer, DiPython, DiPhotoshop } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import BlurText from '../components/Blurtext';

const skills = [
  { name: "HTML5",        icon: FaHtml5,                color: "#E34F26", category: "Frontend" },
  { name: "CSS3",         icon: FaCss3,                 color: "#1572B6", category: "Frontend" },
  { name: "JavaScript",   icon: SiJavascript,           color: "#F7DF1E", category: "Frontend" },
  { name: "React",        icon: FaReact,                color: "#61DAFB", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss,          color: "#38B2AC", category: "Frontend" },
  { name: "Node.js",      icon: FaNodeJs,               color: "#339933", category: "Backend"  },
  { name: "PostgreSQL",   icon: SiPostgresql,           color: "#336791", category: "Backend"  },
  { name: "SQL Server",   icon: DiMsqlServer,           color: "#CC2927", category: "Backend"  },
  { name: "Python",       icon: DiPython,               color: "#3776AB", category: "Backend"  },
  { name: "Git",          icon: FaGitAlt,               color: "#F05032", category: "Tools"    },
  { name: "Postman",      icon: SiPostman,              color: "#FF6C37", category: "Tools"    },
  { name: "Photoshop",    icon: DiPhotoshop,            color: "#2233E3", category: "Tools"    },
  { name: "Premiere Pro", icon: TbBrandAdobePremier,    color: "#9999FF", category: "Tools"    },
  { name: "GitHub",       icon: FaGithub,               color: "#E3E3E3", category: "Tools"    },
  { name: "VS Code",      icon: VscVscode,              color: "#007ACC", category: "Tools"    },
  { name: "VMWare ESXi",  icon: FaServer,               color: "#808080", category: "Systems"  },
  { name: "Odoo",         icon: SiOdoo,                 color: "#8320BA", category: "Systems"  },
  { name: "Windows",      icon: FaWindows,              color: "#0078D6", category: "Systems"  },
  { name: "Ubuntu",       icon: FaUbuntu,               color: "#E95420", category: "Systems"  },
  { name: "Kali Linux",   icon: SiKalilinux,            color: "#557C94", category: "Systems"  },
];

const categories = ["Frontend", "Backend", "Tools", "Systems"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BlurText
            text="My Skills"
            delay={60}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-white"
          />
          <div className="h-1 w-20 rounded-full bg-black/50 dark:bg-white/50" />
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <div key={category}>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-5"
                >
                  <span className="text-xs font-semibold tracking-widest uppercase
                                   text-zinc-500 dark:text-zinc-400">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
                >
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-2xl
                 bg-white/50 dark:bg-zinc-900/60
                 border border-black/8 dark:border-zinc-800/70
                 backdrop-blur-sm
                 cursor-default
                 transition-colors duration-300
                 hover:border-black/20 dark:hover:border-zinc-600/60
                 hover:bg-white/70 dark:hover:bg-zinc-900/80"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="relative text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110"
      >
        <div
          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-150"
          style={{ background: skill.color }}
        />
        <skill.icon style={{ color: skill.color }} className="relative z-10" />
      </div>

      <span className="text-[11px] sm:text-xs font-medium text-center leading-tight
                       text-zinc-500 dark:text-zinc-400
                       group-hover:text-zinc-800 dark:group-hover:text-zinc-200
                       transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
}