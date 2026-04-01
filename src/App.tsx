import { useState, useEffect } from "react";
import Navbar from "./main/Navbar";
import Hero from "./main/Hero";
import About from "./main/AboutMe";
import Experience from "./main/Experience";
import Projects from "./main/Projects";
import Skills from "./main/Skills";
import Contact from "./main/Contact";
import Footer from "./main/Footer";

function App() {
  const [heroKey, setHeroKey] = useState(0);

  // Theme handling moved to App for global control
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar
        onNavClick={handleNavClick}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero key={heroKey} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
