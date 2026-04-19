import { useState } from 'react';
import BlurText from "../components/Blurtext";
import TiltedCard from "../components/TiltedCard";
import Me from "../assets/me.jpg";

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <BlurText
                text="About Me"
                delay={50}
                className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
              />
              <div className="h-1 w-20 bg-black/50 dark:bg-white/50 mt-2 " />
            </div>

            <div className="space-y-6 text-lg dark:text-zinc-300 leading-relaxed">
              <p>
                Hi again! I'm Cyrus James, a passionate Full Stack Developer and
                Creative Engineer based in the Philippines. I love turning ideas
                into smooth, interactive digital experiences.
              </p>
              <p>
                With a strong focus on React, Tailwind CSS, and modern
                animations, I build websites that don't just look good — they
                feel alive. My goal is to create interfaces that are both
                visually stunning and highly performant.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-4xl font-bold text-black dark:text-white mb-1">2+</div>
                <div className="text-zinc-800 dark:text-white">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black dark:text-white mb-1">15+</div>
                <div className="text-zinc-800 dark:text-white">Projects Completed</div>
              </div>
            </div>

            <div className="relative inline-flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-xl blur-lg"
                style={{
                  background: "linear-gradient(to right, #6366f1, #ec4899, #facc15)",
                  opacity: hovered ? 1 : 0.6,
                  transition: "opacity 1s ease",
                }}
              />
              <a
                role="button"
                href="#contact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white"
                style={{
                  transform: hovered ? "translateY(-2px)" : "translateY(0)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                  boxShadow: hovered ? "0 10px 25px rgba(100,100,100,0.3)" : "none",
                }}
              >
                Let's Work Together
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="stroke-white stroke-2"
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
            </div>
          </div>

          <div className="relative flex justify-center items-center py-8 md:py-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}