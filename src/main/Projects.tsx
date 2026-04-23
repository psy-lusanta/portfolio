import { motion } from "framer-motion";
import BlurText from "../components/Blurtext";
import ID from "../components/ID";
import CircularGallery from "../components/CircularGallery";
import { useState } from "react";

import IDFront from "../assets/idFront.jpg";
import sendAPackage from "../assets/send-a-package.jpg";
import TrackAndTrace from "../assets/track-and-trace.jpg";
import RateEstimator from "../assets/rate-estimator.jpg";
import InventoryWebApp from "../assets/inventory-web-application.jpg";

import AddRecord from "../assets/inventory-web-app/add-record.jpg";
import AddTable from "../assets/inventory-web-app/add-table.jpg";
import EditTable from "../assets/inventory-web-app/edit-table.jpg";
import Table from "../assets/inventory-web-app/table-inventory-web-app.jpg";
import ViewRecord from "../assets/inventory-web-app/view-record.jpg";

const projects = [
  {
    id: 1,
    title: "Company ID",
    description:
      "A stunning web experience with smooth animations and 3D elements built with React and Three.js.",
    tech: ["React", "Three.js", "Tailwind"],
    image: IDFront,
    category: "Web Design",
    showModal: true,
    modalSize: "max-w-sm",
    modalContent: (
      <div className="flex justify-center items-center py-2">
        <ID />
      </div>
    ),
  },
  {
    id: 2,
    title: "Send A Package",
    description:
      "Full-stack modern e-commerce website with cart system, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: sendAPackage,
    live: "https://www.litexpress.com.ph/send-a-package",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Track and Trace",
    description:
      "Interactive analytics dashboard with real-time data visualization and AI-powered insights.",
    tech: ["React", "Recharts", "OpenAI", "Tailwind"],
    image: TrackAndTrace,
    live: "https://litexpress.com.ph/track-and-trace/",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Shipping Estimator",
    description:
      "A sleek rate estimation tool with dynamic forms, instant quotes, and smooth transitions.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: RateEstimator,
    category: "Web Design",
    showModal: true,
    modalContent: (
      <div className="text-center">
        <img
          src={RateEstimator}
          alt="Rate Estimator"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>
    ),
  },
  {
    id: 5,
    title: "Inventory Web App",
    description:
      "A modern inventory management system with real-time updates, user authentication, and responsive design.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: InventoryWebApp,
    category: "Full Stack",
    modalSize: "max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl",
    showModal: true,
    modalContent: (
      <div className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <CircularGallery
          items={[
            { image: InventoryWebApp, text: "Dashboard" },
            { image: EditTable, text: "Edit Table" },
            { image: ViewRecord, text: "View Record" },
            { image: AddRecord, text: "Add Record" },
            { image: AddTable, text: "Add Table" },
            { image: Table, text: "Table" },
          ]}
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
          font="bold 24px Inter, sans-serif"
        />
      </div>
    ),
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: any;
  index: number;
  onOpen: (p: any) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer
                 bg-white/50 dark:bg-zinc-900/80
                 border border-black/10 dark:border-white/10
                 backdrop-blur-md
                 shadow-sm dark:shadow-none
                 transition-colors duration-300"
      style={{
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10" />

        <div
          className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-medium
                        bg-black/40 text-white backdrop-blur-sm border border-white/20"
        >
          {project.category}
        </div>

        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <span
            className="px-5 py-2 rounded-full text-sm font-medium text-white
                           border border-white/40 backdrop-blur-sm bg-white/10"
          >
            {project.showModal ? "View Details →" : "Open Live →"}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3
          className="text-lg sm:text-xl font-bold leading-tight mb-2
                       text-zinc-900 dark:text-white"
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1
                      text-zinc-500 dark:text-zinc-400"
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-medium
                         bg-zinc-100 dark:bg-zinc-800
                         text-zinc-600 dark:text-zinc-400
                         border border-zinc-200/80 dark:border-zinc-700/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-px w-full mb-4 bg-zinc-200 dark:bg-white/6" />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(project);
          }}
          className="w-full py-2.5 rounded-xl text-sm font-semibold
                     bg-zinc-900 dark:bg-white
                     text-white dark:text-black
                     transition-colors duration-200 active:scale-[0.97]"
          style={{
            background: hovered
              ? document.documentElement.classList.contains("dark")
                ? "#e4e4e7"
                : "#27272a"
              : document.documentElement.classList.contains("dark")
                ? "#ffffff"
                : "#18181b",
            transition: "background 0.2s ease, transform 0.1s ease",
          }}
        >
          {project.showModal ? "View Details" : "Live Demo"}
        </button>
      </div>
    </motion.div>
  );
}

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
    <section id="projects" className="relative py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BlurText
            text="Featured Projects"
            delay={50}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4
                       text-zinc-900 dark:text-white"
          />
          <div className="h-1 w-20 rounded-full bg-zinc-900/20 dark:bg-white/20" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openModal}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`w-full ${selectedProject.modalSize || "max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"}
             rounded-2xl overflow-hidden shadow-2xl
             bg-white dark:bg-zinc-900
             border border-black/10 dark:border-white/10`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between
                  border-b border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-sm sm:text-lg text-zinc-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                 rounded-full text-lg sm:text-xl
                 text-zinc-400 hover:text-zinc-900 dark:hover:text-white
                 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                ×
              </button>
            </div>
            <div className="p-3 sm:p-6 md:p-8 overflow-auto max-h-[80vh]">
              {selectedProject.modalContent}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
