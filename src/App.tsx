import { useState, useEffect } from "react";
import Navbar from "./main/Navbar";
import Hero from "./main/Hero";
import About from "./main/AboutMe";
import Experience from "./main/Experience";
import Projects from "./main/Projects";
import Skills from "./main/Skills";
import Contact from "./main/Contact";
import Footer from "./main/Footer";
import Grainient from "./components/Grainient";

function App() {
  const [heroKey, setHeroKey] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const handleNavClick = (href: string) => {
    if (href === "#home") {
      setHeroKey((prev) => prev + 1);
    }
  };

  return (
    <div className="relative min-h-screen text-zinc-900 dark:text-white">

      <div className="fixed inset-0 z-0">
        {isDark ? (
          <div className="w-full h-full bg-zinc-950" />
        ) : (
          <Grainient
            color1="#fba2fb"
            color2="#7af5f5"
            color3="#fda0ec"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.06}
            rotationAmount={500}
            noiseScale={0}
            grainAmount={0.06}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={2}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar
          onNavClick={handleNavClick}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <main>
          <Hero key={heroKey} isDark={isDark} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;