import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "../components/Blurtext";
import FloatingLines from "../components/FloatingLines";
import RotatingText from "../components/RotatingText";
import { useRef } from "react";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end 40%", "start start", ],  
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center "
    >
      {isDark && (
        <div className="absolute inset-0 z-0">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            linesGradient={["#ff00ff", "#00ffff", "#FA78E2"]}
            backgroundColor="#ffffff00"
            lineCount={5}
            lineDistance={5}
            bendRadius={10}
            bendStrength={-1.2}
            interactive={true}
            parallax={true}
            mouseDamping={0.03}
            mixBlendMode="screen"
          />
        </div>
      )}

      {isDark && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
      )}

      <div className="relative w-full pointer-events-none z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <BlurText
            text="Hi, I'm Cyrus James"
            delay={60}
            className="flex justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-white leading-tight"
          />

          <div className="mb-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 justify-center">
                <p className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 dark:text-white">
                  Web Developer &
                </p>
                <RotatingText
                  texts={["Team Lead", "IT Support Specialist", "UI Engineer", "Creative Coder"]}
                  mainClassName="text-2xl sm:text-3xl md:text-4xl font-medium px-6 py-2 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 text-zinc-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 ease-in-out text-center"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.03}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 40, stiffness: 500 }}
                  rotationInterval={2000}
                />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <button className="px-8 sm:px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-2xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 active:scale-[0.97] text-base sm:text-lg">
              View My Projects
            </button>
            <button className="px-8 sm:px-10 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl transition-all duration-300 active:scale-[0.97] text-base sm:text-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <motion.div
        ref={heroRef}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-zinc-500 dark:text-zinc-400 text-sm z-30 pointer-events-none"
      >
        <span>Scroll to explore</span>
        <div className="mt-2 w-5 h-8 border-2 border-zinc-500 dark:border-zinc-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-zinc-500 dark:bg-zinc-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}