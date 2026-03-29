import { motion } from 'framer-motion';
import BlurText from '../components/Blurtext';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <BlurText 
                text="About Me"
                delay={50}
                className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
              />
              <div className="h-1 w-20 bg-white/30 mt-2" />
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Hi again! I'm Cyrus James, a passionate Full Stack Developer and Creative Engineer 
                based in the Philippines. I love turning ideas into smooth, interactive digital experiences.
              </p>
              
              <p>
                With a strong focus on React, Tailwind CSS, and modern animations, I build websites 
                that don't just look good — they feel alive. My goal is to create interfaces that are 
                both visually stunning and highly performant.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-4xl font-bold text-white mb-1">2+</div>
                <div className="text-zinc-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-zinc-400">Projects Completed</div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block mt-6 px-8 py-4 border border-white/30 hover:border-white text-white rounded-2xl transition-all hover:bg-white/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together →
            </motion.a>
          </div>

          {/* Right Side - Image / Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_70%)]" />
                
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                  👨‍💻
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}