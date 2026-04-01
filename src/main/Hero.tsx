import BlurText from "../components/Blurtext";
import FloatingLines from "../components/FloatingLines";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex items-center"
    >
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

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="relative w-full pointer-events-none z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <BlurText
            text="Hi, I'm Cyrus James"
            delay={60}
            className="flex justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white leading-tight"
          />

          <BlurText
            text="Web Developer & Creative Coder"
            delay={140}
            className="flex justify-center text-xl sm:text-2xl md:text-3xl text-zinc-400 mb-10 max-w-3xl mx-auto"
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <button className="px-8 sm:px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300 active:scale-[0.97] text-base sm:text-lg">
              View My Projects
            </button>
            <button className="px-8 sm:px-10 py-4 border border-zinc-700 hover:bg-zinc-900 rounded-2xl transition-all duration-300 active:scale-[0.97] text-base sm:text-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-zinc-500 text-sm z-30">
        <span>Scroll to explore</span>
        <div className="mt-2 w-5 h-8 border-2 border-zinc-500 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
