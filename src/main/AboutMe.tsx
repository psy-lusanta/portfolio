import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "../components/Blurtext";
import TiltedCard from "../components/TiltedCard";
import CountUp from "../components/CountUp";
import Me from "../assets/me.jpg";

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="about" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <BlurText
                text="About Me"
                delay={50}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-3
                           text-zinc-900 dark:text-white"
              />
              <div className="h-1 w-20 rounded-full bg-black/20 dark:bg-white/20" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed
                         text-zinc-600 dark:text-zinc-300"
            >
              <p>
                Hi! I'm{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Cyrus James
                </span>
                , a passionate Web Developer and IT professional based
                in the Philippines. 
              </p>
              <p>
                With a strong focus on{" "}
                <span className="font-semibold text-purple-500">React</span>,{" "}
                <span className="font-semibold text-pink-500">
                  Tailwind CSS
                </span>
                , and{" "}
                <span className="font-semibold text-sky-500">
                  modern animations
                </span>
                , I build websites that don't just look good — they feel alive.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  to: 3,
                  label: "Years Experience",
                  suffix: "+",
                  color: "#a855f7",
                },
                {
                  to: 6,
                  label: "Projects Completed",
                  suffix: "+",
                  color: "#ec4899",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-4 sm:p-5 rounded-2xl
                             bg-white/50 dark:bg-zinc-900/60
                             border border-black/8 dark:border-zinc-800
                             backdrop-blur-sm"
                >
                  <div className="flex items-end gap-1">
                    <span
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: stat.color }}
                    >
                      <CountUp
                        from={0}
                        to={stat.to}
                        separator=","
                        direction="up"
                        duration={3}
                        className="count-up-text"
                        delay={0}
                      />
                    </span>
                    <span
                      className="text-2xl font-bold mb-0.5"
                      style={{ color: stat.color }}
                    >
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              className="relative inline-flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-xl blur-lg"
                style={{
                  background:
                    "linear-gradient(to right, #6366f1, #ec4899, #facc15)",
                  opacity: hovered ? 1 : 0.6,
                  transition: "opacity 1s ease",
                }}
              />
              <a
                role="button"
                href="#contact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-full relative inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white dark:bg-white dark:text-black"
                style={{
                  transform: hovered ? "translateY(-2px)" : "translateY(0)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: hovered
                    ? "0 10px 25px rgba(100,100,100,0.3)"
                    : "none",
                }}
              >
                Let's work together
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="stroke-white stroke-2 dark:stroke-black"
                >
                  <path
                    d="M0 5h7"
                    style={{
                      opacity: hovered ? 1 : 0,
                      transition: "opacity 0.2s ease-out",
                    }}
                  />
                  <path
                    d="M1 1l4 4-4 4"
                    style={{
                      transform: hovered ? "translateX(3px)" : "translateX(0)",
                      transition: "transform 0.2s ease-out",
                    }}
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center py-6 md:py-12 order-first md:order-last"
          >
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: "#a855f7" }}
            />
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "#ec4899" }}
            />

            <div className="relative w-full max-w-70 sm:max-w-85 md:max-w-95 lg:max-w-105 aspect-square">
              <TiltedCard
                imageSrc={Me}
                altText="Cyrus James Lusanta"
                captionText="Please hire me"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
