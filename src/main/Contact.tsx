import { motion } from "framer-motion";
import BlurText from "../components/Blurtext";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <BlurText
            text="Let's Work Together"
            delay={50}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4"
          />
          <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto px-4">
            Have a project in mind? I'm currently available for new
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6 md:space-y-8"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors text-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                rows={7}
                className="w-full bg-zinc-900 border border-white/10 rounded-3xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors resize-y text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all text-base md:text-lg active:scale-[0.97]"
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-10 md:space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in touch
              </h3>
              {/* <div className="duration-300 hover:rotate-0 -rotate-12 group border-sky-900 border-4 overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
                <div className="text-gray-50">
                  <span className="font-bold text-5xl">Jr</span>
                  <p className="text-xs">Frontend Developer</p>
                </div>
                <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
                  Dowload CV
                  <svg
                    className="w-6 h-6 fill-current"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <svg
                  className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path
                    data-name="layer1"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    stroke-miterlimit="10"
                    stroke-width="5"
                  ></path>
                </svg>

                <svg
                  className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path
                    data-name="layer1"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
              </div> */}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-5 text-zinc-400">
                Connect with me
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "GitHub", url: "https://github.com/psy-lusanta" },
                  { name: "LinkedIn", url: "#" },
                  { name: "Twitter", url: "#" },
                  { name: "Instagram", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/30 rounded-2xl transition-all text-sm text-center"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
