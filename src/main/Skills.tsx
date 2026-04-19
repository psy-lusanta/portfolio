import { motion } from 'framer-motion';
import { SiPostgresql, SiJavascript, SiTailwindcss, SiKalilinux, SiPostman } from 'react-icons/si';
import { FaReact, FaServer, FaNodeJs, FaUbuntu, FaGitAlt, FaHtml5, FaCss3, FaWindows} from 'react-icons/fa';
import { TbBrandAdobePhotoshop, TbBrandAdobePremier } from 'react-icons/tb';
import BlurText from '../components/Blurtext';

export default function Skills() {
  const skills = [  
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3, color: "#1572B6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "VMWare ESXi", icon: FaServer, color: "#808080" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Windows", icon: FaWindows, color: "#0078D6" },
    { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
    { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
    { name: "Premiere Pro", icon: TbBrandAdobePremier, color: "#9999FF" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

return (
    <section 
      id="skills" 
      className="py-16 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-2          /* mobile */
            sm:grid-cols-3       /* small tablets */
            md:grid-cols-5       /* medium screens */
            lg:grid-cols-6       /* desktop */
            gap-5 sm:gap-6 md:gap-8
          "
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="
                group flex flex-col items-center 
                p-5 sm:p-6 rounded-xl 
                bg-zinc-900/60 border border-zinc-800/70
                hover:border-purple-600/50 hover:bg-zinc-900/80
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-900/20
                backdrop-blur-sm
              "
            >
              <div className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <skill.icon style={{ color: skill.color }} />
              </div>
              <span className="
                text-xs sm:text-sm font-medium 
                text-zinc-400 group-hover:text-zinc-200
                transition-colors duration-300
              ">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}