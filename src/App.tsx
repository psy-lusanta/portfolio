import { useState } from 'react';
import Navbar from './main/Navbar';
import Hero from './main/Hero';
import About from './main/AboutMe';
import Experience from './main/Experience';
import Projects from './main/Projects';
import Skills from './main/Skills';
import Contact from './main/Contact';
import Footer from './main/Footer';

function App() {
  window.history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);

  const [heroKey, setHeroKey] = useState(0);

  const handleNavClick = (href: string) => {
    if (href === "#home") {
      setHeroKey((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar onNavClick={handleNavClick} />
      
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