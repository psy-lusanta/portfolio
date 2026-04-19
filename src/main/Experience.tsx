import { motion } from "framer-motion";
import BlurText from "../components/Blurtext";
import Truck from "../components/Truck";
import Mail from "../components/Mail";

const experiences = [
  {
    animation: <Truck />,
    year: "2023 – Present",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Quezon City, Philippines",
    accent: "#a855f7",
    topBar: "from-[#a855f7] via-[#ec4899] to-[#38bdf8]",
    dot: "bg-purple-500 border-purple-700",
    yearColor: "text-violet-400 dark:text-violet-400",
    bullet: "bg-purple-500",
    description: [
      "Built responsive web apps for clients using React, Next.js, Tailwind CSS, and Node.js",
      "Delivered 10+ projects including e-commerce sites, dashboards, and landing pages",
      "Managed full project lifecycle from client consultation to Vercel/Netlify deployment",
      "Integrated third-party APIs, payment gateways, and authentication systems",
    ],
  },
  {
    animation: <Truck />,
    year: "2022 – 2023",
    role: "Junior Web Developer",
    company: "Tech Startup / Agency",
    location: "Remote / Manila",
    accent: "#ec4899",
    topBar: "from-[#ec4899] via-[#a855f7] to-[#38bdf8]",
    dot: "bg-pink-500 border-pink-700",
    yearColor: "text-pink-500 dark:text-pink-400",
    bullet: "bg-pink-500",
    description: [
      "Developed and maintained multiple client websites using HTML, CSS, JS, and React",
      "Collaborated with designers to implement pixel-perfect UI from Figma files",
      "Optimized site performance (Lighthouse scores 90+), SEO, and accessibility",
      "Assisted in migrating legacy sites to modern frameworks",
    ],
  },
  {
    animation: <Mail />,
    year: "2021 – 2022",
    role: "Web Development Intern",
    company: "RGS Global Solutions",
    location: "Quezon City / Remote",
    accent: "#38bdf8",
    topBar: "from-[#38bdf8] via-[#a855f7] to-transparent",
    dot: "bg-sky-400 border-sky-600",
    yearColor: "text-sky-500 dark:text-sky-400",
    bullet: "bg-sky-400",
    description: [
      "Assisted in building internal tools and client-facing websites",
      "Learned version control with Git, basic backend concepts, and responsive design",
      "Contributed to code reviews and bug fixing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BlurText
            text="Work Experience"
            delay={60}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-white"
          />
          <div className="h-1 w-20 rounded-full bg-black/50 dark:bg-white/50" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid gap-6"
              style={{ gridTemplateColumns: "auto 1fr" }}
            >
              <div className="flex flex-col items-center ">
                <div
                  className={`w-3 h-3 rounded-full border-2 shrink-0 mt-1 z-10 ${exp.dot}`}
                />
                {index < experiences.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-1"
                    style={{
                      background: `linear-gradient(to bottom, ${exp.accent}50, transparent)`,
                    }}
                  />
                )}
              </div>

              <div
                className="relative rounded-2xl overflow-hidden pb-6 px-5 sm:px-6 pt-5
                            backdrop-blur-md bg-white/10 dark:bg-zinc-950/10 
                        border border-zinc-200/80 dark:border-white/10"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r opacity-60 ${exp.topBar}`}
                />

                <p
                  className={`text-xs font-semibold tracking-widest uppercase mb-2 ${exp.yearColor}`}
                >
                  {exp.year}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-sm sm:text-base mt-1">
                      {exp.company} • {exp.location}
                    </p>
                  </div>

                  {exp.animation && (
                    <div className="shrink-0 scale-[0.75] sm:scale-90 md:scale-100 origin-top-right">
                      {exp.animation}
                    </div>
                  )}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
                  {exp.company} · {exp.location}
                </p>

                <div className="h-px w-full mb-4 bg-black/6 dark:bg-white/6" />

                <ul className="space-y-2.5">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.06 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${exp.bullet}`}
                      />
                      <span className="leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
