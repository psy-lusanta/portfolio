import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      year: "2023 – Present",
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      location: "Quezon City, Philippines",
      description: [
        "Built responsive web applications for clients using React, Next.js, Tailwind CSS, and Node.js",
        "Delivered 10+ projects including e-commerce sites, dashboards, and landing pages",
        "Managed full project lifecycle from client consultation to deployment on Vercel/Netlify",
        "Integrated third-party APIs, payment gateways, and authentication systems"
      ]
    },
    {
      year: "2022 – 2023",
      role: "Junior Web Developer",
      company: "Tech Startup / Agency Name",
      location: "Remote / Manila",
      description: [
        "Developed and maintained multiple client websites using HTML, CSS, JavaScript, and React",
        "Collaborated with designers to implement pixel-perfect UI from Figma files",
        "Optimized site performance (Lighthouse scores 90+), SEO, and accessibility",
        "Assisted in migrating legacy sites to modern frameworks"
      ]
    },
    {
      year: "2021 – 2022",
      role: "Web Development Intern",
      company: "Company / Organization Name",
      location: "Quezon City / Remote",
      description: [
        "Assisted in building internal tools and client-facing websites",
        "Learned version control with Git, basic backend concepts, and responsive design principles",
        "Contributed to code reviews and bug fixing"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-zinc-950/20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My professional journey and key roles
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-zinc-700 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex">
                <div className="flex items-center gap-4 md:gap-0 md:flex-col">
                  <div className="w-4 h-4 rounded-full bg-purple-600 border-4 border-zinc-950 z-10 shrink-0" />
                  <span className="text-sm md:text-base font-medium text-purple-300 whitespace-nowrap md:mt-2">
                    {exp.year}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400/90 mb-2">
                  {exp.company} • {exp.location}
                </p>

                <ul className="text-zinc-300 space-y-2 mt-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
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