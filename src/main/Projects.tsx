import { motion } from 'framer-motion';
import BlurText from '../components/Blurtext';

const projects = [
  {
    id: 1,
    title: "Project Title One",
    description: "A stunning web experience with smooth animations and 3D elements built with React and Three.js.",
    tech: ["React", "Three.js", "Tailwind", "Framer Motion"],
    image: "/project1.jpg",           // Replace with your actual images later
    live: "#",
    github: "#",
    category: "Web Design"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack modern e-commerce website with cart system, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "/project2.jpg",
    live: "#",
    github: "#",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization and AI-powered insights.",
    tech: ["React", "Recharts", "OpenAI", "Tailwind"],
    image: "/project3.jpg",
    live: "#",
    github: "#",
    category: "Dashboard"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurText 
            text="Featured Projects"
            delay={50}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
          />
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            Some of the recent works I'm proud of
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80 z-10" />
                
                {/* Replace with real image later */}
                <div className="w-full h-full flex items-center justify-center text-7xl opacity-30 group-hover:scale-110 transition-transform duration-700">
                  {project.id === 1 ? "🌌" : project.id === 2 ? "🛒" : "📊"}
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-xs font-medium rounded-full z-20">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.live}
                    target="_blank"
                    className="flex-1 py-3 text-center bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition-all"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    className="flex-1 py-3 text-center border border-zinc-700 hover:bg-zinc-900 rounded-2xl transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <motion.a
            href="#"
            className="px-10 py-4 border border-white/30 hover:border-white text-white rounded-2xl flex items-center gap-3 transition-all hover:bg-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects 
            <span className="text-xl">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}