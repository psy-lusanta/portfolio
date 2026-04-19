import { motion } from "framer-motion";
import BlurText from "../components/Blurtext";
import ID from "../components/ID";
import { useState } from "react";

import IDFront from "../assets/idFront.jpg";
import sendAPackage from "../assets/send-a-package.jpg";
import TrackAndTrace from "../assets/track-and-trace.jpg";

const projects = [
  {
    id: 1,
    title: "Company ID",
    description: "A stunning web experience with smooth animations and 3D elements built with React and Three.js.",
    tech: ["React", "Three.js", "Tailwind"],
    image: IDFront,
    category: "Web Design",
    showModal: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack modern e-commerce website with cart system, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: sendAPackage,
    live: "https://www.litexpress.com.ph/send-a-package",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization and AI-powered insights.",
    tech: ["React", "Recharts", "OpenAI", "Tailwind"],
    image: TrackAndTrace,
    live: "https://litexpress.com.ph/track-and-trace/",
    category: "Dashboard",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    if (project.showModal) {
      setSelectedProject(project);
    } else {
      window.open(project.live, "_blank");
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 ">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <BlurText
            text="Featured Projects"
            delay={50}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
          />
          <div className="h-1 w-20 rounded-full bg-black/50 dark:bg-white/50" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 bg-zinc-800 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full opacity-70 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.13 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10 pointer-events-none" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-xs font-medium rounded-full z-20">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); openModal(project); }}
                    className="flex-1 py-3 text-center bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition-all"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 text-zinc-400 hover:text-white text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 md:p-10 overflow-auto">
              <ID />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}