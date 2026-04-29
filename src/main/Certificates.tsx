import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlurText from "../components/Blurtext";

import TesdaCert from "../assets/tesda.jpg";
import LeaderShipCert from "../assets/leadership-training.jpeg";

const certificates = [
  {
    id: 1,
    title: "Computer Systems Servicing NCII",
    issuer: "TESDA",
    date: "October 2023",
    image: TesdaCert,
    color: "#a855f7",
  },
  {
    id: 2,
    title: "From Talent to Leaders",
    issuer: "TrainCo",
    date: "March 2026",
    image: LeaderShipCert,
    color: "#38bdf8",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(
    null,
  );

  return (
    <section id="certificates" className="py-16 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BlurText
            text="Certificates"
            delay={60}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4
                       text-zinc-900 dark:text-white"
          />
          <div className="h-1 w-20 rounded-full bg-black/50 dark:bg-white/50" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelected(cert)}
              className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer
                         bg-white/50 dark:bg-zinc-900/60
                         border border-black/8 dark:border-zinc-800
                         backdrop-blur-sm
                         hover:border-black/20 dark:hover:border-zinc-600
                         transition-all duration-300"
              style={{
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  style={{
                    transition:
                      "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                <div
                  className="absolute inset-0 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.25)" }}
                >
                  <span
                    className="px-4 py-2 rounded-full text-sm font-medium text-white
                                   border border-white/40 backdrop-blur-sm bg-white/10"
                  >
                    View Certificate →
                  </span>
                </div>

                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(to right, ${cert.color}, transparent)`,
                  }}
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className="text-base sm:text-lg font-bold leading-tight
                                   text-zinc-900 dark:text-white mb-1"
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: cert.color }}
                    >
                      {cert.issuer}
                    </p>
                  </div>

                  <div
                    className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    ✓ Verified
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    🗓 {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl
                         bg-white dark:bg-zinc-900
                         border border-black/10 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="px-5 py-4 flex items-center justify-between
                            border-b border-zinc-200 dark:border-zinc-800"
              >
                <div>
                  <h3
                    className="font-bold text-base sm:text-lg
                                 text-zinc-900 dark:text-white"
                  >
                    {selected.title}
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: selected.color }}
                  >
                    {selected.issuer} · {selected.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full
                             text-zinc-400 hover:text-zinc-900 dark:hover:text-white
                             hover:bg-zinc-100 dark:hover:bg-zinc-800
                             transition-all text-xl"
                >
                  ×
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-contain max-h-[60vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
